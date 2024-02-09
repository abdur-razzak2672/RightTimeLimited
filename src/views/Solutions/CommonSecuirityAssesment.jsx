import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { solutionData1 } from './solutionData';

function CommonSecuirityAssesment() {
  const [pageUrl, setPageUrl] = useState("");

   useEffect(() => {
    const url = window.location.pathname;
    const lastPart = url.substring(url.lastIndexOf("/") + 1);
    setPageUrl(lastPart);
   }, []);

 
  return (
    <div className='mt-5'>
      <div className='d-flex justify-content-between'>
        <div style={{ width: "220px" }} className='servicesItem1'>
          <Link to="/secuirity-assessment" style={{ height: "120px", backgroundColor: "#540859", color: "white" }}>
            Security Assessment (VA & PT) Tools
          </Link>
        </div>
        <div style={{ width: "220px" }} className='servicesItem1'>
          <Link to="/secuirity-management" style={{ height: "120px" }}>
            Cyber Security Management & Visibility solutions
          </Link>
        </div>
      </div>
      {solutionData1.map((item, index) => (
        <div className={`servicesItem1 ${item.link === `/${pageUrl}` ? "servicesItemActive" : ""}`} key={index}>
          <Link
            to={`${item.link}`}>
            {item.title}
          </Link>
        </div>
      ))}
    </div>
  );
}

export default CommonSecuirityAssesment;
