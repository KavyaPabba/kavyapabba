import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import technicalExpertiseImg from "@/assets/technical-expertise.png";
import { GlowingEffect } from "@/components/ui/glowing-effect";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-32 bg-background relative">
      <GlowingEffect disabled={false} proximity={200} spread={80} blur={20} />
      <div className="container mx-auto px-6">
        <motion.div 
          className="grid md:grid-cols-2 gap-16 items-center"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8 }}
        >
          {/* Image */}
          <motion.div 
            className="relative aspect-[3/4] bg-muted rounded-lg overflow-hidden"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <img 
              src={technicalExpertiseImg} 
              alt="Technical Expertise Overview"
              className="w-full h-full object-cover"
            />
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

            {/* Skills Tags */}
            <div className="flex flex-wrap gap-3 mt-8">
              {["Python", "SQL", "NLP", "Machine Learning"].map((skill) => (
                <span 
                  key={skill}
                  className="px-4 py-2 bg-secondary text-secondary-foreground rounded-full text-sm font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
