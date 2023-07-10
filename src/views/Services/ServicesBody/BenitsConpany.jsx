import React,{useState} from 'react'
import Consultation from "./Consultation";
 import Testing from "./Testing";
import Auditing from "./Auditing";
import { data } from './data';
 function BenitsConpany() {
    const [tabIndex, setTabIndex] = useState(0);
    const [subIndex, setSubIndex] = useState(0);

  return (
    <div className="container">
    <div className="section-title text-center">
        <p className="section-title__text">Company Benefits</p>
        <h2 className="header">We Provide Best Information Security <br /> Service and Solution For 13 Years</h2>

    </div>

     <div className="uk-section uk-section-default">
        <div className="uk-container">
            <div style={{display :"flex",justifyContent:"space-between"}} className="row col-xs-6 uk-margin uk-grid-match uk-grid-collapse uk-child-width-1-4@l uk-text-center" uk-grid>
                
                
                {
                    data.map((item,index)=>(
                
                       <div className=" col-lg-2 col-md-3 col-sm-6 borderReidus uk-visible-toggle  mt-3" tabindex="-1">
                   <a onClick={() => setTabIndex(index)}  href='#javascript20void(0)'> 
                   <div style={{height: "220px"}} className=" borderReidus uk-margin uk-card uk-card-default uk-card-hover">
                        <div className="uk-card-body">
                             <div className="uk-flex uk-flex-center">
                                <span className="uk-icon default"><i className={`${item?.logo}`}></i></span>
                                <span className="uk-icon hover"><i className={`${item?.logo}`}></i></span>
                            </div>
                            <h5 className="uk-card-title uk-margin mt-5">{item?.title}</h5>
                            <h6>...............</h6>
                        </div>
                    </div></a>
                </div>
                

                    ))
                }  
            </div>
            
          
            
             
        </div>
    </div>

    <section className="container mt-5">
    <h1 className="text-center">{data[tabIndex]?.title}</h1>

              <div className="row mt-4">
                  <div className="col-md-5 ">

                      {
                          data[tabIndex]?.subTitle?.map((item, index) => (
                              <div className="   servicesItem">
                                  <a
                                      className=" focus"
                                       href="#javascript void(0)"
                                       onClick={() => setSubIndex(index)}
                                  >
                                      { item?.title}
                                   </a>
                              </div>


                          ))
            }

      </div>

      <div className="col-md-7">
        <div>
            <p className='text-dark'>{data[tabIndex]?.subTitle[subIndex]?.description}</p>
            
        </div>
      </div>
    </div>
  </section>
 
        
{/*    

    <section className="container mt-5">
          <h1 className="text-center">Consultation</h1>

          <div className="row mt-4">
            <div className="col-md-5 ">
              <div className=" servicesItem">
                <a
                  className=" active focus"
                  onClick={() => setTabIndex(1)}
                  href="#javascript void(0)"
                >
                  {" "}
                  Information Security & Cyber Security Consulting
                </a>
              </div>
              <div className="servicesItem">
                <a onClick={() => setTabIndex(2)} href="#javascript void(0)">
                  {" "}
                  Consultation on Shaping up DC & DRS
                </a>
              </div>
              <div className=" servicesItem">
                <a onClick={() => setTabIndex(3)} href="#javascript void(0)">
                  {" "}
                  Swift Cyber Security Consulting
                </a>
              </div>
              <div className=" servicesItem">
                <a onClick={() => setTabIndex(4)} href="#javascript void(0)">
                  {" "}
                  Technical Documentation On ITES
                </a>
              </div>
            </div>

            <div className="col-md-7">
              <div>
                {tabIndex === 1 && <Consultation />}
                {tabIndex === 2 && <Auditing />}
                {tabIndex === 3 && <Testing />}
              </div>
            </div>
          </div>
        </section> */}

</div>
  )
}

export default BenitsConpany