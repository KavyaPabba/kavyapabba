import AboutSection from "@/components/AboutSection";
import SiteFooter from "@/components/SiteFooter";
import SiteNav from "@/components/SiteNav";
import PageHud from "@/components/PageHud";

const About = () => {
  return (
    <main className="min-h-screen bg-background">
      <PageHud />
      <SiteNav />
      <AboutSection />
      <SiteFooter />
    </main>
  );
};

export default About;
