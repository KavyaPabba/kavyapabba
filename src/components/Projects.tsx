import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Predictive Analytics Platform",
    description: "Built a real-time predictive model for customer churn using ensemble methods, achieving 94% accuracy. Deployed on AWS with automated retraining pipeline.",
    tags: ["Python", "Scikit-learn", "AWS", "Docker"],
    metrics: "94% accuracy, 2M+ predictions/day",
    github: "#",
    demo: "#"
  },
  {
    title: "NLP Sentiment Analysis",
    description: "Developed a transformer-based sentiment analysis system for social media monitoring. Processed 100K+ documents daily with sub-second latency.",
    tags: ["PyTorch", "BERT", "FastAPI", "Redis"],
    metrics: "100K docs/day, <500ms latency",
    github: "#",
    demo: "#"
  },
  {
    title: "Computer Vision Pipeline",
    description: "Created an end-to-end image classification system for quality control in manufacturing. Reduced defect detection time by 85%.",
    tags: ["TensorFlow", "OpenCV", "Kubernetes", "MLflow"],
    metrics: "85% time reduction, 99% precision",
    github: "#",
    demo: "#"
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A selection of data science projects demonstrating expertise in ML, NLP, and computer vision
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, idx) => (
            <Card 
              key={idx} 
              className="card-gradient border-border hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(6,182,212,0.15)] hover:-translate-y-1 group animate-slide-up"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <CardHeader>
                <CardTitle className="flex items-start justify-between">
                  <span className="text-xl group-hover:text-primary transition-colors">
                    {project.title}
                  </span>
                  <div className="flex gap-2">
                    <a href={project.github} className="text-muted-foreground hover:text-primary transition-colors">
                      <Github className="h-5 w-5" />
                    </a>
                    <a href={project.demo} className="text-muted-foreground hover:text-primary transition-colors">
                      <ExternalLink className="h-5 w-5" />
                    </a>
                  </div>
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <p className="text-sm font-mono text-primary mb-3">
                    {project.metrics}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIdx) => (
                      <Badge 
                        key={tagIdx} 
                        variant="secondary"
                        className="bg-secondary/50 hover:bg-secondary transition-colors"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
