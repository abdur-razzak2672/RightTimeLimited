import React from "react";

function Pathway() {
  return (
    <div id="pathway-container">
      {/* <img id='prelC' src="images/c.svg"></img> */}

      <div
        className="modal fade"
        id="embedModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="embedModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="embedModalLabel">
                Embed code
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <input
                id="copyTarget"
                className="form-control embed-code"
                value="<iframe height='600' width='600' frameBorder='0' scrolling='no' src='https://www.cyberseek.org/widget-pathway/pathway.html'></iframe>"
              />
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button id="copyButton" type="button" className="btn btn-primary">
                Copy to clipboard
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="title text-center mt-5">
          Cybersecurity Interactive Map
        </div>
        <div
          className="textJustify"
          style={{ fontWeight: "500 " }}
          className="sub"
        >
          There are many opportunities for workers to start and advance their
          careers within cybersecurity. This interactive career pathway shows
          key jobs within cybersecurity, common transition opportunities between
          them, and detailed information about the salaries, credentials, and
          skillsets associated with each role.
        </div>
      </div>

      <div
        id="con"
        className="text-center container d-flex justify-content-center"
      >
        <div className="pathway w-100"></div>
        <div className="clear"></div>
        <h1 className="job"></h1>

        <div id="push"></div>
      </div>

      <div className="mx-5">
        <div className="row1 pure-g" id="r1">
          <div className="col1 pure-u-1 pure-u-sm-1-1 pure-u-md-1-2 pure-u-lg-1-4 pure-u-xl-1-4">
            <div className="box no1">
              <div className="infoBox" id="b1">
                <img
                  width="18px"
                  height="17px"
                  src="./images/xi_03.png"
                  className="closeBtn"
                  rel="1"
                />
                <div className="infoTxtBox">
                  <div className="chartTitle">AVERAGE SALARY</div>
                  <div className="def">
                    Shows the average advertised salary listed in online job
                    openings from January 2022 through December 2022.
                  </div>
                </div>
              </div>
              <div className="boxContent">
                <div className="salary">
                  <div className="chartTitle">
                    AVERAGE SALARY
                    <img
                      width="17px"
                      height="15px"
                      src="./images/i_03.png"
                      className="infIcon"
                      rel="1"
                    />
                  </div>
                  <div className="noDataNote">
                    No data, since there is a wide range of roles and salaries
                  </div>
                  <div className="salaryNum"></div>
                  <div id="average_salaryChart"></div>
                </div>
              </div>
            </div>
            <div className="box no10 long is-bottom-row" id="no10">
              <div className="infoBox" id="b10">
                <img
                  width="18px"
                  height="17px"
                  src="./images/xi_03.png"
                  className="closeBtn"
                  rel="10"
                />
                <div className="infoTxtBox">
                  <div className="chartTitle">TOP FUTURE SKILLS REQUESTED</div>
                  <div className="def">
                    Shows the emerging skills gaining momentum in demand for
                    this occupation. Note that these are primarily new skills
                    within the infosec world-- "mature" skills will have a lower
                    growth projection as they have already become ubiquitous in
                    the cybersecurity landscape. This is only a sample of skills
                    and not intended to encompass the full universe of
                    cybersecurity.
                  </div>
                </div>
              </div>
              <div className="boxContent">
                <div className="futureskills">
                  <div className="chartTitle">
                    TOP FUTURE SKILLS REQUESTED{" "}
                    <img
                      width="17px"
                      height="15px"
                      src="./images/i_03.png"
                      className="infIcon"
                      rel="10"
                    />
                  </div>
                  <table className="table ">
                    <thead>
                      <tr>
                        <th scope="col">Skills</th>
                        <th scope="col">5-Year Projected Growth</th>
                      </tr>
                    </thead>
                    <tbody id="future-skills-cont"></tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

          <div
            className="col2 pure-u-1 pure-u-sm-1-1 pure-u-md-1-2 pure-u-lg-1-4 pure-u-xl-1-4"
            id="c2"
          >
            <div className="box no3">
              <div className="infoBox" id="b3">
                <img
                  width="18px"
                  height="17px"
                  src="./images/xi_03.png"
                  className="closeBtn"
                  rel="3"
                />
                <div className="infoTxtBox">
                  <div className="chartTitle">COMMON JOB TITLES</div>
                  <div className="def">
                    Shows common job titles employers list in job openings for
                    each role
                  </div>
                </div>
              </div>
              <div className="boxContent">
                <div className="commonJobs">
                  <div className="chartTitle">
                    COMMON JOB TITLES
                    <img
                      width="17px"
                      height="15px"
                      src="./images/i_03.png"
                      className="infIcon"
                      rel="3"
                    />
                  </div>
                  <ul id="commonJobsList"></ul>
                </div>
              </div>
            </div>
            <div className="box is-bottom-row long" id="no4">
              <div className="infoBox" id="b4">
                <img
                  width="18px"
                  height="17px"
                  src="./images/xi_03.png"
                  className="closeBtn"
                  rel="4"
                />
                <div className="infoTxtBox">
                  <div className="chartTitle">
                    <span className="toChange">
                      COMMON NICE CYBERSECURITY WORKFORCE FRAMEWORK CATEGORIES
                    </span>
                  </div>
                  <div className="def">
                    Shows common NICE Cybersecurity Workforce Framework
                    Categories that map to a particular job. Within each
                    Framework Category are Specialty Areas that correspond to
                    on-the-job competencies that may be required of workers in a
                    particular role
                  </div>
                </div>
              </div>
              <div className="boxContent">
                <div className="niceAreas">
                  <div className="chartTitle">
                    <span className="toChange">
                      COMMON NICE CYBERSECURITY WORKFORCE FRAMEWORK CATEGORIES
                    </span>
                    <img
                      width="17px"
                      height="15px"
                      src="./images/i_03.png"
                      className="infIcon"
                      rel="4"
                      id="ic4"
                    />
                  </div>
                  <div className="areas"></div>
                </div>
              </div>
            </div>
          </div>

          <div
            className="col3 pure-u-1 pure-u-sm-1-1 pure-u-md-1-2 pure-u-lg-1-4 pure-u-xl-1-4"
            id="c3"
          >
            <div className="box no5">
              <div className="infoBox" id="b5">
                <img
                  width="18px"
                  height="17px"
                  src="./images/xi_03.png"
                  className="closeBtn"
                  rel="5"
                />
                <div className="infoTxtBox">
                  <div className="chartTitle">REQUESTED EDUCATION (%)</div>
                  <div className="def">
                    Shows the percentage of online job listings requiring either
                    less than a bachelor's degree, a bachelor's degree, or a
                    graduate degree
                  </div>
                </div>
              </div>
              <div className="boxContent">
                <div className="education">
                  <div className="chartTitle">
                    REQUESTED EDUCATION (%)
                    <img
                      width="17px"
                      height="15px"
                      src="./images/i_03.png"
                      className="infIcon"
                      rel="5"
                    />
                  </div>
                  <div className="educationChart"></div>
                </div>
              </div>
            </div>
            <div className="box is-bottom-row long remove-line-right " id="no6">
              <div className="infoBox" id="b6">
                <img
                  width="18px"
                  height="17px"
                  src="./images/xi_03.png"
                  className="closeBtn"
                  rel="6"
                />
                <div className="infoTxtBox">
                  <div className="chartTitle">TOP CERTIFICATIONS REQUESTED</div>
                  <div className="def">
                    Shows the certifications most commonly requested by
                    employers in job listings
                  </div>
                </div>
              </div>
              <div className="boxContent" id="scrollTo">
                <div className="certifications">
                  <div className="chartTitle">
                    TOP CERTIFICATIONS REQUESTED
                    <img
                      width="17px"
                      height="15px"
                      src="./images/i_03.png"
                      className="infIcon"
                      rel="6"
                    />
                  </div>
                  <ul id="topCertificationsList"></ul>
                </div>
              </div>
            </div>
          </div>

          <div
            className="col4 pure-u-1 pure-u-sm-1-1 pure-u-md-1-2 pure-u-lg-1-4 pure-u-xl-1-4"
            id="c4"
          >
            <div className="box remove-line-right" id="no2">
              <div className="infoBox" id="b2">
                <img
                  width="18px"
                  height="17px"
                  src="./images/xi_03.png"
                  className="closeBtn"
                  rel="2"
                />
                <div className="infoTxtBox">
                  <div className="chartTitle">TOTAL JOB OPENINGS</div>
                  <div className="def">
                    The number of online job listings for the selected position
                    in our data's 12 month period
                  </div>
                </div>
              </div>
              <div className="boxContent">
                <div className="openings">
                  <div className="chartTitle">
                    TOTAL JOB OPENINGS
                    <img
                      width="17px"
                      height="15px"
                      src="./images/i_03.png"
                      className="infIcon"
                      rel="2"
                    />
                  </div>
                  <div className="openingsNumber"></div>
                  <div id="job_openingsChart"></div>
                </div>
              </div>
            </div>
            <div className="box long is-bottom-row" id="no7">
              <div className="infoBox" id="b7">
                <img
                  width="18px"
                  height="17px"
                  src="./images/xi_03.png"
                  className="closeBtn"
                  rel="7"
                />
                <div className="infoTxtBox">
                  <div className="chartTitle">TOP SKILLS REQUESTED</div>
                  <div className="def">
                    Shows the skills most commonly requested by employers in job
                    listings
                  </div>
                </div>
              </div>
              <div className="boxContent">
                <div className="commonJobs">
                  <div className="chartTitle">
                    TOP SKILLS REQUESTED
                    <img
                      width="17px"
                      height="15px"
                      src="./images/i_03.png"
                      className="infIcon"
                      rel="7"
                    />
                  </div>
                  <ol id="topSkillsList"></ol>
                </div>
              </div>
            </div>
          </div>

          <div
            className="col4 pure-u-1 pure-u-sm-1-1 pure-u-md-1-2 pure-u-lg-1-4 pure-u-xl-1-4"
            id="c5"
            style={{ display: "none" }}
          >
            <div className="box long" id="no11">
              <div className="infoBox" id="b7">
                <img
                  width="18px"
                  height="17px"
                  src="./images/xi_03.png"
                  className="closeBtn"
                  rel="7"
                />
                <div className="infoTxtBox">
                  <div className="chartTitle">
                    {" "}
                    TOP CYBERSECURITY SKILLS TO ADD
                  </div>
                  <div className="def">
                    Shows the skills that workers in this feeder role will most
                    likely need to develop to prepare for roles in
                    cybersecurity.
                  </div>
                </div>
              </div>
              <div className="boxContent">
                <div className="commonJobs">
                  <div className="chartTitle">
                    TOP CYBERSECURITY SKILLS TO ADD
                    <img
                      width="17px"
                      height="15px"
                      src="./images/i_03.png"
                      className="infIcon"
                      rel="7"
                    />
                  </div>
                  <ol id="topSkillsToAddList"></ol>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row2 pure-g">
          <div className="box no8 pure-u-1 pure-u-sm-1-1 pure-u-md-1-2 pure-u-lg-1-2 pure-u-xl-1-2">
            <div className="infoBox" id="b8">
              <img
                width="18px"
                height="17px"
                src="./images/xi_03.png"
                className="closeBtn"
                rel="8"
              />
              <div className="infoTxtBox">
                <div className="chartTitle">
                  NICE KNOWLEDGE, SKILLS, AND ABILITIES
                </div>
                <div className="def">
                  Lists qualifications and attributes that workers require in a
                  particular NICE Cybersecurity Workforce Framework Specialty
                  Area
                </div>
              </div>
            </div>
            <div className="boxContent">
              <div className="niceKsa">
                <div className="chartTitle">
                  NICE KNOWLEDGE, SKILLS, AND ABILITIES
                  <img
                    width="17px"
                    height="15px"
                    src="./images/i_03.png"
                    className="infIcon"
                    rel="8"
                  />
                </div>
                <div className="ksas"></div>
              </div>
            </div>
          </div>
          <div className="box no9 pure-u-1 pure-u-sm-1-1 pure-u-md-1-2 pure-u-lg-1-2 pure-u-xl-1-2 remove-line-right">
            <div className="infoBox" id="b9">
              <img
                width="18px"
                height="17px"
                src="./images/xi_03.png"
                className="closeBtn"
                rel="9"
              />
              <div className="infoTxtBox">
                <div className="chartTitle">NICE FRAMEWORK TASKS</div>
                <div className="def">
                  Lists on-the-job duties that workers in a particular NICE
                  Cybersecurity Workforce Framework Specialty Area perform
                </div>
              </div>
            </div>
            <div className="boxContent">
              <div className="niceTasks">
                <div className="chartTitle">
                  NICE FRAMEWORK TASKS
                  <img
                    width="17px"
                    height="15px"
                    src="./images/i_03.png"
                    className="infIcon"
                    rel="9"
                  />
                </div>
                <div className="tasks"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pathway;
