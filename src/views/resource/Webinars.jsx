import React, { useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { webinars as data } from "./webinarsData";

function Webinars() {
  const [tab, setTab] = useState("Upcoming");
  const [q, setQ] = useState("");

  // Tabbed embed viewer state
  const [activeEmbedTab, setActiveEmbedTab] = useState("Proofpoint");
  const [embedUrl, setEmbedUrl] = useState(
    "https://www.knowbe4.com/webinar-library",
  );
  const embedRef = useRef(null);

  const webinars = useMemo(() => data, []);

  const filtered = webinars.filter((w) => {
    const matchTab =
      tab === "All" ||
      (tab === "Upcoming" ? w.type === "Live" : w.type === "On-Demand");
    const text =
      `${w.title} ${w.category} ${w.speakers.join(" ")}`.toLowerCase();
    return matchTab && text.includes(q.toLowerCase());
  });

  const openRegistration = (w) => {
    setActiveEmbedTab("Register");
    setEmbedUrl(
      w.registrationUrl ||
        "https://www.proofpoint.com/us/resources/webinars/webinar-series-how-optimize-your-security-awareness-campaign-cybersecurity",
    );
    // Scroll to viewer
    setTimeout(() => {
      if (embedRef.current)
        embedRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 50);
  };

  const tabs = [
    { name: "KnowBe4", url: "https://www.knowbe4.com/webinar-library" },
    { name: "Proofpoint", url: "https://www.proofpoint.com/us/webinars" },
    { name: "AustCyber", url: "https://www.austcyber.com/resources/webinars" },
    {
      name: "Fujitsu",
      url: "https://www.fujitsu.com/global/themes/security/webinars/",
    },
    { name: "Register", url: embedUrl },
  ];

  const handleTabClick = (t) => {
    setActiveEmbedTab(t.name);
    if (t.name !== "Register") setEmbedUrl(t.url);
    setTimeout(() => {
      if (embedRef.current)
        embedRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 50);
  };

  return (
    <div>
      {/* Hero */}
      <div className="page-header">
        <div
          className="page-header__bg"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1600&auto=format&fit=crop')`,
          }}
        ></div>
        <div className="container">
          <ul className="thm-breadcrumb list-unstyled">
            <li>
              <a href="/">Home</a>
            </li>
            <li>Webinars</li>
          </ul>
          <h2 className="page-header__title">Webinars</h2>
        </div>
      </div>

      <section className="py-5">
        <div className="container">
          {/* Intro + external hubs */}
          <div className="d-flex flex-column flex-lg-row align-items-lg-center justify-content-between gap-3 mb-4">
            <div>
              <h2 className="fw-bold mb-2">Right Time Limited Webinars</h2>
              <p className="text-dark mb-0">
                Interactive cybersecurity sessions by RTL experts. Learn from
                industry professionals, ask questions, and grow your program.
              </p>
            </div>
            <div className="d-flex flex-wrap gap-2">
              <a
                href="https://www.proofpoint.com/us/webinars"
                target="_blank"
                rel="noreferrer"
                className="btn btn-outline-primary"
              >
                View All (Proofpoint)
              </a>
              <a
                href="https://www.knowbe4.com/webinar-library"
                target="_blank"
                rel="noreferrer"
                className="btn btn-outline-secondary"
              >
                More Webinars (KnowBe4)
              </a>
              <a
                href="https://www.austcyber.com/resources/webinars"
                target="_blank"
                rel="noreferrer"
                className="btn btn-outline-dark"
              >
                Inspiration: AustCyber
              </a>
            </div>
          </div>

          {/* Topics bar */}
          <div className="border rounded p-3 mb-4 bg-light">
            <div className="d-flex flex-wrap gap-2">
              {[
                "Email Security",
                "Zero Trust",
                "Cloud",
                "Identity",
                "Incident Response",
                "GRC",
              ].map((t) => (
                <span key={t} className="badge bg-light text-dark border">
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Controls */}
          <div className="row g-3 align-items-center mb-4">
            <div className="col-auto">
              <div className="btn-group" role="group">
                {["Upcoming", "On-Demand", "All"].map((t) => (
                  <button
                    key={t}
                    className={`btn btn-sm ${tab === t ? "btn-primary" : "btn-outline-primary"}`}
                    onClick={() => setTab(t)}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>
            <div className="col">
              <div className="input-group">
                <span className="input-group-text">
                  <i className="fas fa-search" />
                </span>
                <input
                  className="form-control"
                  placeholder="Search title, speaker, topic"
                  value={q}
                  onChange={(e) => setQ(e.target.value)}
                />
                {q && (
                  <button
                    className="btn btn-outline-secondary"
                    onClick={() => setQ("")}
                  >
                    <i className="fas fa-times" />
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Cards grid */}
          <div className="row g-4">
            {filtered.map((w) => (
              <div key={w.slug} className="col-md-6 col-lg-4">
                <div className="card h-100 shadow-sm border-0">
                  <div className="card-body d-flex flex-column">
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <span
                        className={`badge ${w.type === "Live" ? "bg-success" : "bg-secondary"}`}
                      >
                        {w.type}
                      </span>
                      <small className="text-muted">{w.duration}</small>
                    </div>
                    <h5 className="mb-2">{w.title}</h5>
                    <ul className="list-unstyled small text-muted mb-3">
                      {w.date && (
                        <li>
                          <i className="far fa-calendar me-2" />
                          {w.date}
                          {w.time ? ` • ${w.time}` : ""}
                        </li>
                      )}
                      <li>
                        <i className="far fa-user me-2" />
                        Speakers: {w.speakers.join(", ")}
                      </li>
                      <li>
                        <i className="far fa-folder-open me-2" />
                        Category: {w.category}
                      </li>
                    </ul>
                    <div className="mt-auto d-grid gap-2">
                      {/* Open registration in in-page tabbed viewer */}
                      <button
                        className="btn btn-primary"
                        onClick={() => openRegistration(w)}
                      >
                        Attend
                      </button>
                      <a
                        className="btn btn-outline-dark"
                        href={
                          w.externalUrl ||
                          "https://www.proofpoint.com/us/webinars"
                        }
                        target="_blank"
                        rel="noreferrer"
                      >
                        View External
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            {filtered.length === 0 && (
              <div className="col-12 text-center text-muted">
                No webinars match your search.
              </div>
            )}
          </div>

          {/* Tabbed viewer (replace trusted references list with tabs) */}
          <div ref={embedRef} className="mt-5">
            <div className="d-flex flex-wrap align-items-center gap-2 mb-3">
              {tabs.map((t) => (
                <button
                  key={t.name}
                  className={`btn btn-sm ${activeEmbedTab === t.name ? "btn-primary" : "btn-outline-primary"}`}
                  onClick={() => handleTabClick(t)}
                >
                  {t.name}
                </button>
              ))}
            </div>
            <div className="ratio ratio-16x9 border rounded overflow-hidden bg-white">
              <iframe
                key={activeEmbedTab}
                title={`${activeEmbedTab} Webinars`}
                src={embedUrl}
                style={{ width: "100%", height: "100%", border: 0 }}
                loading="lazy"
                sandbox="allow-same-origin allow-scripts allow-forms allow-popups"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div className="small text-muted mt-2">
              Viewing: {activeEmbedTab}. External content is displayed in a
              secure embedded view.
            </div>
          </div>

          {/* Footer CTA */}
          <div className="text-center mt-5">
            <h5 className="mb-3">Need a private demo or team session?</h5>
            <Link className="btn btn-primary" to="/contact-us">
              Contact RTL Experts
            </Link>
          </div>
        </div>
      </section>

      <br />
      <br />
      <br />
    </div>
  );
}

export default Webinars;
