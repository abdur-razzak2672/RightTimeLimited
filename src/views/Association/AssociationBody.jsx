import React, { useState } from 'react'
 import Service from '../../components/Service';
import Information from '../../components/Information';
import Benifits from '../../components/Benifits';
function AssociationBody() {
    const [show, setShow] = useState(false);
    const [show1, setShow1] = useState(false);
    const [show2, setShow2] = useState(false);
    const [show3, setShow3] = useState(false);
  return (
    <div>
    <div className="page-header">
        <div className="page-header__bg"
            style={{ backgroundImage: `url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-Sx9Pg3qkhXGHG5NDgzX1n7j1dcuDqkScUQ&usqp=CAU')` }}></div>

        <div className="container">
            <ul className="thm-breadcrumb list-unstyled">
                <li><a href="/">Home</a></li>
                <li>Association  </li>
            </ul>
            <h2 className="page-header__title">Association  </h2>
        </div>
    </div>
    <section className="  text-center mt-5">
        <div className="container">
            <div className="section-title text-center">
            <h1 className="text-dark mt-5 text-center">Association </h1>
          <p className="text-dark">
            Cyber security is a challenge every day. Therefore, it is crucial to
            continuously support and protect our customers with new, innovative
            solutions and reliable services. Our vision, mission and corporate
            values form the foundation of our actions and motivate us to fulfil
            our purpose every day.
          </p>
          </div>
          </div>
          
            </section>


            <div className="   ">
          <div
            style={{ backgorundColor: "red", height: "100%" }}
            className="wrapper1 headerind  "
          >
            <div className="container">
            
            <ul className="img-grid mt-5 text-center cardHieght py-4 ">
              <li style={{ width: "180px" }} className="m-2 rounded border ">
                <a href="/Cca" className="overlay-container">
                  <img
                    src="assets/images/Industries/bank&nbfi.png"
                    alt="Image capture goes here 01"
                    className="overlay-img rounded-2"
                    width="60%"
                  />
                  <p>CCA</p>
                </a>
              </li>
              <li style={{ width: "180px" }} className="m-2 rounded border ">
                <a href="/Pci" className="overlay-container">
                  <img
                    src="assets/images/Industries/ecommerce.png"
                    alt="Image capture goes here 01"
                    className="overlay-img rounded-2"
                    width="60%"
                  />
                  <p>PCI SSC USA</p>
                </a>
              </li>
              <li style={{ width: "180px" }} className="m-2 rounded border ">
                <a
                  href="/WorlBank"
                  className="overlay-container"
                >
                  <img
                    src="assets/images/Industries/education.png"
                    alt="Image capture goes here 01"
                    className="overlay-img rounded-2"
                    width="60%"
                  />
                  <p>World Bank Group</p>
                </a>
              </li>
              <li style={{ width: "180px" }} className="m-2 rounded border ">
                <a href="/Swift" className="overlay-container">
                  <img
                    src="assets/images/Industries/healthcare.png"
                    alt="Image capture goes here 01"
                    className="overlay-img rounded-2"
                    width="60%"
                  />
                  <p>SWIFT</p>
                </a>
              </li>
              <li style={{ width: "180px" }} className="m-2 rounded border ">
                <a href="/Basis" className="overlay-container">
                  <img
                    src="assets/images/Industries/pci.png"
                    alt="Image capture goes here 01"
                    className="overlay-img rounded-2"
                    width="60%"
                  />
                  <p>BASIS</p>
                </a>
              </li>

              <li style={{ width: "180px" }} className="m-2 rounded border ">
                <a href="/Ecab">
                  <img
                    src="assets/images/Industries/telecommunication.png"
                    alt="Image capture goes here 01"
                    className="overlay-img rounded-2"
                    width="60%"
                  />
                  <p>E-CAB</p>
                </a>
              </li>

              
              <li style={{ width: "180px" }} className="m-2 rounded border ">
                <a href="/Bcs" className="overlay-container">
                  <img
                    src="assets/images/Industries/bpo.png"
                    alt="Image capture goes here 01"
                    className="overlay-img rounded-2"
                    width="60%"
                  />
                  <p>BCS</p>
                </a>
              </li>

             
            </ul>

            </div>
          </div>
        </div>


 
    <section>


    </section>

    <Service/>
  
    <Benifits/>
  <Information/>

 <br/><br/><br/>
      
    </div>
  )
}

export default AssociationBody
