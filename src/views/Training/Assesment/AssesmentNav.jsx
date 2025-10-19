import React, { useEffect, useState } from "react";
import Link from "react-router-dom/Link";
import { assessmentData } from "../trainingData";

function AssesmentNav() {
  const [pageUrl, setPageUrl] = useState("");

  useEffect(() => {
    const url = window.location.pathname;
    const lastPart = url.substring(url.lastIndexOf("/") + 1);
    setPageUrl(lastPart);
  }, []);

  return (
    <div className="mt-5">
      <div className="d-flex justify-content-between">
        <div style={{ width: "140px" }} className=" servicesItem1">
          <Link
            to="/assesment"
            style={{ backgroundColor: "#540859", color: "white" }}
          >
            Assesment
          </Link>
        </div>
        <div style={{ width: "140px" }} className=" servicesItem1  ">
          <Link to="/management">Management</Link>
        </div>
        <div style={{ width: "140px" }} className=" servicesItem1  ">
          <Link to="/Customized">Customized</Link>
        </div>
      </div>

      {assessmentData.map((item, index) => (
        <div
          className={`servicesItem1 ${item.link === `/${pageUrl}` ? "servicesItemActive" : ""}`}
        >
          <Link className=" " key={index} to={`${item.link}`}>
            {item.title}
          </Link>
        </div>
      ))}
    </div>
  );
}

export default AssesmentNav;
