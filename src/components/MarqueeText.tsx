import { motion } from "framer-motion";

interface MarqueeTextProps {
  text: string;
  duration?: number;
}

const MarqueeText = ({ text, duration = 20 }: MarqueeTextProps) => {
  return (
    <div className="relative overflow-hidden py-12 border-y border-border">
      <motion.div
        className="flex whitespace-nowrap"
        animate={{
          x: [0, -1920],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: duration,
            ease: "linear",
          },
        }}
      >
        {[...Array(10)].map((_, i) => (
          <h2 key={i} className="text-6xl md:text-8xl font-bold text-foreground mx-8">
            {text}
          </h2>
        ))}
      </motion.div>
    </div>
  );
};

export default MarqueeText;
