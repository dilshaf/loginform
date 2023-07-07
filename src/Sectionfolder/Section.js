import React from "react"
import "./Section.css"
import Sectionleft from "./Sectionleft"
import Sectionright from "./Sectionright"
function Section(){
    return(
        <div className="sec-parent">

        <Sectionleft/>

       <Sectionright/>
       
        </div>

    )
}
export default Section