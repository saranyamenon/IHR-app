/* eslint-disable react/style-prop-object */
import docTask from '../../images/ehr-doc-task.png';
import { Link, NavLink } from "react-router-dom";

import './EnterId.css';


function EnterId() {
  return (
    <div className="eiIhrApp">
      <div className="eiMainContent">
        <div className="eiNavMenu">
            <span className="eiMenuItem eiLogo">IHR</span>
            <Link className="nav-link" to="/"><span className="eiMenuItem eiNavItem">Home</span></Link>
            <Link className="nav-link" to="/aboutus"><span className="eiMenuItem eiNavItem">About Us</span></Link>
            
        </div>
        <div className="eiMainHeading">
           <span className="eiTextSection">
             <div className="eiHeading">Welcome!</div>
             <div className="eiSubText">Please enter your EMR ID numbers</div>
             <div className="eiInputs">
             <div className="eiErrorMessage" id="error">Please complete required fields</div>
             <input id="emr1" className="eiEhrInputField" placeholder="FHIR Server #1 EMR ID" type="text" required/>
             <input id="emr2" className="eiEhrInputField" placeholder="FHIR Server #2 EMR ID" type="text" required/>
             <Link className="nav-link" to=""><button className="eiButtonStyle" onClick={SubmitClicked}>Submit</button></Link>
             </div>
            </span>
           <span className="eiTaskImage"><img src={docTask} className="eiTask" alt="doc with ehr"/></span>
        </div>
      <hr/>
        <div className="eiFooterSection">
                <div className="eiColumn">
                   <div className="eiMenuItem eiLogo">IHR</div>
                   <div className="eiAtIHR">2022 &copy; IHR</div>
                   <div className="eiAllRights">All rights reserved.</div>
                </div>
                <div className="eiColumn">
                       <div className="eiFooterText">Home</div>
                       <div className="eiFooterText">Contact</div>
                </div>
                <div className="eiColumn">
                       <div className="eiFooterText">Privacy Policy</div>
                       <div className="eiFooterText">Terms of Service</div>
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
            if(data === "Error: Different patients cannot be merged"){
              document.getElementById("error").innerHTML = data;
              document.getElementById("error").style.display = "block";
            }
            else if(data === "Success"){
               window.location.replace("/integratedRecord");
               
             }
            })
          
        });
        
    }
  }

export default EnterId;
