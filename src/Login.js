import React from "react";
function Login(){
    return(
        <>
        <form className="form">
            <div>
                <input type="text" placeholder="LOGIN ID"/>
            </div>
            <div>
                <input type="password" placeholder="PASSWORD"/>
            </div>
            <div>
                <button className="b">LOG IN</button>
            </div>
        </form>
        </>
    )
}
export default Login