import { useState } from "react";


export default function contact() {
    const [suceessMsg, setSucessMsg] = useState("");

    const [formData, setFormData] = useState({
        fname: '',
        lname: '',
        email: '',
        subject: '',
        message: ''

    });
    const [errors, setErrors] = useState({
        fname: '',
        lname: '',
        email: '',
        subject: '',
        message: ''
    });
    const handleSubmit = (e) => {
        e.preventDefault();

        if (validateForm()) {
          setSucessMsg("Thank you for sharing details!!, we will get back to you soon.")
            setFormData( {fname: '',
            lname: '',
            email: '',
            subject: '',
            message: '' })
         setTimeout(() => {
            setSucessMsg('')
         }, 3000);            


            
        }
    };
    const handleChange = (e) => {

        const name = e.target.name;
        const value = e.target.value;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const validateForm = () => {

        let isValid = true;
        const newErrors = { ...errors };

        // Validation logic for each field
        if (formData.fname.trim() === '') {
            newErrors.fname = 'fName is required';


            isValid = false;
        }
        else {
            newErrors.fname = '';
        }
        if (formData.lname.trim() === '') {
            newErrors.lname = 'lName is required';
            isValid = false;
        }
        else {
            newErrors.lname = '';

        }
        if (formData.email.trim() === '') {
            newErrors.email = 'email is required';
            isValid = false;
        }
        else {
            newErrors.email = '';

        }
        if (formData.subject.trim() === '') {
            newErrors.subject = 'subject is required';
            isValid = false;
        }
        else {
            newErrors.subject = '';

        }
        if (formData.message.trim() === '') {
            newErrors.message = 'message is required';
            isValid = false;
        }
        else {
            newErrors.message = '';

        }




        setErrors(newErrors);
        return isValid;
    };















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
                                        <input type="text" onChange={handleChange} className="form-control" placeholder="first name" aria-label="first name" name="fname" value={formData.fname}/>
                                        <p>{errors.fname.length > 0 ? errors.fname : null}</p>
                                    </div>
                            </div>
                            <div className="col-6">
                                <label for="lname" className="form-label"><h5>Last Name</h5></label>
                                <div className="col-12">
                                    <input type="text" onChange={handleChange} className="form-control" placeholder="Last name" aria-label="Last name" name="lname" value={formData.lname}/></div>
                                <p>{errors.lname.length > 0 ? errors.lname : null}</p>
                            </div>

                            <div className="col-6">

                                <label for="Email" className="form-label"><h5>Email*</h5></label>

                                <div className="col-12">
                                    <input type="text" onChange={handleChange} className="form-control" placeholder="email" name="email" aria-label="first name" value={formData.email}/>
                                    <p>{errors.email.length > 0 ? errors.email : null}</p>
                                </div>
                            </div>
                            <div className="col-6">
                                <label for="subject" className="form-label"><h5>Subject</h5></label>
                                <div className="col-12">
                                    <input type="text" onChange={handleChange} className="form-control" placeholder="subject" name="subject" aria-label="subject" value={formData.subject}/></div>
                                <p>{errors.subject.length > 0 ? errors.subject : null}</p>
                            </div>
                            <div className="col-6">
                                <label for="message" className="form-label"><h5>Message</h5></label>
                                <div className="col-12">
                                    <textarea className="form-control" onChange={handleChange} value={formData.message} name="message" style={{ Height: '200px', resize: 'vertical' }}
                                        rows="6" cols="50" id="FormControlInput1" />
                                    <p>{errors.message.length > 0 ? errors.message : null}</p>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="mt-4"> <button className="resume" onClick={handleSubmit}>Submit</button> </div>
                            </div>
                                <p>{suceessMsg.length?suceessMsg:null}</p>
                        </div>

                    </div>

                </div>
               </div>
            </div>
        








    );
}