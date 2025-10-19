import React from "react";
import { Link } from "react-router-dom";

function Documents() {
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
            <li>Documents</li>
          </ul>
          <h2 className="page-header__title">Documents</h2>
        </div>
      </div>

      <section className="py-5">
        <div className="container">
          <div className="row mb-4">
            <div className="col-lg-10 mx-auto text-center">
              <h2 className="fw-bold mb-3">
                Cybersecurity Documents by Right Time Limited
              </h2>
              <p className="lead text-dark">
                Right Time Limited offers comprehensive document resources
                covering essential sub-areas including Guidance, Glossary,
                Standard, Policy, and Rules & Regulation in cybersecurity. These
                documents provide in-depth insights, practical guidelines, and
                regulatory compliance frameworks, enabling organizations to
                fortify their cyber defenses effectively.
              </p>
            </div>
          </div>

          <div className="row g-4">
            {[
              {
                title: "Guidance",
                desc: "Practical strategies, methodologies, and best practices to reduce cyber risk and strengthen resilience.",
                to: "/resources/guidance",
                icon: "fa-compass",
              },
              {
                title: "Glossary",
                desc: "A clear, comprehensive reference for security and compliance terminology used by practitioners.",
                to: "/resources/glossary",
                icon: "fa-book",
              },
              {
                title: "Standard",
                desc: "International frameworks and controls including ISO/IEC 27001, NIST CSF, and more.",
                to: "/resources/standard",
                icon: "fa-layer-group",
              },
              {
                title: "Policy",
                desc: "Professionally crafted, adaptable policies aligned to GDPR, HIPAA, CCPA, and industry best practice.",
                to: "/resources/policy",
                icon: "fa-file-shield",
              },
              {
                title: "Rules & Regulation",
                desc: "Guidance on regulatory requirements and how to operationalize compliance without slowing delivery.",
                to: "/resources/rules-regulation",
                icon: "fa-scale-balanced",
              },
              {
                title: "FAQs",
                desc: "Answers to common cybersecurity, audit, and compliance questions from clients and partners.",
                to: "/resources/faqs",
                icon: "fa-circle-question",
              },
              {
                title: "Reports",
                desc: "Curated industry reports and Right Time Limited perspectives on current threats and controls.",
                to: "/resources/reports",
                icon: "fa-file-lines",
              },
            ].map((card) => (
              <div key={card.title} className="col-md-6 col-lg-4">
                <div className="card h-100 shadow-sm border-0">
                  <div className="card-body">
                    <div className="d-flex align-items-center mb-2">
                      <div className="me-2 text-primary">
                        <i className={`fa-solid ${card.icon} fa-lg`} />
                      </div>
                      <h5 className="mb-0">{card.title}</h5>
                    </div>
                    <p className="text-muted">{card.desc}</p>
                    <Link to={card.to} className="btn btn-sm btn-primary">
                      Explore
                    </Link>
                  </div>
                </div>
              </div>
            ))}
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

export default Documents;
