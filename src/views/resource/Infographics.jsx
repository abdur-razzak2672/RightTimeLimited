import React from 'react'
import Allpage from '../../components/all-page/Allpage'

function Infographics() {
  
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
       <li>Info Graphics</li>
     </ul>
     <h2 className="page-header__title">Info Graphics</h2>
   </div>

   </div>

   <section>
     <div className="container mt-5">
       <h2 className="text-center header">Info Graphics</h2>
       <p className='text-dark'>The infographics offered by Right Time Limited present visually engaging and concise information on important cybersecurity concepts, statistics, and best practices. These visually appealing resources simplify complex topics and enable easy understanding of key cybersecurity principles, making them ideal for quick reference and knowledge sharing.
</p>
     
    
     </div>

     <h6 className='text-success mt-5 text-center'>More Information Coming Soon .....</h6>
       

   </section>
   



     
   <br/><br/><br/><br/><br/> </div>
 )
}

export default Infographics