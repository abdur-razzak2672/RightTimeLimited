import React from 'react'
import SolutionNav from './SolutionNav'
import Allpage from '../../components/all-page/Allpage'
import CommonSecuirityAssesment from './CommonSecuirityAssesment'

function SecuirityAssessment() {

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
       <li>Security Assessment (VA & PT) Tools</li>
     </ul>
     <h2 className="page-header__title">Security Assessment (VA & PT) Tools</h2>
   </div>

   </div>

   <section>
     <div className="container mt-5">
      <div className="row">
        <div className="col-lg-8">
        <h2 className="text-center header">Security Assessment (VA & PT) Tools</h2>

<img className='rounded' width="100%" height="500px" src="/assets/images/solutions/sltn1.jpg" alt="img" />

<p className='text-dark'> Right Time Limited   provides advanced Security Assessment tools such as Vulnerability Assessment (VA) and Penetration Testing (PT). These tools are utilized to evaluate the security posture of organizations' systems, networks, and applications. Through Vulnerability Assessment, potential vulnerabilities and weaknesses are identified and assessed. Penetration Testing, on the other hand, involves simulated attacks to uncover vulnerabilities and validate the effectiveness of existing security measures. By leveraging these tools, RightTime helps clients proactively identify and address security gaps, ensuring a robust defense against cyber threats.</p>

          </div>
          <div className='col-lg-4'>
            <CommonSecuirityAssesment/>
          </div>
          </div>
     
    
     </div>

        

   </section>
   



     
   <br/><br/><br/><br/><br/> </div>
 )
  
}

export default SecuirityAssessment
