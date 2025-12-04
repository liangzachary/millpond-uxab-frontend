<<<<<<< HEAD
// ROI metrics to display. Each entry includes a label summarising a
// measurable benefit from deploying Mill Pond's solutions. These are
// rendered as chips in the ROI section using the metrics-chip utility class.
=======
import coinstack from "../../assets/coin-stack.svg";
import warning from "../../assets/alert-triangle.svg";
import shield from "../../assets/shield.svg";


>>>>>>> 782024c9d1ba3dfd2e0dd0e09b2473e6f0b15c4b
const metrics = [
  { label: "30% ↓ AI Cost",
    icon: coinstack,
  },
  { label: "50% ↓ Data Risk",
    icon: warning,
  },
  { label: "5M+ Protected Prompts",
    icon: shield,
  },
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
<<<<<<< HEAD
        <h2 className="section-header">ROI Metrics.</h2>
        <p className="large-font mt-2">
          See measurable impact across your entire AI ecosystem.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          {metrics.map((metric) => (
            <div key={metric.label} className="metrics-chip">
              {metric.label}
=======
        <h2 className="section-header text-3xl md:text-4xl lg:text-5xl" style={{ color: "#1F4E79" }}>
          ROI Metrics.
        </h2>
        <p className="subheader mt-2" style={{ color: "#4B4B4B" }}>
          See measurable impact across your entire AI ecosystem.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-6">
          {metrics.map((metric) => (
            <div
              key={metric.label}
              className="flex items-center gap-3 rounded-full bg-white px-8 py-4 text-base font-semibold text-[#1F4E79] shadow-sm ring-1 ring-[#E5E7EB] drop-shadow hover:drop-shadow-lg transition-all duration-300"
            >
              <img src={metric.icon} alt={metric.label} className="h-6 w-6" />
              <p className="text-base font-semibold text-[#1F4E79]">{metric.label}</p>
>>>>>>> 782024c9d1ba3dfd2e0dd0e09b2473e6f0b15c4b
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
