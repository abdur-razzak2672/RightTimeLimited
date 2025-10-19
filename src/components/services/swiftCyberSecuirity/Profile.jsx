/* eslint-disable no-undef */
import React from "react";

function Profile() {
  return (
    <div className="section-padding--top service-four gray-bg section-padding-lg--bottom section-has-bottom-margin background-repeat-no background-position-top-right">
      <div className="container">
        <div>
          <div>
            <div className="row">
              <div className="col-md-6 d-flex">
                <img
                  className="rounded-5"
                  style={{ width: "30%", height: "150px" }}
                  src="/assets/images/team/Mohammad Tohidur Rahman Bhuiyan.jpg"
                  alt=""
                />
                <div className="service-card-three__content mt-3 mx-3">
                  <h4 className="pt-3"> Mohammad Tohidur Rahman Bhuiyan</h4>
                  <p>Lead Security Practitioner and MD & CEO</p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="p-4 bg-light border-shadow">
                  <div className="">
                    <h2>Contact</h2>
                    <p>Email : tohidur@righttime.biz</p>
                    <p>Phone : +88 01714003040</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
