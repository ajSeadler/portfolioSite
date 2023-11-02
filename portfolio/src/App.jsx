import React from 'react';
import NavBar from './components/NavBar';
import HomePage from './components/HomePage';
import ProjectsSection from './components/ProjectsSection';
import Skills from './components/Skills'
import Locations from './components/Locations';
import 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';




function App() {
  return (
    <div className='app'>
      <NavBar />
      <HomePage />
      <ProjectsSection />
      <Skills />
      <Locations />
    </div>
  );
}

export default App;
