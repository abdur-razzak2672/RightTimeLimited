import React, { useState } from "react";
import "./partner.css";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
function SolutionPartner() {
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
            <li>Partners</li>
          </ul>
          <h2 className="page-header__title">Solution Partners</h2>
        </div>
      </div>

      <section className="section-padding--bottom text-center mt-5">
        <div className="container">
          <div className="section-title text-center">
            <h2 className="">Solution Partner</h2>
          </div>
          <div className="row gutter box text-center col-xs-6">
            <div className="col-lg-3 col-md-6 col-sm-6 rounded">
              <div id="card-container">
                <div className="text-center rounded" id="partner_card">
                  <div className="front face text-center mt-3">
                    <a href="javascript:void(0)" onClick={() => setShow(true)}>
                      <img loading="lazy" decoding="async" src="assets/images/partners/logo.webp" width="50%" />

                      <h5 className="pt-3">Our Partner</h5>
                    </a>
                    <Modal show={show} onHide={() => setShow(false)} centered>
                      <Modal.Body className="partner-header text-light  ">
                        <h4 className="text-light m-3">Service Partner</h4>
                        <p className="text-light m-3">
                          Cras mattis consectetur purus sit amet fermentum. Cras
                          justo odio, dapibus ac facilisis in, egestas eget
                          quam. Morbi leo risus, porta ac consectetur ac,
                          vestibulum at eros.
                        </p>
                        <Modal.Footer>
                          <Button
                            style={{ backgroundColor: "#fd7e14" }}
                            onClick={() => setShow(false)}
                          >
                            Close
                          </Button>
                        </Modal.Footer>
                      </Modal.Body>
                    </Modal>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 rounded">
              <div id="card-container">
                <div className="text-center rounded" id="partner_card">
                  <div className="front face text-center mt-3">
                    <a href="javascript:void(0)" onClick={() => setShow1(true)}>
                      <img loading="lazy" decoding="async" src="assets/images/partners/logo.webp" width="50%" />

                      <h5 className="pt-3">Our Partner</h5>
                    </a>
                    <Modal show={show1} onHide={() => setShow1(false)} centered>
                      <Modal.Body className="partner-header text-light  ">
                        <h4 className="text-light m-3">Service o Partner</h4>
                        <p className="text-light m-3">
                          Cras mattis consectetur purus sit amet fermentum. Cras
                          justo odio, dapibus ac facilisis in, egestas eget
                          quam. Morbi leo risus, porta ac consectetur ac,
                          vestibulum at eros.
                        </p>
                        <Modal.Footer>
                          <Button
                            style={{ backgroundColor: "#fd7e14" }}
                            onClick={() => setShow1(false)}
                          >
                            Close
                          </Button>
                        </Modal.Footer>
                      </Modal.Body>
                    </Modal>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 rounded">
              <div id="card-container">
                <div className="text-center rounded" id="partner_card">
                  <div className="front face text-center mt-3">
                    <a href="javascript:void(0)" onClick={() => setShow2(true)}>
                      <img loading="lazy" decoding="async" src="assets/images/partners/logo.webp" width="50%" />

                      <h5 className="pt-3">Our Partner</h5>
                    </a>
                    <Modal show={show2} onHide={() => setShow2(false)} centered>
                      <Modal.Body className="partner-header text-light  ">
                        <h4 className="text-light m-3">Service Partner</h4>
                        <p className="text-light m-3">
                          Cras mattis consectetur purus sit amet fermentum. Cras
                          justo odio, dapibus ac facilisis in, egestas eget
                          quam. Morbi leo risus, porta ac consectetur ac,
                          vestibulum at eros.
                        </p>
                        <Modal.Footer>
                          <Button
                            style={{ backgroundColor: "#fd7e14" }}
                            onClick={() => setShow2(false)}
                          >
                            Close
                          </Button>
                        </Modal.Footer>
                      </Modal.Body>
                    </Modal>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 rounded">
              <div id="card-container">
                <div className="text-center rounded" id="partner_card">
                  <div className="front face text-center mt-3">
                    <a href="javascript:void(0)" onClick={() => setShow3(true)}>
                      <img loading="lazy" decoding="async" src="assets/images/partners/logo.webp" width="50%" />

                      <h5 className="pt-3">Our Partner</h5>
                    </a>
                    <Modal show={show3} onHide={() => setShow3(false)} centered>
                      <Modal.Body className="partner-header text-light  ">
                        <h4 className="text-light m-3">Service Partner</h4>
                        <p className="text-light m-3">
                          jjCras mattis consectetur purus sit amet fermentum.
                          Cras justo odio, dapibus ac facilisis in, egestas eget
                          quam. Morbi leo risus, porta ac consectetur ac,
                          vestibulum at eros.
                        </p>
                        <Modal.Footer>
                          <Button
                            style={{ backgroundColor: "#fd7e14" }}
                            onClick={() => setShow3(false)}
                          >
                            Close
                          </Button>
                        </Modal.Footer>
                      </Modal.Body>
                    </Modal>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <br />
      <br />
      <br />
    </div>
  );
}

export default SolutionPartner;
