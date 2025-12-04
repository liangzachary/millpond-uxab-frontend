<<<<<<< HEAD
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
=======
import visibility from "../../assets/eye.svg";
import protection from "../../assets/shield.svg";
import unify from "../../assets/share.svg";
import compliance from "../../assets/lock.svg"; 
import ecosystem from "../../assets/users.svg";
import optimize from "../../assets/coin-stack.svg";



const advantages = [
  {
    title: "Visibility",
    body: "Full oversight of assistant activity and data movement across your environment.",
    icon: visibility,
  },
  {
    title: "Protection",
    body: "Enforce data masking, prompt guardrails, and policy compliance in real time.",
    icon: protection,
  },
  {
    title: "Unify",
    body: "Connect AI governance with your existing enterprise security stack and workflows.",
    icon: unify,
  },
  {
    title: "Compliance",
    body: "Continuous controls to meet industry and regulatory requirements with confidence.",
    icon: compliance,
  },
  {
    title: "Ecosystem",
    body: "Works across assistants, agents, and data sources to keep teams aligned.",
    icon: ecosystem,
  },
  {
    title: "Optimize",
    body: "Insights to reduce AI cost while improving usage quality and safety.",
    icon: optimize,
>>>>>>> 782024c9d1ba3dfd2e0dd0e09b2473e6f0b15c4b
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
<<<<<<< HEAD
          <h2 className="section-header">
=======
          <h2 className="section-header text-3xl md:text-4xl lg:text-5xl" style={{ color: "#1F4E79" }}>
>>>>>>> 782024c9d1ba3dfd2e0dd0e09b2473e6f0b15c4b
            Essential AI Governance Advantages.
          </h2>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {advantages.map((item) => (
<<<<<<< HEAD
            <div key={item.title} className="card flex flex-col gap-3 text-left">
              <div className="h-10 w-10 rounded-full bg-sky" />
              <h4 className="large-font-bold">{item.title}</h4>
              <p className="small-font leading-relaxed">{item.body}</p>
=======
            <div
              key={item.title}
              className="flex flex-col items-center gap-3 rounded-2xl bg-white p-6 text-center shadow-sm ring-1 ring-[#E5E7EB] drop-shadow hover:drop-shadow-lg transition-all duration-300"
            >
              <div className="h-10 w-10 rounded-full mt-2">
                <img src={item.icon} alt={item.title} className="h-10 w-10" />
              </div>
              <h4 className="subheader" style={{ color: "#1F4E79", fontWeight: '350' }}>
                {item.title}
              </h4>
              <p className="small-font mx-4 mb-2" style={{ color: "#4B4B4B" }}>
                {item.body}
              </p>
>>>>>>> 782024c9d1ba3dfd2e0dd0e09b2473e6f0b15c4b
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
