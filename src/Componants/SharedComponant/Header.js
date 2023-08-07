
import { Link } from "react-router-dom";
export default function Header(props) {
  return (
    <div className="header-wrapper">

      <div className="col-12">
        <div className="row">
          <div className="col-7 px-2 py-5" >
            <div className="row">
              <span className="logo-wrapper"><span className="bold logo"><span className="circle"></span>{props.value}</span> Editor</span>
            </div>

          </div>
          <div className="col-5 px-2 py-5">
            <ul className="list-inline nav-top">
              <li><Link to="/ Resume">Resume</Link></li>
              <li><i class="bi bi-4-square"></i><Link to="/projects">Project</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
      </div>
    </div>
      </div>
  );
}
