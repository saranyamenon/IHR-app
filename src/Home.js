/* eslint-disable react/style-prop-object */
import cape from './images/capeCharacter.png';
import laptop from './images/laptop-q.png';
import lightning from './images/lightning.png';
import docChecklist from './images/doc-checklist.png';
import doc from './images/doctor-ehr.png';
import nurseGroup from './images/nurseGroup.png';
import { Link, NavLink } from "react-router-dom";

import './Home.css';


function Home() {
  return (
    <div className="IhrApp">
      <div className="mainContent">
        <div className="navMenu">
            <span className="menuItem logo">IHR</span>
            <span className="menuItem navItem">Home</span>
            <span className="menuItem navItem">About Us</span>
            <span className="menuItem navItem">Contact</span>
        </div>
        <div className="mainHeading">
           <span className="textSection">
             <div className="heading">Your personalized Integrated Health Record</div>
             <div className="subText">An easier way to keep track of all your medical records</div>
             <div className="buttons">
             <Link className="nav-link" to="/login"><button className="buttonStyle">Log in</button></Link>
            <Link className="nav-link" to="/signup"><button className="buttonStyle">Sign Up</button></Link>
             </div>
            </span>
           <span className="docImage"><img src={doc} className="doc" alt="doc with ehr"/></span>
        </div>
        <div className = "specialBlock">
        <span className="specialTextSection">
           <div className="specialHeading">What Makes IHR Special?</div>
           <div className="subText">What makes us stand out in the healthcare market?</div>
        </span>
        <span className="capeDocImage">
            <img src={cape} className="capeDoc" alt="doc with cape"/>
        </span>
        </div>

       <div className = "stepEntryBlock">
       <span className="laptopImage">
            <img src={laptop} className="laptop" alt="laptop"/>
        </span>
        <span className="stepEntryTextSection">
           <div className="stepEntryTitle">ONE STEP ENTRY</div>
           <div className="stepEntryHeading">Simply enter your EMR IDs, and we do the rest!</div>
           <div className="subText">We don't need you to enter pages of information for us to generate your integrated medical record. Simply enter your FHIR EMR ids, and we'll fetch them and integrate in a single step.</div>
        </span>
        </div>

        <div className = "stepEntryBlock">
        <span className="speedEntryTextSection">
           <div className="stepEntryTitle">SPEED</div>
           <div className="stepEntryHeading">Obtain your integrated record instantly</div>
           <div className="subText">Our efficiently coded sysem makes sure that we fetch your information with minimal dawdling, ensuring that you have instant access to important medical data.</div>
        </span>
        <span className="lightningImage">
            <img src={lightning} className="lightning" alt="lightning"/>
        </span>
        </div>

        <div className = "stepEntryBlock">
         <span className="laptopImage">
            <img src={docChecklist} className="docCheck" alt="laptop"/>
         </span>
         <span className="stepEntryTextSection">
           <div className="stepEntryTitle">ABSTRACTION</div>
           <div className="stepEntryHeading">We make sure you see the most relevant data first</div>
           <div className="subText">Based on our structured business rules, we sort and filter your data, and display your most relevant and recent medical information first, so as to avoid you having to search for important data </div>
         </span>
        </div>
      <div className = "getStartedBlock">
        <span className="getStartedTextSection">
           <div className="specialHeading">Get Started with IHR today</div>
           <div className="subText">Sign up to view your personalized integrated medical record</div>
           <Link className="nav-link" to="/signup"><button className="buttonStyle">Sign Up now</button></Link>
        </span>
        <span className="nurses">
            <img src={nurseGroup} className="nursesGroup" alt="group of nurses"/>
        </span>
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

export default Home;
