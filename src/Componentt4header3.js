import React from "react";
import "./Component4header3.css"
function Componentt4header3(props){
    return(
        <>
         <div className="fourth-parent">
            <div className="border3">
         <img src={props.image3} className="image3"></img>
         </div>
        <div className="fourth">
        <h1 className="heading3">{props.name3}</h1>
        <p className="para3">{props.description3}</p>
        <button className="btn3">{props.text3}</button>

        </div>
        </div>

        </>
    )
}
export default Componentt4header3