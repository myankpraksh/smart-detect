import React from "react";
import Tilt from 'react-parallax-tilt';
import logoImg from "./logo4.png"
const Logo = ()=>{
return(
    <Tilt  style={{width : "max-content"}} className="ma3 br2 shadow-2">
    <div >
    <img src={logoImg} alt="logo" style={{ height: '120px', width : "auto"}}/>
    </div>
  </Tilt>
   
);
};

export default Logo;

