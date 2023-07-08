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
        <p className='text-dark'>“Right Time Limited” (RightTime) training programs encompass ICT Assessment, ICT Management, and customized training solutions. By participating in these programs, individuals and organizations can acquire the necessary knowledge and skills to effectively assess and manage ICT systems, as well as receive tailored training to meet their specific requirements.</p>



        {/* <img id='prelC' src="/images/c.svg" width="100" height="100" alt="loading" /> */}

        <h6 className='header my-3'>ICT Professional(s) will be benefited with our Track choosing mind-map. </h6>

<div class="main">

     <div class="custom-wrapper pure-g container" id="menu">
        <div class="pure-u-1-4">
            <div class="pure-menu">
                <a href="index.html" class="pure-menu-heading custom-brand"><img alt="home" width='80px'
                        class="masthead-brand"  src='/assets/images/images-removebg-preview.png'/></a>
            </div>
        </div>
        <div class="pure-u-1-2">
            <div class="pure-menu pure-menu-horizontal custom-can-transform menu-main menu-large">
                <ul class="pure-menu-list">
                    <li class="pure-menu-item"><a href="heatmap.html" class="pure-menu-link ">Interactive map</a>
                    </li>
                    <li class="pure-menu-item"><a href="/pathway" class="pure-menu-link active">Career
                            pathway</a>
                        <li class="pure-menu-item"><a href="training.html" class="pure-menu-link">Education and Training Providers</a></li>
                    </li>
                </ul>
            </div>
        </div>
        <div class="pure-u-1-4" style={{textAlign: "right"}}>
            <div class="pure-menu pure-menu-horizontal custom-menu-3 custom-can-transform">
                <ul class="pure-menu-list">
                    <li class="pure-menu-item" style={{borderRight: "2px solid #F5F7F9"}}><a href="/about-us" class="pure-menu-link menu-large">About</a></li>

                    <li class="pure-menu-item pure-menu-has-children">
                        <a href="#" id="menuLink1" class="pure-menu-link menu-icon"><img width="21" height="21"
                                src='images/menu.svg' alt="menu"/></a>
                        <ul class="pure-menu-children">
                            <li class="pure-menu-item">
                                <a href="heatmap.html" class="pure-menu-link menu-small">Interactive map</a>
                            </li>
                            <li class="pure-menu-item">
                                <a href="pathway" class="pure-menu-link menu-small">Career pathway</a>
                            </li>
                            <li class="pure-menu-item">
                                <a href="training.html" class="pure-menu-link menu-small">Education and Training Providers</a>
                            </li>
                            <li class="pure-menu-item">
                                <a href="/about-us" class="pure-menu-link menu-small">About</a>
                            </li>
                            <li class="pure-menu-item">
                                <a href="index.html#whoIsThis" class="pure-menu-link">Who this tool is for</a>
                            </li>
                            <li class="pure-menu-item">
                                <a href="index.html#partners" class="pure-menu-link">Project partners</a>
                            </li>
                            <li class="pure-menu-item">
                                <a href="index.html#usefulLinks" class="pure-menu-link">Links</a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    </div>

    <div class='clear'></div>
    <div id='con' class="container wrapper">
        <br/>
        <div class="pure-g">
            <div class="pure-u-1-1 buttons" style={{margin: "0, auto",textAlign: "center"}}>
                <a href="pathway" class="pure-button">Roles</a>
                <a href="training" class="pure-button pure-button-primary ml-1">Skills and Certifications</a>
            </div>
        </div>
        <br/>

        <div class="pure-g">
            <div class="pure-u-1-1" style={{margin: "0, auto",textAlign: "center"}}>
                <div class="intro">
                    <p>Select a certification, job title or skill to see how they relate to each other. <button class="pure-button" id="gotit">Got it</button></p>
                </div>
            </div>
        </div>

        <div id="map-key-1" class="pure-menu pure-menu-horizontal">
            <ul class="pure-menu-list">
                <li class="pure-menu-item">
                    <div class="circle" style={{backgroundColor:"#408AE1"}}></div> Entry level
                </li>
                <li class="pure-menu-item">
                    <div class="circle" style={{backgroundColor:"#B871AD"}}></div> Mid-level
                </li>
                <li class="pure-menu-item">
                    <div class="circle" style={{backgroundColor:"#7FE2C6"}}></div> Advanced
                </li>
            </ul>
        </div>
        <br/>
        <div style={{fontSize:"30px"}} id="sankey"></div>
        <div style={{fontSize:"30px"}} class='clear'></div>
        <br/><br/>
     </div>

    <div style={{fontSize:"30px"}} class='scrollUpWrapper'>
        <div  style={{fontSize:"30px"}} class='scrollUp'></div>
    </div>

    <div style={{fontSize:"30px"}} class='clear'></div>
</div>









          {/* <p className='text-dark mt-5'>The PCI Security Standards Council operates programs to train, test, and qualify organizations and individuals who assess and validate compliance, in order to help merchants successfully implement PCI standards and solutions. The Council also qualifies payment hardware and software so that merchants select and implement approved solutions for securing payment data and systems.</p> */}

        </div>
        <section className="section-padding--bottom   mt-5">
          <div className="container">
            <div className="section-title  ">
              <h2 className="header text-center">PCI SSC Training & Qualification Programs</h2>
            </div>
            <ul className="card-wrapper">
              <li className="card">
              <a className="circleImage1 mt-4" href="/assesment"><img src="/assets/images/training/Icon1.webp" alt="" /></a>
                <h3 className="text-center header" ><a href="/assesment">Training (ICT Assessment)</a></h3>
                 <div className='mx-2' style={{alignItems:"start"}}>
                 <p className='text-dark  '>“Right Time Limited” (RightTime) offers training programs designed to enhance participants' knowledge and skills in conducting ICT assessments. </p>

                <a  className="text-warning" href="/assesment" >Download Course Description</a><br/>
                <a href="/assesment"  className="text-warning">More Information</a>
                  
                </div>
 


              </li>
              <li className="card">
              <a className="circleImage1  mt-4" href="/management"><img src="/assets/images/training/Icon2.webp" alt="" /></a>
              <h3 className="text-center header" ><a href="/management"> Training (ICT Management)</a></h3>
                 <div className='mx-2' style={{alignItems:"start"}}>
                 <p className='text-dark  '>“Right Time Limited” (RightTime) provides training programs that focus on ICT management principles and practices. </p>

                <a  className="text-warning" href="/management" >Download Course Description</a><br/>
                <a  className="text-warning" href="/management"  >More Information</a>
                  
                </div>
              </li>

              <li className="card">
              <a className="circleImage1 mt-4" href="/Customized"><img src="/assets/images/training/Icon3.webp" alt="" /></a>
              <h3 className="text-center header" ><a href="/Customized">Training (RightTime Customized)</a></h3>
                 <div className='mx-2' style={{alignItems:"start"}}>
                 <p className='text-dark  '>“Right Time Limited” (RightTime) offers customized training solutions tailored to the specific needs of organizations</p>

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
                <a className=" mt-4 rounded-4" href="/"><img className='rounded-5'  style={{width:"100%",height:"170px"}} src="/assets/images/team/Photo1.jpeg" alt="" /></a>
                  <div className="service-card-three__content">
                    <h4 className="pt-3"><a href="/consultation"> Dr. Touhid Bhuiyan
                      <br /></a></h4>
                    <p>DIRECTOR, STRATEGIC PLANNING AND DEVELOPMENT</p>
                    <a href="/team" className="">More Information</a>
                  </div>
                </div>
              </div>
              <div  className="item">
              <div className="card">
              <a className=" mt-4 rounded-4" href="/"><img className='rounded-5'  style={{width:"100%",height:"170px"}} src="/assets/images/team/Shamim-PP.jpeg" alt="" /></a>
                  <div className="service-card-three__content">
                  <h4 className="pt-3"><a href="/consultation">Md. Shamim Al Mamun
                      <br /></a></h4>
                    <p>CHIEF TECHNOLOGY OFFICER (CTO)</p>
                    <a href="/team" className="">More Information</a>
                  </div>
                </div>
              </div>
              <div  className="item">
              <div className="card">
              <a className=" mt-4 rounded-4" href="/"><img className='rounded-5'  style={{width:"100%",height:"170px"}} src="/assets/images/team/Mohammad Tohidur Rahman Bhuiyan.jpg" alt="" /></a>
                  <div className="service-card-three__content">
                  <h4 className="pt-3"><a href="/consultation"> Mohammad Tohidur Rahman Bhuiyan
                      <br /></a></h4>
                    <p>Lead Security Practitioner and MD & CEO</p>
                    <a href="/team" className="">More Information</a>
                  </div>
                </div>
              </div> 

              <div  className="item">
              <div className="card">
              <a className=" mt-4 rounded-4" href="/"><img className='rounded-5'  style={{width:"100%",height:"170px"}} src="/assets/images/team/Rokanuzzaman.jpeg" alt="" /></a>
                  <div className="service-card-three__content">
                  <h4 className="pt-3"><a href="/consultation">Md. Rokanuzzaman
                      <br /></a></h4>
                    <p>Chief Information Officer (CIO)</p>
                    <a href="/team" className="">More Information</a>
                  </div>
                </div>
              </div> 
              </div>

              

               
              
          </div>
        </section>



        {/* <section className="section-padding--bottom section-padding--top">
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
        </section>*/}<br /><br /><br /> 
      </div>
    </div>
  )
}

export default TrainingBody