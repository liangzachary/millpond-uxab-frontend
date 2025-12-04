<<<<<<< HEAD
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
=======
import { Link } from 'react-router-dom';

function HeroSection() {
  return (
    <section className="regular-banner-sand flex items-center justify-center px-4 pt-24 pb-12 md:px-6 md:py-20">
      <div className="hero-banner flex max-w-4xl flex-col items-center gap-4 md:gap-6 text-center">
        <h1 className="hero-title" style={{ color: "#1F4E79" }}>
          Secure the Future for Enterprise AI.
        </h1>

        <h3 className="subheader mb-6 md:mb-12 text-lg md:text-2xl" style={{ color: "#4B4B4B"}}>
          Prompt-based protection that empowers safe, efficient AI adoption.
        </h3>

        <div className="flex flex-wrap justify-center gap-4 md:gap-8">
          <button 
            onClick={() => {
              const contactSection = document.getElementById('contact-section');
              if (contactSection) {
                const elementPosition = contactSection.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - 80;
                window.scrollTo({
                  top: offsetPosition,
                  behavior: 'smooth'
                });
              }
            }}
            className="button-primary"
          >
            Request a Demo
          </button>
          <button 
            onClick={() => {
              const solutionsSection = document.getElementById('solutions-section');
              if (solutionsSection) {
                const elementPosition = solutionsSection.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - 80;
                window.scrollTo({
                  top: offsetPosition,
                  behavior: 'smooth'
                });
              }
            }}
            className="button-secondary"
          >
            Explore Solutions
          </button>
>>>>>>> 782024c9d1ba3dfd2e0dd0e09b2473e6f0b15c4b
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
