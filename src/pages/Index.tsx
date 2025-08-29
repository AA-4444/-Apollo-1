import { Navigation } from "@/components/Navigation";
import { HeroMinimal } from "@/components/HeroMinimal";
import { AboutMinimal } from "@/components/AboutMinimal";
import { WorkMinimal } from "@/components/WorkMinimal";
import { ContactMinimal } from "@/components/ContactMinimal";
import { FooterMinimal } from "@/components/FooterMinimal";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroMinimal />
      <AboutMinimal />
      <WorkMinimal />
      <ContactMinimal />
      <FooterMinimal />
    </div>
  );
};

export default Index;
