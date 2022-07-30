import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import "./Signin.css";
import cookie from 'react-cookies';
import axios from 'axios';



export default function Signin(props) {
console.log(props)
const [ email, setEmail] = useState("");
const [emailerror, setEmailError] = useState("");
const [ password, setPassword ] = useState("");
const [passworderror, setPasswordError] = useState("");
const [login, setLogin] = useState(false);

const apiCallSignin = (data) => {
  console.log(data);
  axios.post('http://localhost:81/signin.php', JSON.stringify(data))
    .then(function (response) {
      console.log(response);
      if(response.data && response.data.status === "Success") {
        console.log(response.data.firstname);
        console.log(response.data.email);
        cookie.save('firstname', response.data.firstname, {path: '/'});
        cookie.save('email', response.data.email, {path: '/'});
        console.log(cookie.load('firstname'));
        console.log(cookie.load('email'));
        props.history.push("/");
    }
    else if(response.data && response.data.status === "Failure") {
        setEmailError(response.data.message);
        setPasswordError(response.data.message);
    }
  })
    .catch(function (error) {
      console.log(error);
  });
}

const handleChange = (e) => {
  setEmailError('');
  setPasswordError('');
  

const { name, value } = e.target;
    console.log(name, value);
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
};

const handleSubmit = (e) => {
  e.preventDefault();
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if(email.length === 0){
    setEmailError ("Email is required");
  }
  else if(!regex.test(email)){
    setEmailError ("This is not a valid email format");
    }
  if(password.length < 6){
    setPasswordError ("Password is required");
    return;
  }

  apiCallSignin({email, password})

  // cookie.save('email', email, { path: '/' });
  // cookie.save('reload', true, { path: '/'});
  // props.history.push("/");
  };

  useEffect(() => {
    if(cookie.load('email')) {
        props.history.push('/');
        setLogin(true);
    } else {
        setLogin(false);
    }
},[login, props.history]);

if(cookie.load('email')){
  return(
  <div style={{minHeight:'500px', backgroundColor:'black'}}>

  </div>
  )}
  return (
      <div className="Signin">
      <span className="SigninTitle">Welcome Back</span>
      <form className="SigninForm" onSubmit={handleSubmit}>
        <input type="email" className="SigninInput" name="email" placeholder="email" value={ email } onChange={handleChange}/><label style={{color: 'red'}}>{ emailerror }</label>
        <input type="password" className="SigninInput" name="password" placeholder="password" value={ password } onChange={handleChange}/><label style={{color: 'red'}}>{ passworderror }</label>
        <button className="css"><b><u>Fotgot your password?</u></b></button>
    <button className="SigninButton">sign in</button>
    <button className="SigninSignupButton"><NavLink to="/signup" className= "SigninSignupButton"><b>Create an account here</b></NavLink>
      </button>
      </form>
    </div>
    )}

