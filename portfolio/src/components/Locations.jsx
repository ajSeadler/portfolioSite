import React from 'react';

function Locations() {
  return (
    <div id="locations" className="py-5" style={{ backgroundColor: '#333', color: '#fff' }}>
      <div className="container text-center">
        <h1 className="mb-4" style={{ fontSize: '2rem' }}>CONTACT</h1>
        <div className="row">
          <div className="col-md-12 mb-4">
            <h2 style={{ fontSize: '1.5rem' }}>Location</h2>
            <h3 style={{ fontSize: '1rem' }}>Oklahoma City, OK</h3>
          </div>
          <div className="col-md-12 mb-4">
            <h2 style={{ fontSize: '1.5rem' }}>Connect With Me</h2>
            <div className="social-links">
              <a
                href="https://www.linkedin.com/in/anthony-seadler"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <i className="fab fa-linkedin fa-3x" style={{ marginRight: '15px', color: '#7E8D85' }}></i>
              </a>
              <a
                href="https://github.com/ajSeadler"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <i className="fab fa-github fa-3x" style={{ color: '#7E8D85' }}></i>
              </a>
            </div>
          </div>
          <div className="col-md-12">
            <h2 style={{ fontSize: '1.5rem' }}>Download Resume</h2>
            <div className="resume-download">
              <a
                href="#"  // Add your resume file URL when available
                className="btn btn-custom btn-lg"
                download
              >
                <i className="far fa-file-pdf fa-lg" style={{ color: '#7E8D85' }}></i> Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Locations;
