import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import HeroSection from "../components/home/HeroSection.jsx";
import StrategyRisksSection from "../components/home/StrategyRisksSection.jsx";
import ApproachSecuritySection from "../components/home/ApproachSecuritySection.jsx";
import RoleCardsSection from "../components/home/RoleCardsSection.jsx";
import NewsHighlightsSection from "../components/home/NewsHighlightsSection.jsx";
import SolutionsSection from "../components/home/SolutionsSection.jsx";
import AdvantagesSection from "../components/home/AdvantagesSection.jsx";
import PartnersSection from "../components/home/PartnersSection.jsx";
import RoiSection from "../components/home/RoiSection.jsx";
import ContactSection from "../components/home/ContactSection.jsx";

function Home() {
  return (
    <>
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
    </>
  );
}

export default Home;
