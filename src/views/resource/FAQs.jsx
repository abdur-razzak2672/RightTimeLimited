import React from "react";

function FAQs() {
  const faqs = [
    {
      q: "What security standards does Right Time Limited support?",
      a: "ISO/IEC 27001, NIST CSF, SOC 2, PCI DSS, GDPR, HIPAA, and more.",
    },
    {
      q: "Do you provide policy templates?",
      a: "Yes, we deliver policy frameworks tailored to your environment and regulatory scope.",
    },
    {
      q: "Can you help prepare for audits?",
      a: "We support readiness assessments, gap analysis, evidence collection, and remediation planning.",
    },
  ];
  return (
    <div>
      <div className="page-header">
        <div
          className="page-header__bg"
          style={{ backgroundImage: `url('../images/resources/aboutbg1.png')` }}
        />
        <div className="container">
          <ul className="thm-breadcrumb list-unstyled">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/resources">Resources</a>
            </li>
            <li>FAQs</li>
          </ul>
          <h2 className="page-header__title">FAQs</h2>
        </div>
      </div>

      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 mx-auto">
              <div className="accordion" id="faqAccordion">
                {faqs.map((f, i) => (
                  <div className="accordion-item" key={i}>
                    <h2 className="accordion-header" id={`h${i}`}>
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={`#c${i}`}
                        aria-expanded="false"
                        aria-controls={`c${i}`}
                      >
                        {f.q}
                      </button>
                    </h2>
                    <div
                      id={`c${i}`}
                      className="accordion-collapse collapse"
                      aria-labelledby={`h${i}`}
                      data-bs-parent="#faqAccordion"
                    >
                      <div className="accordion-body">{f.a}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}

export default FAQs;
