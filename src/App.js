import "./styles.css";
import Header from "./Componants/SharedComponant/Header";
import Footer from "./Componants/SharedComponant/Footer";
import HomeComponant from "./Componants/HomeComponant";
import {Outlet} from 'react-router-dom'
import { useState } from "react";
export default function App() {
  const [fname, setFname] = useState('Kavita Pandey');
  const [lname, setLname] = useState('hello');
  const clickMe = function(name){
    alert("click me");
    setFname(name);
  
  }
  const clickMe2 = function(name){
    alert("click me");
   
    setLname(name);
  }


  return (
    
    <div className="container-fluid">
      <Header value={fname} message = {clickMe}/>
      <Outlet />
      <Footer />

    
    </div>
  );
}
