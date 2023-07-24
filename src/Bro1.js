import React, { useState } from "react";
import Broprops from "./Broprops";
function Bro1(){
    const[count,setCount]=useState(0)
    function addCount(){
        setCount(count+1);
        console.log(count)
    }
  
    let obj={
        name:'1 counter',
        count
        
    }
    let obj1={
        name:'second counter',
        count
        
    }

    return(
        <>
        <button onClick={addCount}>Add</button>
        <Broprops {...obj}/>
        <Broprops {...obj1} />
        <Broprops {...obj}/>
        <Broprops {...obj}/>

        </>
    )
}
export default Bro1