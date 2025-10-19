import React, { useState } from "react";
import PciDssPrents from "../../../components/services/pcidss/PciDssPrents";
function PciDss() {
  const [tabIndex, setTabIndex] = useState(0);
  const [tabIndex1, setTabIndex1] = useState(16);

  const [tabIndex2, setTabIndex2] = useState(201);
  const [tabIndex3, setTabIndex3] = useState(301);

  const [style3, setStyle3] = useState("cont");
  const [style4, setStyle4] = useState("cont2");
  const [style5, setStyle5] = useState("cont");

  return (
    <div>
      <PciDssPrents
        tab1={tabIndex2}
        tab2={tabIndex3}
        tab3={style3}
        tab4={style4}
        tab5={style5}
      />
    </div>
  );
}

export default PciDss;
