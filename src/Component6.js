import React from "react";
import "./Component6.css"
function Component6(prop){
    return(
        <>
        <div className={prop.box}>
            <div className="imagediv">
                <img src={prop.image} className={`${prop.imagestyle} ${prop.box}`}></img>
            </div>
            <div className={ `${prop.contentstyle} ${prop.section2style} ${prop.section3style} `}>
                <h1 className={prop.headingstyle}>{prop.heading}</h1>
                <p>{prop.paragraph}</p>
                <button className={prop.buttonstyle}>{prop.button}</button>
            </div>
        </div>

        </>

    )
}
export default Component6