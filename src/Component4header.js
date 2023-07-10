import React from "react";
import "./Component4header.css"

function Component4header(props){
    return(
        <>
        <div className="first-parent">
            <div className="border">
        <img src={props.image} className="image"></img>
        </div>
        <div className="content">
        <h1 className="heading">{props.name}</h1>
        <p className="para">{props.description}</p>
        <button className="btn2">{props.text}</button>
          </div>
          </div>

         



         

       


        
        </>
    )
}
export default Component4header