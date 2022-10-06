import React from 'react'
import IndustriesNav from './IndustriesNav'
function Telecomunication() {
  return (
    <div>
     <div class="page-header">
        <div class="page-header__bg"
             style={{backgroundImage: `url('assets/images/background/tele.png')` }}></div>
    
        <div class="container">
            <ul class="thm-breadcrumb list-unstyled">
                <li><a href="/">Home</a></li>
                <li>Telecommunications</li>
            </ul>
            <h2 class="page-header__title">Telecommunications</h2> 
        </div> 
    </div> 

    <section class="section-padding--bottom section-padding--top">
        <div class="container">
            <div class="row">
                <div class="col-lg-8">


                    <h3 class="blog-card-one__title blog-details__title" style={{color:"orange"}}>Telecommunications</h3>
                    <div class="blog-details__content">
                        <p>Telecom companies have long been a high value target for cybercriminals and nation state actors because they maintain and operate critical
                        communications infrastructure which is used to transmit and store large amounts of private and sensitive data.
                        Nation state actors are increasingly targeting telecommunications providers, their infrastructure and
                        their operations in order to establish covert surveillance over infiltrated networks and allow them to operate undetected over the long term.
                        Over the last few years we have seen highly sophisticated actors infiltrate telecom providers in order to conduct surveillance of phone lines,
                        mobile data and IM/video calls, such attacks are difficult to detect and remediate.</p>
 <p>Some of the largest intelligence coups in history have been the result of the compromise of telecommunications systems.
 For as long as messages have been passed between people, whether in writing or orally, knowledge of their content by third parties has been a goal of nation-states and bad actors. </p>

<p>Manipulating communication processes, by injecting false information or degrading the speed and quality of traffic, has also been ubiquitous over time. Being the first to know — or better yet, to know something when your opponent or competitor doesn’t know you know — is a distinct advantage to protecting sensitive information.
</p>
                    <br/>

                    <h4>Why Choose Right Time Limited?</h4>
<p>Right Time Limited aims to support telecom companies in countering the threats facing the industry.
Due our vast experience working within telecom sector, we have unique insight about the vulnerabilities and how they may be exploited.
We can leverage our cyber security expertise to identify gaps in the security architecture.
Additionally, our Application Security and Penetration testing services can help telecoms create secure applications and infrastructure resilient to penetration.</p>

                    <br/>

                    </div> 

                </div> 
                <div class="col-lg-4">
                    <div class="sidebar">
                        <div class="sidebar__item sidebar__item--category">
                            <IndustriesNav/>
                         </div>
                    </div>
                </div>
            </div>
        </div>
    </section><br/><br/>
      
    </div>
  )
}

export default Telecomunication
