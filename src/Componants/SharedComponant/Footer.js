import content from "../../Asset/content.json";
export default function Footer(){
    return( 
        
           
            <div className ="container">

                < div className= "col-12 px- py-2">
                <div className= "row px-2 py-2">
                <hr className = "new1"></hr>
                  
                    <div className= "col-3 ">
                       <p> <h6>{content.footer.tele} </h6></p>
                     </div>
                    <div className="col-3 ">
                     <p><h6>{content.footer.mail}</h6></p>
                    </div>
                    <div className= "col-3  ">
                       <p><h6>{content.footer.tweet} </h6>
                         <i className="bi bi-github fs-2" ></i> <i className= "bi bi-linkedin fs-2"></i></p>
                       
                       
                    </div>
                    <div className="col-3 ">
                      <p> {content.footer.excontant} </p>
                    </div>
                </div>
            </div>
        </div>
   
    );
}