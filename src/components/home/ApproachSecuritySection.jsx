import check from "../../assets/check.svg";
import x from "../../assets/x.svg";
import question from "../../assets/unknown.svg";

// Rows used to compare prompt-based AI security with model-based approaches.
// Each entry includes a title, descriptive text and indicator keys for
// prompt-based and model-based columns. The icons themselves are
// determined by the Indicator component below.
const comparisonRows = [
  {
    title: "Approach",
    description:
      "Adaptive, real-time filtering that analyzes both user intent and model output to maintain safety without restricting productivity.",
    promptBased: "check",
    modelBased: "x",
  },
  {
    title: "Flexibility",
    description:
      "Instantly updated policies without retraining, allowing organizations to react quickly to new threats, regulations, or internal requirements.",
    promptBased: "check",
    modelBased: "question",
  },
  {
    title: "Implementation",
    description:
      "Compatible with any LLM and integrates directly into existing workflows, avoiding vendor lock-in and long deployment cycles.",
    promptBased: "check",
    modelBased: "question",
  },
  {
    title: "Cost Efficiency",
    description:
      "Cuts operational overhead by eliminating retraining costs and minimizing model calls through optimized filtering.",
    promptBased: "check",
    modelBased: "x",
  },
  {
    title: "Transparency",
    description:
      "Real-time insights into what's being blocked, allowed, or modified, building trust and ensuring compliance.",
    promptBased: "check",
    modelBased: "question",
  },
  {
    title: "Security Coverage",
    description:
      "Monitors prompts, outputs, and context continuously, protecting against injection attacks, data leaks, and unauthorized usage.",
    promptBased: "check",
    modelBased: "question",
  },
  {
    title: "Innovation",
    description:
      "Allows safe experimentation with new models and tools by ensuring everything is governed at the prompt layer.",
    promptBased: "check",
    modelBased: "x",
  },
];

/**
 * Simple indicator component that returns the appropriate icon based on
 * the provided type. It renders a check, x or question mark icon. The
 * images are sized using tailwind classes to align within the table.
 */
function Indicator({ type }) {
  if (type === "check") {
    return <img src={check} alt="check" className="h-6 w-6" />;
  } else if (type === "x") {
    return <img src={x} alt="x" className="h-6 w-6" />;
  } else if (type === "question") {
    return <img src={question} alt="question" className="h-6 w-6" />;
  }
  return null;
}

/**
 * ApproachSecuritySection renders a comparison table highlighting the
 * benefits of prompt-based AI security over traditional model-based
 * approaches. A descriptive heading introduces the section and a brief
 * paragraph summarises the value proposition. The design system's
 * comparison-table utility classes are used to style the table without
 * inline CSS. A decorative shape adds subtle visual interest.
 */
function ApproachSecuritySection() {
  return (
    <section className="regular-banner-sand relative overflow-hidden px-6 py-20">
      <div className="mx-auto flex max-w-4xl flex-col gap-10">
        <h2 className="section-header text-center">
          Our Approach to AI Security.
        </h2>
        {/* Comparison table */}
        <div className="comparison-table">
          {/* Header row */}
          <div className="header-row">
            <span className="flex-1" />
            <span className="large-font-bold text-center cell-indicator">
              Prompt‑Based AI security
            </span>
            <span className="large-font-bold text-center cell-indicator">
              Model‑Based
            </span>
          </div>
          {/* Data rows */}
          {comparisonRows.map((row) => (
            <div key={row.title} className="row">
              <div className="cell-title">
                <h4 className="small-font-bold mb-2">{row.title}</h4>
                <p className="small-font leading-relaxed">{row.description}</p>
              </div>
              <div className="cell-indicator">
                <Indicator type={row.promptBased} />
              </div>
              <div className="cell-indicator">
                <Indicator type={row.modelBased} />
              </div>
            </div>
          ))}
        </div>
        <p className="subheader text-center">
          Mill Pond Research uses a prompt‑based layer that secures AI use without slowing innovation,
          offering security, speed, and cost savings.
        </p>
      </div>
      {/* Decorative shape */}
      <div
        className="decorative-shape shape-sand shape-lg"
        style={{ bottom: "-10%", right: "80%" }}
      />
    </section>
  );
}

export default ApproachSecuritySection;
