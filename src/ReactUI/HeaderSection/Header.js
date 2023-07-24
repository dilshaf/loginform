import React from "react"
import "./Header.css"
import Headerleft from "./Headerleft"
import Headerright from "./Headerright"




function Header(){
    return(
      <div className="big-parent">
      <Headerleft/>
     

      <Headerright/>
      
      

      </div>
    )
}



export default Header
