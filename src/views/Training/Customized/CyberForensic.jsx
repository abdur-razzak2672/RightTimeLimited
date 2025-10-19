import React from "react";
import CustomizedNav from "./CustomizedNav";

function CyberForensic() {
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
          <h2 className="page-header__title">Cyber Forensic - (Corporate)</h2>
        </div>
      </div>
      <section className="  section-padding--top">
        <div className="container">
          <div className="row">
            <div className="col-lg-7">
              <h3 className="blog-card-one__title blog-details__title changeColor">
                Cyber Forensic - (Corporate)
              </h3>
              <div className="dipt-container">
                <div className="dipt-box dipt-box1">
                  <div className="dipt-inner-box inner-box1">
                    <p className="inner-box1-p">CHFI</p>
                    <p className="number-box1">312-49</p>
                  </div>
                  <div className="dipt-inner-box inner-box2">
                    <p className="inner-box2-p">
                      Computer Hacking <br /> Forensic Investigator
                    </p>
                  </div>
                </div>

                <div className="ndo-page-second-part-container dipt-box dipt-box2">
                  <div className="ndo-page-inner-box">
                    <div className=" dipt-inner-box inner-box1">
                      <p className="inner-box1-p">GCFE</p>
                      <p className="number-box1">FOR-408</p>
                    </div>
                    <div
                      style={{ padding: "5px" }}
                      className="ndo-page-inner-box inner-box2"
                    >
                      <p className="inner-box2-p">
                        GIAC Certified <br /> Forensic Examiner
                      </p>
                    </div>
                  </div>
                  <div className="ndo-page-inner-box">
                    <div className="dipt-inner-box inner-box1">
                      <p className="inner-box1-p">GCFA</p>
                      <p className="number-box1">FOR-508</p>
                    </div>
                    <div
                      style={{ padding: "5px" }}
                      className="ndo-page-inner-box inner-box2"
                    >
                      <p className="inner-box2-p">
                        GIAC Certified <br /> Forensic Analyst
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="ndo-second-div-container">
                <div className="ndo-scond-div dipt-box1">
                  <p className="ndo-second-div-p">
                    Digital Evidence Analysis & Investigation
                  </p>
                </div>
                <div className="ndo-scond-div dipt-box2">
                  <p className="ndo-second-div-p">
                    Cyber Crime Scene Investigation
                  </p>
                </div>
              </div>

              <div className="ndo-third-div-container">
                <div className="third-div-cyberforensic ndo-third-box-1">
                  <p className="ndo-third-div-p">FOUNDATIONAL</p>
                </div>
                <div className="third-div-cyberforensic ndo-third-box-2">
                  <p className="ndo-third-div-p">EXPERT LEVEL</p>
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

export default CyberForensic;
