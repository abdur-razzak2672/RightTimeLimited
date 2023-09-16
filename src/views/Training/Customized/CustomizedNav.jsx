import React from 'react'
import Link from 'react-router-dom/Link'
import { customizedData } from '../trainingData'

function CustomizedNav() {
  return (
    <div className=' '>
    <div className='d-flex justify-content-between'>
  <div style={{width:"170px"}} className=' servicesItem1'>
            <Link to="/assesment" >
            Assesment
            </Link>
            </div>
            <div style={{width:"170px"}} className=' servicesItem1  '>
 
            <Link to="/management"  >
            Management
            </Link>
 
         </div>
        
    </div>
    <div className='  d-flex justify-content-cenfter'>
           <div style={{width:"170px"}} className=' servicesItem1  '>
 
 <Link to="/Customized"style={{ backgroundColor:"#540859",color:"white"}}  >
 Customized
 </Link>

</div>
    </div>
  
        
 
 
         {
             customizedData.map((item, index) => (
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

export default CustomizedNav
