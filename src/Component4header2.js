import React from "react";
import "./Component4header2.css"
function Component4header2(props){
    return(
        <>
        <div className="third-parent">
            <div className="border2">
         <img src={props.image2} className="image2"></img>
         </div>
        <div className="third">
        <h1 className="heading2">{props.name2}</h1>
        <p className="para2">{props.description2}</p>
        <button className="btn2">{props.text2}</button>

        </div>
        </div>


        </>
    )
}
export default Component4header2