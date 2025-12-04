import { useEffect } from "react";

/**
 * ContactSection embeds a HubSpot form for lead capture. It also shows
 * fallback content if the form fails to load. The section uses the
 * design system for typography, layout and buttons. A blurred shape
 * floats behind the form container for subtle decoration.
 */
function ContactSection() {
  useEffect(() => {
    const scriptId = "hs-form-script";
    function showFallback() {
      const btn = document.getElementById("fallback-button");
      if (btn) btn.style.display = "block";
    }
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
          showFallback();
        }
      } else {
        console.warn("HubSpot script not ready.");
        showFallback();
      }
    }
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
      createForm();
    }
  }, []);

  return (
    <section className="regular-banner-white relative overflow-hidden px-6 py-20">
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-8">
        <div className="text-center">
          <h2 className="section-header">
            Ready to Take Control of Your AI Future?
          </h2>
          <p className="large-font mt-2">
            Contact us to discover how Mill Pond Research can evolve your
            organization's approach to AI security and orchestration.
          </p>
        </div>
        <div className="card w-full bg-sky text-left">
          <div id="hubspot-form-main" data-hs-forms-root="true" />
          <button
            id="fallback-button"
            className="button-primary mt-6"
            style={{ display: "none" }}
            type="button"
          >
            Email us directly
          </button>
        </div>
      </div>
      <div
        className="decorative-shape shape-blue shape-lg"
        style={{ right: "-10%", top: "40%" }}
      />
    </section>
  );
}

export default ContactSection;
