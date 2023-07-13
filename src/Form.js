import React,{useState} from "react";
import Login from "./Login";
import Signup from "./Signup";
import "./Form.css"
// import { Form } from "react-bootstrap";
function Form(){
    const [state,setState]=useState(false)
    return(
        <div className="main">
            <div className="button">
            <button
            onClick={
                function name(params){
                    console.log('clicked')
                    setState(true)
                }

            }
            className="login">LOG IN</button>

            <button
            onClick={
                function name(params){
                    console.log('click...')
                    setState(false)
                }
            }
            className="signup">SIGN UP</button>
            </div>

            {state? <Login /> : <Signup />}
        </div>
    )
}
export default Form