import React from 'react';

function Locations() {
  return (
    <div id="locations" className="py-5" style={{ backgroundColor: '#333', color: '#fff' }}>
      <div className="container text-center">
        <div className="coding-divider">
          <a
            href="https://github.com/ajSeadler"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            <i className="fa fa-address-card fa-2x"></i>
          </a>
        </div>
        <h2 className="display-6 mb-4">CONTACT</h2>
        <div className="row">
          <div className="col-md-12 mb-4">
            <h2 className="h4">
              <i className="fa fa-envelope-o fa-2x"></i> Email
            </h2>
            <p>aj6287@gmail.com</p>
          </div>
          <div className="col-md-12 mb-4">
            <h2 className="h4">Location</h2>
            <p>Oklahoma City, OK</p>
          </div>
          <div className="col-md-12 mb-4">
            <h2 className="h4">Connect With Me</h2>
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
            <h3 className="h4">Download Resume</h3>
            <div className="resume-download">
              <a
                href="#"  // Add your resume file URL when available
                className="btn btn-custom btn-lg"
                download
              >
                <i className="far fa-file-pdf fa-lg" style={{ color: 'white' }}></i> .pdf
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Locations;
