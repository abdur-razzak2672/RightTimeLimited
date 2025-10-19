import React, { useState } from "react";
import Service from "../../components/Service";
import Information from "../../components/Information";
import Benifits from "../../components/Benifits";
function PartnerBody() {
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
  return (
    <div>
      <div className="page-header">
        <div
          className="page-header__bg"
          style={{
            backgroundImage: `url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-Sx9Pg3qkhXGHG5NDgzX1n7j1dcuDqkScUQ&usqp=CAU')`,
          }}
        ></div>

        <div className="container">
          <ul className="thm-breadcrumb list-unstyled">
            <li>
              <a href="/">Home</a>
            </li>
            <li>Partner </li>
          </ul>
          <h2 className="page-header__title">Partner </h2>
        </div>
      </div>
      <section className="  text-center mt-5">
        <div className="container">
          <div className="section-title text-center">
            <h1 className="text-dark mt-5 text-center">Partner </h1>
            <p className="text-dark">
              Cyber security is a challenge every day. Therefore, it is crucial
              to continuously support and protect our customers with new,
              innovative solutions and reliable services. Our vision, mission
              and corporate values form the foundation of our actions and
              motivate us to fulfil our purpose every day.
            </p>
          </div>
        </div>
      </section>

      <div className="   ">
        <div
          style={{ backgorundColor: "red", height: "100%" }}
          className="wrapper1 headerind  "
        >
          <div className="container">
            <ul className="img-grid mt-5 text-center cardHieght py-4 ">
              <li style={{ width: "180px" }} className="m-2 rounded border ">
                <a href="/service-partners" className="overlay-container">
                  <img loading="lazy" decoding="async"
                    src="assets/images/Industries/ecommerce.png"
                    alt="Image capture goes here 01"
                    className="overlay-img rounded-2"
                    width="60%"
                  />
                  <p>Service Partner</p>
                </a>
              </li>
              <li style={{ width: "180px" }} className="m-2 rounded border ">
                <a href="/solution-partners" className="overlay-container">
                  <img loading="lazy" decoding="async"
                    src="assets/images/Industries/education.png"
                    alt="Image capture goes here 01"
                    className="overlay-img rounded-2"
                    width="60%"
                  />
                  <p>Solution Partner</p>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <section></section>

      <Service />

      <Benifits />
      <Information />

      <br />
      <br />
      <br />
    </div>
  );
}

export default PartnerBody;
