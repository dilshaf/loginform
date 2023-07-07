import React from "react"
function Component2(props){
    console.log(props)
    console.log(props.name)
    return(
        <>
        <p>name{props.name}</p>

        </>
    )
}
export default Component2