import React from 'react';

function Reports() {
  const reports = [
    { title: 'Annual Threat Landscape 2025', summary: 'Key attack vectors, sector insights, and defensive controls observed by RTL partners and public sources.' },
    { title: 'Cloud Security Posture Trends', summary: 'Misconfiguration patterns, identity risks, and remediation strategies for multi-cloud environments.' },
  ];
  return (
    <div>
      <div className="page-header">
        <div className="page-header__bg" style={{ backgroundImage: `url('../images/resources/aboutbg1.png')` }} />
        <div className="container">
          <ul className="thm-breadcrumb list-unstyled">
            <li><a href="/">Home</a></li>
            <li><a href="/resources">Resources</a></li>
            <li>Reports</li>
          </ul>
          <h2 className="page-header__title">Reports</h2>
        </div>
      </div>

      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 mx-auto">
              <h3 className="fw-bold">Insights and Research</h3>
              {reports.map(r => (
                <div key={r.title} className="mb-4">
                  <h5 className="mb-1">{r.title}</h5>
                  <p className="text-muted mb-0">{r.summary}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
            <br/><br/><br/><br/><br/>

    </div>
  );
}

export default Reports;
