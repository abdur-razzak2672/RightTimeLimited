import React, { useState } from "react";

function SwitchingPage() {
  const [activePage, setActivePage] = useState("page1");
  const showPage = (pageId) => {
    setActivePage(pageId);
  };

  return (
    <div>
      <div>
        <div className="row">
          <div className="col-md-6">
            <button
              className={`  mt-5 px-5 py-2 w-100 ${activePage === "page1" ? "dipt-building-blocks-buttons" : ""}`}
              onClick={() => showPage("page1")}
            >
              <span className="building-blocks-btn-p">
                Customer Security Controls Framework (CSCF)
              </span>
            </button>
          </div>
          <div className="col-md-6">
            <button
              className={` mt-5 px-5 py-2 w-100 ${activePage === "page2" ? "dipt-building-blocks-buttons" : ""}`}
              onClick={() => showPage("page2")}
            >
              <span className="building-blocks-btn-p">
                Independent Assessment Framework (IAF)
              </span>
            </button>
          </div>
        </div>

        <div className="mt-5">
          <div
            id="page1 "
            className={`building-blocks-page ${activePage === "page1" ? "activepage" : ""}`}
          >
            <ul>
              <li>Formal set of security controls (mandatory and advisory)</li>
              <li>
                Once per year, every BIC needs to verify compliance with all
                mandatory (at least) controls and attest in an online tool
                (KYC-SA)
              </li>
              <li>
                Controls reviewed annually by Swift and with the community
              </li>
            </ul>
          </div>

          <div
            id="page2"
            className={`building-blocks-page ${activePage === "page2" ? "activepage" : ""}`}
          >
            <ul>
              <li>
                Further supporting the attestation with an independent
                assessment
              </li>
              <li>
                Objective is to verify the effective implementation of the
                controls
              </li>
              <li>Assessors may be internal and/or external</li>
              <li>Assessment details are also logged in KYC-SA</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SwitchingPage;
