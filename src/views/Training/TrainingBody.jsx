import React, { useState, useEffect, useRef, useCallback } from 'react';
import Link from 'react-router-dom/Link';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { countryList } from '../Contact/data';
import ServiceBody from "../../components/Service"
import Partner from "../../components/Partner"
import Associaltion from "../../components/Association"

import { toast } from 'react-toastify';
import './training.css'
import Slider from 'react-slick'
import Pathway from './Pathway';
import CarrerPath from './CarrerPath';

// Constants
const TRAINING_PROGRAMS = [
  {
    title: "Training (ICT Assessment)",
    image: "https://www.ict.eu/sites/corporate/files/images/iStock-1322517295%20copy_12.jpg",
    description: "Right Time Limited offers training programs designed to enhance participants' knowledge and skills in conducting ICT assessments.",
    link: "/assesment"
  },
  {
    title: "Training (ICT Management)",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxon_WBBZiXpR46nVYY7QYeNg7I_J82c1xUg&s",
    description: "Right Time Limited provides training programs that focus on ICT management principles and practices.",
    link: "/management"
  },
  {
    title: "Training (RightTime Customized)",
    image: "https://img.freepik.com/free-vector/cyber-security-concept_53876-90451.jpg",
    description: "Right Time Limited offers customized training solutions tailored to the specific needs of organizations",
    link: "/Customized"
  }
];

const TRAINERS = [
  {
    name: "Dr. Touhid Bhuiyan",
    image: "/assets/images/team/Photo1.jpeg",
    position: "DIRECTOR, STRATEGIC PLANNING AND DEVELOPMENT",
    link: "/team"
  },
  {
    name: "Md. Shamim Al Mamun",
    image: "/assets/images/team/Shamim-PP.jpeg",
    position: "CHIEF TECHNOLOGY OFFICER (CTO)",
    link: "/team"
  },
  {
    name: "Mohammad Tohidur Rahman Bhuiyan",
    image: "/assets/images/team/Mohammad Tohidur Rahman Bhuiyan.jpg",
    position: "Lead Security Practitioner and MD & CEO",
    link: "/team"
  },
  {
    name: "Md. Rokanuzzaman",
    image: "/assets/images/team/Rokanuzzaman.jpeg",
    position: "Chief Information Officer (CIO)",
    link: "/team"
  }
];


  const individualOptions = [
    "Lead Auditor (ISO 9001, ISO 27001, ISO 20000, ISO 22301 etc.)",
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
    "	Information Security Graded Audit",
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

const SLIDER_SETTINGS = {
  dots: false,
  arrows: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: true
      }
    },
    {
      breakpoint: 817,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
};

function TrainingBody() {
  const [activeTab, setActiveTab] = useState(() => {
    const savedTab = localStorage.getItem("career");
    return savedTab ? JSON.parse(savedTab) : "career";
  });
  const [company, setCompany] = useState('2');
  const [budget, setBudget] = useState('');
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    companyName: '',
    phoneNumber: '',
    country: '',
    interestedIn: '',
    howDidYouHearAboutUs: '',
    message: ''
  });
  const menuRef = useRef(null);

  const renderContent = useCallback(() => {
    switch (activeTab) {
      case "interactive": return <Pathway />;
      case "career": return <CarrerPath />;
      case "education": return <p className="coming-soon">Education and Training Providers coming soon...</p>;
      default: return null;
    }
  }, [activeTab]);

  const handleTabClick = useCallback((tab) => {
    localStorage.setItem("career", JSON.stringify(tab));
    setActiveTab(tab);
    const scrollY = window.scrollY;
    window.location.reload();
    setTimeout(() => window.scrollTo(0, scrollY), 0);
  }, []);

   const handleChange = (e) => {
    setBudget(e.target.value);
  };

    const handleSelectChange = event => {
    setCompany(event.target.value);
  };



  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    if (budget) {
      toast.success('Thank you for contacting us! Our team will review your inquiry promptly.');
      setBudget('');
    } else {
      toast.error('Please fill in all fields');
    }
  }, [budget]);

  useEffect(() => {
    if (menuRef.current) {
      setTimeout(() => {
        menuRef.current.scrollIntoView({ behavior: 'smooth' });
      }, 1000);
    }
  }, [activeTab]);

  return (
    <div>
      <div className="page-header">
        <div 
          className="page-header__bg"
          style={{ backgroundImage: `url('/assets/images/training/TopBanner.jpg')` }}
        ></div>
        <div className="container">
          <ul className="thm-breadcrumb list-unstyled">
            <li><Link to="/">Home</Link></li>
            <li>Training</li>
          </ul>
          <h2 className="page-header__title">Training</h2>
        </div>
      </div>

      <div className="mx-5 mt-5">
        <p className='text-dark container textJustify'>
“Right Time Limited” training programs encompass ICT Assessment, ICT Management, and customized training solutions. By participating in these programs, individuals and organizations can acquire the necessary knowledge and skills to effectively assess and manage ICT systems, as well as receive tailored training to meet their specific requirements.        </p>

        <section className="section-padding--bottom mt-5">
          <div className="container">
            <div className="section-title">
              <h2 className="header text-center">Training Programs</h2>
            </div>
            <ul className="card-wrapper">
              {TRAINING_PROGRAMS.map((program, index) => (
                <li key={index} style={{ background: "#e9e3e0" }} className="card">
                  <img height="210px" width="100%" src={program.image} alt={program.title} />
                  <h3 style={{ fontSize: "18px" }} className="header">
                    <Link to={program.link}>{program.title}</Link>
                  </h3>
                  <p style={{ fontWeight: "500" }} className='text-dark textJustify'>{program.description}</p>
                  <Link to={program.link} className="header">
                    <button style={{ background: "#37474f" }} className='btn text-light'>
                      Click for More Information
                    </button>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <h1 style={{ color: "#37474f" }} className='text-center my-5'>
          ICT Professional(s) will be benefited with our Track choosing mind-map.
        </h1>

        <div className="main">
          <div className="custom-wrapper pure-g container" id="menu">
            <div className="pure-u-1-4">
              <div className="pure-menu"></div>
            </div>
            <div ref={menuRef}>
              <div className="pure-menu pure-menu-horizontal custom-can-transform menu-main">
                <ul className="pure-menu-list">
                  {["interactive", "career", "education"].map((tab) => (
                    <li key={tab} className="pure-menu-item">
                      <button
                        className={`pure-menu-link ${activeTab === tab ? "active" : ""}`}
                        onClick={() => handleTabClick(tab)}
                      >
                        {tab === "interactive" && "Interactive map"}
                        {tab === "career" && "Career pathway"}
                        {tab === "education" && "Education and Training Providers"}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className='widt'>{renderContent()}</div>
        </div>

        <section className="section-padding--bottom text-center mt-5">
          <div className="container">
            <div className="section-title text-center">
              <h2 className="header">Meet Our Trainers</h2>
            </div>
            <Slider {...SLIDER_SETTINGS}>
              {TRAINERS.map((trainer, index) => (
                <div key={index} className="item">
                  <div style={{ background: "#e9e3e0" }} className="card">
                    <Link to={trainer.link} className="mt-4 rounded-4">
                      <img className='rounded-5' style={{ width: "100%", height: "170px" }} 
                        src={trainer.image} alt={trainer.name} />
                    </Link>
                    <div className="service-card-three__content">
                      <h4 className="pt-3"><Link to="/consultation">{trainer.name}</Link></h4>
                      <p>{trainer.position}</p>
                      <Link to={trainer.link}>More Information</Link>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </section>

        <ServiceBody />
        <Partner />
        <Associaltion />

       <div>
          <div className="mx-5 border px-5 mt-5">
            <div className="row">
              <div className="col-lg-12">
              </div>
              <h3 className='text-dark text-center my-5'>Contact Us</h3>
              <Form onSubmit={handleSubmit}>

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

                  <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label >Company or individual</Form.Label>

                    <Form.Select onChange={handleSelectChange}
                      aria-label="Default select example">
                      <option value="2">Individual</option>

                      <option value="1">Company </option>


                    </Form.Select>
                  </Form.Group>


                  <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label disabled={company === '2'} >Company Name</Form.Label>
                    <Form.Control disabled={company === '2'} type="text" placeholder="" />
                  </Form.Group>
                </Row>

                <Row className="">


                  <Form.Group className="mb-1 " controlId="formGridAddress1">
                    <Form.Label className="">Phone Number</Form.Label>
                    <span className="d-flex">
                      <Form.Select style={{ width: "130px" }} defaultValue="Choose...">
                        <option>code</option>
                        {countryList.map((country, key) => (
                          <option key={key} title="" value={country.mobileCode}>
                            {country.mobileCode}
                          </option>
                        ))}

                      </Form.Select>
                      <Form.Control style={{ marginLeft: "10px" }} type="text" placeholder="phone" />
                      <Form.Group className='mx-2' as={Col} controlId="formGridPassword">


                        <Form.Select defaultValue="Choose...">
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


                  <Form.Group as={Col} controlId="formGridEmail">

                    {company === '2' ? (
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
                    ) : (
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
                    <Form.Select onChange={handleChange} defaultValue={budget}>
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

                <button type='submit' className="mt-1 my-5 thm-btn cta-two__btn rounded-5 w-25 text-center">
                  <span>Send Message </span>
                </button>

              </Form>
            </div>
          </div>

        </div>
      </div><br/><br/><br/><br/>
    </div>
  );
}

export default TrainingBody;