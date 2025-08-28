import { useState, useEffect } from "react";
import "../App.css";
import FileIcon from "../assets/EllisonFilings.com.avif";


function NavBar(){


    return (
        <>
            <div className="flex-col">
                <div className="flex justify-center">
                    <img src={FileIcon}/>
                </div>
                   <div className="flex justify-center justify-evenly">
                        <h2> Affiliate Program </h2>
                        <h2> Home </h2>
                        <h2> ITIN Application </h2>
                        <h2> LLC Formations </h2>
                        <h2> EIN Service </h2>
                        <h2> About Us </h2>
                    </div>
                    <div className="flex justify-end">
                        <button className="">schedule call</button>
                    </div>
            </div>
        </>
    )
}

export default NavBar