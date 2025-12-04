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

/**
 * Home page component that composes all modular sections for the landing
 * page. The order of sections follows the desired narrative flow: hero
 * call‑to‑action, risks, security approach, role benefits, news,
 * solutions, advantages, partners, ROI metrics and finally a contact
 * form. Navigation and footer components are intentionally omitted here
 * as they may be provided by a higher level layout.
 */
function Home() {
  return (
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
  );
}

export default Home;
