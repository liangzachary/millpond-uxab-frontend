// A list of key governance advantages offered by Mill Pond Research.
// Each object includes a title and descriptive body text. The grid
// generated from this array is responsive across breakpoints.
const advantages = [
  {
    title: "Visibility",
    body:
      "Full oversight of assistant activity and data movement across your environment.",
  },
  {
    title: "Protection",
    body:
      "Enforce data masking, prompt guardrails, and policy compliance in real time.",
  },
  {
    title: "Unify",
    body:
      "Connect AI governance with your existing enterprise security stack and workflows.",
  },
  {
    title: "Compliance",
    body:
      "Continuous controls to meet industry and regulatory requirements with confidence.",
  },
  {
    title: "Ecosystem",
    body:
      "Works across assistants, agents, and data sources to keep teams aligned.",
  },
  {
    title: "Optimize",
    body:
      "Insights to reduce AI cost while improving usage quality and safety.",
  },
];

/**
 * AdvantagesSection showcases the core value propositions of Mill Pond's
 * governance solution. Cards are laid out in a responsive grid and use
 * the card utility class combined with custom accent circles. A
 * decorative blurred shape appears behind the section for visual flair.
 */
function AdvantagesSection() {
  return (
    <section className="regular-banner-sand relative overflow-hidden px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 text-center">
          <h2 className="section-header">
            Essential AI Governance Advantages.
          </h2>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {advantages.map((item) => (
            <div key={item.title} className="card flex flex-col gap-3 text-left">
              <div className="h-10 w-10 rounded-full bg-sky" />
              <h4 className="large-font-bold">{item.title}</h4>
              <p className="small-font leading-relaxed">{item.body}</p>
            </div>
          ))}
        </div>
      </div>
      <div
        className="decorative-shape shape-sand shape-lg"
        style={{ top: "-10%", right: "85%" }}
      />
    </section>
  );
}

export default AdvantagesSection;
