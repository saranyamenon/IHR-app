/* eslint-disable react/style-prop-object */
import { Link, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import './IntegratedRecord.css';



function IntegratedRecord() {
  let [patient, setPatient] = useState("");
  let [observation, setObservation] = useState("");
  let [allergies, setAllergies] = useState("");
  let [procedure, setProcedure] = useState("");
  let [medication, setMedication] = useState("");

  useEffect(() => {
    let mounted = true;  
    const fetchData = async () => {
      const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    };
    if(mounted && !patient && !observation){
      fetch('https://integrated-health-records.herokuapp.com/mergeRecordPatient', requestOptions).then(function(response){
       
        response.json().then(function(data) {
          setPatient(data);
          console.log(data);


        })
        
      });

      fetch('https://integrated-health-records.herokuapp.com/mergeRecordObservation', requestOptions).then(function(response){
       
        response.json().then(function(data) {
          setObservation(data);
          
    
  
        })
        
      });

      fetch('https://integrated-health-records.herokuapp.com/mergeRecordAllergies', requestOptions).then(function(response){
       
        response.json().then(function(data) {
          console.log(data);
          setAllergies(data);
          
    
        })
        
      });


      fetch('https://integrated-health-records.herokuapp.com/mergeRecordProcedures', requestOptions).then(function(response){
       
        response.json().then(function(data) {
          console.log(data);
          setProcedure(data);
          
    
        })
        
      });

      fetch('https://integrated-health-records.herokuapp.com/mergeRecordMedication', requestOptions).then(function(response){
       
        response.json().then(function(data) {
          console.log(data);
          setMedication(data);
          
    
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

  if(observation) {
    let cardHeading  = document.createElement("div");
    cardHeading.className = "irCardHeading";
    cardHeading.innerHTML = "OBSERVATIONS";
    document.getElementById("columnTwo").appendChild(cardHeading);


    console.log(observation.observation);
    let cardElement  = document.createElement("div");
    cardElement.id = "irResourceCard";
    cardElement.className = "irColumnTwoCard";
    document.getElementById("columnTwo").appendChild(cardElement);
    
    for(let i=0;i<observation.observation.coding.length;i++) {
      
      let elementLabel = document.createElement("div");
      elementLabel.className = "irSubText";
      elementLabel.innerHTML = observation.observation.coding[i].display;
      document.getElementById("irResourceCard").appendChild(elementLabel);

      let elementValue = document.createElement("div");
      elementValue.className = "irRecordText";
      elementValue.innerHTML = observation.observation.coding[i].value + " (" + observation.observation.coding[i].unit + ")";
      document.getElementById("irResourceCard").appendChild(elementValue);
     
    }

  }

  if(allergies) {

    let elementTag = document.createElement("span");
    elementTag.className = "irConditionTag";
    elementTag.innerHTML = allergies.criticality;
    switch(allergies.criticality){
        case 'High' : elementTag.style.backgroundColor = "red";
                      break;
        case 'Medium' : elementTag.style.backgroundColor = "orange";
                      break;
        case 'Low' : elementTag.style.backgroundColor = "green";
                      break;

        default: ;
    }
     document.getElementById("irCondition").appendChild(elementTag);
  }


    return () => mounted = false;

  },[patient]);
  return (
    <div className="IhrApp">
      <div className="irMainContent">
        <div className="irNavMenu">
            <span className="irMenuItem irLogo">IHR</span>
            <Link className="nav-link" to="/"><span className="irMenuItem irNavItem">Home</span></Link>
            <Link className="nav-link" to="/aboutus"><span className="irMenuItem irNavItem">About Us</span></Link>
            
        </div>
        <div className="irMainHeading">
           <span className="irTextSection">
             <div className="irHeading">Your Integrated Health Record</div>
            </span>
        </div>
        <div className = "irRecord">
          <div id="columnOne" className="irRecordColumnOne">
          <div className = "irCardHeading">PATIENT</div>
            <div className="irColumnOneCard">
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
           </div>  
           <div id="columnTwo" className="irRecordColumnTwo">
           <div className = "irCardHeading">ALLERGIES</div>
           <div className = "irColumnTwoCard">
            
           <div className="irSubText">Condition</div>
           <div id="irCondition" className="irName">
              <span className="irRecordText">{allergies.manifestation}</span>
           </div>
           <div className="irSubText">Medication</div>
           <div className="irRecordText">{allergies.medicine}</div>
           </div>
           </div> 
           <div id="columnThree" className="irRecordColumnThree">
           <div className = "irCardHeading">PROCEDURES</div>
           <div className = "irColumnThreeCard">
            
           <div className="irSubText">Body Site</div>
           <div id="irCondition" className="irName">
              <span className="irRecordText">{procedure.bodySite}</span>
           </div>
           <div className="irSubText">Doctor</div>
           <div className="irRecordText">{procedure.doctor_name}</div>
           <div className = "irRecordTextSub">{procedure.doctor_display}</div>
           <div className="irSubText">Date</div>
           <div className="irRecordText">{procedure.encounter}</div>
           <div className="irSubText">Status</div>
           <div className="irRecordText">{procedure.status}</div>
           </div>

           <div className = "irCardHeading">MEDICATIONS</div>
           <div className = "irColumnThreeCard">
            
            <div className="irSubText">Type</div>
            <div id="irCondition" className="irName">
               <span className="irRecordText">{medication.form}</span>
            </div>
            <div className="irSubText">Ingredient</div>
            <div className="irRecordText">{medication.ingredient}</div>
            <div className="irSubText">Strength</div>
            <div className="irRecordText">{medication.strength}</div>
            
            </div>
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






export default IntegratedRecord;
