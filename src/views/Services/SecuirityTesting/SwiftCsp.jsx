import React,{useState} from 'react'
import SwiftParents from '../../../components/services/swiftCyberSecuirity/SwiftParents';
  function SwiftCsp() {
  const [tabIndex, setTabIndex] = useState(0);
  const [tabIndex1, setTabIndex1] = useState(16);



  const [tabIndex2, setTabIndex2] = useState(202);
  const [tabIndex3, setTabIndex3] = useState(301);
 

  const [style3, setStyle3] = useState("cont2");
  const [style4, setStyle4] = useState("cont");
  const [style5, setStyle5] = useState("cont");
  return (
    <div>
    <SwiftParents title=" Swift CSP Independent Assessment" tab1={tabIndex2} tab2={tabIndex3} tab3={style3} tab4={style4} tab5={style5}/>
   </div>
  )
}

export default SwiftCsp
