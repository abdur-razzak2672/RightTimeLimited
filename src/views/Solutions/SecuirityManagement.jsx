import React from "react";
import CommonSecuirityManageMent from "./CommonServiceManagement";

function SecuirityManagement() {
  return (
    <div>
      <div className="solutions_banner">
        {/* <div
     className="page-header__bg"
     style={{ backgroundImage: `url('../images/resources/aboutbg1.png')` }}
   ></div> */}
        <div className="container">
          <ul className="thm-breadcrumb list-unstyled">
            <li>
              <a href="/">Home</a>
            </li>
            <li>Cyber Security Management & Visibility solutions</li>
          </ul>
          <h2 className="page-header__title">
            Cyber Security Management & Visibility solutions
          </h2>
        </div>
      </div>
      <section>
        <div className="container mt-5">
          <div className="row">
            <div className="col-lg-8">
              <h2 className="text-center header">
                Cyber Security Management & Visibility solutions
              </h2>
              <img loading="lazy" decoding="async"
                className="rounded mb-2"
                width="100%"
                height="350px"
                src="/assets/images/solutions/Cyber_Security_Management_Visibility_solutions.jpg"
                alt="img"
              />
              <p className="text-dark textJustify">
                Right Time Limited offers Cybersecurity Management and
                Visibility Solutions designed to provide comprehensive oversight
                and control over clients' cybersecurity infrastructure. These
                solutions include advanced security technologies and tools that
                enable organizations to monitor and manage their security
                posture effectively. It provides real-time visibility into
                security events, threat intelligence, and incident management
                capabilities. With these solutions, clients can enhance their
                cybersecurity resilience, detect and respond to threats
                promptly, and ensure compliance with industry regulations.
              </p>
            </div>
            <div className="col-lg-4">
              <CommonSecuirityManageMent />
            </div>
          </div>
        </div>
      </section>
      <br />
      <br />
      <br />
      <br />
      <br />{" "}
    </div>
  );
}

export default SecuirityManagement;
