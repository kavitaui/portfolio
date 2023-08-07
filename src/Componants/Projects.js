import Pic1 from "../Asset/image/Fashion Magazine.jpeg";
import Pic2 from "../Asset/image/webpage1.jpeg";
import Pic3 from "../Asset/image/projects.jpeg";
export default function Projects() {
    return (<div className="container px-5 py-2" >
        <div className="col-2"></div>
        <div className="col-10">
            <div className="h1">Projects</div>
        </div>
        <div className="row">
            <div className="col-12" >
                <div className="row">

                    <div className="col-6 ">

                        <div className="bold">Project Name 01</div>
                        I'm a paragraph. Click here to add your own text and edit
                        me. It’s easy. Just click “Edit Text” or double click me
                        to add your own content and make changes to the font. I’m
                        a great place for you to tell a story and let your users
                        know a little more about you.

                    </div>
                    <div className="col-6 px-2 -y-2 ">
                        <div className="row">
                            <img src={Pic3} />
                        </div>





                    </div>
                </div>
               
                <div className="row pt-5">

                    <div className="col-6 ">
                        <div className="bold">Project Name 02</div>
                        I'm a paragraph. Click here to add your own text and edit
                        me. It’s easy. Just click “Edit Text” or double click me
                        to add your own content and make changes to the font. I’m
                        a great place for you to tell a story and let your users
                        know a little more about you.

                    </div>
                    <div className="col-6">
                        <div className="row">
                            <img src={Pic1} />
                        </div>





                    </div>
                </div> 
                <div className="row pt-5">

                    <div className="col-6 ">
                        <div className="bold">Project Name 03</div>
                        I'm a paragraph. Click here to add your own text and edit
                        me. It’s easy. Just click “Edit Text” or double click me
                        to add your own content and make changes to the font. I’m
                        a great place for you to tell a story and let your users
                        know a little more about you.

                    </div>
                    <div className="col-6">
                        <div className="row">
                            <img src={Pic2} />
                        </div>





                    </div>
                </div>
            </div>
        </div>


    </div>);
}