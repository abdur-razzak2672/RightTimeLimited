import React from "react";
import CustomizedNav from "./CustomizedNav";

function NetworkDefenseOperations() {
  // const [tabIndex, setTabIndex] = useState(1);

  return (
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
              <a href="{{ url('/services/security-training') }}">Training</a>
            </li>
            <li>Management</li>
          </ul>
          <h2 className="page-header__title">
            Network Defense and Operations - (Corporate)
          </h2>
        </div>
      </div>
      <section className="  section-padding--top">
        <div className="container">
          <div className="row">
            <div className="col-lg-7">
              <h3 className="blog-card-one__title blog-details__title changeColor">
                Network Defense and Operations - (Corporate)
              </h3>
              <div className="dipt-container">
                {/* Box 1: Network Defense Essentials */}
                <div className="dipt-box dipt-box1">
                  <div className="dipt-inner-box inner-box1">
                    <p className="inner-box1-p">NDE</p>
                    <p className="number-box1">RTL-NDO-101</p>
                  </div>
                  <div className="dipt-inner-box inner-box2">
                    <p className="inner-box2-p">
                      Network Defense Essentials <br /> Baselines, hardening,
                      secure configs
                    </p>
                  </div>
                </div>

                {/* Box 2: Two sub-items (Firewalls/IDS & SIEM) */}
                <div className="ndo-page-second-part-container dipt-box dipt-box2">
                  <div className="ndo-page-inner-box">
                    <div className=" dipt-inner-box inner-box1">
                      <p className="inner-box1-p">NDFW</p>
                      <p className="number-box1">RTL-NDO-221</p>
                    </div>
                    <div
                      style={{ padding: "5px" }}
                      className="ndo-page-inner-box inner-box2"
                    >
                      <p className="inner-box2-p">
                        Firewalls & IDS/IPS <br /> Segmentation and detection
                      </p>
                    </div>
                  </div>
                  <div className="ndo-page-inner-box">
                    <div className="dipt-inner-box inner-box1">
                      <p className="inner-box1-p">NDSIEM</p>
                      <p className="number-box1">RTL-NDO-222</p>
                    </div>
                    <div
                      style={{ padding: "5px" }}
                      className="ndo-page-inner-box inner-box2"
                    >
                      <p className="inner-box2-p">
                        SIEM & Monitoring <br /> Use cases and alert triage
                      </p>
                    </div>
                  </div>
                </div>

                {/* Box 3: Incident Response & Ops */}
                <div className="dipt-box dipt-box3">
                  <div className="dipt-inner-box inner-box1">
                    <p className="inner-box1-p">IR</p>
                    <p className="number-box1">RTL-NDO-301</p>
                  </div>
                  <div className="dipt-inner-box inner-box2">
                    <p className="inner-box2-p">
                      Incident Response & Ops <br /> Playbooks and containment
                    </p>
                  </div>
                </div>
              </div>
              {/* Update labels below to match boxes */}
              <div className="ndo-second-div-container">
                <div className="ndo-scond-div dipt-box1">
                  <p className="ndo-second-div-p">Network Defense Essentials</p>
                </div>
                <div className="ndo-scond-div dipt-box2">
                  <p className="ndo-second-div-p">
                    Firewalls/IDS & SIEM Monitoring
                  </p>
                </div>
                <div className="ndo-scond-div dipt-box3">
                  <p className="ndo-second-div-p">
                    Incident Response & Operations
                  </p>
                </div>
              </div>

              <div className="ndo-third-div-container">
                <div className="ndo-third-div ndo-third-box-1">
                  <p className="ndo-third-div-p">CORE</p>
                </div>
                <div className="ndo-third-div ndo-third-box-2">
                  <p className="ndo-third-div-p">ADVANCED</p>
                </div>
                <div className="ndo-third-div ndo-third-box-3">
                  <p className="ndo-third-div-p">EXPERT</p>
                </div>
              </div>
            </div>
            <div className="col-lg-5 mt-5">
              <CustomizedNav />
            </div>
          </div>
        </div>
      </section>

      <div className="page-header mt-4">
        <div
          className="page-header__bg"
          style={{
            backgroundImage: `url('https://www.icorps.com/hs-fs/hubfs/Hero%20Image%2021-1.png?width=1500&height=600&name=Hero%20Image%2021-1.png')`,
          }}
        ></div>
        <div className="container">
          <ul className="thm-breadcrumb list-unstyled">
            <h2 className="text-light">Digital Badging</h2>
          </ul>
          <p className="text-light dipt-breadcrump-paragraph ">
            “Right Time Limited” is a highly esteemed security service provider,
            assisting businesses in fortifying their security posture. It offers
            expert consultation, meticulous testing, certification support, and
            reliable managed services to safeguard assets and mitigate risks.
          </p>
        </div>
      </div>

      <br />
      <br />
      <br />
      <br />
    </div>
  );
}

export default NetworkDefenseOperations;
