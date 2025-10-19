import React, { useState } from "react";

const SwiftArchitectureChangingButtons = () => {
  const [activePage, setActivePage] = useState("page1");
  const showPage = (pageId) => {
    setActivePage(pageId);
  };

  return (
    <div>
      <div>
        <div className="d-flex justify-content-center">
          <div>
            <button
              className={` px-5 py-2 m-3 ${activePage === "page1" ? "dipt-architecture-buttons" : ""}`}
              onClick={() => showPage("page1")}
            >
              Type A1
            </button>
            <button
              className={` px-5 py-2 m-3 ${activePage === "page2" ? "dipt-architecture-buttons" : ""}`}
              onClick={() => showPage("page2")}
            >
              Type A2
            </button>
            <button
              className={` px-5 py-2 m-3 ${activePage === "page3" ? "dipt-architecture-buttons" : ""}`}
              onClick={() => showPage("page3")}
            >
              Type A3
            </button>
            <button
              className={` px-5 py-2 m-3 ${activePage === "page4" ? "dipt-architecture-buttons" : ""}`}
              onClick={() => showPage("page4")}
            >
              Type A4
            </button>
            <button
              className={` px-5 py-2 m-3 ${activePage === "page5" ? "dipt-architecture-buttons" : ""}`}
              onClick={() => showPage("page5")}
            >
              B
            </button>
          </div>
        </div>

        <div className="dipt-architecture-content-parent">
          <div
            id="page1"
            className={`swift-architecture-page ${activePage === "page1" ? "activepage" : ""}`}
          >
            <div className="swift-architecture-data-container">
              <div className="dipt-swift-architecture-img-container">
                <img loading="lazy" decoding="async"
                  src="/assets/images/services/SwiftCyber/type1.png"
                  alt=""
                />
              </div>
              <div>
                <div className="dipt-swift-architecture-data-mini-container">
                  <h3 className="dipt-swift-architecture-header-data">
                    Architecture Type A1 (Communication Interface)
                  </h3>
                  <p className="dipt-swift-architecture-p-data">
                    Architecture A1 is defined by user ownership of the
                    communication interface, often including the messaging
                    interface as well. Architecture A1 also applies to scenarios
                    where the user owns only the communication interface. This
                    category encompasses hosted solutions where the user owns a
                    communication interface license operated either on behalf of
                    others or by a third party for the user’s personal use,
                    inside or outside their environment, such as an Alliance
                    Gateway Instant connected to a back-office system without a
                    Messaging Interface.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div
            id="page2"
            className={`swift-architecture-page ${activePage === "page2" ? "activepage" : ""}`}
          >
            <div className="swift-architecture-data-container">
              <div className="dipt-swift-architecture-img-container">
                <img loading="lazy" decoding="async"
                  src="/assets/images/services/SwiftCyber/type2.png"
                  alt=""
                />
              </div>
              <div>
                <div className="dipt-swift-architecture-data-mini-container">
                  <h3 className="dipt-swift-architecture-header-data">
                    Architecture Type A2 (Messaging Interface Only)
                  </h3>
                  <p className="dipt-swift-architecture-p-data">
                    In Architecture A2, users own the messaging interface while
                    the communication interface is managed by a service
                    provider, such as a service bureau or Swift. This
                    architecture also covers instances where the messaging
                    interface license, owned by the user, is hosted or operated
                    by a third party or service provider, acting as an
                    outsourcing agent.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div
            id="page3"
            className={`swift-architecture-page ${activePage === "page3" ? "activepage" : ""}`}
          >
            <div className="swift-architecture-data-container">
              <div className="dipt-swift-architecture-img-container">
                <img loading="lazy" decoding="async"
                  src="/assets/images/services/SwiftCyber/type3.png"
                  alt=""
                />
              </div>
              <div>
                <div className="dipt-swift-architecture-data-mini-container">
                  <h3 className="dipt-swift-architecture-header-data">
                    Architecture Type A3 (SWIFT Connector)
                  </h3>
                  <p className="dipt-swift-architecture-p-data">
                    A Swift connector is employed within the user’s environment
                    to enable application-to-application communication with a
                    service provider’s interface (like a service bureau or a
                    Group Hub) or Swift services (e.g., Alliance Cloud or
                    Alliance Lite2), without owning any messaging or
                    communication interface.
                  </p>
                  <p className="dipt-swift-architecture-p-data">
                    This setup may also incorporate a GUI solution for
                    user-to-application interaction, requiring the
                    implementation of additional controls related to the GUI.
                    Furthermore, this architecture encompasses scenarios where
                    the user’s Swift connector is hosted or managed by a third
                    party or service provider, which should be regarded as an
                    outsourcing agent in these instances.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div
            id="page4"
            className={`swift-architecture-page ${activePage === "page4" ? "activepage" : ""}`}
          >
            <div className="swift-architecture-data-container">
              <div className="dipt-swift-architecture-img-container">
                <img loading="lazy" decoding="async"
                  src="/assets/images/services/SwiftCyber/type4.png"
                  alt=""
                />
              </div>
              <div>
                <div className="dipt-swift-architecture-data-mini-container">
                  <h3 className="dipt-swift-architecture-header-data">
                    Architecture Type A4 (Customer Connector)
                  </h3>
                  <p className="dipt-swift-architecture-p-data">
                    Architecture A4, known as the Customer Connector, applies to
                    users without a direct Swift presence, utilizing a server
                    within their environment (e.g., a file transfer solution or
                    middleware server) to establish external
                    application-to-application connections with Swift-related
                    applications or solutions provided by a service bureau,
                    Business Connect, Lite2 Business Application provider, or
                    Group Hub. This architecture also covers cases where the
                    customer connector is hosted or operated by a third party or
                    service provider, acting as an outsourcing agent.
                  </p>
                  <p className="dipt-swift-architecture-p-data">
                    The framework includes using file transfer or middleware
                    servers for connections not through WAN or VLAN, without a
                    Swift connector, and applies to setups where customer
                    connectors use Swift APIs for direct transactions with Swift
                    services. Additionally, it may involve GUI solutions
                    requiring GUI-specific controls. Like other architectures,
                    while back-office systems generating transactions usually
                    fall outside CSP/CSCF scope, implementing security controls
                    based on industry frameworks and CSCF principles is advised
                    to mitigate broader transaction chain risks.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div
            id="page5"
            className={`swift-architecture-page ${activePage === "page5" ? "activepage" : ""}`}
          >
            <div className="swift-architecture-data-container">
              <div className="dipt-swift-architecture-img-container">
                <img loading="lazy" decoding="async" src="/assets/images/services/SwiftCyber/b.png" alt="" />
              </div>
              <div>
                <div className="dipt-swift-architecture-data-mini-container">
                  <h3 className="dipt-swift-architecture-header-data">
                    Architecture Type B (GUI or Middleware Client)
                  </h3>
                  <p className="dipt-swift-architecture-p-data">
                    Architecture B outlines scenarios where users engage with
                    Swift services without any Swift-specific infrastructure in
                    their local environment. This architecture encompasses two
                    main setups: users accessing Swift messaging services via a
                    GUI application provided by a service provider, and
                    back-office applications of users communicating directly
                    with the service provider using various clients (e.g., MQ,
                    Kafka, Solace) or secure file transfer clients, without
                    directly connecting to Swift’s specific messaging services.
                    Devices used in these interactions are treated as
                    general-purpose and require adequate protection.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SwiftArchitectureChangingButtons;
