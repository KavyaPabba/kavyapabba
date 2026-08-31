import { useEffect, useRef, useState } from "react";

interface InteractivePixelBackgroundProps {
  src: string;
  alt?: string;
  className?: string;
}

/**
 * Renders a background image as a canvas of individual color "pixels"
 * sampled from the source image. On devices with a real cursor, the pixels
 * near the pointer lift, scatter outward and fade - a disintegration effect
 * that punches through to the page background - while everywhere else the
 * image stays crisp. Touch/mobile (no fine pointer) gets a plain static
 * <img> instead, no canvas, no listeners, unchanged from before.
 */
const InteractivePixelBackground = ({ src, alt = "", className = "" }: InteractivePixelBackgroundProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [interactive, setInteractive] = useState(false);

  useEffect(() => {
    setInteractive(window.matchMedia("(hover: hover) and (pointer: fine)").matches);
  }, []);

  useEffect(() => {
    if (!interactive) return;

    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf = 0;
    let destroyed = false;

    const img = new Image();
    img.src = src;

    const pointer = { rawX: -9999, rawY: -9999, x: -9999, y: -9999, active: false };

    // Listened on window rather than the container: the HUD content layer
    // sits above this background at a higher z-index and would otherwise
    // intercept every mouse event before it reaches this element.
    const handleMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const localX = e.clientX - rect.left;
      const localY = e.clientY - rect.top;
      const inside = localX >= 0 && localX <= rect.width && localY >= 0 && localY <= rect.height;
      pointer.active = inside;
      if (inside) {
        pointer.rawX = localX;
        pointer.rawY = localY;
      }
    };

    window.addEventListener("mousemove", handleMove);

    // The color the "hole" left behind should punch through to - read live
    // from the CSS variable so it always matches the current theme.
    const bgHsl = getComputedStyle(document.documentElement).getPropertyValue("--background").trim();

    const sample = document.createElement("canvas");
    const sampleCtx = sample.getContext("2d");

    let displayW = 0;
    let displayH = 0;
    let cellSize = 10;
    let gridW = 0;
    let gridH = 0;
    let sampleData: Uint8ClampedArray | null = null;

    const coverCrop = (iw: number, ih: number, dw: number, dh: number) => {
      const scale = Math.max(dw / iw, dh / ih);
      const sw = dw / scale;
      const sh = dh / scale;
      return { sx: (iw - sw) / 2, sy: (ih - sh) / 2, sw, sh };
    };

    const setup = () => {
      const rect = container.getBoundingClientRect();
      displayW = rect.width;
      displayH = rect.height;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);

      canvas.width = displayW * dpr;
      canvas.height = displayH * dpr;
      canvas.style.width = `${displayW}px`;
      canvas.style.height = `${displayH}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      cellSize = Math.max(7, Math.round(displayW / 170));
      gridW = Math.ceil(displayW / cellSize);
      gridH = Math.ceil(displayH / cellSize);

      if (sampleCtx && img.naturalWidth) {
        sample.width = gridW;
        sample.height = gridH;
        const { sx, sy, sw, sh } = coverCrop(img.naturalWidth, img.naturalHeight, displayW, displayH);
        sampleCtx.clearRect(0, 0, gridW, gridH);
        sampleCtx.drawImage(img, sx, sy, sw, sh, 0, 0, gridW, gridH);
        sampleData = sampleCtx.getImageData(0, 0, gridW, gridH).data;
      }
    };

    const RADIUS = 260;
    const MAX_DISPLACE = 46;

    // Stable per-cell pseudo-random values so the scatter direction and
    // size read as organic breakup rather than a perfectly even radial
    // burst - same cell always gets the same jitter.
    const noiseFor = (gx: number, gy: number) => {
      const n = Math.sin(gx * 12.9898 + gy * 78.233) * 43758.5453;
      return (n - Math.floor(n)) * Math.PI * 2;
    };
    const sizeJitterFor = (gx: number, gy: number) => {
      const n = Math.sin(gx * 39.346 + gy * 11.135) * 24634.634;
      return 0.7 + (n - Math.floor(n)) * 0.6; // 0.7 - 1.3
    };

    const draw = () => {
      if (destroyed) return;
      pointer.x += (pointer.rawX - pointer.x) * 0.18;
      pointer.y += (pointer.rawY - pointer.y) * 0.18;

      ctx.clearRect(0, 0, displayW, displayH);

      if (img.naturalWidth) {
        const { sx, sy, sw, sh } = coverCrop(img.naturalWidth, img.naturalHeight, displayW, displayH);
        ctx.globalAlpha = 0.9;
        ctx.drawImage(img, sx, sy, sw, sh, 0, 0, displayW, displayH);
        ctx.globalAlpha = 1;
      }

      if (pointer.active && sampleData) {
        const cellsRadius = Math.ceil(RADIUS / cellSize) + 1;
        const gcx = Math.floor(pointer.x / cellSize);
        const gcy = Math.floor(pointer.y / cellSize);

        for (let gy = gcy - cellsRadius; gy <= gcy + cellsRadius; gy++) {
          if (gy < 0 || gy >= gridH) continue;
          for (let gx = gcx - cellsRadius; gx <= gcx + cellsRadius; gx++) {
            if (gx < 0 || gx >= gridW) continue;

            const cx = gx * cellSize + cellSize / 2;
            const cy = gy * cellSize + cellSize / 2;
            const dx = cx - pointer.x;
            const dy = cy - pointer.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist >= RADIUS) continue;

            const idx = (gy * gridW + gx) * 4;
            const r = sampleData[idx];
            const g = sampleData[idx + 1];
            const b = sampleData[idx + 2];
            const a = sampleData[idx + 3];
            if (a < 10) continue;

            const t = 1 - dist / RADIUS;
            const eased = t * t * (3 - 2 * t); // smoothstep falloff

            const angle = Math.atan2(dy, dx) + (noiseFor(gx, gy) - Math.PI) * 0.4;
            const push = eased * MAX_DISPLACE;
            const tx = cx + Math.cos(angle) * push;
            const ty = cy + Math.sin(angle) * push - eased * 18;

            const jitter = sizeJitterFor(gx, gy);
            const size = cellSize * jitter * (1 - eased * 0.3);
            const alpha = (a / 255) * (1 - eased * 0.35);

            // Brighten toward white as a piece nears the cursor, so it
            // visibly lifts/glows rather than just fading into the dark.
            const glow = eased * 0.6;
            const rr = r + (255 - r) * glow;
            const gg = g + (255 - g) * glow;
            const bb = b + (255 - b) * glow;

            // Punch a hole at the original cell so the base image doesn't
            // show through underneath the piece that just lifted off it.
            ctx.fillStyle = `hsl(${bgHsl})`;
            ctx.fillRect(gx * cellSize, gy * cellSize, cellSize + 1, cellSize + 1);

            ctx.globalAlpha = alpha;
            ctx.fillStyle = `rgb(${rr}, ${gg}, ${bb})`;
            ctx.shadowColor = `rgba(${rr}, ${gg}, ${bb}, 0.85)`;
            ctx.shadowBlur = 18 * eased;
            ctx.fillRect(tx - size / 2, ty - size / 2, size, size);
            ctx.shadowBlur = 0;
            ctx.globalAlpha = 1;
          }
        }
      }

      raf = requestAnimationFrame(draw);
    };

    img.onload = () => {
      setup();
      raf = requestAnimationFrame(draw);
    };

    const handleResize = () => setup();
    window.addEventListener("resize", handleResize);

    return () => {
      destroyed = true;
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("resize", handleResize);
    };
  }, [interactive, src]);

  return (
    <div ref={containerRef} className={`absolute inset-0 ${className}`}>
      {interactive ? (
        <canvas ref={canvasRef} className="w-full h-full" />
      ) : (
        <img src={src} alt={alt} aria-hidden="true" className="w-full h-full object-cover opacity-90" />
      )}
    </div>
  );
};

export default InteractivePixelBackground;
