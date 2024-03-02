import AdvantagesSection from "@/components/advantages-section";
import CollaborationSection from "@/components/collaboration-section";
import ContactSection from "@/components/contact-section";
import HeroSection from "@/components/hero-section";
import StatsSection from "@/components/stats-section";
import HelpSection from "@/components/help-section";
import Footer from "@/components/footer";


export default function Home() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <AdvantagesSection />
      <CollaborationSection />
      <ContactSection />
      <HelpSection />
      <Footer />
    </>
  );
}
