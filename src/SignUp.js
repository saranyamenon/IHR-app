/* eslint-disable react/style-prop-object */

import './SignUp.css';
import { Link, NavLink, Navigate, useNavigate } from "react-router-dom";
import { Component } from 'react';


function SignUp() {
  
  return (
    <div className="signUpPage">
     <div className = "mainContent">
        <div className="navMenu">
            <span className="menuItem logo">IHR</span>
            <Link className="nav-link" to="/"><span className="menuItem navItem">Home</span></Link>
            <span className="menuItem navItem">About Us</span>
            <span className="menuItem navItem">Contact</span>
        </div>
        <div className="signUpForm">
            <span className="formHeading">Sign Up</span>
            <div className="form">
              <div className="errorMessage" id="error">Please complete required fields</div>
                    <span className="nameInputs">
                        <span className="input"><label className="name" htmlFor="firstName">First Name</label><input  id="firstName" className="nameInputField" type="text" /></span>
                        <span className="input"><label className="name" htmlFor="lastName">Last Name</label><input id="lastName"  className="nameInputField" type="text" /></span>
                    </span>
                   <div className="input"><label className="name" htmlFor="emailAddress">Email address</label> <input id="emailAddress" className="emailInputField" type="text" required/></div>
                   <div className="input"><label className="name" htmlFor="dob">Date of Birth</label><input  className="emailInputField" type="date" id="dob" name="dateOfBirth"></input></div>
                   <div className="input"><label className="name" htmlFor="password">Password</label> <input type="password" id="password" className="emailInputField" name="password" required/></div>
            </div>
            <button className="buttonStyle" onClick={SignUpClicked} >Sign Up</button>
            <div className="textBelow">
                <span>Existing user?</span>
                <Link className="nav-link" to="/login"><span className="login">Log in</span></Link>
            </div>
        </div> 
        <hr/>
        <div className="footerSection">
                <div className="column">
                   <div className="menuItem logo">IHR</div>
                   <div className="atIHR">2022 &copy; IHR</div>
                   <div className="allRights">All rights reserved.</div>
                </div>
                <div className="column">
                       <div className="footerText">Home</div>
                       <div className="footerText">Contact</div>
                </div>
                <div className="column">
                       <div className="footerText">Privacy Policy</div>
                       <div className="footerText">Terms of Service</div>
                </div>
        </div>
      </div> 
    </div>
  );
}

function SignUpClicked() {
  // Simple POST request with a JSON body using fetch
  if(document.getElementById("emailAddress").value === "" || document.getElementById("password").value === "") {
    document.getElementById("error").innerHTML = "Please complete required fields";  
    document.getElementById("error").style.display = "block";
  }
  else {
  document.getElementById("error").style.display = "none";
 
  let body = {"firstName" : document.getElementById("firstName").value, "lastName" : document.getElementById("lastName").value, "emailAddress" : document.getElementById("emailAddress").value, "dateOfBirth" : document.getElementById("dob").value, "password" : document.getElementById("password").value};
 
  const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body)
  };
  
  fetch('https://integrated-health-records.herokuapp.com/signUp', requestOptions).then(function(response){
   
        response.json().then(function(data) {
           console.log(data);
           if(data === "Error! Email Address exists"){
             document.getElementById("error").innerHTML = data;
             document.getElementById("error").style.display = "block";
           }
           else if(data === "Success"){
             window.location.replace("/enterid");
              
           }
          })
        
      });
      // .then(data => this.setState({ postId: data.id }));
  }
}

export default SignUp;
