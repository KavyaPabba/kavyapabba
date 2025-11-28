import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { AnimatedDotsBackground } from "@/components/ui/animated-dots-background";
import MarqueeText from "./MarqueeText";

const expertiseCategories = [
  {
    title: "Machine Learning & AI",
    subtitle: "Advanced expertise in building intelligent systems",
    skills: [
      { name: "Deep Learning", level: "Expert", description: "Neural networks, CNNs, RNNs, Transformers with TensorFlow & PyTorch" },
      { name: "Classical ML", level: "Expert", description: "Supervised/Unsupervised learning, ensemble methods, feature engineering" },
      { name: "NLP & Computer Vision", level: "Advanced", description: "Text processing, image recognition, object detection, sentiment analysis" },
      { name: "MLOps & Deployment", level: "Expert", description: "Model versioning, CI/CD pipelines, containerization, monitoring" }
    ]
  },
  {
    title: "Data Engineering",
    subtitle: "Scalable data infrastructure and pipeline development",
    skills: [
      { name: "Big Data Technologies", level: "Expert", description: "Apache Spark, Hadoop, Kafka for large-scale data processing" },
      { name: "Cloud Platforms", level: "Advanced", description: "AWS, GCP, Azure - Data lakes, warehouses, serverless computing" },
      { name: "Database Systems", level: "Expert", description: "SQL/NoSQL, PostgreSQL, MongoDB, Redis, time-series databases" },
      { name: "Data Pipelines", level: "Advanced", description: "ETL/ELT, real-time streaming, data quality, orchestration" }
    ]
  },
  {
    title: "Analytics & Statistics",
    subtitle: "Statistical modeling and business intelligence",
    skills: [
      { name: "Statistical Analysis", level: "Expert", description: "Hypothesis testing, regression analysis, time series forecasting" },
      { name: "Business Intelligence", level: "Advanced", description: "KPI development, dashboard creation, stakeholder reporting" },
      { name: "Experimental Design", level: "Advanced", description: "A/B testing, causal inference, statistical significance testing" },
      { name: "Predictive Modeling", level: "Expert", description: "Forecasting, risk assessment, optimization algorithms" }
    ]
  },
  {
    title: "Programming & Tools",
    subtitle: "Full-stack development and data science tools",
    skills: [
      { name: "Python Ecosystem", level: "Expert", description: "Pandas, NumPy, Scikit-learn, Matplotlib, Seaborn, Jupyter" },
      { name: "R & Statistical Computing", level: "Advanced", description: "RStudio, ggplot2, dplyr, statistical packages, Shiny apps" },
      { name: "Web Technologies", level: "Advanced", description: "React, TypeScript, REST APIs, microservices architecture" },
      { name: "DevOps & Version Control", level: "Advanced", description: "Git, Docker, Kubernetes, CI/CD, infrastructure as code" }
    ]
  },
  {
    title: "Data Visualization",
    subtitle: "Creating compelling visual narratives from data",
    skills: [
      { name: "Interactive Dashboards", level: "Expert", description: "Tableau, Power BI, Plotly Dash, real-time monitoring" },
      { name: "Custom Visualizations", level: "Advanced", description: "D3.js, custom charts, interactive web applications" },
      { name: "Storytelling with Data", level: "Expert", description: "Executive presentations, insight communication, visual design" },
      { name: "Geospatial Analytics", level: "Intermediate", description: "GIS, mapping, location intelligence, spatial statistics" }
    ]
  },
  {
    title: "Domain Expertise",
    subtitle: "Industry knowledge and business acumen",
    skills: [
      { name: "Financial Analytics", level: "Expert", description: "Risk modeling, fraud detection, algorithmic trading, fintech" },
      { name: "Healthcare & Biotech", level: "Intermediate", description: "Clinical data analysis, drug discovery, medical imaging" },
      { name: "E-commerce & Marketing", level: "Expert", description: "Customer segmentation, recommendation systems, attribution" },
      { name: "IoT & Sensors", level: "Advanced", description: "Time-series analysis, anomaly detection, predictive maintenance" }
    ]
  }
];

const getLevelColor = (level: string) => {
  switch (level) {
    case "Expert":
      return "bg-primary/20 text-primary border-primary/30";
    case "Advanced":
      return "bg-accent/20 text-accent-foreground border-accent/30";
    case "Intermediate":
      return "bg-secondary/20 text-secondary-foreground border-secondary/30";
    default:
      return "bg-muted/20 text-muted-foreground border-muted/30";
  }
};

const TechnicalExpertise = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-32 bg-background relative">
      <AnimatedDotsBackground />
      <GlowingEffect disabled={false} proximity={200} spread={80} blur={20} />
      <MarqueeText text="# Technical Expertise" />
      
      <div className="container mx-auto px-6 mt-32">
        <div className="grid md:grid-cols-2 gap-16">
          {expertiseCategories.map((category, categoryIdx) => (
            <motion.div
              key={category.title}
              className="space-y-6"
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.8, delay: categoryIdx * 0.1 }}
            >
              {/* Category Header */}
              <div className="space-y-2">
                <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                  {category.title}
                </h3>
                <p className="text-muted-foreground">{category.subtitle}</p>
              </div>

              {/* Skills */}
              <div className="space-y-4">
                {category.skills.map((skill, skillIdx) => (
                  <motion.div
                    key={skill.name}
                    className="p-4 rounded-lg bg-card/50 border border-border/50 backdrop-blur-sm hover:bg-card/80 transition-colors"
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ duration: 0.5, delay: categoryIdx * 0.1 + skillIdx * 0.05 }}
                  >
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="font-semibold text-foreground">{skill.name}</h4>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getLevelColor(skill.level)}`}>
                        {skill.level}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground">{skill.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnicalExpertise;
