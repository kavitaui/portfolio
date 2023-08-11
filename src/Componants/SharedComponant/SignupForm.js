import React,{useState}from "react";
const SignupForm = () => {
    const [formData, setFormData]= useState({
        fname: '',
        lname:'',
        email:'',
        subject:'',
        message:''

    }); 
    const[errors,setErrors] = useState({
        fname: '',
        lname:'',
        email:'',
        subject:'',
        message:''  
    });
    const handleSubmit =(event)=>{
        event.preventDefault();
        if( validateForm()){

        }
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      };

};
export  default SignupForm;