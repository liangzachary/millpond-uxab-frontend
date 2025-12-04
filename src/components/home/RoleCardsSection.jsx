// Data defining each role and its benefit. Titles and descriptions
// describe how different organisational stakeholders benefit from Mill
// Pond's solutions. This drives the generation of the cards below.
const roles = [
  {
    title: "For the CISO & GRC teams",
    description:
      "Create AI policy guardrails that ensure workforce safety across assistants and agents.",
  },
  {
    title: "For Policy Leadership",
    description:
      "Create industry‑relevant data and content guidelines that keep prompts compliant.",
  },
  {
    title: "For IT Leadership & GovOps",
    description:
      "Provide visibility into AI agent behaviour across systems with actionable insights.",
  },
];

/**
 * RoleCardsSection highlights the different audiences served by Mill Pond.
 * Each card is styled using the generic card utility class and uses
 * typographic utilities for consistency with the design system. A
 * decorative shape floats in the background of this white banner.
 */
function RoleCardsSection() {
  return (
    <section className="regular-banner-white relative overflow-hidden px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 text-center">
          <h2 className="section-header">
            Every Role Faces a Different Challenge.
          </h2>
          <h3 className="subheader">
            See how Mill Pond Research empowers your team.
          </h3>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {roles.map((role) => (
            <div key={role.title} className="card text-left">
              <h4 className="large-font-bold mb-2 text-primary">
                {role.title}
              </h4>
              <p className="small-font leading-relaxed">
                {role.description}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div
        className="decorative-shape shape-blue shape-lg"
        style={{ bottom: "-15%", left: "80%" }}
      />
    </section>
  );
}

export default RoleCardsSection;
