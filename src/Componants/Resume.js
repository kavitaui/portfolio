
import { useContext } from "react";
import MyContext from "./MyContext";
export default function Resume() {
    const contextData = useContext(MyContext);
    return (

        <div className="container px-5 py-2" >
            <div className="col-2"></div>
            <div className="col-10">
                <div className="h1">{contextData?.resume.heading}</div>
            </div>
            <div className="row">
                <div className="col-12" >
                    <div className="row">

                        <div className="col-6 ">
                          
                            <div className="bold"><h4>{contextData?.resume.subheading}</h4></div>
                        </div>
                        <div className="col-6 px-2 -y-2">
                            <div className="row">
                                <div className="col-3 px-2 py-2 ">
                                    <h4>{contextData?.resume.year}</h4>
                                </div>

                                <div className="col-7 px-2 py-2 ">
                                    <span classname="bold"><h4>{contextData?.resume.company}</h4> </span>
                                   
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-3 px-2 py-2 ">
                                    <h4>{contextData?.resume.year}</h4>
                                </div>
                                <div className="col-7 px-2 py-2 ">
                                    <span classname="bold"><h5>{contextData?.resume.MainHeading}</h5> </span>
                                    <div className="font">{contextData?.resume.data}
                                       </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <hr className="new1"></hr>
            <div className="row">
                <div className="col-12" >
                    <div className="row">

                        <div className="col-6 ">
                            
                            <div className="bold"><h4>{contextData?.Edu.heading}</h4></div>
                        </div>
                        <div className="col-6 px-2 -y-2">
                            <div className="row">
                                <div className="col-3 px-2 py-2 ">
                                   <h4>{contextData?.Edu.year}</h4> 
                                </div>

                                <div className="col-7 px-2 py-2 ">
                                    <span classname="bold"><h4>{contextData?.Edu.Mainheading}</h4> </span>
                                    <div className="font">{contextData?.Edu.data2}
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-3 px-2 py-2 ">
                                   <h4>{contextData?.Edu.yearduration} </h4>
                                </div>
                                <div className="col-7 px-2 py-2 ">
                                    <span classname="bold"><h4>{contextData?.Edu.heading2}</h4> </span>
                                    <div className="font">
                                    {contextData?.Edu.data3}  </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <hr className="new1" ></hr>
            <div className="row">

                <div className="col-6 ">



                    <div className="bold"> <h4> {contextData?.skill.heading}
                       </h4></div>
                </div>
                <div className="col-6 px-2 -y-2">
                    <div className="row">
                        <div className="col-3 px-2 py-2 ">
                            <h4>{contextData?.skill.year}</h4>
                        </div>

                        <div className="col-7 px-2 py-2 ">
                            <span classname="bold"><h4>{contextData?.skill.MainHeading}</h4></span>
                            <div className="font">
                           { contextData?.skill.data1}</div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-3 px-2 py-2 ">
                            <h4>{contextData?.skill.year}</h4>
                        </div>
                        <div className="col-7 px-2 py-2 ">
                            <span classname="bold"><h4>{contextData?.skill.heading2}</h4></span>
                            <div className="font">{contextData?.skill.data}
                                </div>
                        </div>
                    </div>

                </div>
            </div>


        </div>


    )
}