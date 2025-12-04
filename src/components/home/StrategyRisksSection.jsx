import eye from "../../assets/eye.svg";
import shieldoff from "../../assets/shield-off.svg";
import users from "../../assets/users.svg";
import lock from "../../assets/lock.svg";

// List of common risks used in the strategy section. Each item contains
// a title, description and icon. Icons are imported above from the
// assets folder. This data drives the grid of risk cards below.
const risks = [
  {
    title: "Invisible AI Agents",
    body:
      "Invisible AI agents operating across your network, accessing sensitive data without your knowledge.",
    icon: eye,
  },
  {
    title: "Security Gaps",
    body:
      "Security gaps that put your organization at risk as AI tools proliferate beyond IT oversight.",
    icon: shieldoff,
  },
  {
    title: "Departmental AI Silos",
    body:
      "Departmental AI silos that prevent you from realizing the full ROI of your technology investments.",
    icon: users,
  },
  {
    title: "Data Exposure",
    body:
      "Customer and proprietary data exposure that could damage trust and compliance.",
    icon: lock,
  },
];

/**
 * StrategyRisksSection displays a callout about hidden risks in AI deployments.
 * It features a heading, subheading and a responsive grid of four items
 * outlining common challenges. Styles rely on the design system defined
 * in App.css: section backgrounds, typography classes and utility helpers
 * avoid inline colour definitions. A decorative blurred shape floats behind
 * the content to give visual interest.
 */
function StrategyRisksSection() {
  return (
    <section className="regular-banner-white relative overflow-hidden">
      <div className="mx-auto max-w-4xl text-center">
        {/* Section heading and subheading */}
        <h2 className="section-header mb-4">
          Evolve Your AI Strategy with Complete Control.
        </h2>
        <h3 className="subheader">
          Traditional AI management creates hidden risks. Mill Pond turns them into insight.
        </h3>
      </div>

      {/* Grid of risks */}
      <div className="risks-grid">
        {risks.map((risk) => (
          <div key={risk.title} className="risk-item text-center">
            <div className="risk-icon-circle">
              <img src={risk.icon} alt={risk.title} className="h-8 w-8" />
            </div>
            <h4 className="risk-title">{risk.title}</h4>
            <p className="risk-body">{risk.body}</p>
          </div>
        ))}
      </div>

      {/* Decorative shape floating behind content */}
      <div
        className="decorative-shape shape-blue shape-lg"
        style={{ top: "50%", left: "85%" }}
      />
    </section>
  );
}

export default StrategyRisksSection;
