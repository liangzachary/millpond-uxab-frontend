function ApproachSecuritySection() {
  return (
    <section className="regular-banner-sand px-6 py-20">
      <div className="mx-auto flex max-w-6xl flex-col gap-8">
        <h2 className="section-header text-center" style={{ color: "#1F4E79" }}>
          Our Approach to AI Security.
        </h2>

        {/* left text + right comparison table */}
        <div className="flex flex-col gap-10 md:flex-row md:items-start">
          {/* screenshot or copy on left */}
          <div className="flex-1">
            {/* placeholder box for now */}
            <div className="h-64 w-full rounded-2xl bg-white shadow-sm" />
          </div>

          {/* table on right */}
          <div className="flex-1 rounded-2xl bg-white p-6 shadow-sm">
            {/* build your rows here with flex/grid and checkmarks */}
            <p className="text-sm" style={{ color: "#4B4B4B" }}>
              Comparison table goes here.
            </p>
          </div>
        </div>

        <p
          className="mt-6 text-center text-sm"
          style={{ color: "#4B4B4B" }}
        >
          Mill Pond Research uses a prompt-based layer that ensures AI use
          without slowing innovation, offering security, speed, and cost savings.
        </p>
      </div>
    </section>
  );
}

export default ApproachSecuritySection;
