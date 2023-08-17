
import MyContext from "../MyContext";
import { useContext } from "react";
export default function Footer(){

  const contextData = useContext(MyContext);
    return( 
        
           
            <div className ="container">

                < div className= "col-12 px- py-2">
                <div className= "row px-2 py-2">
                <hr className = "new1"></hr>
                  
                    <div className= "col-3 ">
                       <p> <h6>{contextData?.footer.tele} </h6></p>
                     </div>
                    <div className="col-3 ">
                     <p><h6>{contextData?.footer.mail}</h6></p>
                    </div>
                    <div className= "col-3  ">
                       <p><h6>{contextData?.footer.tweet} </h6>
                         <a href="https://github.com/kavitaui" > <i className="bi bi-github fs-2" ></i></a>
                         <a href="https://www.linkedin.com/in/kavita-pandey-9b2102134/" >  <i className= "bi bi-linkedin fs-2"></i></a></p>
                       
                       
                    </div>
                    <div className="col-3 ">
                      <p> {contextData?.footer.excontant} </p>
                    </div>
                </div>
            </div>
        </div>
   
    );
}