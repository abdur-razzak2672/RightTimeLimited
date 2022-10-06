import React from 'react'
import IndustriesNav from './IndustriesNav'

function Educational() {
  return (
    <div>
      <div class="page-header">
        <div class="page-header__bg"
          style={{ backgroundImage: `url('/assets/images/background/ed.png')` }}></div>

        <div class="container">
          <ul class="thm-breadcrumb list-unstyled">
            <li><a href="/">Home</a></li>
            <li>Educational Institutions</li>
          </ul>
          <h2 class="page-header__title">Educational Institutions</h2>
        </div>
      </div>

      <section class="section-padding--bottom section-padding--top">
        <div class="container">
          <div class="row">
            <div class="col-lg-8">


              <h3 class="blog-card-one__title blog-details__title" style={{ color: "orange" }}>Educational Institutions</h3>
              <div class="blog-details__content">
                <p>Cyber security is critical for all organizations, not just IT.
                  The need for cyber security in educational institutions is growing.
                  The development of computers and the Internet has made life easier for people in educational and other institutions.
                </p>
                <p>Digitization of the education system has led to serious problems such as cyberbullying, malware attacks and hacking.
                  Additionally, with the rapid growth of distance education and virtual classrooms, cyber security is one of the main concerns for educational institutions and students.
                </p>
                <p>Educational institutions are gold mines of personal information. Therefore, this department should prioritize cyber security.
                  While the sector faces major challenges such as lack of personnel and funding and resources, cyber attacks are no less frequent or less severe in education.
                  Despite widespread reports of breaches in schools and higher education, they seem to be increasing in prevalence.</p>

                <br />
                <h4 style={{ color: "orange" }} >How Can Right Time Limited Help?</h4>
                <p>With extensive security capabilities and decades of industry presence behind them, RightTime Ltd can help schools, higher education, universities and research institutions become more resilient, secure and adaptable in a changing threat landscape.
                  The Right Time Limited’s portfolio includes a full suite of security offerings, ranging from security assessment, information security compliance to incident response services.</p>





              </div>


            </div>
            <div class="col-lg-4">
              <div class="sidebar">
                <div class="sidebar__item sidebar__item--category">
                  <IndustriesNav />

                </div>
              </div>
            </div>
          </div>
        </div>
      </section><br /><br /><br />

    </div>
  )
}

export default Educational
