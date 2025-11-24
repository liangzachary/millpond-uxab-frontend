import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import HeroSection from "../components/home/HeroSection";
import StrategyRisksSection from "../components/home/StrategyRisksSection";
import ApproachSecuritySection from "../components/home/ApproachSecuritySection";
import RoleCardsSection from "../components/home/RoleCardsSection";
import NewsHighlightsSection from "../components/home/NewsHighlightsSection";
import SolutionsSection from "../components/home/SolutionsSection";
import AdvantagesSection from "../components/home/AdvantagesSection";
import PartnersSection from "../components/home/PartnersSection";
import RoiSection from "../components/home/RoiSection";
import ContactSection from "../components/home/ContactSection";

function Home() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col">
        <HeroSection />
        <StrategyRisksSection />
        <ApproachSecuritySection />
        <RoleCardsSection />
        <NewsHighlightsSection />
        <SolutionsSection />
        <AdvantagesSection />
        <PartnersSection />
        <RoiSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}

export default Home;
