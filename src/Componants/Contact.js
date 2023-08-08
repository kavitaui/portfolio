export default function contact() {
    return (
        <div className="container px-2 py-2">

            <div className="col-12 px-2 py-2">
                <div className="row"><div className="h1">Contact</div>
                </div>
                <div className="row px-2 py-2">
                    <div className="col-6 px-2 py-2">
                        Looking forward to hearing from you</div>
                    <div class="col-6 px-2 py-2">
                        <div class="row ">
                            <div class="col-6">

                                <label for="fname" class="form-label">First Name</label>
                                <div class="col-12">
                                    <input type="text" class="form-control" placeholder="first name" aria-label="first name" />
                                </div>
                            </div>
                            <div class="col-6">
                                <label for="lname" class="form-label">last Name</label>
                                <div className="col-12">
                                    <input type="text" class="form-control" placeholder="Last name" aria-label="Last name" /></div>
                            </div>

                            <div class="col-6">

                                <label for="Email" class="form-label">Email*</label>
                                <div class="col-12">
                                    <input type="text" class="form-control" placeholder="first name" aria-label="first name" />
                                </div>
                            </div>
                            <div class="col-6">
                                <label for="subject" class="form-label">Subject</label>
                                <div className="col-12">
                                    <input type="text" class="form-control" placeholder="Last name" aria-label="Last name" /></div>
                                     </div>
                                     
                        </div>
                    </div>
                </div>
            </div>
        </div>








    );
}