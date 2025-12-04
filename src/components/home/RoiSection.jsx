// ROI metrics to display. Each entry includes a label summarising a
// measurable benefit from deploying Mill Pond's solutions. These are
// rendered as chips in the ROI section using the metrics-chip utility class.
const metrics = [
  { label: "50% lower AI Cost" },
  { label: "50% lower Data Risk" },
  { label: "3M+ Protected Prompts" },
];

/**
 * RoiSection presents high-level return on investment metrics in a
 * visually appealing banner. It uses the design system's typography
 * classes for the heading and body copy and the metrics-chip utility
 * to style each metric as a pill. A blurred shape floats behind the
 * content to add depth.
 */
function RoiSection() {
  return (
    <section className="regular-banner-sand relative overflow-hidden px-6 py-16">
      <div className="mx-auto max-w-5xl text-center">
        <h2 className="section-header">ROI Metrics.</h2>
        <p className="large-font mt-2">
          See measurable impact across your entire AI ecosystem.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          {metrics.map((metric) => (
            <div key={metric.label} className="metrics-chip">
              {metric.label}
            </div>
          ))}
        </div>
      </div>
      <div
        className="decorative-shape shape-sand shape-lg"
        style={{ top: "10%", right: "-15%" }}
      />
    </section>
  );
}

export default RoiSection;
