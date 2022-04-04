/* eslint-disable react/style-prop-object */

import './LogIn.css';
import { Link, NavLink } from "react-router-dom";

function LogIn() {
  return (
    <div className="logInPage">
     <div className = "mainContent">
        <div className="navMenu">
            <span className="menuItem logo">IHR</span>
            <Link className="nav-link" to="/"><span className="menuItem navItem">Home</span></Link>
            <span className="menuItem navItem">About Us</span>
            <span className="menuItem navItem">Contact</span>
        </div>
        <div className="logInForm">
            <span className="formHeading">Log In</span>
            <div className="form">
                    <div className="input"><label className="name" htmlFor="emailAddress">Email address</label> <input id="emailAddress" className="emailInputField" type="text" /></div>
                    <div className="input"><label className="name" htmlFor="password">Password</label> <input type="password" id="password" className="emailInputField" name="password"/></div>
            </div>
            <button className="buttonStyle" onClick={loginClicked}>Log in</button>
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

function loginClicked() {
    // Simple POST request with a JSON body using fetch
   
    let body = {"emailAddress" : document.getElementById("emailAddress").value, "password" : document.getElementById("password").value};
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify(body)
    };
    fetch('https://integrated-health-records.herokuapp.com/login', requestOptions)
        .then(response => response.json());
        // .then(data => this.setState({ postId: data.id }));
  }

export default LogIn;
