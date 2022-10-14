import React from 'react'
import CertificationNav from './CertificationNav'

function IsoInternational() {
  return (
    <div>
      <div>
        <div className="page-header">
          <div className="page-header__bg"
            style={{ backgroundImage: `url('https://thumbs.dreamstime.com/b/standard-quality-control-iso-certification-assurance-guarantee-internet-business-technology-concept-156888493.jpg')` }}></div>
          <div className="container">
            <ul className="thm-breadcrumb list-unstyled">
              <li><a href="{{ url('/') }}">Home</a></li>
              <li><a href="{{ url('/services') }}">Services</a></li>
              <li><a href="{{ url('/services/standard-implementation-certification') }}">Standard Implementation & Certification</a></li>
              <li>International Organization for Standardization-ISO</li>
            </ul>
            <h2 className="page-header__title">International Organization for Standardization-ISO</h2>
          </div>
        </div>

        <section className="section-padding--bottom section-padding--top">
          <div className="container">
            <div className="row">
              <div className="col-lg-8">


                <h3 style={{ color: "orange" }} className="blog-card-one__title blog-details__title">ISO 27001</h3>
                <div className="blog-details__content">
                  <p>The International Organization for Standardization (ISO), in collaboration with the International
                    Electrotechnical Commission(IEC), has developed ISO-27001, the leading international standard
                    focused on information security . Both are eminent  organizations that develop international standards.
                    <br />
                    The ISO/IEC 27000 series of standards, which includes ISO-27001, was developed to deal
                    with information security.
                  </p>
                </div><br />


                <h4>What is ISMS?</h4>
                <div className="blog-details__content">
                  <p>An ISMS is a set of policies and procedures established to manage sensitive data within
                    a company. The organization is vulnerable to cyberattacks and data breaches in the absence
                    of an ISMS. This system is therefore an essential component of an organization.
                  </p>
                </div><br />

                <h4>Goals of ISO-27001</h4>
                <div className="blog-details__content">
                  <p>Identify the company's stakeholders and their information security expectations.<br />
                    Identify the information threats that exist.<br />
                    Define safeguards (controls) and other risk-reduction strategies to satisfy the identified expectations and manage risks.<br />

                    Clearly define your goals for achieving information security.<br />

                    Execute all risk management measures and controls.<br />

                    Continually assess if the controls being used operate as anticipated.<br />

                    Make ongoing adjustments to optimize the performance of the entire ISMS
                  </p>
                </div><br />

                <h4>Why do you select Right Time?</h4>
                <div className="blog-details__content">
                  <p>We support you through the entire ISO 27001 compliant certification process. Maintained
                    expertise facilitates the implementation of 10 Clauses and 114 Controls. our team guides
                    you at each of the following steps:<br /><br />

                    Gap Assessment<br />
                    Scope Assessment<br />
                    Risk Assessment and Statement of Applicability – (SOA)<br />
                    Documentation<br />
                    Mapping of Controls and Clauses<br />
                    Awareness Sessions<br />
                    Preparatory Audits<br />
                    Preparation for Compliance Audits<br /><br />

                    Additionally, Right Time Limited allows you to integrate multiple standards into one
                    management system. These include ISO 9001, ISO 27001, ISO 20000, ISO 14000, ISO 22301,
                    ISO 13485, etc In fact, every organization has its own unique challenges and requirements.
                    That's why our team is trained to be aware of the process and adapt it to your needs.<br />
                  </p>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="sidebar">
                  <div className="sidebar__item sidebar__item--category">
                    {/* @include('frontend.bd.services.sat.common') */}
                    <CertificationNav />
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section><br /><br /><br />

      </div>

    </div>
  )
}

export default IsoInternational
