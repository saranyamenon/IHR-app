/* eslint-disable react/style-prop-object */
import cape from '../../images/capeCharacter.png';
import laptop from '../../images/laptop-q.png';
import lightning from '../../images/lightning.png';
import docChecklist from '../../images/doc-checklist.png';
import doc from '../../images/doctor-ehr.png';
import nurseGroup from '../../images/nurseGroup.png';
import { Link, NavLink } from "react-router-dom";

import './Home.css';


function Home() {
  return (
    <div className="hIhrApp">
      <div className="hmainContent">
        <div className="hnavMenu">
            <span className="hmenuItem hlogo">IHR</span>
            <span className="hmenuItem hnavItem">Home</span>
            <Link className="nav-link" to="/aboutus"><span className="hmenuItem hnavItem">About Us</span></Link> 
        </div>
        <div className="hmainHeading">
           <span className="htextSection">
             <div className="hheading">Your personalized Integrated Health Record</div>
             <div className="hsubText">An easier way to keep track of all your medical records</div>
             <div className="hbuttons">
             <Link className="hnav-link" to="/login"><button className="hbuttonStyle">Log in</button></Link>
            <Link className="hnav-link" to="/signup"><button className="hbuttonStyle">Sign Up</button></Link>
             </div>
            </span>
           <span className="docImage"><img src={doc} className="doc" alt="doc with ehr"/></span>
        </div>
        <div className = "hspecialBlock">
        <span className="hspecialTextSection">
           <div className="hspecialHeading">What Makes IHR Special?</div>
           <div className="hsubText">What makes us stand out in the healthcare market?</div>
        </span>
        <span className="capeDocImage">
            <img src={cape} className="capeDoc" alt="doc with cape"/>
        </span>
        </div>

       <div className = "hstepEntryBlock">
       <span className="laptopImage">
            <img src={laptop} className="laptop" alt="laptop"/>
        </span>
        <span className="hstepEntryTextSection">
           <div className="hstepEntryTitle">ONE STEP ENTRY</div>
           <div className="hstepEntryHeading">Simply enter your EMR IDs, and we do the rest!</div>
           <div className="hsubText">We don't need you to enter pages of information for us to generate your integrated medical record. Simply enter your FHIR EMR ids, and we'll fetch them and integrate in a single step.</div>
        </span>
        </div>

        <div className = "hstepEntryBlock">
        <span className="hspeedEntryTextSection">
           <div className="hstepEntryTitle">SPEED</div>
           <div className="hstepEntryHeading">Obtain your integrated record instantly</div>
           <div className="hsubText">Our efficiently coded sysem makes sure that we fetch your information with minimal dawdling, ensuring that you have instant access to important medical data.</div>
        </span>
        <span className="lightningImage">
            <img src={lightning} className="lightning" alt="lightning"/>
        </span>
        </div>

        <div className = "hstepEntryBlock">
         <span className="laptopImage">
            <img src={docChecklist} className="docCheck" alt="laptop"/>
         </span>
         <span className="hstepEntryTextSection">
           <div className="hstepEntryTitle">ABSTRACTION</div>
           <div className="hstepEntryHeading">We make sure you see the most relevant data first</div>
           <div className="hsubText">Based on our structured business rules, we sort and filter your data, and display your most relevant and recent medical information first, so as to avoid you having to search for important data </div>
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
        <div className="hfooterSection">
                <div className="hcolumn">
                   <div className="hmenuItem hlogo">IHR</div>
                   <div className="hatIHR">2022 &copy; IHR</div>
                   <div className="hallRights">All rights reserved.</div>
                </div>
                <div className="hcolumn">
                       <div className="hfooterText">Home</div>
                       <div className="hfooterText">Contact</div>
                </div>
                <div className="hcolumn">
                       <div className="hfooterText">Privacy Policy</div>
                       <div className="hfooterText">Terms of Service</div>
                </div>
        </div>
      </div> 
     
    </div>
   
  );
}

export default Home;
