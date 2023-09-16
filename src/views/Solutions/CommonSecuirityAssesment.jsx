import React from 'react'
import Link from 'react-router-dom/Link'
import { solutionData1 } from './solutionData'

function CommonSecuirityAssesment() {
   return (
    <div className='mt-5'>
   <div className='d-flex justify-content-between'>
 <div style={{width:"220px"}} className=' servicesItem1'>
           <Link to="/secuirity-assessment" style={{height:"120px",backgroundColor:"#540859",color:"white"}}>
           Security Assessment (VA & PT) Tools
           </Link>
           </div>
           <div style={{width:"220px"}} className=' servicesItem1  '>

           <Link to="/secuirity-management" style={{height:"120px"}}>
           Cyber Security Management & Visibility solutions
           </Link>

        </div>
   </div>
       


        {
            solutionData1.map((item, index) => (
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

export default CommonSecuirityAssesment