import React from "react";
import { Link } from "react-router-dom";

function IndustriesNav({ title }) {
  return (
    <div>
      <h2 className="header mt-1 mx-2">Industries</h2>

      <div>
        <div className=" mt-4    servicesItem1">
          <Link
            style={{ textDecoration: "none" }}
            className={`${title === "bank" ? "industries" : ""}`}
            to="/bank-nbfi"
          >
            Bank & NBFI{" "}
            <span
              className={`${title === "bank" ? "d-none" : "text-dark   fs-5 mx-3"}`}
            >
              →
            </span>
          </Link>

          <Link
            style={{ textDecoration: "none" }}
            className={`${title === "telecommunications" ? "industries" : ""}`}
            to="/telecomunication"
          >
            Telecommunications{" "}
            <span
              className={`${title === "telecommunications" ? "d-none" : "text-dark   fs-5 mx-3"}`}
            >
              →
            </span>
          </Link>

          <Link
            style={{ textDecoration: "none" }}
            className={`${title === "payment" ? "industries" : ""}`}
            to="/payment-card"
          >
            Payment Card Industry{" "}
            <span
              className={`${title === "payment" ? "d-none" : "text-dark   fs-5 mx-3"}`}
            >
              →
            </span>
          </Link>

          <Link
            style={{ textDecoration: "none" }}
            className={`${title === "education" ? "industries" : ""}`}
            to="/educational-institutions"
          >
            Educational Institutions{" "}
            <span
              className={`${title === "education" ? "d-none" : "text-dark   fs-5 mx-3"}`}
            >
              →
            </span>
          </Link>

          <Link
            style={{ textDecoration: "none" }}
            className={`${title === "commerce" ? "industries" : ""}`}
            to="/ecommerce-retail"
          >
            E-Commerce & Retail Merchants{" "}
            <span
              className={`${title === "commerce" ? "d-none" : "text-dark   fs-5 mx-3"}`}
            >
              →
            </span>
          </Link>

          <Link
            style={{ textDecoration: "none" }}
            className={`${title === "insurance" ? "industries" : ""}`}
            to="/insurance"
          >
            Insurance{" "}
            <span
              className={`${title === "insurance" ? "d-none" : "text-dark   fs-5 mx-3"}`}
            >
              →
            </span>
          </Link>

          <Link
            style={{ textDecoration: "none" }}
            className={`${title === "bpo" ? "industries" : ""}`}
            to="/bpo-service"
          >
            IT and BPO Services{" "}
            <span
              className={`${title === "bpo" ? "d-none" : "text-dark   fs-5 mx-3"}`}
            >
              →
            </span>
          </Link>

          <Link
            style={{ textDecoration: "none" }}
            className={`${title === "health" ? "industries" : ""}`}
            to="/health-care"
          >
            Health Care{" "}
            <span
              className={`${title === "health" ? "d-none" : "text-dark   fs-5 mx-3"}`}
            >
              →
            </span>
          </Link>

          <Link
            style={{ textDecoration: "none" }}
            className={`${title === "power" ? "industries" : ""}`}
            to="/power-sector"
          >
            Power Sector{" "}
            <span
              className={`${title === "power" ? "d-none" : "text-dark   fs-5 mx-3"}`}
            >
              →
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default IndustriesNav;
