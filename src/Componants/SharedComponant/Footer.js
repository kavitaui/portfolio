import content from "../../Asset/content.json";
export default function Footer(){
    return( 
        
           
            <div className ="container">

                < div className= "col-12 px- py-2">
                <div className= "row px-2 py-2">
                <hr className = "new1"></hr>
                  
                    <div className= "col-3 ">
                       <p> <h4>{content.footer.tele} </h4></p>
                     </div>
                    <div className="col-3 ">
                     <p><h4>{content.footer.mail}</h4></p>
                    </div>
                    <div className= "col-3  ">
                       <p><h4>{content.footer.tweet} 
                         <i className="bi bi-twitter"></i></h4></p>
                       
                    </div>
                    <div className="col-3 ">
                      <p> {content.footer.excontant} </p>
                    </div>
                </div>
            </div>
        </div>
   
    );
}