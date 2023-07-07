import React from "react";
import "./Footer.css"
import Footerleft from "./Footerleft";
import Footerright from "./Footerright";
function Footer(){
    return(
        <div className="foot-parent">
          <Footerleft/>
        <Footerright/>
        </div>

    )
}
export default Footer