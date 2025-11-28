import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface Bubble {
  id: number;
  x: number;
  y: number;
  size: number;
  delay: number;
}

export const CursorBubbles = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [bubbles, setBubbles] = useState<Bubble[]>([]);
  const [isMoving, setIsMoving] = useState(false);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      setIsMoving(true);

      // Generate new bubbles on mouse move
      const newBubble: Bubble = {
        id: Date.now(),
        x: e.clientX,
        y: e.clientY,
        size: Math.random() * 8 + 4,
        delay: Math.random() * 0.2,
      };

      setBubbles((prev) => [...prev.slice(-15), newBubble]);

      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => setIsMoving(false), 100);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      clearTimeout(timeoutId);
    };
  }, []);

  // Clean up old bubbles
  useEffect(() => {
    if (bubbles.length > 20) {
      const timer = setTimeout(() => {
        setBubbles((prev) => prev.slice(-15));
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [bubbles]);

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {/* Main cursor bubble */}
      {isMoving && (
        <motion.div
          className="absolute rounded-full bg-primary/30 backdrop-blur-sm border border-primary/50"
          style={{
            width: 24,
            height: 24,
            left: mousePosition.x - 12,
            top: mousePosition.y - 12,
          }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ 
            scale: 1, 
            opacity: 0.8,
            rotateX: [0, 180, 360],
            rotateY: [0, 180, 360],
          }}
          exit={{ scale: 0, opacity: 0 }}
          transition={{ 
            scale: { duration: 0.2 },
            opacity: { duration: 0.2 },
            rotateX: { duration: 2, repeat: Infinity, ease: "linear" },
            rotateY: { duration: 3, repeat: Infinity, ease: "linear" },
          }}
        />
      )}

      {/* Trail bubbles */}
      {bubbles.map((bubble) => (
        <motion.div
          key={bubble.id}
          className="absolute rounded-full bg-primary/20 backdrop-blur-sm border border-primary/30"
          style={{
            width: bubble.size,
            height: bubble.size,
            left: bubble.x - bubble.size / 2,
            top: bubble.y - bubble.size / 2,
          }}
          initial={{ 
            scale: 0, 
            opacity: 0,
            z: 0,
          }}
          animate={{ 
            scale: [0, 1.5, 0],
            opacity: [0, 0.6, 0],
            z: [0, 100, 0],
            rotateX: [0, 360],
            rotateY: [0, 360],
          }}
          transition={{ 
            duration: 1.5,
            delay: bubble.delay,
            ease: "easeOut",
          }}
        />
      ))}
    </div>
  );
};
