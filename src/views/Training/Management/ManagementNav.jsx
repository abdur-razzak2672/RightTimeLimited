import React,{useEffect,useState} from 'react'
import { Link } from 'react-router-dom'
import { ManagementData } from '../trainingData'
 
function ManagementNav() {

  const [pageUrl, setPageUrl] = useState("");

  useEffect(() => {
    const url = window.location.pathname;
    const lastPart = url.substring(url.lastIndexOf("/") + 1);
    setPageUrl(lastPart);
    }, []);


  return (
    <div className='NavScroll '>
       <div className='d-flex justify-content-between'>
        <div style={{ width: "140px" }} className=' servicesItem1'>
          <Link to="/assesment"  >
            Assesment
          </Link>
        </div>
        <div style={{ width: "140px" }} className=' servicesItem1  '>

          <Link to="/management"  style={{ backgroundColor: "#540859", color: "white" }} >
            Management
          </Link>

        </div>
        <div style={{ width: "140px" }} className=' servicesItem1  '>
          <Link to="/Customized"  >
            Customized
          </Link>

        </div>

      </div>




      {
        ManagementData.map((item, index) => (
          <div  className={`servicesItem1 ${item.link === `/${pageUrl}` ? "servicesItemActive" : ""}`}>
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

export default ManagementNav
