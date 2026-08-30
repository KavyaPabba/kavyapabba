import ContactMinimal from "@/components/ContactMinimal";
import SiteFooter from "@/components/SiteFooter";
import SiteNav from "@/components/SiteNav";
import PageHud from "@/components/PageHud";

const Connect = () => {
  return (
    <main className="min-h-screen bg-background">
      <PageHud />
      <SiteNav />
      <ContactMinimal />
      <SiteFooter />
    </main>
  );
};

export default Connect;
