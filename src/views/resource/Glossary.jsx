import React from 'react';

function Glossary() {
  const terms = [
    { t: 'CIA Triad', d: 'Confidentiality, Integrity, Availability – core principles of information security.' },
    { t: 'Zero Trust', d: 'Security model that assumes no implicit trust and continuously verifies identity and context.' },
    { t: 'MFA', d: 'Multi-Factor Authentication – multiple verification methods to validate identity.' },
    { t: 'SIEM', d: 'Security Information and Event Management – centralized security logging and analytics.' },
  ];
  return (
    <div>
      <div className="page-header">
        <div className="page-header__bg" style={{ backgroundImage: `url('../images/resources/aboutbg1.png')` }} />
        <div className="container">
          <ul className="thm-breadcrumb list-unstyled">
            <li><a href="/">Home</a></li>
            <li><a href="/resources">Resources</a></li>
            <li>Glossary</li>
          </ul>
          <h2 className="page-header__title">Glossary</h2>
        </div>
      </div>
      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 mx-auto">
              <h3 className="fw-bold">Cybersecurity Terms</h3>
              <ul className="list-group">
                {terms.map(x => (
                  <li key={x.t} className="list-group-item">
                    <strong>{x.t}:</strong> {x.d}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
            <br/><br/><br/><br/><br/>

    </div>
  );
}

export default Glossary;
