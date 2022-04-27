/* eslint-disable react/style-prop-object */

import './LogIn.css';
import { Link, NavLink } from "react-router-dom";

function LogIn() {
  return (
    <div className="logInPage">
     <div className = "lmainContent">
        <div className="lnavMenu">
            <span className="lmenuItem llogo">IHR</span>
            <Link className="lnav-link" to="/"><span className="lmenuItem lnavItem">Home</span></Link>
            <Link className="nav-link" to="/aboutus"><span className="lmenuItem lnavItem">About Us</span></Link>
           
        </div>
        <div className="logInForm">
            <span className="lformHeading">Log In</span>
            <div className="lform">
                     <div className="lErrorMessage" id="error">Please complete required fields</div>
                    <div className="linput"><label className="lname" htmlFor="emailAddress">Email address</label> <input id="emailAddress" className="lemailInputField" type="text" /></div>
                    <div className="linput"><label className="lname" htmlFor="password">Password</label> <input type="password" id="password" className="lemailInputField" name="password"/></div>
            </div>
            <button className="lbuttonStyle" onClick={loginClicked}>Log in</button>
        </div> 
        <hr/>
        <div className="lfooterSection">
                <div className="lcolumn">
                   <div className="lmenuItem llogo">IHR</div>
                   <div className="latIHR">2022 &copy; IHR</div>
                   <div className="lallRights">All rights reserved.</div>
                </div>
                <div className="lcolumn">
                       <div className="lfooterText">Home</div>
                       <div className="lfooterText">Contact</div>
                </div>
                <div className="lcolumn">
                       <div className="lfooterText">Privacy Policy</div>
                       <div className="lfooterText">Terms of Service</div>
                </div>
        </div>
      </div> 
    </div>
  );
}

function loginClicked() {
    // Simple POST request with a JSON body using fetch
    if(document.getElementById("emailAddress").value === "" || document.getElementById("password").value === "") {
      document.getElementById("error").innerHTML = "Please complete required fields";  
      document.getElementById("error").style.display = "block";
    }
    else {
    document.getElementById("error").style.display = "none";
    let body = {"emailAddress" : document.getElementById("emailAddress").value, "password" : document.getElementById("password").value};
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify(body)
    };
    fetch('https://integrated-health-records.herokuapp.com/login', requestOptions).then(function(response){
          response.json().then(function(data) {
            console.log(data);
             if(data === "Error! Incorrect email id and password"){
               document.getElementById("error").innerHTML = data;
               document.getElementById("error").style.display = "block";
             }
             else if(data === "Success"){
               window.location.replace("/enterid");
             }
            })
          
        });
      }
        // .then(data => this.setState({ postId: data.id }));
  }

export default LogIn;
