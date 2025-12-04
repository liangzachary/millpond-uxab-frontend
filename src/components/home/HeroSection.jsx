import React from "react";

function HeroSection() {
  return (
    <section className="regular-banner-sand relative flex items-center justify-center px-6 py-20">
      <div
        className="decorative-shape shape-blue shape-xl"
        style={{ top: "-200px", right: "-150px" }}
      ></div>
      <div className="hero-banner flex max-w-4xl flex-col items-center gap-6 text-center">
        <h1 className="hero-title">
          Secure the Future for Enterprise AI.
        </h1>

        <h3 className="subheader mb-large">
          Prompt-based protection that empowers safe, efficient AI adoption.
        </h3>

        <div className="button-group mt-8">
          <button className="button-primary">Request a Demo</button>
          <button className="button-secondary">Explore Solutions</button>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
