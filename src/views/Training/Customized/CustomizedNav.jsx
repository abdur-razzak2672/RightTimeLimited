import React, { useEffect, useState } from 'react'
import Link from 'react-router-dom/Link'
import { customizedData } from '../trainingData'

function CustomizedNav() {

  const [pageUrl, setPageUrl] = useState("");

  useEffect(() => {
    const url = window.location.pathname;
    const lastPart = url.substring(url.lastIndexOf("/") + 1);
    setPageUrl(lastPart);
  }, []);

  return (
    <div className=' '>
      <div className='d-flex justify-content-between'>
        <div style={{ width: "140px" }} className=' servicesItem1'>
          <Link to="/assesment"  >
            Assesment
          </Link>
        </div>
        <div style={{ width: "140px" }} className=' servicesItem1  '>

          <Link to="/management"  >
            Management
          </Link>

        </div>
        <div style={{ width: "140px" }} className=' servicesItem1  '>

          <Link style={{ backgroundColor: "#540859", color: "white" }} to="/Customized"  >
            Customized
          </Link>

        </div>

      </div>




      {
        customizedData.map((item, index) => (
          <div className={`servicesItem1 ${item.link === `/${pageUrl}` ? "servicesItemActive" : ""}`}>
            <Link
              className=" "
              key={index}
              to={`${item.link}`}
            >
              {item.title}
            </Link>
          </div>


        ))
      }

    </div>
  )
}

export default CustomizedNav;
