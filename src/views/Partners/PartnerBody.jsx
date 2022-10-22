import React, { useState } from 'react'
import './partner.css'
import Button from 'react-bootstrap/Button';
 import Modal from 'react-bootstrap/Modal';
 
function PartnerBody() {
    const [show, setShow] = useState(false);
    const [show1, setShow1] = useState(false);
    const [show2, setShow2] = useState(false);
    const [show3, setShow3] = useState(false);
    
    const [show4, setShow4] = useState(false);
    const [show5, setShow5] = useState(false);
    const [show6, setShow6] = useState(false);
    const [show7, setShow7] = useState(false);

    const [show8, setShow8] = useState(false);
    const [show9, setShow9] = useState(false);
    const [show10, setShow10] = useState(false);
    const [show11, setShow11] = useState(false);


    return (
        <div>
            <div className="page-header">
                <div className="page-header__bg"
                    style={{ backgroundImage: `url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-Sx9Pg3qkhXGHG5NDgzX1n7j1dcuDqkScUQ&usqp=CAU')` }}></div>

                <div className="container">
                    <ul className="thm-breadcrumb list-unstyled">
                        <li><a href="/">Home</a></li>
                        <li>Partners</li>
                    </ul>
                    <h2 className="page-header__title">Partners</h2>
                </div>
            </div>

            <section className="section-padding--bottom text-center mt-5">
                <div className="container">
                    <div className="section-title text-center">
                        <h2 className="">Services Partner</h2>

                    </div>
                    <div className="row gutter box text-center col-xs-6">
                        <div className="col-lg-3 col-md-6 col-sm-6 rounded">
                            <div id="card-container">
                                <div className="text-center rounded" id="partner_card">
                                    <div className="front face text-center mt-3">
                                        <a className="mt-5" href="javascript:void(0)" onClick={() => setShow(true)}>
                                            <img src="assets/images/partners/logo.webp" width="50%" />

                                            <h5 className='pt-3'>Our Partner</h5>
                                        </a>
                                        <Modal
                                            show={show} onHide={() => setShow(false)}
                                            centered

                                        >

                                            <Modal.Body className="partner-header text-light  ">
                                                 
                                                <h4 className="text-light m-3">Service Partner</h4>
                                                <p className="text-light m-3">
                                                    Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                                                    dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
                                                    consectetur ac, vestibulum at eros.
                                                </p>
                                                <Modal.Footer>
                                                    <Button style={{ backgroundColor: "#fd7e14" }} onClick={() => setShow(false)}>
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
                                        <img src="assets/images/partners/logo.webp" width="50%" />

                                            <h5 className='pt-3'>Our Partner</h5>
                                        </a>
                                        <Modal
                                            show={show1} onHide={() => setShow1(false)}
                                            centered

                                        >

                                            <Modal.Body className="partner-header text-light  ">
                                                 
                                                <h4 className="text-light m-3">Service o Partner</h4>
                                                <p className="text-light m-3">
                                                    Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                                                    dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
                                                    consectetur ac, vestibulum at eros.
                                                </p>
                                                <Modal.Footer>
                                                    <Button style={{ backgroundColor: "#fd7e14" }} onClick={() => setShow1(false)}>
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
                                        <img src="assets/images/partners/logo.webp" width="50%" />

                                            <h5 className='pt-3'>Our Partner</h5>
                                        </a>
                                        <Modal
                                            show={show2} onHide={() => setShow2(false)}
                                            centered

                                        >

                                            <Modal.Body className="partner-header text-light  ">
                                                 
                                                <h4 className="text-light m-3">Service Partner</h4>
                                                <p className="text-light m-3">
                                                    Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                                                    dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
                                                    consectetur ac, vestibulum at eros.
                                                </p>
                                                <Modal.Footer>
                                                    <Button style={{ backgroundColor: "#fd7e14" }} onClick={() => setShow2(false)}>
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
                                        <img src="assets/images/partners/logo.webp" width="50%" />

                                            <h5 className='pt-3'>Our Partner</h5>
                                        </a>
                                        <Modal
                                            show={show3} onHide={() => setShow3(false)}
                                            centered

                                        >

                                            <Modal.Body className="partner-header text-light  ">
                                                 
                                                <h4 className="text-light m-3">Service Partner</h4>
                                                <p className="text-light m-3">
                                                    jjCras mattis consectetur purus sit amet fermentum. Cras justo odio,
                                                    dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
                                                    consectetur ac, vestibulum at eros.
                                                </p>
                                                <Modal.Footer>
                                                    <Button style={{ backgroundColor: "#fd7e14" }} onClick={() => setShow3(false)}>
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
                                        <a href="javascript:void(0)" onClick={() => setShow4(true)}>
                                        <img src="assets/images/partners/logo.webp" width="50%" />

                                            <h5 className='pt-3'> partner</h5>
                                        </a>
                                        <Modal
                                            show={show4} onHide={() => setShow4(false)}
                                            centered

                                        >

                                            <Modal.Body className="partner-header text-light  ">
                                                 
                                                <h4 className="text-light m-3">Service Partner</h4>
                                                <p className="text-light m-3">
                                                    Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                                                    dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
                                                    consectetur ac, vestibulum at eros.
                                                </p>
                                                <Modal.Footer>
                                                    <Button style={{ backgroundColor: "#fd7e14" }} onClick={() => setShow4(false)}>
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
                                        <a href="javascript:void(0)" onClick={() => setShow5(true)}>
                                        <img src="assets/images/partners/logo.webp" width="50%" />

                                            <h5 className='pt-3'>Our Partner</h5>
                                        </a>
                                        <Modal
                                            show={show5} onHide={() => setShow5(false)}
                                            centered

                                        >

                                            <Modal.Body className="partner-header text-light  ">
                                                 
                                                <h4 className="text-light m-3">Service o Partner</h4>
                                                <p className="text-light m-3">
                                                    Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                                                    dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
                                                    consectetur ac, vestibulum at eros.
                                                </p>
                                                <Modal.Footer>
                                                    <Button style={{ backgroundColor: "#fd7e14" }} onClick={() => setShow5(false)}>
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
                                        <a href="javascript:void(0)" onClick={() => setShow6(true)}>
                                        <img src="assets/images/partners/logo.webp" width="50%" />

                                            <h5 className='pt-3'>Our Partner</h5>
                                        </a>
                                        <Modal
                                            show={show6} onHide={() => setShow6(false)}
                                            centered

                                        >

                                            <Modal.Body className="partner-header text-light  ">
                                                 
                                                <h4 className="text-light m-3">Service Partner</h4>
                                                <p className="text-light m-3">
                                                    Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                                                    dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
                                                    consectetur ac, vestibulum at eros.
                                                </p>
                                                <Modal.Footer>
                                                    <Button style={{ backgroundColor: "#fd7e14" }} onClick={() => setShow6(false)}>
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
                                        <a href="javascript:void(0)" onClick={() => setShow7(true)}>
                                        <img src="assets/images/partners/logo.webp" width="50%" />

                                            <h5 className='pt-3'>Our Partner</h5>
                                        </a>
                                        <Modal
                                            show={show7} onHide={() => setShow7(false)}
                                            centered

                                        >

                                            <Modal.Body className="partner-header text-light  ">
                                                 
                                                <h4 className="text-light m-3">Service Partner</h4>
                                                <p className="text-light m-3">
                                                    jjCras mattis consectetur purus sit amet fermentum. Cras justo odio,
                                                    dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
                                                    consectetur ac, vestibulum at eros.
                                                </p>
                                                <Modal.Footer>
                                                    <Button style={{ backgroundColor: "#fd7e14" }} onClick={() => setShow7(false)}>
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
            <section className="section-padding--bottom text-center mt-5">
                <div className="container">
                    <div className="section-title text-center">
                        <h2 className="">Services Partner</h2>

                    </div>
                    <div className="row gutter box text-center col-xs-6">
                        <div className="col-lg-3 col-md-6 col-sm-6 rounded">
                            <div id="card-container">
                                <div className="text-center rounded" id="partner_card">
                                    <div className="front face text-center mt-3">
                                        <a href="javascript:void(0)" onClick={() => setShow8(true)}>
                                        <img src="assets/images/partners/logo.webp" width="50%" />

                                            <h5 className='pt-3'>Our Partner</h5>
                                        </a>
                                        <Modal
                                            show={show8} onHide={() => setShow8(false)}
                                            centered

                                        >

                                            <Modal.Body className="partner-header text-light  ">
                                                 
                                                <h4 className="text-light m-3">Service Partner</h4>
                                                <p className="text-light m-3">
                                                    Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                                                    dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
                                                    consectetur ac, vestibulum at eros.
                                                </p>
                                                <Modal.Footer>
                                                    <Button style={{ backgroundColor: "#fd7e14" }} onClick={() => setShow8(false)}>
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
                                        <a href="javascript:void(0)" onClick={() => setShow9(true)}>
                                        <img src="assets/images/partners/logo.webp" width="50%" />

                                            <h5 className='pt-3'>Our Partner</h5>
                                        </a>
                                        <Modal
                                            show={show9} onHide={() => setShow9(false)}
                                            centered

                                        >

                                            <Modal.Body className="partner-header text-light  ">
                                                 
                                                <h4 className="text-light m-3">Service o Partner</h4>
                                                <p className="text-light m-3">
                                                    Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                                                    dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
                                                    consectetur ac, vestibulum at eros.
                                                </p>
                                                <Modal.Footer>
                                                    <Button style={{ backgroundColor: "#fd7e14" }} onClick={() => setShow9(false)}>
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
                                        <a href="javascript:void(0)" onClick={() => setShow10(true)}>
                                        <img src="assets/images/partners/logo.webp" width="50%" />

                                            <h5 className='pt-3'>Our Partner</h5>
                                        </a>
                                        <Modal
                                            show={show10} onHide={() => setShow10(false)}
                                            centered

                                        >

                                            <Modal.Body className="partner-header text-light  ">
                                                 
                                                <h4 className="text-light m-3">Service Partner</h4>
                                                <p className="text-light m-3">
                                                    Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                                                    dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
                                                    consectetur ac, vestibulum at eros.
                                                </p>
                                                <Modal.Footer>
                                                    <Button style={{ backgroundColor: "#fd7e14" }} onClick={() => setShow10(false)}>
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
                                        <a href="javascript:void(0)" onClick={() => setShow11(true)}>
                                        <img src="assets/images/partners/logo.webp" width="50%" />

                                            <h5 className='pt-3'>Our Partner</h5>
                                        </a>
                                        <Modal
                                            show={show11} onHide={() => setShow11(false)}
                                            centered

                                        >

                                            <Modal.Body className="partner-header text-light  ">
                                                 
                                                <h4 className="text-light m-3">Service Partner</h4>
                                                <p className="text-light m-3">
                                                    jjCras mattis consectetur purus sit amet fermentum. Cras justo odio,
                                                    dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
                                                    consectetur ac, vestibulum at eros.
                                                </p>
                                                <Modal.Footer>
                                                    <Button style={{ backgroundColor: "#fd7e14" }} onClick={() => setShow11(false)}>
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

            {/* <section className="section-padding--bottom section-padding--top">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">

                            <h3 className="blog-card-one__title blog-details__title">Partners</h3>
                            <div className="blog-details__content">
                                <p>We have been so lucky to have the opportunity to make partnership with various companies througout the whole world.
                                </p>
                            </div>


                        </div>
                        <div className="col-lg-4">
                            <div className="sidebar">
                                <div className="sidebar__item sidebar__item--category">
                                    <h3 className="sidebar__title">Partners</h3>
                                    <ul className="sidebar__category">
                                        <li><a href="/">Service Partner</a>
                                            <ul>
                                                <li><a href="https://www.eccouncil.org/">EC Council</a></li>
                                                <li><a href="https://home.pearsonvue.com/" >Pearson Vue</a></li>
                                                <li><a href="https://pecb.com/en">PECB ISO Certification</a></li>
                                                <li><a href="https://arscert.com/certification/">ARS</a></li>
                                                <li><a href="https://sckcerts.com/">SCK</a></li>
                                                <li><a href="https://www.acnabin.com/">ACNABIN</a></li>
                                            </ul>
                                        </li>
                                        <li><a href="/">Solution Partner</a>
                                            <ul>
                                                <li><a href="https://www.invicti.com/">INVICTI</a></li>
                                                <li><a href="https://www.coresecurity.com/products/core-impact" >Core Impact</a></li>
                                                <li><a href="https://portswigger.net/burp">Burp Suite</a></li>
                                            </ul>
                                        </li>

                                        <li><a href="/">Association</a>
                                            <ul>
                                                <li><a href="http://cca.gov.bd/site/office_head/5891f732-8e0f-40b0-9f85-1cb867657bfd/%E0%A6%AC%E0%A6%BF%E0%A6%B8%E0%A7%8D%E0%A6%A4%E0%A6%BE%E0%A6%B0%E0%A6%BF%E0%A6%A4">CCA,Ministry of ICT</a></li>
                                                <li><a href="https://www.pcisecuritystandards.org/">PCI SSC, USA</a></li>
                                                <li><a href="https://www.worldbank.org/en/home">WBGs (World Bank Group)</a></li>
                                                <li><a href="https://www.swift.com/">SWIFT</a></li>
                                                <li><a href="https://basis.org.bd/">BASIS</a></li>
                                                <li><a href="https://e-cab.net/">E-CAB</a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}<br /><br /><br /><br />

        </div>
    )
}

export default PartnerBody
