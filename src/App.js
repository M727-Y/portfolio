import logo from './logo.svg';
import './App.css';
import React from "react";
import Projects from "./Projects";
import About from "./About";
import Contact from "./Contact"
import Bio from "./Bio"
import Navigation from './Navigation';
import Photo from './Photo';
import Skills from './Skills';
import Resume from './Resume';
import Capstone from './Capstone';
function App() {
  return (
    <div className="App">
      <Navigation/>
      <div className='row-custom'>
        <Photo/>
        <Bio/>
      </div>
      <div className='row-custom'>
     
      <Resume/>
      <Skills />
      </div>
      <div className='row-custom'>
        <Capstone />
      </div>
      <div className='row-custom'>
        <Projects/>
      </div>
      <div className='row-custom'>
        <Contact/>
      </div>
      
      
      
      

    </div>
  );
}

export default App;
