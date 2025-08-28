import { useState, useEffect } from "react"
import style from "../css_modules/Forum.module.css"

function Forum(){


    return(
        <>
            <div className="flex">
                <div className="flex-col">
                        <h1> Got Any Questions? Let Us Help</h1>
                        <ul>
                            <li>✓ Friendly, Helpful Support</li>
                            <li>✓ Quick Response</li>
                            <li>✓ Solutions Tailored to You</li>
                            <li>✓ 100% Free Assistance</li>
                        </ul>
                </div>
                {/* <!-- 
                
                Don't know how to recreate the forum here. It is alright, 
                simply just need to learn grid to re-create it.
                --> */}
                <div className="flex-col">
                        <div className={style.forum}>
                            
                        </div>
                </div>
            </div>
        </>
    )
}

export default Forum