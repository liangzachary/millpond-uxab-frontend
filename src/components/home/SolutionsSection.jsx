<<<<<<< HEAD
import React from "react";
=======
import { Link } from 'react-router-dom';
>>>>>>> 782024c9d1ba3dfd2e0dd0e09b2473e6f0b15c4b
import workbenchPic from "../../assets/WorkBenchPhoto.svg";
import xilosPic from "../../assets/XilosPhoto.svg";
import link from "../../assets/link.svg";
import users from "../../assets/users.svg";
import rocket from "../../assets/rocket.svg";

<<<<<<< HEAD
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
=======
const workbenchFeatures = [
  {
    icon: link,
    title: "Intuitive AI Builder.",
    body: "Build sophisticated AI solutions without specialized expertise using our visual, drag-and-drop interface."
  },
  {
    icon: users,
    title: "No-Code Development.",
    body: "Deploy AI solutions rapidly with our no-code platform that empowers business users to innovate independently."
  },
  {
    icon: rocket,
    title: "Rapid Deployment.",
    body: "Go from concept to deployment in days, not months, with automated testing and deployment pipelines."
  }
]

const xilosFeatures = [
  {
    icon: link,
    title: "Real-Time Security.",
    body: "Monitor and protect every AI interaction across your organization with intelligent threat detection and automated response."
  },
  {
    icon: users,
    title: "AI Orchestration.",
    body: "Enable controlled collaboration between AI systems, creating a unified knowledge network that grows smarter with every interaction."
  },
  {
    icon: rocket,
    title: "Complete Visibility.",
    body: "Gain comprehensive oversight of your AI ecosystem with intuitive dashboards and detailed analytics on usage, performance, and security."
  }
]

function SolutionsSection() {
  return (
    <section id="solutions-section" className="regular-banner-white px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-12 items-center">
        <div className="text-center">
          <h2 className="section-header text-3xl md:text-4xl lg:text-5xl" style={{ color: "#1F4E79" }}>
            Our Solutions
          </h2>
          <h3 className="subheader" style={{ color: "#4B4B4B" }}>
            Your complete AI governance ecosystem. From creation to security.
          </h3>
        </div>
        
        <div className="flex flex-col gap-24 mb-12">
>>>>>>> 782024c9d1ba3dfd2e0dd0e09b2473e6f0b15c4b

        <div className="flex flex-col gap-24">
          {/* WorkBench Grid */}
<<<<<<< HEAD
          <div className="px-8 md:px-16">
            <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2">
              {/* Left Column */}
              <div className="card text-left">
                <p className="subheader">Built AI Solutions.</p>
                <h2 className="section-header">
=======
          <div className="px-2 md:px-4 my-2">
            <div className="max-w-9xl mx-auto grid gap-12 grid-cols-1 md:grid-cols-2">
              
              {/* Left Column */}
              <div className="rounded-2xl bg-white px-4 text-left border-0">
                <p className="subheader" style={{ color: "#4B4B4B" }}>
                  Built AI Solutions.
                </p>

                <h2 className="section-header text-3xl md:text-4xl lg:text-5xl" style={{ color: "#1F4E79" }}>
>>>>>>> 782024c9d1ba3dfd2e0dd0e09b2473e6f0b15c4b
                  WorkBench: AI That Understands Your Business
                </h2>
                <p className="small-font mt-3 leading-relaxed">
                  Your teams need AI that speaks your industry's language and
                  understands your unique processes. WorkBench puts that power
                  directly in your hands with an intuitive environment to build
                  AI solutions that deliver immediate value.
                </p>
<<<<<<< HEAD
                <button className="mt-5 button-primary">
                  Explore WorkBench
                </button>
              </div>

              {/* Right Column */}
              <div className="flex items-center justify-center">
=======

                <div className="mt-4 space-y-3">
                  {workbenchFeatures.map((feature, index) => (
                    <div key={index} className="flex items-center gap-4">
                      <img src={feature.icon} alt={feature.title} className="h-6 w-6 flex-shrink-0" />
                      <div className="flex-1">
                        <span className="small-font-bold" style={{ color: "#567C8D" }}>{feature.title} </span>
                        <span className="small-font" style={{ color: "#4B4B4B" }}>{feature.body}</span>
                      </div>
                    </div>
                  ))}
                </div>

                <Link to="/solutions/workbench" className="mt-5 button-primary inline-block">Explore WorkBench</Link>
              </div>

              {/* Right Column */}
              <div className="rounded-lg p-4 border-0 flex items-center justify-center">
>>>>>>> 782024c9d1ba3dfd2e0dd0e09b2473e6f0b15c4b
                <img
                  src={workbenchPic}
                  alt="WorkBench Product Shot"
                  className="rounded-lg shadow-sm max-w-full h-auto"
                />
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-200" style={{ borderColor: 'rgba(0, 0, 0, 0.1)' }}></div>

          {/* Xilos Grid */}
<<<<<<< HEAD
          <div className="px-8 md:px-16">
            <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2">
              {/* Image on the left for large screens */}
              <div className="flex items-center justify-center order-2 md:order-1">
=======
          <div className="px-2 md:px-4 my-2">
            <div className="max-w-9xl mx-auto grid gap-12 grid-cols-1 md:grid-cols-2">
                  
              {/* Left Column */}
              <div className="rounded-lg p-4 flex items-center justify-center">
>>>>>>> 782024c9d1ba3dfd2e0dd0e09b2473e6f0b15c4b
                <img
                  src={xilosPic}
                  alt="Xilos Product Shot"
                  className="rounded-lg shadow-sm max-w-full h-auto"
                />
              </div>

<<<<<<< HEAD
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
=======
              {/* Right Column */}
              <div className="rounded-2xl bg-white px-4 text-left md:text-right">
                <p className="subheader" style={{ color: "#4B4B4B" }}>
                  AI Security & Orchestration
                </p>

                <h2 className="section-header text-3xl md:text-4xl lg:text-5xl" style={{ color: "#1F4E79" }}>
                  Xilos: Your AI Command Center
                </h2>

                <p className="text-sm leading-relaxed" style={{ color: "#4B4B4B" }}>
                  Benefit from AI without compromising security. Xilos acts as your intelligent guardian and conductor, 
                  working with all your AI systems to enhance security while breaking down information barriers.
                </p>

                <div className="mt-4 space-y-3">
                  {xilosFeatures.map((feature, index) => (
                    <div key={index} className="flex items-center gap-4">
                      <img src={feature.icon} alt={feature.title} className="h-6 w-6 flex-shrink-0" />
                      <div className="flex-1">
                        <span className="small-font-bold" style={{ color: "#567C8D" }}>{feature.title} </span>
                        <span className="small-font" style={{ color: "#4B4B4B" }}>{feature.body}</span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-3 justify-end mt-5">
                  <Link to="/solutions/xilos" className="button-primary">Explore Xilos</Link>
>>>>>>> 782024c9d1ba3dfd2e0dd0e09b2473e6f0b15c4b
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
