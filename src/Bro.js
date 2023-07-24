import React from 'react'
import "./Bro.css"
function Bro(){
    const data='of website'
    return(
        <>
        <h1 style={{backgroundColor:"yellow",color:"red"}} className='heading'>This is a heading{data}</h1>
        <Type/>
        </>
    )
}
export default Bro

function Type(){
    return(
        <>
        <h1 style={{backgroundColor:"green",color:"blue"}}>This is a paragraph</h1>
        </>
    )
}