import React from "react";
import SeviceCommon from "../SeviceCommon";
function Soc2Audit() {
  return (
    <div>
      <div>
        <div className="page-header">
          <div
            className="page-header__bg"
            style={{
              backgroundImage: `url('/assets/images/background/auditor_pro.png')`,
            }}
          ></div>
          <div className="container">
            <ul className="thm-breadcrumb list-unstyled">
              <li>
                <a href="{{ url('/') }}">Home</a>
              </li>
              <li>
                <a href="{{ url('/services') }}">Services</a>
              </li>
              <li>Soc2 Audit</li>
            </ul>
            <h2 className="page-header__title">Soc2 Audit</h2>
          </div>
        </div>

        <section id="header" className="section-padding--bottom pt-5 ">
          <div className="container">
            <div className="section-title">
              <p className="">
                Web application security testing is performed to identify the
                vulnerabilities in a web application. With the increasing
                adaptation of web technologies across several areas, web
                applications have become a very viable attack surface if left
                with an untailored security outlook. Hence, assessments like web
                application security help the developers remediate
                vulnerabilities that are found during the process thereby and
                enhance the overall security of the web application.
              </p>
              <div className="row">
                <img
                  src="/assets/images/services/audit.png"
                  className="img-fluid"
                  alt="Responsive image"
                />
              </div>
              <p>
                Web application security testing as per the OWASP Top 10 list,
                helps to identify many unattended issues related to programming,
                file access and configuration etc which may turn out to be
                vulnerabilities, causing a potential impact on the organization.
                Regular assessments as such help safeguard the application from
                any unauthorized access which can cause an impact on the
                organization both in reputation and resources.
              </p>
            </div>
          </div>
        </section>

        <SeviceCommon />
      </div>
    </div>
  );
}

export default Soc2Audit;
