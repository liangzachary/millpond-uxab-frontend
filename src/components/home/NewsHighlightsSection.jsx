// Sample news stories for the highlights section. Each story includes
// a source, date, title and call-to-action label. In a production app
// these could be fetched from a CMS or API.
const stories = [
  {
    source: "TechCrunch",
    date: "Nov 1, 2024",
    title:
      "Mill Pond Research advances prompt security with enterprise‑ready guardrails.",
    cta: "Read more",
  },
  {
    source: "Press Release",
    date: "Oct 15, 2024",
    title: "Mill Pond launches Xlios for AI security and orchestration.",
    cta: "View more",
  },
];

/**
 * NewsHighlightsSection displays recent news and press mentions in a
 * two‑column grid. Each card makes use of the card utility and the
 * button classes from the design system. A decorative shape floats
 * behind the content for added depth.
 */
function NewsHighlightsSection() {
  return (
    <section className="regular-banner-sand relative overflow-hidden px-6 py-16">
      <div className="mx-auto max-w-5xl">
        <div className="mb-8 text-center">
<<<<<<< HEAD
          <h2 className="section-header">News and Highlights</h2>
=======
          <h2 className="section-header text-3xl md:text-4xl lg:text-5xl" style={{ color: "#1F4E79" }}>
            News and Highlights
          </h2>
>>>>>>> 782024c9d1ba3dfd2e0dd0e09b2473e6f0b15c4b
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {stories.map((story) => (
            <article
              key={story.title}
<<<<<<< HEAD
              className="card flex h-full flex-col justify-between text-left"
=======
              className="flex h-full flex-col justify-between rounded-2xl bg-white p-6 text-left shadow-sm ring-1 ring-[#E5E7EB] drop-shadow hover:drop-shadow-lg transition-all duration-300"
>>>>>>> 782024c9d1ba3dfd2e0dd0e09b2473e6f0b15c4b
            >
              <div className="flex items-center justify-between text-sm font-semibold">
                <span className="rounded-full bg-sky px-3 py-1 text-primary">
                  {story.source}
                </span>
                <span className="text-primary-alt">{story.date}</span>
              </div>
              <p className="mt-4 small-font leading-relaxed">
                {story.title}
              </p>
              <div className="mt-6">
                <button className="button-secondary">{story.cta}</button>
              </div>
            </article>
          ))}
        </div>
      </div>
      <div
        className="decorative-shape shape-sand shape-lg"
        style={{ top: "40%", left: "90%" }}
      />
    </section>
  );
}

export default NewsHighlightsSection;
