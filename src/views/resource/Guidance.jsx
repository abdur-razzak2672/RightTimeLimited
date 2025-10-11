import React from 'react';

function Guidance() {
  return (
    <div>
      <div className="page-header">
        <div className="page-header__bg" style={{ backgroundImage: `url('../images/resources/aboutbg1.png')` }} />
        <div className="container">
          <ul className="thm-breadcrumb list-unstyled">
            <li><a href="/">Home</a></li>
            <li><a href="/resources">Resources</a></li>
            <li>Guidance</li>
          </ul>
          <h2 className="page-header__title">Guidance</h2>
        </div>
      </div>
      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 mx-auto">
              <h3 className="fw-bold">Actionable Cybersecurity Guidance</h3>
              <p className="text-dark">
                Right Time Limited provides comprehensive guidance on cybersecurity strategies and best practices. Our guidance resources offer practical insights, actionable recommendations, and proven methodologies to help organizations navigate and mitigate cyber threats effectively. Join us to access invaluable expertise and enhance your cybersecurity posture.
              </p>
              <ul>
                <li>Risk-based security roadmaps aligned to business outcomes</li>
                <li>Secure-by-design practices, threat modeling, and SDLC integration</li>
                <li>Identity, zero trust, and endpoint hardening guidance</li>
                <li>Incident readiness: playbooks, tabletop exercises, and RTO/RPO alignment</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
            <br/><br/><br/><br/><br/>

    </div>
  );
}

export default Guidance;
