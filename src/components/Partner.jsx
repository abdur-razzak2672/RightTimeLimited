import React from "react";

function Partner() {
  return (
    <div>
      <section className="section-padding--top section-padding--bottom about-one">
        <div className="section-title text-center">
          <h2 className="section-title__title">OUR PARTNERS</h2>
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
				"navText": ["<span className=\"fa fa-angle-left\"></span>","<span className=\"fa fa-angle-right\"></span>"],
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
              <div className="item">
                <img src="assets/images/partners/ec.png" alt="" />
              </div>
              <div className="item">
                <img src="assets/images/partners/pv.png" alt="" />
              </div>
              <div className="item">
                <img src="assets/images/partners/acnabin.png" alt="" />
              </div>
              <div className="item">
                <img src="assets/images/partners/pecb-logo.png" alt="" />
              </div>
              <div className="item">
                <img src="assets/images/partners/sck.png" alt="" />
              </div>
              <div className="item">
                <img src="assets/images/partners/ars.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Partner;
