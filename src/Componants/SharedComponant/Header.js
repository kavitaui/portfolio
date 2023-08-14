
import { Link } from "react-router-dom";
import content from "../../Asset/content.json";
export default function Header(props) {
  return (
    <div className="header-wrapper">

      <div className="col-12">
        <div className="row">
          <div className="col-7 px-2 py-5" >
            <div className="row">
            
            
             
             
               <Link to={content.header.logo.url} className="kavita"  > <span className="circle"></span> {content.header.logo.name}  </Link></div>
            </div>
            
         
          <div className="col-5 px-2 py-5">
            <ul className="list-inline nav-top">
           {content.header.nav.map(item =>( <li><Link to= {item.url}>{item.name}</Link></li>))}
            </ul> 
             
         
          </div>
      </div>
    </div>
     </div>
  );
}
