import React from 'react'
import Home from "../components/Home";
import About from "../components/About";
import Service from "../components/Service";
import Association from "../components/Association";
import Partner from "../components/Partner";
import Information from "../components/Information";
import Client from "../components/Client";
import Benefit from "../components/Benefit";
import Solution from "../components/Solution";
 function Dashboard() {
  return (
    <div>
         <Home />
        <About />
        <Service />
        <Association />
        <Partner />
        <Information />
        <Client />
        <Benefit />
        <Solution />
      
    </div>
  )
}

export default Dashboard
