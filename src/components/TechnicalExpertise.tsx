import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { AnimatedDotsBackground } from "@/components/ui/animated-dots-background";

const expertiseCategories = [
  {
    title: "Machine Learning & AI",
    subtitle: "Advanced expertise in building intelligent systems",
    skills: [
      { name: "Generative AI & RAG", level: "Expert", description: "Vector search, document chunking, and prompt orchestration. Evolved a LLaMA-based chatbot proof of concept into a production RAG solution for ISTAT, deployed with FastAPI, Docker, and React." },
      { name: "Classical ML", level: "Expert", description: "Scikit-learn, PySpark MLlib, and LightGBM. Classification, regression, feature engineering, cross-validation, and hyperparameter tuning." },
      { name: "Explainable AI", level: "Advanced", description: "SHAP for global and local interpretability, plus fairness analysis by gender and age." },
      { name: "MLOps & Deployment", level: "Expert", description: "Verifying and debugging production ML pipelines, Git-based CI/CD, and Docker containerization." }
    ]
  },
  {
    title: "Data Engineering",
    subtitle: "Scalable data infrastructure and pipeline development",
    skills: [
      { name: "Big Data & Distributed Processing", level: "Advanced", description: "PySpark, Databricks, and Apache Airflow. Parallelized an ESG data pipeline using multiprocessing and concurrent.futures." },
      { name: "Cloud Platforms", level: "Advanced", description: "AWS RDS, Azure Data Factory, and Azure SQL Database." },
      { name: "Database Systems", level: "Advanced", description: "PostgreSQL, MySQL, SQL Server, and Azure SQL Database." },
      { name: "Data Pipelines", level: "Expert", description: "ETL/ELT, REST API integration, incremental processing, and data validation." }
    ]
  },
  {
    title: "Analytics & Statistics",
    subtitle: "Statistical modeling and business intelligence",
    skills: [
      { name: "Statistical Analysis", level: "Expert", description: "Exploratory data analysis and statistical validation to identify significant risk drivers." },
      { name: "Business Intelligence", level: "Advanced", description: "Power BI (Power Query, DAX) and Tableau dashboards for KPI reporting." },
      { name: "Predictive Modeling", level: "Expert", description: "Credit risk scoring, financial score calibration, and industry risk benchmarking." },
      { name: "Pipeline Monitoring", level: "Advanced", description: "Latency, throughput, and data quality monitoring for production workflows." }
    ]
  },
  {
    title: "Programming & Tools",
    subtitle: "Full-stack development and data science tools",
    skills: [
      { name: "Python Ecosystem", level: "Expert", description: "Pandas, NumPy, Scikit-learn, multiprocessing, and concurrent.futures." },
      { name: "Web Technologies", level: "Advanced", description: "React, FastAPI, and REST APIs for LLM and RAG application deployment." },
      { name: "DevOps & Version Control", level: "Advanced", description: "Git, Docker, and CI/CD across development, staging, and production environments." },
      { name: "Workflow Automation", level: "Advanced", description: "Apache Airflow and dbt for modular, version-controlled transformation models." }
    ]
  },
  {
    title: "Data Visualization",
    subtitle: "Creating compelling visual narratives from data",
    skills: [
      { name: "Interactive Dashboards", level: "Expert", description: "Power BI and Tableau dashboards for KPI and operational analysis." },
      { name: "Business Reporting Templates", level: "Advanced", description: "Standardized Excel-based risk assessment templates with automated validation rules." },
      { name: "Storytelling with Data", level: "Advanced", description: "Communicating credit risk and ESG insights to banking and public sector stakeholders." },
      { name: "Tableau Prep & Data Modeling", level: "Advanced", description: "Tableau Prep Builder for fleet and operational performance dashboards." }
    ]
  },
  {
    title: "Domain Expertise",
    subtitle: "Industry knowledge and business acumen",
    skills: [
      { name: "Financial Risk & Credit Scoring", level: "Expert", description: "SME credit risk, industry benchmarking, and ESG metrics for an on-premise AI platform." },
      { name: "Public Sector & National Statistics", level: "Advanced", description: "Survey and administrative data pipelines and RAG solutions for a national statistics institute." },
      { name: "Mobility & Fleet Analytics", level: "Advanced", description: "Fleet, operational, and pricing analytics for a shared mobility company." },
      { name: "ESG & Sustainability Analytics", level: "Advanced", description: "Parallelized ESG data processing across thousands of Italian companies." }
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

      <div className="container mx-auto px-6 pt-32 text-center">
        <div className="font-mono text-xs md:text-sm tracking-[0.3em] text-primary uppercase mb-4">
          02 / Technical Expertise
        </div>
        <h2 className="font-sans text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground/70">
          Technical Expertise
        </h2>
      </div>

      <div className="container mx-auto px-6 mt-20 md:mt-24">
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
                      <span className={`px-2 py-1 rounded-full font-mono text-[10px] font-medium uppercase tracking-wider border ${getLevelColor(skill.level)}`}>
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
