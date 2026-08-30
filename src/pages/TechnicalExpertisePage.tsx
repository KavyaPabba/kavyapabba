import TechnicalExpertise from "@/components/TechnicalExpertise";
import SiteFooter from "@/components/SiteFooter";
import SiteNav from "@/components/SiteNav";
import PageHud from "@/components/PageHud";

const TechnicalExpertisePage = () => {
  return (
    <main className="min-h-screen bg-background">
      <PageHud />
      <SiteNav />
      <TechnicalExpertise />
      <SiteFooter />
    </main>
  );
};

export default TechnicalExpertisePage;
