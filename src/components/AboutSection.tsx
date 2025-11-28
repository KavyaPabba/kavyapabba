import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { AnimatedDotsBackground } from "@/components/ui/animated-dots-background";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-32 bg-background relative">
      <AnimatedDotsBackground />
      <GlowingEffect disabled={false} proximity={200} spread={80} blur={20} />
      <div className="container mx-auto px-6">
        <motion.div 
          className="grid md:grid-cols-2 gap-16 items-center"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8 }}
        >
          {/* Personal Details */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="space-y-2">
              <h3 className="text-2xl md:text-3xl font-bold text-foreground">Kavya Pabba</h3>
              <p className="text-lg text-muted-foreground">Data Scientist and Analytics Expert</p>
            </div>
            
            <div className="space-y-3 text-muted-foreground">
              <p className="flex items-center gap-2">
                <span className="text-primary">📍</span> Based in Italy
              </p>
              <p className="flex items-center gap-2">
                <span className="text-primary">✅</span> Available
              </p>
              <p className="flex items-center gap-2">
                <span className="text-primary">📱</span> +39 3479237782
              </p>
            </div>

            {/* Artistic Skill Bubbles */}
            <div className="relative h-64 mt-12">
              {[
                { skill: "Python", size: "w-20 h-20", position: "top-4 left-8", delay: 0.3 },
                { skill: "ML", size: "w-16 h-16", position: "top-12 right-12", delay: 0.4 },
                { skill: "SQL", size: "w-14 h-14", position: "top-32 left-24", delay: 0.5 },
                { skill: "NLP", size: "w-18 h-18", position: "bottom-16 left-12", delay: 0.6 },
                { skill: "AI", size: "w-16 h-16", position: "bottom-8 right-16", delay: 0.7 },
                { skill: "Cloud", size: "w-12 h-12", position: "top-20 left-48", delay: 0.8 },
              ].map((bubble, idx) => (
                <motion.div
                  key={bubble.skill}
                  className={`absolute ${bubble.size} ${bubble.position} rounded-full bg-primary/20 backdrop-blur-sm border border-primary/30 flex items-center justify-center cursor-pointer`}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                  transition={{ duration: 0.5, delay: bubble.delay }}
                  whileHover={{ 
                    scale: 1.2, 
                    backgroundColor: "hsl(var(--primary) / 0.4)",
                    transition: { duration: 0.2 }
                  }}
                >
                  <span className="text-xs md:text-sm font-semibold text-foreground">
                    {bubble.skill}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-foreground">
              About Me :
            </h2>
            <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
              <p>
                With over 3 years of experience in Data science and Analytics, I am a data-driven professional specializing in Deep Learning, Machine Learning, Statistical Modeling, and Data Visualization.
              </p>
              <p>
                I am deeply passionate about AI and continuously explore emerging technologies, including the transformative potential of generative AI. My curiosity and enthusiasm for innovation drive me to stay at the forefront of the AI landscape, always looking for new ways to apply intelligent solutions to real-world challenges.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
