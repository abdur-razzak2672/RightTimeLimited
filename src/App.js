import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import Dashboard from "./dashboard/Dashboard";

import AboutUs from "./views/About/AboutUs";

// Industris Section Imported Start

import IndustriesBody from "./views/Industries/IndustriusBody";
import BankNbfi from "./views/Industries/BankNbfi";
import Telecomunication from "./views/Industries/Telecomunication";
import PaymentCard from "./views/Industries/PaymentCard";
import Educational from "./views/Industries/Educational";
import EcommerceReatail from "./views/Industries/EcommerceReatail";
import HealthCare from "./views/Industries/HealthCare";

// Industris Section Imported End

// Partner Section Imported start

import PartnerBody from "./views/Partners/PartnerBody";



import Footer from "./components/Footer";
function App() {
  return (
    <Router>
      <Header />
      <div>
        <Route path="/" component={Dashboard} exact />
        <Route path="/about-us" component={AboutUs} exact />


        {/*Industries Section Route Declaration start */}

        <Route path="/industries" component={IndustriesBody} exact />
        <Route path="/bank-nbfi" component={BankNbfi} exact />
        <Route path="/telecomunication" component={Telecomunication} exact />
        <Route path="/payment-card" component={PaymentCard} exact />
        <Route path="/educational-institutions" component={Educational} exact />
        <Route path="/ecommerce-retail" component={EcommerceReatail} exact />
        <Route path="/health-care" component={HealthCare} exact />

        {/*Industries Section Route Declaration End */}

        {/*PArtner Section Route Declaration Start */}

        <Route path="/partners" component={PartnerBody} exact />
      

      </div>
       <Footer />
      <a href="#" data-target="html" class="scroll-to-target scroll-to-top">
        <i class="fa fa-angle-up"></i>
      </a>
    </Router>
  );
}

export default App;
