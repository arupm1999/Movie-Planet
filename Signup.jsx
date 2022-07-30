import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import "./Signup.css"
import cookie from 'react-cookies';
import axios from 'axios';

export default function Signup(props) {
const [ fname, setFname ] = useState("");
const [ fnameerror, setFnameError ]= useState("");
const [ lname, setLname ] = useState("");
const [ lnameerror, setLnameError ] = useState("");
const [ email, setEmail] = useState("");
const [emailerror, setEmailError] = useState("");
const [ password, setPassword ] = useState("");
const [passworderror, setPasswordError] = useState("");
const [ confirmpassword, setConfirmPassword ] = useState("");
const [confirmpassworderror, setConfirmPasswordError] = useState("");
const [login, setLogin] = useState(false);
const [register, setRegister] = useState(false);

const apiCallSignup = (data) => {
  console.log(data);
  axios.post('http://localhost:81/test.php', JSON.stringify(data))
    .then(function (response) {
      console.log(response);
      if(response.data && response.data.status==="Failure"){
        setEmailError(response.data.message);
    }
    else if(response.data && response.data.status === "Success") {
        setRegister(true);
    }
  })
    .catch(function (error) {
      console.log(error);
  });

}

  const handleChange = (e) => {
   setFnameError ('');
   setLnameError('');
   setEmailError('');
   setPasswordError('');
   setConfirmPasswordError('');

    const { name, value } = e.target;
    console.log(name, value);
    switch (name) {
      case "firstname":
      setFname(value)
      break;
      default:
        break
    }
    switch (name) {
      case "lastname":
      setLname(value)
      break;
      default:
        break
    }
    switch (name) {
      case "email":
      setEmail(value)
      break;
      default:
        break
    }
    switch (name) {
      case "password":
      setPassword(value)
      break;
      default:
        break
    }
    switch (name) {
      case "confirmpassword":
      setConfirmPassword(value)
      break;
      default:
        break
    }

  };
  const handleSubmit = (e) => {
    e.preventDefault();
    let isValid = true;
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(fname.length === 0){
      setFnameError ("Firstname is required");
      isValid = false; 
    }
    if(lname.length === 0){
      setLnameError ("Lastname is required");
      isValid = false;
    }
    if(email.length === 0){
      setEmailError ("Email is required");
      isValid = false;
    }
    else if(!regex.test(email)){
    setEmailError ("This is not a valid email format");
    isValid = false;
    }
    if(password.length < 6){
      setPasswordError ("Password is required");
      isValid = false;
    }
    if(confirmpassword !== password){
      setConfirmPasswordError ("Password didn't matched");
      isValid = false;
    }
    if (isValid && fname.trim().length > 0 && lname.trim().length > 0 && email.trim().length > 0 && password.trim().length > 0)
    {
      apiCallSignup({ fname, lname, email, password })
    }
  };

  useEffect(() => {
    if(cookie.load('email')) {
        props.history.push('/action');
        setLogin(true);
    } else {
        setLogin(false);
    }
},[login, props.history]);

if(cookie.load('email')){
  return(
    <div style={{minHeight:'500px', backgroundColor:'black'}}>

    </div>
  )
}
  return (
    <div className="Signup">
       { register || <div className='container'>
     <span  className="SignupTitle">Sign Up</span>
      <form className="SignupForm" onSubmit={handleSubmit}>
      <div className='signupName'>
                    <div style={{display:'flex', flexDirection:'column', marginRight:'30px'}}>  
                    <input className='signupInput' 
                        type='text' 
                        name='firstname'
                        placeholder="first name"
                        value={fname}
                        onChange={handleChange}
                    /> 
                    <label className='signupErrorName'>{fnameerror}</label>
                    </div>
                    <div style={{display:'flex', flexDirection:'column'}}>
                    <input className='signupInput' 
                        type='text'
                        name='lastname'
                        placeholder="last name"
                        value={lname}
                        onChange={handleChange}
                    />
                    <label className='signupErrorName'>{lnameerror}</label>
                    </div>
                    </div>
                    <input className='SignupInput' 
                        type='text' 
                        name='email'
                        placeholder='email'
                        value={email}
                        onChange={handleChange}
                    />
                    <div className='signupError'>{emailerror}</div>
                    <input className='SignupInput' 
                        type='password' 
                        name='password'
                        placeholder='password'
                        value={password}
                        onChange={handleChange}
                    />
                    <div className='signupError'>{passworderror}</div>
                    <input className='SignupInput' 
                        type='password' 
                        name='confirmpassword'
                        placeholder='confirm password'
                        value={confirmpassword}
                        onChange={handleChange}
                    />
                    <div className='signupError'>{confirmpassworderror}</div>
    <button className="SignupButton" type="submit">continue</button>
    <button className="SignupSigninButton" >
   <b><u>Already have an account?</u></b><NavLink to="/signin" className= "arup"><b>Sign In</b></NavLink></button>
    </form>
    </div>
      }
      {
         register && <div style={{height:'100px', width:'300px', color:'white', display:'flex', flexDirection:'column'}}>
          <label className='registerMsg'>Registered Successfully !!!</label>
          <Link to='/signin'><button className='registerBtn'>Signin</button></Link>
                </div>
            }
    </div>
  )
}