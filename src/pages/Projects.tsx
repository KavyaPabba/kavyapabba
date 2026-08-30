import ProjectsMinimal from "@/components/ProjectsMinimal";
import SiteFooter from "@/components/SiteFooter";
import SiteNav from "@/components/SiteNav";
import PageHud from "@/components/PageHud";

const Projects = () => {
  return (
    <main className="min-h-screen bg-background">
      <PageHud />
      <SiteNav />
      <ProjectsMinimal />
      <SiteFooter />
    </main>
  );
};

export default Projects;
