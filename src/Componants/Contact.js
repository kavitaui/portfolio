export default function contact()

{
    return (
        <div className="container px-2 py-2">

            <div className="col-12 px-2 py-2">
                <div className="row"><div className="h1">Contact</div>
                </div>
                <div className="row px-2 py-2">
                    <div className="col-6 px-2 py-2">
                        Looking forward to hearing from you
                        <div><h5>Phone </h5>
                        123-456-7890</div>
                        <div><h5>Email:</h5>
                        info@mysite.com</div>
                        </div>
                    <div className="col-6 px-2 py-2">
                        <div className="row ">
                            <div className="col-6">

                                <label for="fname" className="form-label"><h5>First Name</h5></label>
                                <div className="col-12">
                                    <input type="text" className="form-control" placeholder="first name" aria-label="first name" />
                                </div>
                            </div>
                            <div className="col-6">
                                <label for="lname" className="form-label"><h5>Last Name</h5></label>
                                <div className="col-12">
                                    <input type="text" className="form-control" placeholder="Last name" aria-label="Last name" /></div>
                            </div>

                            <div className="col-6">

                                <label for="Email" className="form-label"><h5>Email*</h5></label>
                                <div className="col-12">
                                    <input type="text" className="form-control" placeholder="email" aria-label="first name" />
                                </div>
                            </div>
                            <div className="col-6">
                                <label for="subject" className="form-label"><h5>Subject</h5></label>
                                <div className="col-12">
                                    <input type="text" className="form-control" placeholder="subject" aria-label="subject" /></div>
                                     </div>
                                     <div className="col-6">
                                <label for="message" className="form-label"><h5>Message</h5></label> 
                                <div className="col-12">
                                  <textarea className ="form-control" style={{Height:'200px',resize:'vertical'}}
                                  rows ="6" cols ="50" id="FormControlInput1" />

                                </div>
                                </div> 
                                <div className="col-6">
                                <div className="mt-4"> <button className ="resume">Submit</button> </div> 
                                    </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>








    );
}