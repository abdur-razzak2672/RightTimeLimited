import React from "react";
import SeviceCommon from "../SeviceCommon";

function ProjectManagement() {
  return (
    <div>
      <div className="page-header">
        <div
          className="page-header__bg"
          style={{
            backgroundImage: `url('https://media.istockphoto.com/photos/project-manager-working-on-gantt-chart-to-update-the-schedule-tasks-picture-id1317443847?b=1&k=20&m=1317443847&s=170667a&w=0&h=iQefcFXY1mvmUuiX1956GHkfwHZ-jmCup2WyzRsNDs4=')`,
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
            <li>
              <a href="{{ url('/services/consultation') }}">Consultation</a>
            </li>
            <li>Project Management</li>
          </ul>
          <h2 className="page-header__title">Project Management</h2>
        </div>
      </div>

      <section id="header" className="section-padding--bottom pt-5 ">
        <div className="container">
          <div className="section-title">
            <div className="row">
              <p className="">
                Web application security testing as per the OWASP Top 10 list,
                helps to identify many unattended issues related to programming,
                file access and configuration etc which may turn out to be
                vulnerabilities, causing a potential impact on the organization.
                Regular assessments as such help safeguard the application from
                any unauthorized access which can cause an impact on the
                organization both in reputation and resources.
              </p>
              <img loading="lazy" decoding="async"
                className="w-100"
                src="/assets/images/services/project management.webp"
                alt=""
              />

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
        </div>
      </section>
      <SeviceCommon />
    </div>
  );
}

export default ProjectManagement;
