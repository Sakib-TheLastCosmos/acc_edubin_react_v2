import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Bulletin from './components/Bulletin';
import { BrowserRouter, Route, Routes, Switch } from 'react-router-dom';

import Home from './pages/Home';
import Teacher from './pages/Teacher';




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
        </Routes>
        




        <Footer></Footer>
      </div>
    </BrowserRouter>
    
  );
}

export default App;
