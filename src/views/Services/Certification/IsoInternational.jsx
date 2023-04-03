import React,{useState} from 'react'
import SeviceCommon from '../SeviceCommon'
import { Col, Row ,Form, Button} from 'react-bootstrap'
import Carousel from 'react-bootstrap/Carousel';
import { countryList } from '../../Contact/data';
 
function IsoInternational() {

  const [company, setCompany] = useState('1');


  const handleChange = event => {
    setCompany(event.target.value);
  };

  console.log("DSgvfd",company)

  const individualOptions = [
  "Lead Auditor (ISO 9001, ISO 27001, ISO 20000, ISO 22301 etc.)" ,
 " Lead Implementer (ISO 9001, ISO 27001, ISO 20000, ISO 22301 etc.)",
"  Certified Penetration Testing Professional (CPENT)",
"  Offensive Security Certified Professional (OSCP)",
"	Certified Information system Auditor (CISA)",
"	GIAC Penetration Testing (GPEN)",
"	Training on HIPAA",
"	Training on GDPR",
"	Training on SWIFT CSP Independent Assessment (based on latest CSCF)",
"	Training on Data Center (Basic, Intermediate & Advance)",
"	GIAC Web Application Penetration Testing (GWAPT)",
"	Certified Ethical hacker (CEH-312-50)",
"	EC-Council Certified Incident Handler (ECIH-212-89)",
"	Certified SOC Analyst (CSA)",
"	PCI DSS Certification- ISA & PCIP",
"	Certified Threat Intelligent Analyst (CTIA)",
"	Certified Information security Manager (CISM)",
"	Certified Information System Security Professional (CISSP)",
	"GIAC Certified Project Manager (GCPM)",
"	Open-Source Intelligence (OSINT) ",
"	Certified Secure Computer User (CSCU-112-12)",
"	Network Security Fundamentals (FNS)",
"	Information Security Fundamentals (FIS)",
"	Computer Forensic Fundamentals (CFF)",
"	Certified Network Defense (CND-312-38)",
"	EC-Council Disaster Recovery Professional (EDRP-312-76)",
"	Securing Windows Infrastructure (CAST-616)",
"	Advance Network Defense (CAST-614)",
"	EC-Council Certified Secure Programmer JAVA (ECSP-312-94) ",
"	EC-Council Certified Secure Programmer .Net (ECSP-312-93)",
"	Advanced Penetration testing (CAST-611)",
"	Licensed Penetration Tester (LPT-412-79)",
"	EC-Council Certified Security Analyst (ECSA-412-79) ",
"	Hacking and Hardening Your Corporate Web Application (CAST-613)",
"	Computer Hacking Forensic Investigator (CHFI-312-49)",
"	Advanced Mobile Forensics And security (CAST-612)",
"	Certified Chief Information Security Officer (CCISO)",

    
  
  ];



  const companyOptions = [
    "Consultation",
     "Information Security & Cyber Security Consulting",
   "	Project Management ",
     "Consultation on Shaping up DC & DRS",
     "Swift Cyber Security Consulting ",
   "	Technical Documentation On ITES",
   
   " Auditing ",
     "Information System Audit ",
     "Information Technology Audit ",
   "	Information Security Graded Audit" ,
   "	DC & DRS Auditing",
   
    "Security Testing ",
   "	Vulnerability Assessment & Penetration  Testing Services ",
   "	Digital Forensics ",
   "	Code Review ",
   "	Software Quality Assurance & Testing ",
   "	Swift CSP Independent Assessment",
   
   " Certification ",
   "	PCI DSS Certification",
   "	ISO 27001, ISO 9001, ISO 20000-1, ISO 22301, ISO 13485, ISO 5001, ISO 14001 etc.",
   "	CMMI (Capability Maturity Model Integration) ",
   "	Tia 942 For Data Center",
   "	GDPR Assessment",
   "	HIPAA Assessment",
   
   " Managed Service",
   "	SOC as A Service",
   "	Cloud App Monitoring as A Service",
   "	MDR as A Service (Managed End Point Detection and Response)",
   "	Managed Nextgen Firewall as A Service ",
   "	Vulnerability Assessment (VA) As A Service ",
     "Penetration Testing (PT) As A Service ",
   "  DAM (Database Auditing & Management) as A Service",
   
   
   
   
   " Cyber Security Management & Visibility solutions",
   "	SIEM",
   "	Firewall (Especially Next Gen)",
   "	Log Management",
     "Patch management",
     "Privilege Access Management (PAM)",
   
    "Security assessment (VA & PT) Tools",
     "Burp Suite",
   "	Net Sparker",
     "Tenable All Product",
   "	Nessus Professional",
   "	Acunetix",
   "	Core Impact",
   "	Cobalt Strike",
   
     
     
         
       
       ];

  return (
    <div>
      <div>
        <div className="page-header">
          <div className="page-header__bg"
            style={{ backgroundImage: `url('https://thumbs.dreamstime.com/b/standard-quality-control-iso-certification-assurance-guarantee-internet-business-technology-concept-156888493.jpg')` }}></div>
          <div className="container">
            <ul className="thm-breadcrumb list-unstyled">
              <li><a href="{{ url('/') }}">Home</a></li>
              <li><a href="{{ url('/services') }}">Services</a></li>
              <li><a href="{{ url('/services/standard-implementation-certification') }}">Standard Implementation & Certification</a></li>
              <li>International Organization for Standardization-ISO</li>
            </ul>
            <h2 className="page-header__title">International Organization for Standardization-ISO</h2>
          </div>
        </div>
        <div className=' text-center service-topbar'>
       <div className="container d-flex justify-content-between">
       <div style={{  color: "white" }} className=''>
          <a className='text-light'href='#header'>FAQ</a>
        </div>
        <div className=''>
          <a className='text-light' href='#benefit'>Benefit</a>
        </div>
        <div className=''>
          <a className='text-light' href='#question'>Ask Question</a>
        </div>
       </div>
      </div>

      <section>

        <div style={{backgroundColor:"#555555"}}>
          <div className=' py-5 pt-5 container text-light text-center'>
            <h2 className="text-center">Why ISO Standards?</h2>
            <p>Management System Standards are strategic tools and guidelines to help the organisation tackle some of the challenges of today’s competitive business. They ensure that business operations and processes are as efficient as possible, enhance productivity and help organisations access new markets.</p>
             <p>ISO Consulting Services is serving its clients with the most common ISO management system or other standards, including ISO 9001, ISO 14001, ISO 45001 & upgrade from AS 4801, ISO 27001, ISO 13485,  HACCP, ISO 22000,  AS/NZS 5377, and Integrated Management System (IMS), helping organisations develop their business, improving their management system, enhancing productivity and efficiency and maintaining a safe workplace environment.</p>
         
         
          </div>

        </div>

        <div className='container  '>
            <div className='text-center'>
            <h2 className='header mt-4'>The Benefits of ISO Standards</h2>

            <Row>
              <Col className='mt-2' md={4} sm={6}>
                <img className='w-100' src='/assets/images/services/iso/img1.webp' alt='' />
                <h4 className='header my-2'>Cost Savings</h4>
                <p>
                Management system Standards optimise operations and therefore improve the effectiveness and efficiency of processes.
                </p>
              </Col>
              <Col className='mt-2'  md={4} sm={6}>
                <img className='w-100' src='/assets/images/services/iso/img2.webp' alt='' />
                <h4 className='header  my-2'>Customer Satisfaction</h4>
                <p>
                Management system Standards help improve the quality of services and products and consequently increase customer satisfaction.                </p>
              </Col>
              <Col className='mt-2'  md={4} sm={6}>
                <img className='w-100' src='/assets/images/services/iso/img3.webp' alt='' />
                <h4 className='header  my-2'>Access to New Markets</h4>
                <p>
                Management system Standards help organisations go beyond the barriers in the business and open up new markets.                </p>
              </Col>
              <Col className='mt-2'  md={4} sm={6}>
                <img className='w-100' src='/assets/images/services/iso/img4.webp' alt='' />
                <h4 className='header  my-2'>Enhanced Market Share</h4>
                <p>
                Management system Standards help organisations increase productivity, efficiency and competitive advantage.  </p>            </Col>


              <Col className='mt-2'  md={4} sm={6}>
                <img className='w-100' src='/assets/images/services/iso/img5.webp' alt='' />
                <h4 className='header  my-2'>Environmental Benefits</h4>
                <p>Management system Standards help improve impacts on the environment and enhance interested parties satisfaction.</p>
                 </Col>

              <Col className='mt-2'  md={4} sm={6}>
                <img className='w-100' src='/assets/images/services/iso/img6.webp' alt='' />
                <h4 className='header  my-2'>Economic Benefits</h4>
                <p>
                Management system Standards create value for the organisations and quantify their benefits for companies of various industries.</p>  </Col>
            </Row>



            </div>


            <div>
              <Row>
                <Col  className='mt-2'  md={3} >
                <div style={{position:"absolute" ,top:"2100px", marginTop:"30px",textAlign:"right",left:"0px",width:"470px"}}>
                  <h6   className='header '>StandardsISO 9001 Certification</h6>
                  <p >ISO 9001 supports effective management of your business and help you meet customers’ requirements and continually ...</p>
                  </div>


                  <div style={{position:"absolute" ,top:"2290px", marginTop:"30px",textAlign:"right",left:"30px",width:"470px"}}>
                  <h6   className='header '>ISO 45001 Certification</h6>
                  <p >ISO 45001 documents the minimum requirements for a health and safety management system and can ...</p>
                  </div>

                  <div style={{position:"absolute" ,top:"2470px", marginTop:"30px",textAlign:"right",left:"70px",width:"470px"}}>
                  <h6   className='header '>ISO 27001 Certification</h6>
                  <p >ISO 27001 supports effective Information Security Management of your business and help you meet the requirements for ...</p>
                  </div>

                  <div style={{position:"absolute" ,top:"2650px", marginTop:"30px",textAlign:"right",left:"  110px",width:"470px"}}>
                  <h6   className='header '>ISO 22000 & HACCP</h6>
                  <p >ISO 2000 / HACCP supports an effective food safety management system to demonstrate your ability to control food safety hazards ...</p>
                  </div>
 
                </Col>

                <Col className='mt-2'  md={6} >
                <img style={{ left:"0",top:"0"}} className='w-100' src='/assets/images/services/iso/map.jpeg' alt='' />

                  
                  </Col>

                  <Col className='mt-2'  md={3}  >
                  <Col  className='mt-2'  md={3} >
                <div style={{position:"absolute" ,marginTop:"330px", left:"1050px" ,width:"400px"}}>
                  <h6   className='header '>ISO 14001 Certification</h6>
                  <p >ISO 14001 is a management system that enables organisations to meet their environmental obligations and ...</p>
                  </div>


                  <div style={{position:"absolute" ,marginTop:"510px", left:"1020px" ,width:"400px"}}>
                  <h6   className='header '>Integrated Management System (IMS)</h6>
                  <p >This system is a management system that integrates the organisation’s QMS, EMS and OHSMS processes as one unique framework ...</p>
                  </div>


                  <div style={{position:"absolute" ,marginTop:"690px", left:"980px" ,width:"400px"}}>
                  <h6   className='header '>ISO 13485 Certification</h6>
                  <p >ISO 13485 helps the organisation involved in one or more stages of the life-cycle of a medical device to establish a quality ...</p>
                  </div>

                  

                  <div style={{position:"absolute" ,marginTop:"860px", left:"940px" ,width:"400px"}}>
                  <h6   className='header '>AS 5377</h6>
                  <p >AS 5377 supports a safe and environmentally sound collection, storage, transport and treatment of end-of-life ...</p>
                  </div>
 
                </Col>

                  
                  </Col>
              </Row>
            </div>


 

          </div>

          <div className='py-5' style={{backgroundColor:"#f5f5f5"}}>
            <div className='container text-center'>

            <Row>
              <Col className='mt-2' md={4} sm={6}>
                <img className='w-50' src='/assets/images/services/iso/iso6.png' alt='' />
                <h4 className='header my-2'>Gap Assessment</h4>
                <p>
                We offer this service to organisations that have existing documents including policies, procedures, manuals, forms, handbooks, etc. and would like to check if the existing documents meet the requirements of the desired standards and what they need to do to certify the system.                 </p>
              </Col>
              <Col className='mt-2'  md={4} sm={6}>
              <img className='w-50' src='/assets/images/services/iso/iso5.png' alt='' />
                <h4 className='header  my-2'>System Development</h4>
                <p>
                We offer this service to organisations that do not have any existing system (documents) including policies, procedures, manuals, forms, handbooks, etc. or the gap assessment shows that their existing system needs to improve to meet the requirements of the desired standard.  </p>
              </Col>
              <Col className='mt-2'  md={4} sm={6}>
              <img className='w-50' src='/assets/images/services/iso/iso4.png' alt='' />
                <h4 className='header  my-2'>Implementation</h4>
                <p>
                A Management system should be documented and implemented to meet the requirements of the desired standards. We will supervise and guide our clients during the Implementation of the management while they follow the policies and procedures and use the forms.               </p>
              </Col>
              <Col className='mt-2'  md={4} sm={6}>
              <img className='w-50' src='/assets/images/services/iso/iso3.png' alt='' />
                <h4 className='header  my-2'>Internal Audit</h4>
                <p>
                An annual internal audit is required to get certified and maintain the ISO certificates. We offer this service to organisations that do not have the internal resources to conduct the internal audits or would like to have a new pair of eyes to detect the opportunities for improvements.  </p>            </Col>


              <Col className='mt-2'  md={4} sm={6}>
              <img className='w-50' src='/assets/images/services/iso/iso2.png' alt='' />
                <h4 className='header  my-2'>Attending External Audit</h4>
                <p>Dealing with the external auditor might be quite stressful and challenging for the organisations, particularly for the ones that are willing to certify their system for the first time. We will attend the external audit and assist them as a facilitator for a better and smoother experience.</p>
                 </Col>

              <Col className='mt-2'  md={4} sm={6}>
              <img className='w-50' src='/assets/images/services/iso/iso1.png' alt='' />
                <h4 className='header  my-2'>Ongoing Maintenance</h4>
                <p>
                Once the organisations achieve their certificate, they will face a new challenge for maintaining what they have achieved as every year the certification body comes back for a surveillance audit. We offer this service to draw their attention to what they might miss in the routines.</p>  </Col>
            </Row>


            </div>


          </div>


          <div className='container mt-5   text-center'>
          <h3 className='header'>Customers Stories</h3>

    <Carousel indicators={false}  variant="dark">
      <Carousel.Item className='mt-4'>
      <p className='header'>G-Store</p>

 
     <p style={{marginLeft:"15%",marginRight:"15%"}} className='header   '>An annual internal audit is required to get certified and maintain the ISO certificates. We offer this service to organisations that do not have the internal resources to conduct the internal audits or would like to have a new pair of eyes to detect the opportunities for improvements.</p>
      <p className='text-danger'>Right Time Limited</p>
       </Carousel.Item>

       <Carousel.Item className='mt-4'>
      <p className='header'>G-Store</p>

 
     <p style={{marginLeft:"15%",marginRight:"15%"}} className='header   '>Dealing with the external auditor might be quite stressful and challenging for the organisations, particularly for the ones that are willing to certify their system for the first time. We will attend the external audit and assist them as a facilitator for a better and smoother experience.</p>
      <p className='text-danger'>Right Time Limited</p>
       </Carousel.Item>

       <Carousel.Item className='mt-4'>
      <p className='header'>G-Store</p>

 
     <p style={{marginLeft:"15%",marginRight:"15%"}} className='header   '>Once the organisations achieve their certificate, they will face a new challenge for maintaining what they have achieved as every year the certification body comes back for a surveillance audit. We offer this service to draw their attention to what they might miss in the routines..</p>
      <p className='text-danger'>Right Time Limited</p>
       </Carousel.Item>
      

    </Carousel>

 

          </div>

          <div className='container'>
            
    <h2 className='header text-center  pt-5'>Application Form</h2>

<div className="col-lg-12 mt-4 px-5">
        <Form>

        <Row className="">
                                       
        <Form.Group as={Col} controlId="formGridPassword">
        <Form.Label >Full Name</Form.Label>
        <Form.Control type="text" placeholder="Full Name" />
        </Form.Group>
        <Form.Group as={Col} controlId="formGridEmail">
        <Form.Label >Email Name</Form.Label>
        <Form.Control type="email" placeholder="email" />
        </Form.Group>
          </Row>
          <Row className="">
          
          <Form.Group  as={Col} controlId="formGridEmail">
          <Form.Label >Company or individual</Form.Label>

        <Form.Select   onChange={handleChange}
          aria-label="Default select example">
          <option value="1">Company </option>
          <option value="2">Individual</option>


        </Form.Select>
      </Form.Group>


          <Form.Group  as={Col} controlId="formGridEmail">
          <Form.Label disabled = {company === '2'} >Company Name</Form.Label>
          <Form.Control disabled = {company === '2'}    type="text" placeholder="" />
          </Form.Group>
      </Row>

      <Row className="">

                                            
          <Form.Group className="mb-1 " controlId="formGridAddress1">
      <Form.Label className ="">Phone Number</Form.Label>
        <span className="d-flex">
            <Form.Select style={{width:"130px"}} defaultValue="Choose...">
                <option>code</option>
                 {countryList.map((country, key) => (
                <option key={key} title="" value={country.mobileCode}>
                    {country.mobileCode}
                </option>
                ))}

            </Form.Select>
             <Form.Control style={{marginLeft:"10px"}}   type = "text" placeholder="phone" />
             <Form.Group className='mx-2' as={Col} controlId="formGridPassword">

              
         <Form.Select   defaultValue="Choose...">
                <option>Select Country </option>
                {countryList.map((country, key) => (
                <option key={key} title="" value={country.name}>
                    {country.name}
                </option>
                ))}
            </Form.Select>
      </Form.Group>

        </span>
    </Form.Group>


    <Form.Group   as={Col} controlId="formGridEmail">

    {company === '2'?(
      <>
       <Form.Label >Interested In</Form.Label>
        <Form.Select aria-label="Default select example">
        <option>Please choose one option</option>
                {individualOptions.map((option, index) => {
                    return <option key={index} >
                        {option}
                    </option>
                })}



        </Form.Select>
      </>
    ):(
      <>
      <>
       <Form.Label >Interested In</Form.Label>
        <Form.Select aria-label="Default select example">
        <option>Please choose one option</option>
                {companyOptions.map((option, index) => {
                    return <option key={index} >
                        {option}
                    </option>
                })}



        </Form.Select>
      </>
      
      </>
    )} 
   
      </Form.Group>


        <Form.Group as={Col} controlId="formGridPassword">
        <Form.Label >Budget</Form.Label>
        <Form.Select   defaultValue="Choose...">
                <option>Choose Budget</option>
                <option>$0-$100</option>
                <option>$101-$1000</option>
                <option>$1001-$10000</option>
                <option>$10001-$20000</option>
                <option>$20001-$50000</option>
                <option>$50001- onWord</option>


                
            </Form.Select>
      </Form.Group>
      </Row>

     
      <Form.Group className="mt-3" as={Col} controlId="formGridEmail">
        <label>How Did You hear About Us?</label>
        <Form.Select aria-label="Default select example">
          
          <option value="1">Search Engine</option>
          <option value="2">LinkedIn</option>

          <option value="3">Facebook</option>
          <option value="4">Twitter</option>
          <option value="5">Blog</option>
          <option value="6">Email</option>
          <option value="7">Referral</option>
          <option value="8">Other</option>





        </Form.Select>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGridAddress2">
          <Form.Label>Message</Form.Label>
          <Form.Control as="textarea" rows={2} placeholder=" Enter your Message here..." />
      </Form.Group>

      <Button className="mt-1  rounded-5 w-25 text-center">
        <span>Send Message </span>
     </Button>

    </Form>
           
          <div className="result"></div>
        </div>
      
   

          </div>




           


      </section>


 
      {/* <SeviceCommon/> */}

      </div><br/><b/><br/><b/><br/><b/><br/><b/>

    </div>
  )
}

export default IsoInternational
