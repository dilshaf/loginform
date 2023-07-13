import React from "react";
function Signup(){
    return(
        <>
        <form className="form">
            <div>
                <input type="text" placeholder="NEW LOGIN ID"/>
            </div>
            <div>
                <input type="password" placeholder="NEW PASSWORD"/>
            </div>
            <div>
                <input type="password" placeholder="RE-ENTER PASSWORD"/>
            </div>
            <div className="up">
                <button className="btn2">SIGN UP</button>
            </div>
        </form>
        </>
    )
}
export default Signup