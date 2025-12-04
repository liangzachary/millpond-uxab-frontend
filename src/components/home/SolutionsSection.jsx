import React from "react";
import workbenchPic from "../../assets/WorkBenchPhoto.svg";
import xilosPic from "../../assets/XilosPhoto.svg";

const SolutionsSection = () => {
  return (
    <section className="regular-banner-white relative px-6 py-10">
      {/* Decorative accent */}
      <div
        className="decorative-shape shape-sand shape-xl"
        style={{ top: "-150px", left: "-150px" }}
      ></div>
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-12">
        <div className="text-center">
          <h2 className="section-header">Our Solutions</h2>
          <h3 className="subheader">
            Your complete AI governance ecosystem. From creation to security.
          </h3>
        </div>

        <div className="flex flex-col gap-24">
          {/* WorkBench Grid */}
          <div className="px-8 md:px-16">
            <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2">
              {/* Left Column */}
              <div className="card text-left">
                <p className="subheader">Built AI Solutions.</p>
                <h2 className="section-header">
                  WorkBench: AI That Understands Your Business
                </h2>
                <p className="small-font mt-3 leading-relaxed">
                  Your teams need AI that speaks your industry's language and
                  understands your unique processes. WorkBench puts that power
                  directly in your hands with an intuitive environment to build
                  AI solutions that deliver immediate value.
                </p>
                <button className="mt-5 button-primary">
                  Explore WorkBench
                </button>
              </div>

              {/* Right Column */}
              <div className="flex items-center justify-center">
                <img
                  src={workbenchPic}
                  alt="WorkBench Product Shot"
                  className="rounded-lg shadow-sm max-w-full h-auto"
                />
              </div>
            </div>
          </div>

          {/* Xilos Grid */}
          <div className="px-8 md:px-16">
            <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2">
              {/* Image on the left for large screens */}
              <div className="flex items-center justify-center order-2 md:order-1">
                <img
                  src={xilosPic}
                  alt="Xilos Product Shot"
                  className="rounded-lg shadow-sm max-w-full h-auto"
                />
              </div>

              {/* Details */}
              <div className="card text-right order-1 md:order-2">
                <p className="subheader">AI Security &amp; Orchestration</p>
                <h2 className="section-header">Xilos: Your AI Command Center</h2>
                <p className="small-font leading-relaxed">
                  Benefit from AI without compromising security. Xilos acts as your
                  intelligent guardian and conductor, working with all your AI
                  systems to enhance security while breaking down information barriers.
                </p>
                <div className="mt-5 flex justify-end">
                  <button className="button-primary">Explore Xilos</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
