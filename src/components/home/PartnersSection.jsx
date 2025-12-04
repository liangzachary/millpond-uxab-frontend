// An array of partner names displayed in the partners grid. These
// represent key collaborators and integrations that expand Mill Pond's
// ecosystem. The simple array structure keeps the markup minimal.
const partners = [
  "Anthropic",
  "OpenAI",
  "Meta",
  "Google",
  "Groq",
  "AWS",
  "Azure",
  "NIST",
  "CCC",
  "C3.ai",
];

/**
 * PartnersSection lists strategic technology partners and promotes an
 * announcement card highlighting a recent partnership. The grid
 * leverages the metrics-chip utility class for consistent styling of
 * partner names. A decorative shape is added for interest.
 */
function PartnersSection() {
  return (
    <section className="regular-banner-white relative overflow-hidden px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <h2 className="section-header">Our Partners.</h2>
        </div>
        <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5">
          {partners.map((partner) => (
            <div
              key={partner}
              className="metrics-chip flex items-center justify-center py-3 text-center"
            >
              {partner}
            </div>
          ))}
        </div>
        <div className="mt-10 flex flex-col items-center gap-2 card bg-sand text-center">
          <p className="small-font-bold uppercase tracking-widest text-primary-alt">
            Partnership
          </p>
          <p className="large-font-bold text-primary">
            AWS genAI partnership announced
          </p>
          <p className="small-font">Nov 1 2024</p>
        </div>
      </div>
      <div
        className="decorative-shape shape-blue shape-lg"
        style={{ bottom: "-15%", right: "85%" }}
      />
    </section>
  );
}

export default PartnersSection;
