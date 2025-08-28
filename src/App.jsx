import { useState } from 'react'
import './App.css'
import Navbar from "./Components/NavBar"
import Paris from "./Components/Paris"
import Forum from "./Components/Forum"
import About from "./Components/About"
import SlidingOne from "./Components/SlidingOne"
import SlidingTwo from "./Components/SlidingTwo"


/* 
** This right here will be our landing page.
*/
function App() {


  return (
    <>
        <Navbar/>
        <Paris/>
        <Forum/>
        <About/>
        <SlidingOne/>
        <SlidingTwo/>
        <footer> 
          Ellison Filling is a private, independent service provider offering assitance with 
          LLC formation, EIN applications, and ITIN applications. We are not affliated with the 
          IRS or any government agency. 
          This website is operated by YN Distribution, LLC, doing business as Ellison Filings.
          YN Distribution, LLC is registered in the State of "not sure PLEASE CHANGE THIS". Some services may 
          involve collaboration with IRS-authorized Certifying Acceptance Agents(CAA), such as Pars Financials Inc., who 
          act as independent contractors assisting with ITIN verification and document preparation.
        </footer>
    </>
  );
}

export default App
