import React from "react";
import SeviceCommon from "../SeviceCommon";
function DigitalForensics() {
  return (
    <div>
      <div>
        <div className="page-header">
          <div
            className="page-header__bg"
            style={{
              backgroundImage: `url('/assets/images/background/page-header-bg-1-1.jpg')`,
            }}
          ></div>
          <div className="container">
            <ul className="thm-breadcrumb list-unstyled">
              <li>
                <a href="{{ url('/') }}">Home</a>
              </li>
              <li>
                <a href="{{ url('/services') }}"> Digital Forensics </a>
              </li>
              <li>Digital Forensics</li>
            </ul>
            <h2 className="page-header__title"> Digital Forensics </h2>
          </div>
        </div>

        <section id="header" className="section-padding--bottom pt-5 ">
          <div className="container">
            <div className="section-title">
              <div className="row">
                <div className="col-md-7">
                  <p className="">
                    Web application security testing as per the OWASP Top 10
                    list, helps to identify many unattended issues related to
                    programming, file access and configuration etc which may
                    turn out to be vulnerabilities, causing a potential impact
                    on the organization. Regular assessments as such help
                    safeguard the application from any unauthorized access which
                    can cause an impact on the organization both in reputation
                    and resources.
                  </p>
                  <p>
                    Web application security testing as per the OWASP Top 10
                    list, helps to identify many unattended issues related to
                    programming, file access and configuration etc which may
                    turn out to be vulnerabilities, causing a potential impact
                    on the organization. Regular assessments as such help
                    safeguard the application from any unauthorized access which
                    can cause an impact on the organization both in reputation
                    and resources.
                  </p>
                </div>
                <div className="col-md-5">
                  <img loading="lazy" decoding="async"
                    className="w-100"
                    src="/assets/images/services/digital forensics.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <SeviceCommon />
      </div>
    </div>
  );
}

export default DigitalForensics;
