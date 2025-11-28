import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import MarqueeText from "./MarqueeText";
import { ExternalLink, Github } from "lucide-react";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { AnimatedDotsBackground } from "@/components/ui/animated-dots-background";
import projectVodafone from "@/assets/project-vodafone.jpg";
import projectCredit from "@/assets/project-credit.jpg";
import projectHealth from "@/assets/project-health.jpg";

const projects = [
  {
    title: "Vodafone & SUEZ Strategic Partnership Analysis",
    subtitle: "JOIN GROUP",
    description: "Predictive modeling and Monte Carlo simulations for strategic partnership evaluation",
    image: projectVodafone,
    github: "https://github.com/KavyaPabba/Vodafone-Suez-partnership-using-predictive-modeling-and-Monte-Carlo-simulations.git",
    number: "01"
  },
  {
    title: "Home Credit Default Risk",
    subtitle: "AI in Finance Portfolio Project",
    description: "Machine learning models for credit risk assessment and default prediction",
    image: projectCredit,
    github: "https://github.com/KavyaPabba/Home-credit-default-risk",
    number: "02"
  },
  {
    title: "Health Care - Heart Attack Prediction",
    subtitle: "Medical Analytics",
    description: "Predictive analytics for cardiovascular risk assessment using clinical data",
    image: projectHealth,
    github: "https://github.com/KavyaPabba/Heart-attack-prediction.git",
    number: "03"
  }
];

const ProjectsMinimal = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-32 bg-background relative">
      <AnimatedDotsBackground />
      <GlowingEffect disabled={false} proximity={200} spread={80} blur={20} />
      <MarqueeText text="# Featured Projects" />
      
      <div className="container mx-auto px-6 mt-32">
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mb-20">
          Full-stack data expertise across ETL engineering, cloud analytics, statistical modeling, and deploying machine-learning solutions at scale.
        </p>

        <div className="space-y-32">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="grid md:grid-cols-2 gap-12 items-center"
              initial={{ opacity: 0, y: 60 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              {/* Project Image */}
              <motion.div 
                className={`relative aspect-[4/3] bg-muted rounded-lg overflow-hidden group cursor-pointer ${
                  index % 2 === 1 ? 'md:order-2' : ''
                }`}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-background/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-6">
                  <a 
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 bg-primary text-primary-foreground rounded-full hover:scale-110 transition-transform shadow-lg shadow-primary/50"
                  >
                    <Github className="w-6 h-6" />
                  </a>
                  <a 
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 bg-primary text-primary-foreground rounded-full hover:scale-110 transition-transform shadow-lg shadow-primary/50"
                  >
                    <ExternalLink className="w-6 h-6" />
                  </a>
                </div>
              </motion.div>

              {/* Project Content */}
              <div className={index % 2 === 1 ? 'md:order-1' : ''}>
                <span className="text-6xl font-bold text-muted-foreground/20 block mb-4">
                  ({project.number})
                </span>
                <h3 className="text-3xl md:text-4xl font-bold mb-2 text-foreground">
                  {project.title}
                </h3>
                <p className="text-lg text-primary font-semibold mb-4">
                  {project.subtitle}
                </p>
                <p className="text-lg text-muted-foreground">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsMinimal;
