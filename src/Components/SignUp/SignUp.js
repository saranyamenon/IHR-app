/* eslint-disable react/style-prop-object */

import './SignUp.css';
import { Link, NavLink, Navigate, useNavigate } from "react-router-dom";
import { Component } from 'react';


function SignUp() {
  
  return (
    <div className="signUpPage">
     <div className = "suMainContent">
        <div className="suNavMenu">
            <span className="suMenuItem suLogo">IHR</span>
            <Link className="nav-link" to="/"><span className="suMenuItem suNavItem">Home</span></Link>
            <span className="suMenuItem suNavItem">About Us</span>
            <span className="suMenuItem suNavItem">Contact</span>
        </div>
        <div className="signUpForm">
            <span className="suFormHeading">Sign Up</span>
            <div className="suForm">
              <div className="suErrorMessage" id="error">Please complete required fields</div>
                    <span className="suNameInputs">
                        <span className="suInput"><label className="suName" htmlFor="firstName">First Name</label><input  id="firstName" className="suNameInputField" type="text" /></span>
                        <span className="suInput"><label className="suName" htmlFor="lastName">Last Name</label><input id="lastName"  className="suNameInputField" type="text" /></span>
                    </span>
                   <div className="suInput"><label className="suName" htmlFor="emailAddress">Email address</label> <input id="emailAddress" className="suEmailInputField" type="text" required/></div>
                   <div className="suInput"><label className="suName" htmlFor="dob">Date of Birth</label><input  className="suEmailInputField" type="date" id="dob" name="dateOfBirth"></input></div>
                   <div className="suInput"><label className="suName" htmlFor="password">Password</label> <input type="password" id="password" className="suEmailInputField" name="password" required/></div>
            </div>
            <button className="suButtonStyle" onClick={SignUpClicked} >Sign Up</button>
            <div className="suTextBelow">
                <span>Existing user?</span>
                <Link className="nav-link" to="/login"><span className="suLogin">Log in</span></Link>
            </div>
        </div> 
        <hr/>
        <div className="suFooterSection">
                <div className="suColumn">
                   <div className="suMenuItem suLogo">IHR</div>
                   <div className="suAtIHR">2022 &copy; IHR</div>
                   <div className="suAllRights">All rights reserved.</div>
                </div>
                <div className="suColumn">
                       <div className="suFooterText">Home</div>
                       <div className="suFooterText">Contact</div>
                </div>
                <div className="suColumn">
                       <div className="suFooterText">Privacy Policy</div>
                       <div className="suFooterText">Terms of Service</div>
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
