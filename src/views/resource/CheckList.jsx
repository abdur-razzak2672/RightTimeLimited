import React from 'react'
import Allpage from '../../components/all-page/Allpage'

function CheckList() {
  
   return (
    <div>
   <div className="page-header">
   <div
     className="page-header__bg"
     style={{ backgroundImage: `url('../images/resources/aboutbg1.png')` }}
   ></div>
   <div className="container">
     <ul className="thm-breadcrumb list-unstyled">
       <li>
         <a href="/">Home</a>
       </li>
       <li>Check Lists</li>
     </ul>
     <h2 className="page-header__title">Check Lists</h2>
   </div>

   </div>

   <section>
     <div className="container mt-5">
       <h2 className="text-center header">Check Lists</h2>
       <p className='text-dark'> Right Time Limited's checklists offer handy resources to help organizations assess and ensure compliance with security standards, best practices, and regulatory requirements. These checklists provide step-by-step guidance and serve as practical tools for organizations to enhance their security posture and identify potential vulnerabilities.
</p>
     
    
     </div>

     <h6 className='text-success mt-5 text-center'>More Information Coming Soon .....</h6>
       

   </section>
   



     
   <br/><br/><br/><br/><br/> </div>
 )
}

export default CheckList