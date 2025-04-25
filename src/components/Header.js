
import { useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constants";

import { Link } from "react-router-dom";
 
const Header=()=>{
 const[btnName,setBtnName]=useState("Login")
 
  
  return(
    <div className="header">

      <img className="logo" src={LOGO_URL}/>
      <div className="nav-items">
      <ul>
        <li><Link to="/">home</Link></li>
        <li><Link to="/about" >About us</Link>
          </li>
        <li><Link to="/contact"> Contact us</Link>
         </li>
        <li>Cart</li>
        <button onClick={()=>{
         (btnName==="Login")?setBtnName("Logout"):setBtnName("Login");
        }} className="login">{btnName}</button>
      </ul>
     
      </div>
    </div>
  )
}
export default Header;