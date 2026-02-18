import FloatingParticles from "@/components/ramadan/FloatingParticles";
import NavBar from "@/components/ramadan/NavBar";
import HeroSection from "@/components/ramadan/HeroSection";
import AboutSection from "@/components/ramadan/AboutSection";
import TimetableSection from "@/components/ramadan/TimetableSection";
import DailyCards from "@/components/ramadan/DailyCards";
import ShareCard from "@/components/ramadan/ShareCard";
import Footer from "@/components/ramadan/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden scroll-smooth">
      <FloatingParticles />
      <NavBar />
      <HeroSection />
      <AboutSection />
      <TimetableSection />
      <DailyCards />
      <ShareCard />
      <Footer />
    </div>
  );
};

export default Index;
