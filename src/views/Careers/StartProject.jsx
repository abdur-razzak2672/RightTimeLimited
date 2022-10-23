import React from 'react'
import './career.css'
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
function StartProject() {
    return (
        <div>
            <div className="page-header">
                <div className="page-header__bg"
                    style={{ backgroundImage: `url('https://www.krg.ca/en-CA/assets/Careers-new.jpg')` }}></div>
                <div className="container">

                    <h1 className="page-header__title">Start a New Project
                    </h1>
                </div>
            </div>

            <section className="  mt-5" style={{ backgroundColor: "#261d3b" }}>
                <div className=" ">
                    <div className="mx-5 p-5  row">
                        <div className="col-lg-12">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="section-title">
                                        <p className="section-title__text ">Lets Talk</p>
                                        <div className="section-title">
                                            <div>
                                                <h1 className="  text-light">Every successful venture starts with a consultation!</h1>
                                                <h5 className=" mt-3">You will work with our art director on building high performing visual layouts using research. Creating low and high fidelity wireframes and communicating how things should work and feel for our engineering/development team.</h5>
                                            </div>
                                        </div><p style={{ borderTop: "1px solid #fd7e14 " }} className="text-light mt-3"></p>
                                        <div className="d-flex justify-content-between">
                                            <div className = "contactInfo">
                                                <h5 className="text-light mt-3">USA Office</h5>
                                                <ul className="footer-widget__contact ">
                                                    <li>
                                                        <i className="fa fa-phone"></i>
                                                        <a className="m-3" href="tel:+18187790442"> (+1) 818 779 0442,</a>
                                                    </li>
                                                    <li>
                                                        <i className="fa fa-phone"></i>
                                                        <a className="m-3" href="tel:+18188625708"> (+1) 818 862 5708,</a>
                                                    </li>
                                                    <li>
                                                        <i className="fa fa-envelope"></i>
                                                        <a className="m-3" href="mailto:coo.usa@righttime.biz">coo.usa@righttime.biz</a>
                                                    </li>
                                                    <li>
                                                        <i className="fa fa-map-marker-alt"></i>
                                                        <a className="m-3" href="mailto:coo.usa@righttime.biz">14108 Hamlin Street,<br/> Unit # 7, Van Nuys, CA-91401</a>
                                                    </li>
                                                </ul>
                                            </div>

                                            <div className = "contactInfo">
                                                <h5 className="text-light mt-3">Australia Office</h5>
                                                <ul className="footer-widget__contact">
                                                    <li>
                                                        <i className="fa fa-phone"></i>
                                                        <a className="m-3" href="tel:+61490517545"> (+61) 490517545,</a>
                                                    </li>
                                                    <li>
                                                        <i className="fa-solid fa-fax"></i>
                                                        <a className="m-3" href="tel:+61490517545"> (+61) 490517545,</a>
                                                    </li>
                                                    <li>
                                                        <i className="fa fa-envelope"></i>
                                                        <a className="m-3" href="mailto:coo.au@righttime.biz">coo.au@righttime.biz</a>
                                                    </li>
                                                    <li>
                                                        <i className="fa fa-map-marker-alt"></i>
                                                        <a className="m-3" href="mailto:coo.au@righttime.biz">11 Dahlia St. Quakers Hill,NSW 2763<br />
                                                            Sydney,Australia.</a>
                                                    </li>

                                                </ul>
                                            </div>








                                        </div>

                                        <div className="d-flex justify-content-between">
                                            <div className = "contactInfo">
                                                <h5 className="text-light mt-3">Germany Office</h5>
                                                <ul className="footer-widget__contact">
                                                    <li>
                                                        <i className="fa fa-phone"></i>
                                                        <a className="m-3" href="tel:+492311377672"> (+49) 2311377672,</a>
                                                    </li>
                                                    <li>
                                                        <i className="fa-solid fa-fax"></i>
                                                    <a className="m-3" href="">(+49) 01624069887</a> 
                                                    </li>
                                                    <li>
                                                        <i className="fa fa-envelope"></i>
                                                        <a className="m-3" href="mailto:coo.de@righttime.biz">coo.de@righttime.biz</a>
                                                    </li>
                                                    <li>
                                                        <i className="fa fa-map-marker-alt"></i>
                                                    <a className="m-3" href="mailto:coo.de@righttime.biz"> Hausmann str-1.44139, <br/>Dortmund. Germany</a>

                                                    </li>
                                                </ul>
                                            </div>

                                            <div className = "contactInfo">
                                                <h5 className="text-light mt-3">Bangladesh Office</h5>
                                                <ul className="footer-widget__contact">
                                                <li>
                                                        <i className="fa fa-phone"></i>
                                                        <a className="m-3" href="/"> +88 02550 12235,</a>
                                                        </li>
                                                        <li>
                                                        <i className="fa fa-phone"></i>
                                                        <a className="m-3" href="/"> +88 01318 013300,</a>
                                                        </li>
                                                        <li>
                                                        <i className="fa fa-envelope"></i>
                                                        <a className="m-3" href="/">info@righttime.biz</a>
                                                        </li>
                                                        <li>
                                                        <i className="fa fa-map-marker-alt"></i> 
                                                        <a className="m-3" href="/">Level: 06 & 14 (west),<br/>  BDBL Bhaban, 12,Karwan Bazar,
                                                        Tejgaon<br /> Post Code: 1215 
                                                        Dhaka, Bangladesh</a>

                                                        </li>

                                                </ul>
                                            </div>


                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 jobButton">
                                    <div className="right border-2 shadow  " style={{ width: "100%", backgroundColor: "#272036" }}>
                                   
                                    <Form>
                                        <div className="m-4">
                                        <Row className="">
                                           
                                            <Form.Group as={Col} controlId="formGridPassword">
                                            <Form.Label>Name</Form.Label>
                                            <Form.Control type="text" placeholder="Enter Name" />
                                            </Form.Group>
                                            <Form.Group as={Col} controlId="formGridEmail">
                                            <Form.Label>Email</Form.Label>
                                            <Form.Control type="email" placeholder="Enter email" />
                                            </Form.Group>
                                        </Row>

                                        <Form.Group className="mb-3 " controlId="formGridAddress1">
                                            <Form.Label>Phone Number</Form.Label>
                                            <span className="d-flex">
                                                <Form.Select style={{width:"80px"}} defaultValue="Choose...">
                                                    <option>BDT +880</option>
                                                    <option>BDT +880</option>
                                                    <option>BDT +880</option>
                                                    <option>BDT +880</option>
                                                    <option>AUS</option>
                                                </Form.Select>
                                                  <Form.Control type = "text" placeholder="017xxxxxxxx" />

                                            </span>
                                        </Form.Group>

                                        <Row className="">
                                           
                                            <Form.Group as={Col} controlId="formGridPassword">
                                            <Form.Label>Interested In</Form.Label>
                                            <Form.Select defaultValue="Choose...">
                                                <option>Choose...</option>
                                                <option>...</option>
                                            </Form.Select>
                                            </Form.Group>
                                            <Form.Group as={Col} controlId="formGridEmail">
                                            <Form.Label>Select Budget</Form.Label>
                                            <Form.Select defaultValue="Choose...">
                                                <option>Choose...</option>
                                                <option>$501 - $1000</option>
                                                <option>$1001 - $5000</option>
                                                <option>$5001 - $10000</option>
                                                <option>$10001 - $15000</option>
                                                <option>$15001 - $50000</option>
                                                <option>More than $50000</option>

                                            </Form.Select>
                                            </Form.Group>
                                        </Row>

                                        <Form.Group className="mb-3" controlId="formGridAddress2">
                                            <Form.Label>Message</Form.Label>
                                            <Form.Control as="textarea" rows={2} placeholder=" Enter your Message here..." />
                                        </Form.Group>
                                        <Form.Group controlId="formFileMultiple" className="mb-3">
                                            <Form.Label>Attach File</Form.Label>
                                            <Form.Control type="file" multiple />
                                            <Form.Label>Allow fromate are .jpg, .jpeg, .docx, .docs, .pdf and maxumum size 10MB</Form.Label>

                                        </Form.Group>


                                          <a href="#" className="mt-1 my-5 thm-btn cta-two__btn rounded-5 w-100 text-center">
                                        <span>Send Message </span> </a>

                                        </div>

                                       
                                        </Form>
                                   
                                 
                                    </div>


                                </div>

                            </div>



                        </div>
                    </div>


                </div>
                <br />
                <br />

            </section>
            <br /><br /><br />

        </div>
    )
}

export default StartProject
