import React from 'react';

function Skills() {
  return (
    <div id="skills" className="container-fluid py-5 bg-light">
      <div className="container p-4 rounded">
        <h2 className="text-center mb-4">SKILLS</h2>
        <p className="text-center mt-4 text-muted">
          My proficiency in these technologies and tools allows me to create efficient and user-friendly web applications.
          I have experience with a range of web development technologies that enable me to contribute effectively to your projects and team.
        </p>
        <div className="row">
          <div className="col-md-6">
            <h3 className="text-muted">Proficient in:</h3>
            <ul className="list-group">
              <li className="list-group-item">Node.js</li>
              <li className="list-group-item">JavaScript</li>
              <li className="list-group-item">React / Redux</li>
              <li className="list-group-item">Git</li>
              <li className="list-group-item">Express</li>
              <li className="list-group-item">HTML5</li>
              <li className="list-group-item">CSS</li>
              {/* Add more skills as needed */}
            </ul>
          </div>
          <div className="col-md-6">
            <h3 className="text-muted">Knowledgeable in:</h3>
            <ul className="list-group">
              <li className="list-group-item">Vue</li>
              <li className="list-group-item">Angular</li>
              <li className="list-group-item">Ruby</li>
              {/* Add more skills as needed */}
            </ul>
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default Skills;
