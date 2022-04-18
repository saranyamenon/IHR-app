import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './Components/Home/Home';
import SignUp from './Components/SignUp/SignUp';
import LogIn from './Components/LogIn/LogIn';
import EnterId from './Components/EnterId/EnterId';
import IntegratedRecord from './Components/IntegratedRecord/IntegratedRecord';
import AboutUs from './Components/AboutUs/AboutUs';

ReactDOM.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  <Router>
  <Routes>
    <Route exact path="/" element={<Home />} />
    <Route path="/signup" element={<SignUp />} />
    <Route path="/login" element={<LogIn />} />
    <Route path="/enterid" element={<EnterId />} />
    <Route path="/integratedRecord" element={<IntegratedRecord />} />
    <Route path="/aboutus" element={<AboutUs />} />
  </Routes>
</Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
