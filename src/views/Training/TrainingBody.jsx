import React from 'react'
import TrainingNav from './TrainingNav'
import './training.css'
function TrainingBody() {
  return (
    <div>
      <div>
        <div className="page-header">
          <div className="page-header__bg"
            style={{ backgroundImage: `url('/assets/images/background/training.png')` }}></div>
          <div className="container">

          </div>
        </div>
        <div className="container mt-5">
          <p className='text-dark'>The PCI Security Standards Council operates programs to train, test, and qualify organizations and individuals who assess and validate compliance, in order to help merchants successfully implement PCI standards and solutions. The Council also qualifies payment hardware and software so that merchants select and implement approved solutions for securing payment data and systems.</p>

        </div>
        <section className="section-padding--bottom   mt-5">
          <div className="container">
            <div className="section-title  ">
              <h2 className="header text-center">PCI SSC Training & Qualification Programs</h2>
            </div>
            <ul className="card-wrapper">
              <li className="card">
              <a className="circleImage1 mt-4" href="/assesment"><img src="/assets/images/training/Icon1.webp" alt="" /></a>
                <h3 className="text-center header" ><a href="/assesment">Aessessment</a></h3>
                 <div className='mx-2' style={{alignItems:"start"}}>
                 <p className='text-dark  '>Acquire specific tools to help your clients with their PCI DSS compliance</p>

                <a  className="text-warning" href="/assesment" >Download Course Description</a><br/>
                <a href="/assesment"  className="text-warning">More Information</a>
                  
                </div>
 


              </li>
              <li className="card">
              <a className="circleImage1  mt-4" href="/management"><img src="/assets/images/training/Icon2.webp" alt="" /></a>
              <h3 className="text-center header" ><a href="/management">Management</a></h3>
                 <div className='mx-2' style={{alignItems:"start"}}>
                 <p className='text-dark  '>Acquire specific tools to help your clients with their PCI DSS compliance</p>

                <a  className="text-warning" href="/management" >Download Course Description</a><br/>
                <a  className="text-warning" href="/management"  >More Information</a>
                  
                </div>
              </li>

              <li className="card">
              <a className="circleImage1 mt-4" href="/Customized"><img src="/assets/images/training/Icon3.webp" alt="" /></a>
              <h3 className="text-center header" ><a href="/Customized">RightTime Customized</a></h3>
                 <div className='mx-2' style={{alignItems:"start"}}>
                 <p className='text-dark  '>Acquire specific tools to help your clients with their PCI DSS compliance</p>

                <a href="/Customized"  className="text-warning">Download Course Description</a><br/>
                <a href="/Customized" className="text-warning">More Information</a>
                  
                </div>



              </li>
             


            </ul>


          </div>
        </section>



        <section className="section-padding--bottom text-center mt-5">
          <div className="container">
            <div className="section-title text-center">
              <h2 className="header">Meet Our Trainers</h2>

            </div>
            <div className="owl-carousel  thm-owl__carousel thm-owl__carousel--with-shadow service-four__carousel"
              data-owl-options='{"loop": true,
				"autoplay": true,
				"autoplayTimeout": 3000,
				"nav": false,
				"navText": ["<span className=\"fa fa-angle-left\"></span>","<span className=\"fa fa-angle-right\"></span>"],
				"dots": true,
				"margin": 0,
                "items": 1,
				"smartSpeed": 700,
				"responsive": {
					"0": {
						"margin": 0,
						"items": 1
					},
					"576": {
						"margin": 30,
						"items": 2
					},
					"768": {
						"margin": 30,
						"items": 3
					},
					"992": {
						"margin": 30,
						"items": 4
					},
					"1200": {
						"margin": 30,
						"items": 4
					}
				}}'>
              <div  className="item">
                <div className="card">
                <a className=" mt-4 rounded-4" href="/"><img className='rounded-5'  style={{width:"100%",height:"170px"}} src="/assets/images/team/sakim.jpeg" alt="" /></a>
                  <div className="service-card-three__content">
                    <h4 className="pt-3"><a href="/consultation"> Marc Bayerkohler
                      <br /></a></h4>
                    <p>Assistance Directors</p>
                    <a href="/training" className="">More Information</a>
                  </div>
                </div>
              </div>
              <div  className="item">
              <div className="card">
              <a className=" mt-4 rounded-4" href="/"><img className='rounded-5'  style={{width:"100%",height:"170px"}} src="/assets/images/team/razzak1.jpeg" alt="" /></a>
                  <div className="service-card-three__content">
                  <h4 className="pt-3"><a href="/consultation"> Marc Bayerkohler
                      <br /></a></h4>
                    <p>Assistance Directors</p>
                    <a href="/training" className="">More Information</a>
                  </div>
                </div>
              </div>
              <div  className="item">
              <div className="card">
              <a className=" mt-4 rounded-4" href="/"><img className='rounded-5'  style={{width:"100%",height:"170px"}} src="/assets/images/team/sadrin.jpg" alt="" /></a>
                  <div className="service-card-three__content">
                  <h4 className="pt-3"><a href="/consultation"> Marc Bayerkohler
                      <br /></a></h4>
                    <p>Assistance Directors</p>
                    <a href="/training" className="">More Information</a>
                  </div>
                </div>
              </div> 
              </div>
          </div>
        </section>



        <section className="section-padding--bottom section-padding--top">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">


                <h3 className="blog-card-one__title blog-details__title text-center">Security Training</h3>
                <div className="blog-details__content">
                  <p className='text-dark mt-4'>At RightTime, we believe very strongly on training so that common mistakes which can open doors for
                    vulnerabilities for the organizations can be eliminated. The purpose of providing good training is
                    also to make sure our customers follow the best industry practices while performing any IT task.
                    We provide training/ seminars to IT professionals and employees with access to sensitive information
                    to better educate them about the risks of information security threats and how to prevent themselves
                    from falling prey to ruses posed by competitors or malicious intruders. These training and or seminars
                    are dedicated to preventing human error from undermining an otherwise robust information security
                    infrastructure.<br /><br />

                    Our training courses are associated with the present as well as the future need for the professional
                    working in any IT-driven Organization or organization trying to achieve international recognition/
                    certiﬁcation on Information System Governance, Compliance, Risk management, Security, Quality, Process
                    or Environment, etc. Not only you earn knowledge, but you also head for a globally recognized qualiﬁcation.
                    Our services in these areas are-<br /><br />

                    •IT Security Corporate Programs like preparatory training of ITIL, CEH, CHFI, ECSA, LPT,
                    Cyber Security & Cyber Forensic and Software Testing, etc.<br />

                    •Skill Development in the area of Project Management and Data Center Operation e.g. ITIL, PRINCE2, and PMP<br />

                    •Preparatory Training on CRISC, CGEIT, CISA, CISSP, CISM<br />
                    •Training on IS Audits & IT Security.<br />

                    •Training on Internal Audits which covers a wide range of activities like finance, systems,
                    HR, Stock, processes, purchase, and marketing activities with a special emphasis on improving
                    the skills of internal auditors, collecting evidence, sampling, interview, and presentation techniques.<br />


                    •Technical Documentation Training (making IT Policy Workbook containing IT Security Policy,
                    Standard Operation Procedures (SOP), BCP & DRP, etc.)<br />
                  </p>
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                </div>


              </div>
              
            </div>
          </div>
        </section><br /><br /><br />
      </div>
    </div>
  )
}

export default TrainingBody