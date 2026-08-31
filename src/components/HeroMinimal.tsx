import { motion } from "framer-motion";
import profilePhoto from "@/assets/profile-photo.png";
import heroKoiBg from "@/assets/hero-koi-bg.webp";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { Github, Linkedin } from "lucide-react";
import SiteNav from "@/components/SiteNav";
import useLiveTime from "@/hooks/use-live-time";
import InteractivePixelBackground from "@/components/InteractivePixelBackground";

const QuickLinks = ({ className = "" }: { className?: string }) => (
  <div className={`flex items-center gap-3 font-mono ${className}`}>
    <a
      href="https://www.linkedin.com/in/pabba-kavya-b160a9163"
      target="_blank"
      rel="noopener noreferrer"
      className="text-muted-foreground hover:text-primary transition-colors duration-200"
      aria-label="LinkedIn"
    >
      <Linkedin className="w-4 h-4" />
    </a>
    <a
      href="https://github.com/KavyaPabba"
      target="_blank"
      rel="noopener noreferrer"
      className="text-muted-foreground hover:text-primary transition-colors duration-200"
      aria-label="GitHub"
    >
      <Github className="w-4 h-4" />
    </a>
  </div>
);

const HeroMinimal = () => {
  const time = useLiveTime();

  return (
    <section className="w-full min-h-screen bg-background overflow-hidden relative">
      {/* Koi pond background - pixels near the cursor lift, scatter and
          fade in a disintegration effect; static everywhere else */}
      <div className="absolute inset-0 z-0">
        <InteractivePixelBackground src={heroKoiBg} />
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/10 to-background/55" />
      </div>
      <GlowingEffect disabled={false} proximity={200} spread={80} blur={20} />

      {/* ---------- Desktop / tablet layout (HUD corners) ---------- */}
      <div className="hidden md:block relative z-10 w-full min-h-screen max-w-[1600px] mx-auto px-10 py-10">
        {/* Top-left wordmark */}
        <motion.div
          className="absolute top-10 left-10 font-mono"
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="text-base font-bold tracking-[0.15em] text-foreground">
            KAVYA.EXE
          </div>
          <div className="mt-1 text-xs tracking-[0.2em] text-muted-foreground uppercase">
            Data Scientist
          </div>
          <div className="text-xs tracking-[0.2em] text-muted-foreground uppercase">
            Analytics Expert
          </div>
        </motion.div>

        {/* Top-right photo + quick links */}
        <motion.div
          className="absolute top-10 right-10 flex flex-col items-end gap-3"
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-primary/40 shadow-[0_0_25px_rgba(var(--primary-rgb),0.3)]">
            <img
              src={profilePhoto}
              alt="Kavya Pabba"
              className="w-full h-full object-cover"
            />
          </div>
          <QuickLinks />
        </motion.div>

        {/* Mid-left numbered nav */}
        <motion.div
          className="absolute left-10 top-1/2 -translate-y-1/2"
          initial={{ opacity: 0, x: -16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <SiteNav variant="hero" />
        </motion.div>

        {/* Centered name */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center px-6 text-center pointer-events-none"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.43, 0.13, 0.23, 0.96] }}
        >
          <h1 className="font-sans text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight text-foreground/70">
            Kavya Pabba
          </h1>
        </motion.div>

        {/* Bottom-left prompt */}
        <motion.div
          className="absolute bottom-10 left-10 font-mono text-sm text-primary"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.9 }}
        >
          <span className="animate-pulse">&gt;_</span>
        </motion.div>

        {/* Bottom-right HUD readout */}
        <motion.div
          className="absolute bottom-10 right-10 font-mono text-xs text-muted-foreground text-right space-y-0.5 uppercase tracking-wider"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.9 }}
        >
          <div>Location: Italy</div>
          <div>Status: Available</div>
          <div>Time {time}</div>
        </motion.div>
      </div>

      {/* ---------- Mobile layout (stacked, normal flow) ---------- */}
      <div className="md:hidden relative z-10 min-h-screen flex flex-col justify-between px-6 py-6">
        {/* Top row */}
        <motion.div
          className="flex items-start justify-between"
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="font-mono">
            <div className="text-sm font-bold tracking-[0.15em] text-foreground">
              KAVYA.EXE
            </div>
            <div className="mt-1 text-[10px] tracking-[0.2em] text-muted-foreground uppercase">
              Data Scientist
            </div>
            <div className="text-[10px] tracking-[0.2em] text-muted-foreground uppercase">
              Analytics Expert
            </div>
          </div>

          <div className="flex flex-col items-end gap-2">
            <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-primary/40 shadow-[0_0_20px_rgba(var(--primary-rgb),0.3)]">
              <img
                src={profilePhoto}
                alt="Kavya Pabba"
                className="w-full h-full object-cover"
              />
            </div>
            <QuickLinks />
          </div>
        </motion.div>

        {/* Centered name */}
        <motion.div
          className="flex flex-col items-center text-center gap-8"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.43, 0.13, 0.23, 0.96] }}
        >
          <h1 className="font-sans text-4xl sm:text-5xl font-bold tracking-tight text-foreground/70">
            Kavya Pabba
          </h1>
          <SiteNav variant="hero" className="items-center" />
        </motion.div>

        {/* Bottom block */}
        <motion.div
          className="flex items-center justify-between w-full font-mono text-[10px] text-muted-foreground uppercase tracking-wider"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
        >
          <span className="text-primary animate-pulse">&gt;_</span>
          <div className="text-right space-y-0.5">
            <div>Location: Italy</div>
            <div>Status: Available</div>
            <div>Time {time}</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroMinimal;
