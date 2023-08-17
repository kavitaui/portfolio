
import { useContext } from "react";
import { Link } from "react-router-dom";

import MyContext from "../MyContext";

export default function Header(props) {
  const contextData = useContext(MyContext);
  return (
    <div className="header-wrapper">
      <div className="col-12">
        <div className="row">
          <div className="col-7 px-2 py-5" >
            <div className="row">
              <Link to={contextData?.header.logo.url} className="kavita">
                 <span className="circle"></span> {contextData?.header.logo.name}
              </Link>
            </div>
          </div>


          <div className="col-5 px-2 py-5">
            <ul className="list-inline nav-top">
              {contextData?.header.nav.map(item => (<li><Link to={item.url}>{item.name}</Link></li>))}
            </ul>


          </div>
        </div>
      </div>
    </div>
  );
}
