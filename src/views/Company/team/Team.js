import React,{ useState} from 'react'
import  TopManagement from './TopManagement'
function Team() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <div className="page-header">
        <div
          className="page-header__bg"
           style={{backgroundImage: `url('../images/resources/aboutbg1.png')`}}

        ></div>
        <div className="container">
          <ul className="thm-breadcrumb list-unstyled">
            <li>
              <a href="/">Home</a>
            </li>
            <li>Leadership Team</li>
          </ul>
          <h2 className="page-header__title">Leadership Team</h2>
        </div>
      </div>

      <TopManagement/>



 
      <br/><br/><br/></div>
  )
}

export default Team