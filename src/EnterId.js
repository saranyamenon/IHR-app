/* eslint-disable react/style-prop-object */
import docTask from './images/ehr-doc-task.png';
import { Link, NavLink } from "react-router-dom";

import './EnterId.css';


function EnterId() {
  return (
    <div className="IhrApp">
      <div className="mainContent">
        <div className="navMenu">
            <span className="menuItem logo">IHR</span>
            <Link className="nav-link" to="/"><span className="menuItem navItem">Home</span></Link>
            <span className="menuItem navItem">About Us</span>
            <span className="menuItem navItem">Contact</span>
        </div>
        <div className="mainHeading">
           <span className="textSection">
             <div className="heading">Welcome!</div>
             <div className="subText">Please enter your EMR ID numbers</div>
             <div className="inputs">
             <div className="errorMessage" id="error">Please complete required fields</div>
             <input id="emr1" className="ehrInputField" placeholder="FHIR Server #1 EMR ID" type="text" required/>
             <input id="emr2" className="ehrInputField" placeholder="FHIR Server #2 EMR ID" type="text" required/>
             <Link className="nav-link" to=""><button className="buttonStyle" onClick={SubmitClicked}>Submit</button></Link>
             </div>
            </span>
           <span className="taskImage"><img src={docTask} className="task" alt="doc with ehr"/></span>
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

function SubmitClicked() {
  
    // Simple POST request with a JSON body using fetch
    if(document.getElementById("emr1").value === "" || document.getElementById("emr2").value === "") {
      document.getElementById("error").innerHTML = "Please complete required fields";  
      document.getElementById("error").style.display = "block";
    }
    else {
    document.getElementById("error").style.display = "none";
   
    let body = {"medicalID1" : document.getElementById("emr1").value, "medicalID2" : document.getElementById("emr2").value};
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
    };
    fetch('https://integrated-health-records.herokuapp.com/merge', requestOptions).then(function(response){
          response.json().then(function(data) {
             console.log(data);
            
            })
          
        });
        // .then(data => this.setState({ postId: data.id }));
    }
  }

export default EnterId;
