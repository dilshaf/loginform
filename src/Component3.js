import React from "react";
import "./Component3.css"
function Component3(props){
    return(
        <div className={props.class}>
            <img src={props.img}/>
            <h4>{props.name}</h4>
            <p>{props.desc}</p>
            <h4>{props.price}</h4>




         
         </div>
    )
}
export default Component3