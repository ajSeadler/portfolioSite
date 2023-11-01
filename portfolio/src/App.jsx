import React from 'react';
import NavBar from './components/NavBar';
import HomePage from './components/HomePage';
import ProjectsSection from './components/ProjectsSection';
import Skills from './components/Skills'
import Locations from './components/Locations';
import './index.css'

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <NavBar />
      <HomePage />
      <ProjectsSection />
      <Skills />
      <Locations />
    </div>
  );
}

export default App;
