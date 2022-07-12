import React from "react";
import { name, city } from "../data/data.js";
import "../../src/index.css"
function Home() {
  // update the JSX being returned!
  return <div id="home"> 
  <h1 className="firebricks" style={{color:"firebrick"}}>{name} is a Web Developer from {city}</h1>
  Home</div>;
}

export default Home;
