import React from "react";
import "./Component5.css"

function Component5(propss) {


    console.log(propss, '-----');
    console.log(propss.v);

    return (
        <div className="box">
            <div classNam={propss.v}>

            <div className={propss.v}>
                <img src={propss.image} className="photo" style={{ width: '100%', height: '200px' }}></img>
            </div>

            <div className={propss.parent}>

                <div className={propss.t}>
                    <h1 className={propss.colorhead}
                    >{propss.name}</h1>
                </div>
                <p>{propss.description}</p>
                {/* <h1 className={propss.colorhead}></h1> */}
                <button className={propss.button} >{propss.text}</button>
            </div>
            </div>







        </div>
    )
}
export default Component5