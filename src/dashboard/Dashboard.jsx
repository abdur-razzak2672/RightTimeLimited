import React, { useEffect } from "react";
import Home from "../components/Home";
import About from "../components/About";
import Service from "../components/Service";
import Association from "../components/Association";
import Partner from "../components/Partner";
import Information from "../components/Information";
import Client from "../components/Client";
import Benefit from "../components/Benefit";
import Solution from "../components/Solution";
function Dashboard() {
  useEffect(() => {
    const counters = document.querySelectorAll(".count-text");

    counters.forEach((counter) => {
      const target = +counter.getAttribute("data-stop");
      const speed = +counter.getAttribute("data-speed") || 2000;
      const increment = target / (speed / 16);
      let current = 0;

      function updateCounter() {
        current += increment;
        if (current < target) {
          counter.innerText = Math.floor(current);
          requestAnimationFrame(updateCounter);
        } else {
          counter.innerText = target;
        }
      }
      updateCounter();
    });
  }, []);
  return (
    <div>
      <Home />
      <About />
      <Service />
      <section
        className="funfact-one mt-5
        "
      >
        <div className="container">
          <div
            className="funfact-one__inner wow fadeInUp background-size-cover"
            data-wow-duration="1500ms"
            style={{
              backgroundImage: `url('assets/images/shapes/funfact-one-bg.png')`,
            }}
          >
            <ul className="funfact-one__list">
              <li className="funfact-one__list__item">
                <h3 className="funfact-one__list__title count-box">
                  <span
                    data-stop="255"
                    data-speed="2500"
                    className="count-text"
                  >
                    255
                  </span>
                </h3>
                <p className="funfact-one__list__text">Business Interogation</p>
              </li>
              <li className="funfact-one__list__item">
                <h3 className="funfact-one__list__title count-box">
                  <span
                    data-stop="325"
                    data-speed="2500"
                    className="count-text"
                  >
                    325
                  </span>
                </h3>
                <p className="funfact-one__list__text">Strategies Planned</p>
              </li>
              <li className="funfact-one__list__item">
                <h3 className="funfact-one__list__title count-box">
                  <span
                    data-stop="569"
                    data-speed="2500"
                    className="count-text"
                  >
                    569
                  </span>
                </h3>
                <p className="funfact-one__list__text">Projects Relased</p>
              </li>
              <li className="funfact-one__list__item">
                <h3 className="funfact-one__list__title count-box">
                  <span
                    data-stop="769"
                    data-speed="2500"
                    className="count-text"
                  >
                    769
                  </span>
                </h3>
                <p className="funfact-one__list__text">Satisfied Clients </p>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <Association />
      <Partner />
      <Information />
      <Client />
      <Benefit />
      <Solution />
    </div>
  );
}

export default Dashboard;
