export default function contact() {
    return (
        <div className="container px-2 py-2">

            <div className="col-12 px-2 py-2">
                <div className="row"><div className="h1">Contact</div>
                </div>
                <div className="row px-2 py-2">
                    <div className="col-6 px-2 py-2">
                        Looking forward to hearing from you</div>
                    <div className="col-6 px-2 py-2">
                        <div class="row px-2 py-2">
                            <div class="col-6">
                                <input type="text" class="form-control" placeholder="First name" aria-label="First name"/>
                            </div>
                            <div class="col-6">
                                <input type="text" class="form-control" placeholder="Last name" aria-label="Last name"/>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}