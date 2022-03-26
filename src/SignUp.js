/* eslint-disable react/style-prop-object */

import './SignUp.css';
import { Link, NavLink } from "react-router-dom";

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
                    <span className="nameInputs">
                        <span className="input"><label className="name" for="firstName">First Name</label><input  id="firstName" className="nameInputField" type="text" /></span>
                        <span className="input"><label className="name" for="lastName">Last Name</label><input id="lastName"  className="nameInputField" type="text" /></span>
                    </span>
                   <div className="input"><label className="name" for="emailAddress">Email address</label> <input id="emailAddress" className="emailInputField" type="text" /></div>
                   <div className="input"><label className="name" for="dob">Date of Birth</label><input  className="emailInputField" type="date" id="dob" name="dateOfBirth"></input></div>
                   <div className="input"><label className="name" for="password">Password</label> <input type="password" id="password" className="emailInputField" name="password"/></div>
            </div>
            <button className="buttonStyle">Sign Up</button>
            <div className="textBelow">
                <span>Existing user?</span>
                <Link className="nav-link" to="/login"><span class="login">Log in</span></Link>
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

export default SignUp;
