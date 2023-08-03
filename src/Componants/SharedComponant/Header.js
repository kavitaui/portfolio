export default function Header() {
  return (
    <>

      <div className="col-12">
        <div className="row">
          <div className="col-7 px-2 py-5" >
            <div className="row">
              <span className="logo-wrapper"><span className="bold logo"><span className="circle"></span>Kavita Pandey</span> Editor</span>
            </div>

          </div>
          <div className="col-5 px-2 py-5">
            <ul className="list-inline nav-top">
              <li><a href="">Resume</a></li>
              <li><a href="">Project</a></li>
              <li><a href="">Contact</a></li>
            </ul>
          </div>
      </div>
    </div>
      </>
  );
}
