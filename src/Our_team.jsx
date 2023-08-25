import React from "react";
import image from "../src/images/gdsc_team.jpg";
function Img(){
    return(<div>
        <div className="team">
        <h1 >Our Team</h1>
            </div>  
            <div className="img"> <img className="Team" src={image} alt="Team Photo"></img></div>
        </div>
    )
}

export default Img;