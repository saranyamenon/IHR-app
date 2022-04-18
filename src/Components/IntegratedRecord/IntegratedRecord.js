/* eslint-disable react/style-prop-object */
import { Link, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import './IntegratedRecord.css';



function IntegratedRecord() {
  let [patient, setPatient] = useState("");

  useEffect(() => {
    let mounted = true;  
    const fetchData = async () => {
      const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    };
    if(mounted && !patient){
      fetch('https://integrated-health-records.herokuapp.com/mergeRecord', requestOptions).then(function(response){
       
        response.json().then(function(data) {
          setPatient(data);
          console.log(data);


        })
        
      });
     }
    };

    fetchData();
    if(patient) {
    for(let i=0;i<patient.name.length;i++) {
      if(i!==0) {
      var clone = document.getElementById("name").cloneNode(true);
      document.getElementById("patientName").appendChild(clone);
      clone.querySelector("#nameText").innerHTML = patient.name[i].given + " " + patient.name[i].family; 
      clone.querySelector("#nameTag").innerHTML = patient.name[i].use; 
      }
      else {
        document.getElementById("nameText").innerHTML = patient.name[i].given + " " + patient.name[i].family; 
        document.getElementById("nameTag").innerHTML = patient.name[i].use; 
      }
    }
    for(let i=0;i<patient.telecom.length;i++) {

      if(i!==0) {
        if(patient.telecom[i].value){
        var cloneNew = document.getElementById("number").cloneNode(true);
        cloneNew.style.display = "flex";
        document.getElementById("patientNumber").appendChild(cloneNew);
        cloneNew.querySelector("#numberText").innerHTML = patient.telecom[i].value; 
        cloneNew.querySelector("#numberTag").innerHTML = patient.telecom[i].use; 
        }
        }
        else {
          if(patient.telecom[i].value){
          document.getElementById("numberText").innerHTML = patient.telecom[i].value; 
          document.getElementById("numberTag").innerHTML = patient.telecom[i].use; 
          }
          else {
            document.getElementById("number").style.display = "none";
          }
            
        }
      
    }
    document.getElementById("maritalStatus").innerHTML = patient.maritalStatus.coding[0].display;
  }

    return () => mounted = false;

  },[patient]);
  return (
    <div className="IhrApp">
      <div className="irMainContent">
        <div className="irNavMenu">
            <span className="irMenuItem irLogo">IHR</span>
            <Link className="nav-link" to="/"><span className="irMenuItem irNavItem">Home</span></Link>
            <span className="irMenuItem irNavItem">About Us</span>
            <span className="irMenuItem irNavItem">Contact</span>
        </div>
        <div className="irMainHeading">
           <span className="irTextSection">
             <div className="irHeading">Your Integrated Health Record</div>
            </span>
        </div>
        <div className = "irRecord">
          <div className="irRecordColumn">
             <div className="irSubText">Patient Name</div>
             <div id="patientName">
               <div className="irName"  id="name">
                <span className="irRecordText" id="nameText"></span>
                <span className="irNameTag" id="nameTag"></span>
               </div>
             </div>
             <div className="irSubText">Date of Birth</div>
             <div className="irRecordText">{patient.birthDate}</div>
             <div className="irSubText">Gender</div>
             <div className="irRecordText">Male</div>
             <div className="irSubText">Marital Status</div>
             <div id="maritalStatus" className="irRecordText"></div>
             <div className="irSubText">Address</div>
             <div className="irRecordText">699 Spring St NW, Atlanta, GA, 30308</div>
             <div className="irSubText">Contact No.</div>
             <div id="patientNumber">
               <div className="irName"  id="number">
                <span className="irRecordText" id="numberText"></span>
                <span className="irNameTag" id="numberTag"></span>
               </div>
             </div>
             <div className="irSubText">Emergency Contact Name</div>
             <div className="irRecordText">John Doe</div>
             <div className="irSubText">Emergency Contact No.</div>
             <div className="irRecordText">35467876</div>
           </div>  
           <div className="irRecordColumn">
             <div className="irSubText">Patient Name</div>
             <div className="irRecordText">Sam Smith</div>
             <div className="irSubText">Date of Birth</div>
             <div className="irRecordText">10/13/1972</div>
             <div className="irSubText">Gender</div>
             <div className="irRecordText">Male</div>
             <div className="irSubText">Marital Status</div>
             <div className="irRecordText">N/A</div>
             <div className="irSubText">Address</div>
             <div className="irRecordText">699 Spring St NW, Atlanta, GA, 30308</div>
             <div className="irSubText">Contact No.</div>
             <div className="irRecordText">12345678</div>
             <div className="irSubText">Emergency Contact Name</div>
             <div className="irRecordText">John Doe</div>
             <div className="irSubText">Emergency Contact No.</div>
             <div className="irRecordText">35467876</div>
           </div> 
           <div className="irRecordColumn">
           <div className="irSubText">Patient Name</div>
             <div className="irRecordText">Sam Smith</div>
             <div className="irSubText">Date of Birth</div>
             <div className="irRecordText">10/13/1972</div>
             <div className="irSubText">Gender</div>
             <div className="irRecordText">Male</div>
             <div className="irSubText">Marital Status</div>
             <div className="irRecordText">N/A</div>
             <div className="irSubText">Address</div>
             <div className="irRecordText">699 Spring St NW, Atlanta, GA, 30308</div>
             <div className="irSubText">Contact No.</div>
             <div className="irRecordText">12345678</div>
             <div className="irSubText">Emergency Contact Name</div>
             <div className="irRecordText">John Doe</div>
             <div className="irSubText">Emergency Contact No.</div>
             <div className="irRecordText">35467876</div>
           </div> 
        </div>
       
      
      <hr/>
        <div className="irFooterSection">
                <div className="irColumn">
                   <div className="irMenuItem irLogo">IHR</div>
                   <div className="irAtIHR">2022 &copy; IHR</div>
                   <div className="irAllRights">All rights reserved.</div>
                </div>
                <div className="irColumn">
                       <div className="irFooterText">Home</div>
                       <div className="irFooterText">Contact</div>
                </div>
                <div className="irColumn">
                       <div className="irFooterText">Privacy Policy</div>
                       <div className="irFooterText">Terms of Service</div>
                </div>
        </div>
      </div> 
     
    </div>
   
  );
}

function fetchData() {
  
  const requestOptions = {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' }
};
  fetch('https://integrated-health-records.herokuapp.com/mergeRecord', requestOptions).then(function(response){
   
    response.json().then(function(data) {
       console.log(data);
       
      })
    
  });
  // .then(data => this.setState({ postId: data.id }));
}


export default IntegratedRecord;
