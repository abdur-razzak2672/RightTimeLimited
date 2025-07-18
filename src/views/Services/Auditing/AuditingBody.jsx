import React, { useState,useEffect } from "react";
import SeviceCommon from '../SeviceCommon'
import BenitsConpany from '../ServicesBody/BenitsConpany'
function AuditingBody() {
  const [description, setDescription] = useState("");
  
  useEffect(() => {
    const updateDescription = () => {
      const storedDescription = localStorage.getItem("serviceDescription") || "";
      setDescription(storedDescription);
    };
  
    // Load initially
    updateDescription();
  
    // ✅ Listen for the custom event
    window.addEventListener("serviceDescriptionChanged", updateDescription);
  
    return () => {
      window.removeEventListener("serviceDescriptionChanged", updateDescription);
    };
  }, []);
  return (
    <div>
      <div>
        <div className="page-header">
          <div className="page-header__bg"
            style={{ backgroundImage: `url('/assets/images/background/auditor_pro.png')` }}></div>
          <div className="container">
            <ul className="thm-breadcrumb list-unstyled">
              <li><a href="{{ url('/') }}">Home</a></li>
              <li><a href="{{ url('/services') }}">Services</a></li>
              <li>Auditing</li>
            </ul>
            <h2 className="page-header__title">Auditing</h2>
          </div>
        </div>
         

        <section id="header" className="section-padding--bottom pt-5 ">
          <div className="container">
            <div className="section-title">
              <p className="">{description}</p>

             <section className="section-padding--bottom mt-3 ">
                      <BenitsConpany />
                    </section>

              <div className="row">
                <img src="/assets/images/services/audit.png" className="img-fluid" alt="Responsive image" />

              </div>
              <p>Web application security testing as per the OWASP Top 10 list, helps to identify many unattended issues related to programming, file access and configuration etc which may turn out to be vulnerabilities, causing a potential impact on the organization.

                Regular assessments as such help safeguard the application from any unauthorized access which can cause an impact on the organization both in reputation and resources.</p>

            </div>
          </div>
        </section>

        <SeviceCommon />
      </div>
    </div>
  )
}

export default AuditingBody