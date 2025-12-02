import { Link } from 'react-router-dom';

function HeroSection() {
  return (
    <section className="regular-banner-sand flex items-center justify-center px-6 py-20">
      <div className="hero-banner flex max-w-4xl flex-col items-center gap-6 text-center">
        <h1 className="hero-title" style={{ color: "#1F4E79" }}>
          Secure the Future for Enterprise AI.
        </h1>

        <h3 className="subheader mb-12" style={{ color: "#4B4B4B"}}>
          Prompt-based protection that empowers safe, efficient AI adoption.
        </h3>

        <div className="flex flex-wrap justify-center" style={{ gap: '2rem' }}>
          <Link to="/contactus" className="button-primary">Request a Demo</Link>
          <Link to="/solutions/xilos" className="button-secondary">Explore Solutions</Link>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
