import React, { useState } from "react";
import Form1 from "./Form1"
import Display from "./Display"
function App1(){
    let[username,setUsername]=useState()
    let[password,setPassword]=useState()

    const getValue=(usernameValue,passwordValue)=>{
        setUsername(usernameValue)
        setPassword(passwordValue)
        console.log(`Username:${usernameValue} password:${passwordValue}`)
    }
    return(
        <>
        <div>
            <Form1 myfun={getValue}/>
            <Display usernameprops={username} passwordprops={password}/>
        </div>

        </>
    )
}
export default App1