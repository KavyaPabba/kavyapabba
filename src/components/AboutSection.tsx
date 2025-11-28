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
          className="max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-16">
            <motion.h2 
              className="text-4xl md:text-5xl font-bold mb-8 text-foreground"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              About Me
            </motion.h2>
          </div>

          <div className="grid md:grid-cols-2 gap-20 items-start">
            {/* Left Column - Personal Details */}
            <motion.div 
              className="space-y-8"
              initial={{ opacity: 0, x: -40 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="space-y-4">
                <h3 className="text-3xl md:text-4xl font-bold text-foreground">Kavya Pabba</h3>
                <p className="text-xl text-muted-foreground">Data Scientist and Analytics Expert</p>
              </div>
              
              <div className="space-y-4 text-lg text-muted-foreground">
                <p className="flex items-center gap-3">
                  <span className="text-primary text-2xl">📍</span> Based in Italy
                </p>
                <p className="flex items-center gap-3">
                  <span className="text-primary text-2xl">✅</span> Available
                </p>
                <p className="flex items-center gap-3">
                  <span className="text-primary text-2xl">💼</span> 3+ Years Experience
                </p>
              </div>

              {/* Artistic Skill Bubbles */}
              <div className="relative h-80 mt-12">
                {[
                  { skill: "Python", size: "w-24 h-24", position: "top-8 left-12", delay: 0.4 },
                  { skill: "Azure", size: "w-20 h-20", position: "top-4 right-16", delay: 0.5 },
                  { skill: "PySpark", size: "w-20 h-20", position: "top-36 left-4", delay: 0.6 },
                  { skill: "SQL", size: "w-16 h-16", position: "top-40 right-8", delay: 0.7 },
                  { skill: "ML/AI", size: "w-24 h-24", position: "bottom-20 left-24", delay: 0.8 },
                  { skill: "API", size: "w-16 h-16", position: "bottom-12 right-20", delay: 0.9 },
                  { skill: "Jira", size: "w-14 h-14", position: "bottom-4 left-48", delay: 1.0 },
                  { skill: "NLP", size: "w-18 h-18", position: "top-20 left-36", delay: 1.1 },
                ].map((bubble) => (
                  <motion.div
                    key={bubble.skill}
                    className={`absolute ${bubble.size} ${bubble.position} rounded-full bg-gradient-to-br from-primary/30 to-primary/10 backdrop-blur-sm border-2 border-primary/40 flex items-center justify-center cursor-pointer shadow-lg shadow-primary/20`}
                    initial={{ opacity: 0, scale: 0, z: 0 }}
                    animate={isInView ? { 
                      opacity: 1, 
                      scale: 1,
                      z: [0, 50, 0],
                      rotateX: [0, 360],
                      rotateY: [0, 360],
                    } : { opacity: 0, scale: 0, z: 0 }}
                    transition={{ 
                      duration: 0.6, 
                      delay: bubble.delay,
                      z: { duration: 3, repeat: Infinity, ease: "easeInOut", delay: bubble.delay },
                      rotateX: { duration: 4, repeat: Infinity, ease: "linear", delay: bubble.delay },
                      rotateY: { duration: 5, repeat: Infinity, ease: "linear", delay: bubble.delay },
                    }}
                    whileHover={{ 
                      scale: 1.3,
                      z: 100,
                      backgroundColor: "hsl(var(--primary) / 0.5)",
                      borderColor: "hsl(var(--primary) / 0.8)",
                      transition: { duration: 0.2 }
                    }}
                  >
                    <span className="text-xs md:text-sm font-bold text-foreground">
                      {bubble.skill}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right Column - About Text */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: 40 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
                <p>
                  With over <span className="text-primary font-semibold">3 years of experience</span> in Data Science and Analytics, I am a data-driven professional specializing in Deep Learning, Machine Learning, Statistical Modeling, and Data Visualization.
                </p>
                <p>
                  I am deeply passionate about AI and continuously explore emerging technologies, including the transformative potential of generative AI. My curiosity and enthusiasm for innovation drive me to stay at the forefront of the AI landscape, always looking for new ways to apply intelligent solutions to real-world challenges.
                </p>
                <p>
                  My expertise spans across cloud platforms like <span className="text-primary font-semibold">Azure</span>, building scalable data pipelines with <span className="text-primary font-semibold">PySpark</span>, developing robust <span className="text-primary font-semibold">APIs</span>, and managing projects using <span className="text-primary font-semibold">Jira</span>. I thrive on transforming complex data into actionable insights that drive business value.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
