import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";
const Hero = () => {
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <img src={heroBg} alt="Data visualization background" className="w-full h-full object-cover opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/80 to-background"></div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-6 z-10 text-center animate-fade-in">
        <div className="mb-6 inline-block">
          <span className="text-primary font-mono text-sm tracking-wider">
            {'<'} Hello{'/>'} 
          </span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-4 leading-tight">
          Kavya Pabba
        </h1>
        
        <p className="text-2xl md:text-3xl text-muted-foreground mb-6 font-light">
          Data Scientist
        </p>
        
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          ​Transforming complex data into scalable pipelines, actionable insights, and AI-driven business solutions across cloud, analytics, and governance systems.
        </p>
        
        {/* CTA Buttons */}
        <div className="flex gap-4 justify-center mb-12">
          <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 transition-all hover:scale-105 group">
            View Projects
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
          <Button size="lg" variant="outline" className="border-primary/50 text-foreground hover:bg-primary/10 transition-all hover:scale-105">
            Get In Touch
          </Button>
        </div>
        
        {/* Social Links */}
        <div className="flex gap-6 justify-center">
          <a href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="GitHub">
            <Github className="h-6 w-6" />
          </a>
          <a href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="LinkedIn">
            <Linkedin className="h-6 w-6" />
          </a>
          <a href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Email">
            <Mail className="h-6 w-6" />
          </a>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-primary rounded-full"></div>
        </div>
      </div>
    </section>;
};
export default Hero;