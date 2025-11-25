import HeroMinimal from "@/components/HeroMinimal";
import AboutSection from "@/components/AboutSection";
import ProjectsMinimal from "@/components/ProjectsMinimal";
import ContactMinimal from "@/components/ContactMinimal";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <HeroMinimal />
      <AboutSection />
      <ProjectsMinimal />
      <ContactMinimal />
      
      {/* Footer */}
      <footer className="py-12 px-6 border-t border-border">
        <div className="container mx-auto text-center">
          <p className="text-muted-foreground text-sm">
            © 2024 Kavya Pabba. Built with passion for data.
          </p>
        </div>
      </footer>
    </main>
  );
};

export default Index;
