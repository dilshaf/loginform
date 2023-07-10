import React from "react";
import "./Component4header.css"

function Component4header(props){
    return(
        <>
        <img src={props.image} className="image"></img>
        <div className="content">
        <h1 className="heading">{props.name}</h1>
        <p className="para">{props.description}</p>
        <button className="btn2">{props.text}</button>
          </div>

         



         

       


        
        </>
    )
}
export default Component4header