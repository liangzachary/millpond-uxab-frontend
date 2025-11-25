import { useEffect } from "react";

function ContactSection() {
  useEffect(() => {
    const scriptId = "hs-form-script";

    function createForm() {
      if (window.hbspt && window.hbspt.forms) {
        try {
          window.hbspt.forms.create({
            region: "na1",
            portalId: "48049833",
            formId: "541e8dc3-144b-4cbe-9a09-ccd0807f3095",
            target: "#hubspot-form-main",
          });
        } catch (err) {
          console.error("Error creating HubSpot form", err);
        }
      } else {
        console.warn("HubSpot script not ready.");
      }
    }

    // If script not yet added, inject it
    const existingScript = document.getElementById(scriptId);
    if (!existingScript) {
      const script = document.createElement("script");
      script.id = scriptId;
      script.src = "//js.hsforms.net/forms/embed/v2.js";
      script.type = "text/javascript";
      script.async = true;
      script.onload = () => {
        createForm();
      };
      document.body.appendChild(script);
    } else {
      // Script already loaded on this page, just create the form
      createForm();
    }
  }, []);

  return (
    <section
      className="py-20"
      style={{ backgroundColor: "var(--charcoal-dark)" }}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div
            id="contact"
            className="bg-white p-8 rounded-lg shadow-lg max-w-2xl mx-auto"
          >
            <h3 className="section-header mb-4" style={{ color: "#1F4E79" }}>
              Ready to Take Control of Your AI Future?
            </h3>
            <p
              className="subheader mb-6"
              style={{ color: "#4B4B4B", fontSize: "20px" }}
            >
              Contact us today to discover how Mill Pond Research can evolve
              your organization&apos;s approach to AI security and orchestration.
            </p>

            {/* HubSpot will replace this div with the form */}
            <div id="hubspot-form-main" data-hs-forms-root="true" />

            {/* Optional fallback if the script fails */}
            <button
              id="fallback-button"
              className="button-secondary mt-6"
              style={{ display: "none" }}
            >
              Email us directly
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
