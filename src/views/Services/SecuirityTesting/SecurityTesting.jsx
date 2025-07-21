import React, { useState,useEffect } from "react";
import SeviceCommon from '../SeviceCommon'
import BenitsConpany from '../ServicesBody/BenitsConpany'
 
function SecurityTesting() {
    const [description, setDescription] = useState("");
    
    useEffect(() => {
      const updateDescription = () => {
        const storedDescription = localStorage.getItem("serviceDescription") || "";
        setDescription(storedDescription);
      };
    
      // Load initially
      updateDescription();
    
      // ✅ Listen for the custom event
      window.addEventListener("serviceDescriptionChanged", updateDescription);
    
      return () => {
        window.removeEventListener("serviceDescriptionChanged", updateDescription);
      };
    }, []);
  return (
    <div>
      <div className="page-header">
    <div className="page-header__bg"
         style={{ backgroundImage: `url('/assets/images/background/page-header-bg-1-1.jpg')` }}></div>
    <div className="container">
        <ul className="thm-breadcrumb list-unstyled">
            <li><a href="{{ url('/') }}">Home</a></li>
            <li><a href="{{ url('/services') }}">Services</a></li>
            <li>Security   Testing</li>
        </ul>
        <h2 className="page-header__title">Security   Testing</h2> 
    </div> 
</div> 
 

      <section id="header" className="section-padding--bottom pt-5 ">
        <div className="container">
          <div className="section-title">
            <p className="">{description}</p>
            
             <section className="section-padding--bottom mt-3 ">
          <BenitsConpany />
        </section>
           
          </div>
        </div>
      </section>

     <SeviceCommon/>
    </div>
  )
}

export default SecurityTesting