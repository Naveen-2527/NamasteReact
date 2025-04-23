
import { useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constants";


 
const Header=()=>{
 const[btnName,setBtnName]=useState("Login")
 
  
  return(
    <div className="header">

      <img className="logo" src={LOGO_URL}/>
      <div className="nav-items">
      <ul>
        <li>home</li>
        <li>About us</li>
        <li>Contact us</li>
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