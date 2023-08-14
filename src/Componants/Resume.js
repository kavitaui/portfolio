import content from "../Asset/content.json";
export default function Resume() {
    return (

        <div className="container px-5 py-2" >
            <div className="col-2"></div>
            <div className="col-10">
                <div className="h1">{content.resume.heading}</div>
            </div>
            <div className="row">
                <div className="col-12" >
                    <div className="row">

                        <div className="col-6 ">
                          
                            <div className="bold"><h4>{content.resume.subheading}</h4></div>
                        </div>
                        <div className="col-6 px-2 -y-2">
                            <div className="row">
                                <div className="col-3 px-2 py-2 ">
                                    <h4>{content.resume.year}</h4>
                                </div>

                                <div className="col-7 px-2 py-2 ">
                                    <span classname="bold"><h4>{content.resume.company}</h4> </span>
                                   
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-3 px-2 py-2 ">
                                    <h4>{content.resume.year}</h4>
                                </div>
                                <div className="col-7 px-2 py-2 ">
                                    <span classname="bold"><h5>{content.resume.MainHeading}</h5> </span>
                                    <div className="font">{content.resume.data}
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
                            
                            <div className="bold"><h4>{content.Edu.heading}</h4></div>
                        </div>
                        <div className="col-6 px-2 -y-2">
                            <div className="row">
                                <div className="col-3 px-2 py-2 ">
                                   <h4>{content.Edu.year}</h4> 
                                </div>

                                <div className="col-7 px-2 py-2 ">
                                    <span classname="bold"><h4>{content.Edu.Mainheading}</h4> </span>
                                    <div className="font">{content.Edu.data2}
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-3 px-2 py-2 ">
                                   <h4>{content.Edu.yearduration} </h4>
                                </div>
                                <div className="col-7 px-2 py-2 ">
                                    <span classname="bold"><h4>{content.Edu.heading2}</h4> </span>
                                    <div className="font">
                                    {content.Edu.data3}  </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <hr className="new1" ></hr>
            <div className="row">

                <div className="col-6 ">



                    <div className="bold"> <h4> {content.skill.heading}
                       </h4></div>
                </div>
                <div className="col-6 px-2 -y-2">
                    <div className="row">
                        <div className="col-3 px-2 py-2 ">
                            <h4>{content.skill.year}</h4>
                        </div>

                        <div className="col-7 px-2 py-2 ">
                            <span classname="bold"><h4>{content.skill.MainHeading}</h4></span>
                            <div className="font">
                           { content.skill.data1}</div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-3 px-2 py-2 ">
                            <h4>{content.skill.year}</h4>
                        </div>
                        <div className="col-7 px-2 py-2 ">
                            <span classname="bold"><h4>{content.skill.heading2}</h4></span>
                            <div className="font">{content.skill.data}
                                </div>
                        </div>
                    </div>

                </div>
            </div>


        </div>


    )
}