
import MyContext from "./MyContext";
import { useContext } from "react";
import Pic1 from "../Asset/image/Fashion Magazine.jpeg";
import Pic2 from "../Asset/image/webpage1.jpeg";
import Pic3 from "../Asset/image/projects.jpeg";

export default function Projects() {
    const contextData = useContext(MyContext);
    return (<div className="container px-5 py-2" >
        <div className="col-2"></div>
        <div className="col-10">
            <div className="h1">{contextData?.project.name}</div>
        </div>
        <div className="row">
            <div className="col-12" >
                <div className="row">

                    <div className="col-6 ">

                        <div className="bold"><h4>{contextData?.project.heading1}</h4> </div>
                        {contextData?.project.para}
                    </div>
                    <div className="col-6 px-2 -y-2 ">
                        <div className="row">
                            <img src={Pic3} />
                        </div>





                    </div>
                </div>
               
                <div className="row pt-5">

                    <div className="col-6 ">
                        <div className="bold"><h4>{contextData?.project.heading2}</h4> </div>
                        {contextData?.project.para}

                    </div>
                    <div className="col-6">
                        <div className="row">
                            <img src={Pic1} />
                        </div>





                    </div>
                </div> 
                <div className="row pt-5">

                    <div className="col-6 ">
                        <div className="bold"><h4>{contextData?.project.heading3}</h4></div>
                        {contextData?.project.para}   
                     

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