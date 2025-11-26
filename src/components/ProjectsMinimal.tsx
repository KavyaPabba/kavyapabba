import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import MarqueeText from "./MarqueeText";
import { ExternalLink, Github } from "lucide-react";
import { GlowingEffect } from "@/components/ui/glowing-effect";

const projects = [
  {
    title: "Data Pipeline Architecture",
    description: "Scalable ETL solutions processing millions of records daily",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    number: "01"
  },
  {
    title: "ML Model Deployment",
    description: "Production-ready machine learning models with real-time predictions",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=600&fit=crop",
    number: "02"
  },
  {
    title: "Analytics Dashboard",
    description: "Interactive visualizations revealing business insights",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    number: "03"
  }
];

const ProjectsMinimal = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-32 bg-background relative">
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
                <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-6">
                  <a 
                    href="https://github.com/KavyaPabba"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 bg-foreground text-background rounded-full hover:scale-110 transition-transform"
                  >
                    <Github className="w-6 h-6" />
                  </a>
                  <a 
                    href="#"
                    className="p-4 bg-foreground text-background rounded-full hover:scale-110 transition-transform"
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
                <h3 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                  {project.title}
                </h3>
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
