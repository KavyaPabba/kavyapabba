import { Card, CardContent } from "@/components/ui/card";
import { Brain, Database, LineChart, Code } from "lucide-react";

const skillCategories = [
  {
    icon: Brain,
    title: "Machine Learning",
    skills: ["TensorFlow", "PyTorch", "Scikit-learn", "XGBoost", "Keras"],
  },
  {
    icon: Database,
    title: "Data Engineering",
    skills: ["SQL", "PostgreSQL", "MongoDB", "Apache Spark", "Airflow"],
  },
  {
    icon: LineChart,
    title: "Analytics & Visualization",
    skills: ["Pandas", "NumPy", "Matplotlib", "Plotly", "Tableau"],
  },
  {
    icon: Code,
    title: "Development",
    skills: ["Python", "R", "Docker", "Git", "FastAPI"],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 px-6 bg-secondary/20">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Technical <span className="text-gradient">Expertise</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Comprehensive skill set spanning the entire data science workflow
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, idx) => (
            <Card 
              key={idx}
              className="card-gradient border-border hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(6,182,212,0.15)] group animate-slide-up"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4 p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <category.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 group-hover:text-primary transition-colors">
                    {category.title}
                  </h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    {category.skills.map((skill, skillIdx) => (
                      <li key={skillIdx} className="font-mono">
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
