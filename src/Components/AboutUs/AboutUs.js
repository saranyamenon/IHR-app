/* eslint-disable react/style-prop-object */
import friends from '../../images/friends.png';
import dog from '../../images/dog.jpeg';
import cat from '../../images/cat.jpeg';
import panda from '../../images/panda.avif';
import { Link, NavLink } from "react-router-dom";
import nurseGroup from '../../images/nurseGroup.png';

import './AboutUs.css';


function AboutUs() {
  return (
    <div className="auIhrApp">
      <div className="auMainContent">
        <div className="auNavMenu">
            <span className="auMenuItem auLogo">IHR</span>
            <Link className="nav-link" to="/"><span className="auMenuItem auNavItem">Home</span></Link>
            <span className="auMenuItem auNavItem">About Us</span>
        </div>
        <div className="auMainHeading">
           <span className="auTextSection">
             <div className="auHeading">About Us</div>
             <div className="auSubText">A team of dedicated individuals focused on improving healthcare at a personal level, by maintaining the patient and their subsequent healthcare providers to be our primary users.</div>
             
            </span>
           
        </div>
        <div className="auFriendsContainer"><img src={friends} className="auFriends" alt="friends"/></div>
        <span className="auTextSection">
             <div className="auHeading">Our Mission</div>
             <div className="auMissionSubText">
To make life easier for both the patients and their healthcare providers, and ultimately achieve our goal of ensuring top-notch healthcare delivered to every patient. 
Today's healthcare sector struggles with providing clinicians all the information they need to deliver quality healthcare, and our product hopes to bridge this gap by creating personalized integrated healthcare records in a readable format, and made available to both patient and clinician.</div>
             
            </span>
      <hr/>
      <span className="auTextSection">
             <div className="auHeading">Team</div>
             <div className="auSubText">
             Meet the people behind our magical product!</div>
             
            </span>
          <div className="auAvatars">
            <span>
              <img src={panda} className="panda" alt="panda"/>
              <div className="avatarLabel">Tejas Bhuwania </div>
              <div className="avatarName">Technical Developer</div>
            </span>
            <span>
              <img src={dog} className="dog" alt="dog"/>
              <div className="avatarLabel">Kevin George</div>
              <div className="avatarName">Technical Developer</div>
            </span>
            <span>
              <img src={cat} className="cat" alt="cat"/>
              <div className="avatarLabel">Saranya Arun Menon </div>
              <div className="avatarName">Technical Developer</div>
            </span>
           </div>


           <div className = "hgetStartedBlock">
        <span className="hgetStartedTextSection">
           <div className="hspecialHeading">Get Started with IHR today</div>
           <div className="hsubText">Sign up to view your personalized integrated medical record</div>
           <Link className="hnav-link" to="/signup"><button className="hbuttonStyle">Sign Up now</button></Link>
        </span>
        <span className="nurses">
            <img src={nurseGroup} className="nursesGroup" alt="group of nurses"/>
        </span>
      </div>

      <hr/>
        <div className="auFooterSection">
                <div className="auColumn">
                   <div className="auMenuItem auLogo">IHR</div>
                   <div className="auAtIHR">2022 &copy; IHR</div>
                   <div className="auAllRights">All rights reserved.</div>
                </div>
                <div className="auColumn">
                       <div className="auFooterText">Home</div>
                       <div className="auFooterText">Contact</div>
                </div>
                <div className="auColumn">
                       <div className="auFooterText">Privacy Policy</div>
                       <div className="auFooterText">Terms of Service</div>
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
             //console.log(data);
              if(data === "Success"){
               window.location.replace("/integratedRecord");
               
             }
            })
          
        });
        
    }
  }

export default AboutUs;
