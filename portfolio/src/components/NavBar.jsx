import React from 'react';

function NavBar() {
  const navBarStyle = {
    padding: '10px 20px', // Add padding to the left and right sides
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top" style={navBarStyle}>
      <a className="navbar-brand" href="#home">Anthony Seadler</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav" style={{ marginLeft: "0" }}>
          <li className="nav-item">
            <a className="nav-link" href="#home">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#projects">Projects</a>
          </li>
          <li className="nav-item"> {/* Fix the typo here */}
            <a className="nav-link" href="#skills">Skills</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
