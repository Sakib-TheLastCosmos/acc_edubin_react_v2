import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Bulletin from './components/Bulletin';
import { BrowserRouter, Route, Routes, Switch } from 'react-router-dom';

import Home from './pages/Home';
import Teacher from './pages/Teacher';
import TeachersList from './pages/TeachersList';

import './css/animate.css'
import './css/bootstrap.min.css'
import './css/default.css'
import './css/font-awesome.min.css'
import './css/jquery.nice-number.min.css'
import './css/magnific-popup.css'
import './css/nice-select.css'
import './css/responsive.css'
import './css/slick.css'
import './css/style.css'




function App() {
  // React.useEffect(() => {

  //   const handleError = error => {
  //     console.log("error", error);
  //   }


  //   const LoadExternalScript = () => {
  //       const externalScript = document.createElement("script");
  //       externalScript.onerror = function() {console.log()};
  //       externalScript.id = "external";
  //       externalScript.async = true;
  //       externalScript.type = "text/javascript";
  //       externalScript.setAttribute("crossorigin", "anonymous");
  //       document.body.appendChild(externalScript);
  //       externalScript.src = 'js/main.js';
  //   };
  //   LoadExternalScript();
  
  
  //   return () => {
  
  //     document.body.removeChild(externalScript);
  //   };
  // }, []);



  return (
    <BrowserRouter>
      <div className="App">
        <Navbar></Navbar>
        <Bulletin></Bulletin>
        <Routes>
          <Route exact path='/' Component={Home} />

          <Route exact path='/teacher-name' Component={Teacher} />

          <Route exact path='/ict' Component={TeachersList} />
        </Routes>
        




        <Footer></Footer>
      </div>
    </BrowserRouter>
    
  );
}

export default App;
