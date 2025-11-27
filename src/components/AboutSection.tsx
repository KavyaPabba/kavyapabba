import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
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
          {/* Expertise Widgets */}
          <motion.div 
            className="grid grid-cols-2 gap-6"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {[
              { title: "Deep Learning", icon: "🧠", color: "from-purple-500/20 to-pink-500/20" },
              { title: "Machine Learning", icon: "🤖", color: "from-blue-500/20 to-cyan-500/20" },
              { title: "Statistical Modeling", icon: "📊", color: "from-green-500/20 to-emerald-500/20" },
              { title: "Data Visualization", icon: "📈", color: "from-orange-500/20 to-yellow-500/20" },
              { title: "Cloud Analytics", icon: "☁️", color: "from-indigo-500/20 to-blue-500/20" },
              { title: "Generative AI", icon: "✨", color: "from-pink-500/20 to-rose-500/20" }
            ].map((skill, idx) => (
              <motion.div
                key={skill.title}
                className={`relative p-6 rounded-lg bg-gradient-to-br ${skill.color} border border-border/50 backdrop-blur-sm`}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.3 + idx * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-4xl mb-3">{skill.icon}</div>
                <h4 className="text-sm font-semibold text-foreground">{skill.title}</h4>
              </motion.div>
            ))}
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
