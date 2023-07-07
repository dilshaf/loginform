import React from "react";
import "./Component4.css"
function Component4(props){
    return(
        <div className="parent">

            <div>
            <img src={props.image} className="img"></img>
            </div>
            <div className="section">

        <h1 className="name">{props.name}</h1>
        <p>{props.desc}</p>
        <button className="btn">{props.button} </button>
        </div>

        </div>
    )
}
export default Component4