import React from 'react';

function Policy() {
  const policies = [
    'Information Security Policy',
    'Access Control Policy',
    'Acceptable Use Policy',
    'Incident Response Policy',
    'Data Retention & Disposal Policy'
  ];
  return (
    <div>
      <div className="page-header">
        <div className="page-header__bg" style={{ backgroundImage: `url('../images/resources/aboutbg1.png')` }} />
        <div className="container">
          <ul className="thm-breadcrumb list-unstyled">
            <li><a href="/">Home</a></li>
            <li><a href="/resources">Resources</a></li>
            <li>Policy</li>
          </ul>
          <h2 className="page-header__title">Policies</h2>
        </div>
      </div>
      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 mx-auto">
              <h3 className="fw-bold">Professional, Compliant Policies</h3>
              <p className="text-dark">Right Time Limited offers meticulously crafted cybersecurity policies tailored to international and local standards including GDPR, HIPAA, and CCPA.</p>
              <ul>
                {policies.map(p => (<li key={p}>{p}</li>))}
              </ul>
            </div>
          </div>
        </div>
      </section>
            <br/><br/><br/><br/><br/>

    </div>
  );
}

export default Policy;
