import { useState, useEffect } from "react"
import style from "../css_modules/paris.module.css"
import aboutPicture from "../assets/About.avif";

function About(){

    return(
        <>    <div className="flex-row`">
        <div className="flex-row">
            <button>ITIN</button>
            <button>Obtain EIN Without SSN</button>
            <button> Business Management Filing</button>
            <button>Accounting</button>
        </div>
         <div className={style.About}>
                <h2>ITIN Filing Services</h2>
                <p> Your dedicated Certified Acceptance Agent will guide
                    you through every step and careffully review your application
                    to reduce the risk of rejection. You won't need to mail your passport. 
                    - Certified Accpetance Agents are authorized and trianed by the IRS to verify 
                    and accept your documents directly.
                </p>
                <a>Get Started</a>
                <img src={aboutPicture}/>
        </div>
    </div>
    </>

    )
}

export default About