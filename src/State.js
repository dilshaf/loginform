import React,{useState} from "react";
function State(){
    const [state,setState]=useState(0)
    return(
        <div style={{textAlign:"center"}}>
            <h1>{state}</h1>
            <button
            onClick={
                function name(params){
                    console.log('button clicked')
                    setState(state+1)
                }
            }
            >Increment-</button> 

            
            <button
            onClick={
                function name(params){
                    console.log("button clicked")
                    setState(state-1)
                }
            }
            >Decrement -</button>
        </div>
    )
}
export default State