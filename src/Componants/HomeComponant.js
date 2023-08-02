import image from "../Asset/image/images.jpeg"

export default function HomeComponant(){
    return(
        <div className="container">
        <div className="col-12">
          <div className="row">
            <div className="col-1 px-2 py-2"></div>
            <div className="col-9 px-2 py-2">
                <div className = "row" >
                    <div className="col-6 px-2 py-2"> 
                      <img className = "pic" src={image} />
                    </div>
                    <div className="col-6 px-2 py-2"><span className = "h1">hello</span>
                  <div> <span className ="bold">A Bit About Me </span></div>
                  <div>I'm a paragraph. Click here to add your own text and edit me.I'm a great place for 
                    you to tell a story and let your users to know a little more about you.</div> 
                   <div className="mt-4"> <button className ="resume">Resume</button>
                    <button className ="projects mx-2" >projects</button>
                    <button className ="contact">contact</button></div>
                </div>
                </div>
            </div>
            <div className="col-1 px-2 py-2"></div>
          </div>
        </div>
      </div>
    );
}