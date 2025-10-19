import React from "react";
import "./login.css";
function LoginBody() {
  return (
    <>
      <div className="page-header">
        <div
          className="page-header__bg"
          style={{
            backgroundImage: `url('https://www.krg.ca/en-CA/assets/Careers-new.jpg')`,
          }}
        ></div>
        <div className="container">
          <h2 className="page-header__title">Customer & Employee Login </h2>
        </div>
      </div>
      <section className="container text-dark mt-5">
        <div className="row">
          <div className="col-md-7">
            <h2>Customer Support</h2>
            <h4>
              We strive to be the very best at providing world-class customer
              care
            </h4>
            <p mt-3>
              Please let us know what region you work in and the products you
              are using and we'll provide the best way to contact us
            </p>
            <a href="/login" className=" mt-5 thm-btn cta-two__btn rounded-3">
              <span>
                Customer Care Portal Login
                <i className="mx-3 fas fa-arrow-right"></i>
              </span>
            </a>
          </div>

          <div className="col-md-5 text-light">
            <div className="p-5 rounded" style={{ backgroundColor: "#004077" }}>
              <label>Select Region</label>
              <br />
              <select style={{ width: "100%", height: "50px" }}>
                <option>Bangladesh</option>
                <option>USA</option>
                <option>Australia</option>
                <option>Jarmany</option>
              </select>

              <label className="mt-3">Select a product</label>
              <br />
              <select style={{ width: "100%", height: "50px" }}>
                <option>Bangladesh</option>
                <option>USA</option>
                <option>Australia</option>
                <option>Jarmany</option>
              </select>
            </div>
          </div>
        </div>

        <div className="text-center mt-5">
          <h2>Customer support options</h2>
          <p className="mt-3">
            Our representatives can develop a customized offering specific to
            your organization, based on your product, region and specific need.
          </p>

          <div className="row mt-5">
            <div className="col-md-3">
              <img src="/assets/images/accounts/icon1.webp" alt="" />
              <h5 className="mt-3">Accelerate solution deployment</h5>
            </div>

            <div className="col-md-3">
              <img src="/assets/images/accounts/icon2.webp" alt="" />
              <h5 className="mt-3">Drive user adoption</h5>
            </div>

            <div className="col-md-3">
              <img src="/assets/images/accounts/icon3.webp" alt="" />
              <h5 className="mt-3">Maintain productive uptime</h5>
            </div>

            <div className="col-md-3">
              <img src="/assets/images/accounts/icon4.webp" alt="" />
              <h5 className="mt-3">
                Resolve incident level needs or 24/7 services
              </h5>
            </div>
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-md-6">
            <h2>Standard support</h2>
            <p>
              Clients enrolled in Bottomline’s standard maintenance and support
              program benefit from a comprehensive set of support offerings,
              including:
            </p>
            <div className="text-bold">
              <p>
                1. Product upgrades and releases offered at no additional charge
                (implementation support for upgrades may be purchased
                separately)
              </p>
              <p>
                2. Unlimited phone, chat and web access to Customer Support
                during standard call center hours
              </p>
              <p>
                3. Access to FTP folders with unique credentials for secure
                transfer of any application or system files
              </p>
              <p>4. Unlimited access to Bottomline’s customer care portal</p>
            </div>
          </div>

          <div className="col-md-6">
            <img src="/assets/images/accounts/Support.webp" alt="" />
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-md-6">
            <img src="/assets/images/accounts/Support2.webp" alt="" />
          </div>

          <div className="col-md-6">
            <h2 className="mt-5">24/7 emergency support</h2>
            <p>
              24/7 emergency support offers extra security should your company
              experience a production down emergency outside normal help desk
              operating hours.
            </p>
            <div className="text-bold mt-3">
              <p>
                For customers that routinely execute business-critical
                activities after-hours, this offering ensures that help is
                available should an emergency occur. Our on-call technicians
                will work with you to diagnose and address all system outages so
                that production can resume as quickly as possible. ​​​
              </p>
            </div>
          </div>
        </div>

        <div className="row mt-5 pt-5">
          <div className="col-md-6">
            <img src="/assets/images/accounts/log.webp" alt="" />
          </div>

          <div className="col-md-6">
            <h2 className=" ">Right Time</h2>
            <p>
              Right Time maintains an extensive customer care portal that
              provides information such as case status, patches available for
              download, FAQs, technical documentation and user manuals.
            </p>
            <div className="text-bold mt-3">
              <p>
                Visit the Customer Care Portal to log in to your account or sign
                up today. ​​​
              </p>

              <a href="/login" className=" mt-5 thm-btn cta-two__btn rounded-3">
                <span>
                  {" "}
                  Login or Sign Up<i className="mx-3 fas fa-arrow-right"></i>
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>
      <br /> <br /> <br /> <br /> <br />
    </>
  );
}

export default LoginBody;
