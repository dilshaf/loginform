import React from "react"
function Display(pros){
    console.log(pros)
    const{usernameprops,passwordprops}=pros
    return(
      <React.Fragment>

        <h1>{usernameprops}</h1>
        <h1>{passwordprops}</h1>
      </React.Fragment>
    )
}
export default Display