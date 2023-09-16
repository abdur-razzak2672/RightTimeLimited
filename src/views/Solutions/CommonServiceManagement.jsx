import React from 'react'
import Link from 'react-router-dom/Link'
import { solutionData2 } from './solutionData'

function CommonSecuirityManageMent() {
   return (
    <div className='mt-5'>
   <div className='d-flex justify-content-between'>
 <div style={{width:"220px"}} className=' servicesItem1'>
           <Link to="/secuirity-assessment" style={{height:"120px"}}>
           Security Assessment (VA & PT) Tools
           </Link>
           </div>
           <div style={{width:"220px"}} className=' servicesItem1  '>

           <Link to="/secuirity-management" style={{height:"120px",backgroundColor:"#540859",color:"white"}}>
           Cyber Security Management & Visibility solutions
           </Link>

        </div>
   </div>
       


        {
            solutionData2.map((item, index) => (
                <div className='servicesItem1'>
                 <Link
                 className=" "
                key={index}
                to= {`${item.link}`}
              >
                 {item.title}
              </Link>
                </div>
               

            ))
        }
     
    </div>
  )
}

export default CommonSecuirityManageMent