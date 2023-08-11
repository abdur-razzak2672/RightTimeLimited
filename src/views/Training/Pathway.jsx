import React from 'react'

function Pathway() {
    return (
        <div>

            {/* <img id='prelC' src="images/c.svg"></img> */}

            <div class="modal fade" id="embedModal" tabindex="-1" role="dialog" aria-labelledby="embedModalLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="embedModalLabel">Embed code</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <input id="copyTarget" class="form-control embed-code" value="<iframe height='600' width='600' frameborder='0' scrolling='no' src='https://www.cyberseek.org/widget-pathway/pathway.html'></iframe>" />
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button id="copyButton" type="button" class="btn btn-primary">Copy to clipboard</button>
                        </div>
                    </div>
                </div>
            </div>

            <div class="custom-wrapper pure-g container" id="menu">
        <div class="pure-u-1-4">
            <div class="pure-menu">
                <a href="index.html" class="pure-menu-heading custom-brand"><img alt="home" width='120'
                        class="masthead-brand"  src='/assets/images/images-removebg-preview.png'/></a>
            </div>
        </div>
        <div class="pure-u-1-2">
            <div class="pure-menu pure-menu-horizontal custom-can-transform menu-main menu-large">
                <ul class="pure-menu-list">
                    <li class="pure-menu-item"><a href="interactive-map" class="pure-menu-link ">Interactive map</a>
                    </li>
                    <li class="pure-menu-item"><a href="/pathway" class="pure-menu-link active">Career
                            pathway</a></li>
                        <li class="pure-menu-item"><a href="/education-training" class="pure-menu-link">Education and Training Providers</a></li>
                    
                </ul>
            </div>
        </div>
        
    </div>
            <div class='clear'></div>
            <div id='con' class="container wrapper">
                <div class='titlCont'>
                    <div class='title'>Cybersecurity Career Pathway</div>
                    <div class='sub'>There are many opportunities for workers to start and advance their careers within cybersecurity. This interactive career pathway shows key jobs within cybersecurity, common transition opportunities between them, and detailed information about
                        the salaries, credentials, and skillsets associated with each role.</div>
                    <a class="shareBtn" data-toggle="modal" data-target="#embedModal">Embed</a>
                </div>

                <div class="pure-g">
                    <div class="pure-u-1-1 buttons" style= {{margin: "0 auto",textAlign: "center"}}>
                        <a href="/pathway" class="pure-button pure-button-primary">Roles</a>
                        <a href="/training" class="pure-button ml-1">Skills and Certifications</a>
                    </div>
                </div>

                <br />

                <div class="pathway"></div>
                <div class='clear'></div>
                <h1 class='job'></h1>
                <div class="table">
                    <div class="row1 pure-g" id='r1'>
                        <div class='col1 pure-u-1 pure-u-sm-1-1 pure-u-md-1-2 pure-u-lg-1-4 pure-u-xl-1-4'>
                            <div class="box no1">
                                <div class='infoBox' id='b1'>
                                    <img width='18px' height='17px' src='./images/xi_03.png' class='closeBtn' rel='1' />
                                    <div class='infoTxtBox'>
                                        <div class='chartTitle'>AVERAGE SALARY</div>
                                        <div class='def'>Shows the average advertised salary listed in online job openings from January 2022 through December 2022.</div>
                                    </div>
                                </div>
                                <div class='boxContent'>
                                    <div class='salary'>
                                        <div class='chartTitle'>AVERAGE SALARY<img width='17px' height='15px' src='./images/i_03.png' class='infIcon' rel='1' /></div>
                                        <div class='noDataNote'>No data, since there is a wide range of roles and salaries</div>
                                        <div class='salaryNum'></div>
                                        <div id='average_salaryChart'></div>
                                    </div>
                                </div>
                            </div>
                            <div class="box no10 long is-bottom-row" id="no10">
                                <div class='infoBox' id='b10'>
                                    <img width='18px' height='17px' src='./images/xi_03.png' class='closeBtn' rel='10' />
                                    <div class='infoTxtBox'>
                                        <div class='chartTitle'>TOP FUTURE SKILLS REQUESTED
                                        </div>
                                        <div class='def'>
                                            Shows the emerging skills gaining momentum in demand for this occupation. Note that these are primarily new skills within the infosec world-- "mature" skills will have a lower growth projection as they have already become ubiquitous in the cybersecurity
                                            landscape. This is only a sample of skills and not intended to encompass the full universe of cybersecurity.
                                        </div>
                                    </div>
                                </div>
                                <div class='boxContent'>
                                    <div class='futureskills'>
                                        <div class='chartTitle'>TOP FUTURE SKILLS REQUESTED <img width='17px' height='15px' src='./images/i_03.png' class='infIcon' rel='10' />
                                        </div>
                                        <table class="table ">
                                            <thead>
                                                <tr>
                                                    <th scope="col">Skills</th>
                                                    <th scope="col">5-Year Projected Growth</th>
                                                </tr>
                                            </thead>
                                            <tbody id="future-skills-cont">

                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class='col2 pure-u-1 pure-u-sm-1-1 pure-u-md-1-2 pure-u-lg-1-4 pure-u-xl-1-4' id='c2'>
                            <div class="box no3">
                                <div class='infoBox' id='b3'>
                                    <img width='18px' height='17px' src='./images/xi_03.png' class='closeBtn' rel='3' />
                                    <div class='infoTxtBox'>
                                        <div class='chartTitle'>COMMON JOB TITLES</div>
                                        <div class='def'>Shows common job titles employers list in job openings for each role</div>
                                    </div>
                                </div>
                                <div class='boxContent'>
                                    <div class='commonJobs'>
                                        <div class='chartTitle'>COMMON JOB TITLES<img width='17px' height='15px' src='./images/i_03.png' class='infIcon' rel='3' /></div>
                                        <ul id='commonJobsList'></ul>
                                    </div>
                                </div>
                            </div>
                            <div class="box is-bottom-row long" id="no4">
                                <div class='infoBox' id='b4'>
                                    <img width='18px' height='17px' src='./images/xi_03.png' class='closeBtn' rel='4' />
                                    <div class='infoTxtBox'>
                                        <div class='chartTitle'><span class="toChange">COMMON NICE CYBERSECURITY WORKFORCE FRAMEWORK CATEGORIES</span></div>
                                        <div class='def'>Shows common NICE Cybersecurity Workforce Framework Categories that map to a particular job. Within each Framework Category are Specialty Areas that correspond to on-the-job competencies that may be required of workers
                                            in a particular role</div>
                                    </div>
                                </div>
                                <div class='boxContent'>
                                    <div class='niceAreas'>
                                        <div class='chartTitle'><span class="toChange">COMMON NICE CYBERSECURITY WORKFORCE FRAMEWORK CATEGORIES</span><img width='17px' height='15px' src='./images/i_03.png' class='infIcon' rel='4' id='ic4' /></div>
                                        <div class='areas'></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class='col3 pure-u-1 pure-u-sm-1-1 pure-u-md-1-2 pure-u-lg-1-4 pure-u-xl-1-4' id='c3'>
                            <div class="box no5">
                                <div class='infoBox' id='b5'>
                                    <img width='18px' height='17px' src='./images/xi_03.png' class='closeBtn' rel='5' />
                                    <div class='infoTxtBox'>
                                        <div class='chartTitle'>REQUESTED EDUCATION (%)</div>
                                        <div class='def'>Shows the percentage of online job listings requiring either less than a bachelor's degree, a bachelor's degree, or a graduate degree</div>
                                    </div>
                                </div>
                                <div class='boxContent'>
                                    <div class='education'>
                                        <div class='chartTitle'>REQUESTED EDUCATION (%)<img width='17px' height='15px' src='./images/i_03.png' class='infIcon' rel='5' /></div>
                                        <div class='educationChart'></div>
                                    </div>
                                </div>
                            </div>
                            <div class="box is-bottom-row long remove-line-right " id="no6">
                                <div class='infoBox' id='b6'>
                                    <img width='18px' height='17px' src='./images/xi_03.png' class='closeBtn' rel='6' />
                                    <div class='infoTxtBox'>
                                        <div class='chartTitle'>TOP CERTIFICATIONS REQUESTED</div>
                                        <div class='def'>Shows the certifications most commonly requested by employers in job listings</div>
                                    </div>
                                </div>
                                <div class='boxContent' id="scrollTo">
                                    <div class='certifications'>
                                        <div class='chartTitle'>TOP CERTIFICATIONS REQUESTED<img width='17px' height='15px' src='./images/i_03.png' class='infIcon' rel='6' /></div>
                                        <ul id='topCertificationsList'></ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class='col4 pure-u-1 pure-u-sm-1-1 pure-u-md-1-2 pure-u-lg-1-4 pure-u-xl-1-4' id='c4'>
                            <div class="box remove-line-right" id="no2">
                                <div class='infoBox' id='b2'>
                                    <img width='18px' height='17px' src='./images/xi_03.png' class='closeBtn' rel='2' />
                                    <div class='infoTxtBox'>
                                        <div class='chartTitle'>TOTAL JOB OPENINGS</div>
                                        <div class='def'>The number of online job listings for the selected position in our data's 12 month period</div>
                                    </div>
                                </div>
                                <div class='boxContent'>
                                    <div class='openings'>
                                        <div class='chartTitle'>TOTAL JOB OPENINGS<img width='17px' height='15px' src='./images/i_03.png' class='infIcon' rel='2' /></div>
                                        <div class='openingsNumber'></div>
                                        <div id='job_openingsChart'></div>
                                    </div>
                                </div>
                            </div>
                            <div class="box long is-bottom-row" id="no7">
                                <div class='infoBox' id='b7'>
                                    <img width='18px' height='17px' src='./images/xi_03.png' class='closeBtn' rel='7' />
                                    <div class='infoTxtBox'>
                                        <div class='chartTitle'>TOP SKILLS REQUESTED</div>
                                        <div class='def'>Shows the skills most commonly requested by employers in job listings</div>
                                    </div>
                                </div>
                                <div class='boxContent'>
                                    <div class='commonJobs'>
                                        <div class='chartTitle'>TOP SKILLS REQUESTED<img width='17px' height='15px' src='./images/i_03.png' class='infIcon' rel='7' /></div>
                                        <ol id='topSkillsList'></ol>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class='col4 pure-u-1 pure-u-sm-1-1 pure-u-md-1-2 pure-u-lg-1-4 pure-u-xl-1-4' id='c5' style= {{display:"none"}}>

                            <div class="box long" id="no11">
                                <div class='infoBox' id='b7'>
                                    <img width='18px' height='17px' src='./images/xi_03.png' class='closeBtn' rel='7' />
                                    <div class='infoTxtBox'>
                                        <div class='chartTitle'> TOP CYBERSECURITY SKILLS TO ADD</div>
                                        <div class='def'>Shows the skills that workers in this feeder role will most likely need to develop to prepare for roles in cybersecurity.</div>
                                    </div>
                                </div>
                                <div class='boxContent'>
                                    <div class='commonJobs'>
                                        <div class='chartTitle'>TOP CYBERSECURITY SKILLS TO ADD<img width='17px' height='15px' src='./images/i_03.png' class='infIcon' rel='7' /></div>
                                        <ol id='topSkillsToAddList'></ol>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="row2 pure-g">
                        <div class="box no8 pure-u-1 pure-u-sm-1-1 pure-u-md-1-2 pure-u-lg-1-2 pure-u-xl-1-2">
                            <div class='infoBox' id='b8'>
                                <img width='18px' height='17px' src='./images/xi_03.png' class='closeBtn' rel='8' />
                                <div class='infoTxtBox'>
                                    <div class='chartTitle'>NICE KNOWLEDGE, SKILLS, AND ABILITIES</div>
                                    <div class='def'>Lists qualifications and attributes that workers require in a particular NICE Cybersecurity Workforce Framework Specialty Area</div>
                                </div>
                            </div>
                            <div class='boxContent'>
                                <div class='niceKsa'>
                                    <div class='chartTitle'>NICE KNOWLEDGE, SKILLS, AND ABILITIES<img width='17px' height='15px' src='./images/i_03.png' class='infIcon' rel='8' /></div>
                                    <div class='ksas'></div>
                                </div>
                            </div>
                        </div>
                        <div class="box no9 pure-u-1 pure-u-sm-1-1 pure-u-md-1-2 pure-u-lg-1-2 pure-u-xl-1-2 remove-line-right">
                            <div class='infoBox' id='b9'>
                                <img width='18px' height='17px' src='./images/xi_03.png' class='closeBtn' rel='9' />
                                <div class='infoTxtBox'>
                                    <div class='chartTitle'>NICE FRAMEWORK TASKS</div>
                                    <div class='def'>Lists on-the-job duties that workers in a particular NICE Cybersecurity Workforce Framework Specialty Area perform</div>
                                </div>
                            </div>
                            <div class='boxContent'>
                                <div class='niceTasks'>
                                    <div class='chartTitle'>NICE FRAMEWORK TASKS<img width='17px' height='15px' src='./images/i_03.png' class='infIcon' rel='9' /></div>
                                    <div class='tasks'></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="push">
                </div>
            </div>
 
        </div>
    )
}

export default Pathway