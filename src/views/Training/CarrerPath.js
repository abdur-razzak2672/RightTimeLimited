import React, { useEffect } from "react";

function CarrerPath({ career }) {
  useEffect(() => {
    if (career) {
      console.log("Fetching career pathway data...");
    }

    // Simulate data fetch on component mount
    // Fetch data logic here
  }, [career]); // Empty dependency array to run only on mount

  return (
    <div>
      <div className="clear"></div>
      <div id="con" className="container wrapper">
        <br />
        {/* <div className="pure-g">
        <div className="pure-u-1-1 buttons" style={{ margin: "0, auto", textAlign: "center" }}>
          <a href="/pathway" className="pure-button">Roles</a>
          <a href="/training" className="pure-button pure-button-primary ml-1">Skills and Certifications</a>
        </div>
      </div>
      <br /> */}

        <div className="pure-g">
          <div
            className="pure-u-1-1"
            style={{ margin: "0, auto", textAlign: "center" }}
          ></div>
        </div>

        <div s id="map-key-1" className="pure-menu pure-menu-horizontal">
          <ul className="pure-menu-list">
            <li className="pure-menu-item">
              <div
                className="circle"
                style={{ backgroundColor: "#408AE1" }}
              ></div>{" "}
              Entry level
            </li>
            <li className="pure-menu-item">
              <div
                className="circle"
                style={{ backgroundColor: "#B871AD" }}
              ></div>{" "}
              Mid-level
            </li>
            <li className="pure-menu-item">
              <div
                className="circle"
                style={{ backgroundColor: "#7FE2C6" }}
              ></div>{" "}
              Advanced
            </li>
          </ul>
        </div>
        <br />
        <div
          style={{
            border: "2px solid #012e78",
            borderRadius: "10px",
            padding: "10px",
            width: "102%",
          }}
        >
          <div style={{ fontSize: "30px" }} id="sankey"></div>
          <div style={{ fontSize: "30px" }} className="clear"></div>
        </div>
        <br />
        <br />
      </div>

      <div style={{ fontSize: "30px" }} className="scrollUpWrapper">
        <div style={{ fontSize: "30px" }} className="scrollUp"></div>
      </div>

      <div style={{ fontSize: "30px" }} className="clear"></div>
    </div>
  );
}

export default CarrerPath;
