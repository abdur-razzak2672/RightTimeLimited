import React from "react";
import { Link } from "react-router-dom";

function IndustriesNav() {
  return (
    <div>
      <h2 className="header mt-1 mx-2">Industries</h2>

      <div>
        <div className=" mt-4  servicesItem">
          <Link
            style={{ textDecoration: "none" }}
            className="text-dark    focus"
            to="/bank-nbfi"
          >
            Bank & NBFI
          </Link>

          <Link
            style={{ textDecoration: "none" }}
            className="text-dark  focus   "
            to="/telecomunication"
          >
            Telecommunications
          </Link>

          <Link
            style={{ textDecoration: "none" }}
            className="text-dark     "
            to="/payment-card"
          >
            Payment Card Industry{" "}
          </Link>

          <Link
            style={{ textDecoration: "none" }}
            className="text-dark     "
            to="/educational-institutions"
          >
            Educational Institutions{" "}
          </Link>

          <Link
            style={{ textDecoration: "none" }}
            className="text-dark     "
            to="/ecommerce-retail"
          >
            E-Commerce & Retail Merchants{" "}
          </Link>

          <Link
            style={{ textDecoration: "none" }}
            className="text-dark     "
            to="/insurance"
          >
            Insurance
          </Link>

          <Link
            style={{ textDecoration: "none" }}
            className="text-dark     "
            to="/bpo-service"
          >
            IT and BPO Services{" "}
          </Link>

          <Link
            style={{ textDecoration: "none" }}
            className="text-dark     "
            to="/health-care"
          >
            Health Care
          </Link>

          <Link
            style={{ textDecoration: "none" }}
            className="text-dark     "
            to="/power-sector"
          >
            Power Sector{" "}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default IndustriesNav;
