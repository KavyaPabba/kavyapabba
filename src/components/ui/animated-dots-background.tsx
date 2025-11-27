import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface Dot {
  id: number;
  x: number;
  y: number;
  size: number;
  delay: number;
}

export const AnimatedDotsBackground = () => {
  const [dots, setDots] = useState<Dot[]>([]);

  useEffect(() => {
    const generatedDots: Dot[] = [];
    const dotCount = 50;

    for (let i = 0; i < dotCount; i++) {
      generatedDots.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 3 + 1,
        delay: Math.random() * 2,
      });
    }

    setDots(generatedDots);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {dots.map((dot) => (
        <motion.div
          key={dot.id}
          className="absolute rounded-full bg-primary/20"
          style={{
            left: `${dot.x}%`,
            top: `${dot.y}%`,
            width: `${dot.size}px`,
            height: `${dot.size}px`,
          }}
          initial={{ opacity: 0, scale: 0, z: 0 }}
          animate={{
            opacity: [0.2, 0.6, 0.2],
            scale: [1, 1.5, 1],
            z: [0, 50, 0],
            rotateX: [0, 360, 0],
            rotateY: [0, 360, 0],
          }}
          transition={{
            duration: 4 + Math.random() * 3,
            delay: dot.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          whileHover={{
            scale: 2,
            opacity: 0.8,
            z: 100,
            rotateX: 180,
            rotateY: 180,
            transition: { duration: 0.3 },
          }}
        />
      ))}
    </div>
  );
};

