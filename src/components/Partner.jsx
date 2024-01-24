import React from "react";

function Partner() {
  return (
    <div>
      <section className="section-padding--top section-padding--bottom about-one">
        <div className="section-title text-center">
          <h2 className="header">OUR PARTNERS</h2>
        </div>
        <div className="client-carousel  client-carousel--two">
          <div className="container">
            <div
              className="owl-carousel thm-owl__carousel"
              data-owl-options='{"loop": true,
				"autoplay": true,
				"autoplayTimeout": 5000,
				"autoplayHoverPause": true,
				"nav": true,
 				"dots": false,
				"margin": 30,
                "items": 2,
				"smartSpeed": 700,
				"responsive": {
					"0": {
						"margin": 30,
						"items": 2
					},
					"375": {
						"margin": 30,
						"items": 2
					},
					"575": {
						"margin": 30,
						"items": 3
					},
					"767": {
						"margin": 50,
						"items": 4
					},
					"991": {
						"margin": 40,
						"items": 5
					},
					"1199": {
						"margin": 80,
						"items": 5
					}
				}}'
            >
              {/* <div className="item">
                <img src="assets/images/partners/ec.png" alt="" />
              </div> */}
              <div className="item">
                <img src="assets/images/partners/1.png" alt="" />
              </div>
              <div className="item">
                <img src="assets/images/partners/2.png" alt="" />
              </div>
              <div className="item">
                <img src="assets/images/partners/3.png" alt="" />
              </div>
              <div className="item">
                <img src="assets/images/partners/4.png" alt="" />
              </div>
              <div className="item">
                <img src="assets/images/partners/5.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Partner;
