import {useState } from 'react';
import './Form.css';
function Form () {

const initialData = {username:"", email:"", password:""};
const [formData, setFormData] = useState(initialData);
const [errors, setErrors] = useState("");
const [isSubmit, setIsSubmit] = useState(false);


function handleChange (e) {
   
    const {name, value} = e.target;
    // console.log(name)
    setFormData({...formData, [name]:value});
    // console.log(formData);

}

function handleSubmit (e) {
    e.preventDefault();
    // console.log("Form Submitted Successfully");
    setErrors(validateForm(formData));
    setIsSubmit(true);
    
}

function validateForm (data){

    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/ ;
    const errors = {};
    if(!data.username){
        errors.username = "Please enter the Username!";
    }else if(data.username.length<6){
        errors.username = "Username Length Should Be At Least 6 Characters Long!";
    }
    if(!data.email){
        errors.email = "Please enter the Email!";
    }else if(!emailRegex.test(data.email)){
        errors.email = "Please Enter a Valid Email Format!";
    }
    if(!data.password){
        errors.password = "Please enter the Password!";
    }else if(data.password.length<6){
        errors.password = "Password Length Should Be At Least 6 Characters Long!";
    }

    return errors;

}

return (
    <div className="form-container">
       {Object.keys(errors).length === 0 && isSubmit && (<span className='success-message'>Form Submitted Successfully!</span>)} 
    <h1 className="header">Login Form</h1>
    <form method="post">
        <div className="form-input">
              
        <label htmlFor="username">Username</label>
        <input type="text" id="username" name="username" onChange={handleChange} value={formData.username} />
        <p className='error-message'>{errors.username}</p>
        <label htmlFor="email">Email</label>
        <input type="text" id="email" name="email" onChange={handleChange} value={formData.email} />
        <p className='error-message'>{errors.email}</p>
        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" value={formData.password} onChange={handleChange}/>
        <p className='error-message'>{errors.password}</p>
        

        </div>
      
        <div className="button">
        <button type="submit" onClick={handleSubmit}>Login</button>
        </div>
    </form>
    </div>
)
}
export default Form;