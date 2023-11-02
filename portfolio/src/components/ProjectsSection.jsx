import React, { useState } from 'react';
function ProjectsSection() {
  const [showDescription1, setShowDescription1] = useState(false);
  const [showDescription2, setShowDescription2] = useState(false);
  const [showDescription3, setShowDescription3] = useState(false);
  const [showDescription4, setShowDescription4] = useState(false);

  const toggleDescription1 = () => {
    setShowDescription1(!showDescription1);
    setShowDescription2(false);
    setShowDescription3(false);
    setShowDescription4(false);
  };

  const toggleDescription2 = () => {
    setShowDescription2(!showDescription2);
    setShowDescription1(false);
    setShowDescription3(false);
    setShowDescription4(false);
  };

  const toggleDescription3 = () => {
    setShowDescription3(!showDescription3);
    setShowDescription1(false);
    setShowDescription2(false);
    setShowDescription4(false);
  };

  const toggleDescription4 = () => {
    setShowDescription4(!showDescription4);
    setShowDescription1(false);
    setShowDescription2(false);
    setShowDescription3(false);
  };

  const projectDescriptionStyle = {
    color: 'lightgray',
  };

  const projectImageStyle = {
    cursor: 'pointer',
    maxWidth: '70%',
    
  };

  const imageOverlayStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'rgba(0, 0, 0, 0.5)', // Dark overlay
    display: 'none', // Hidden by default
    transition: 'opacity 0.3s', // Smooth transition
    textAlign: 'center',
  };
  

  return (
    <div id="projects" className="py-5">
      <div className="container">
        <div className="coding-divider">
          <a
            href="https://github.com/ajSeadler"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            <i className="fab fa-github fa-2x"></i>
          </a>
        </div>
        <h2 className="text-center mb-4">PORTFOLIO</h2>
        <div className="row">
          <div className="col-md-12 mb-4">
            <div className="card">
              <img
                src="/assets/forkit.png"
                className="card-img-top mx-auto clickable-image"
                alt="Fork-It Reviews Website"
                onClick={toggleDescription1}
                style={{ ...projectImageStyle, ...showDescription1}}
              />
              
              
              {/* <i id="githubIcon1" className="fab fa-github" style={githubIconStyle}></i> */}
              {showDescription1 && (
                <div className="card-body" style={projectDescriptionStyle}>
                  <h5 className="card-title">Fork-It (Reviews website)</h5>
                  <p className="card-text">Front and Back-End | Oct.-Nov. 2023</p>
                  <a href="https://github.com/ajSeadler/Fork-It-Repo" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-github"></i> GitHub Repository
                  </a>
                  <p>
                    Designed and developed a review website for local restaurants, enabling user sign-up and login to leave reviews.
                  </p>
                  <p>Developed with the PERN stack.</p>
                  <p>Utilized Postgres and Express.js to complete the back-end.</p>
                  <p>Built via React - HTML and CSS for DOM rendering and styling.</p>
                  <p>Utilizes JWT and bcrypt, ensuring passwords are efficiently hashed and secure, letting users have a comfortable experience with the site.</p>
                  <p>Website also features an admin page where an administrator can create, remove, or edit reviews/restaurants.</p>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 mb-4">
            <div className="card">
              <img
                src="/assets/disco.png"
                className="card-img-top mx-auto clickable-image"
                alt="Band Website"
                onClick={toggleDescription2}
                style={{ ...projectImageStyle, ...showDescription1}}
              />
              {/* <i id="githubIcon2" className="fab fa-github" style={githubIconStyle}></i> */}
              {showDescription2 && (
                <div className="card-body" style={projectDescriptionStyle}>
                  <h5 className="card-title">Band Website</h5>
                  <p className="card-text">Full Stack Developer | Sep. 2023</p>
                  <a href="https://github.com/ajSeadler/Disco-Stranger-Site" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-github"></i> GitHub Repository
                  </a>
                  <p>
                    Created a professional website for the rock band "Disco Stranger," to enhance their online presence and engage with their audience effectively.
                  </p>
                  <p>
                    Designed and developed a visually appealing and responsive website that showcases the band's music, videos, and upcoming events.
                  </p>
                  <p>Implemented a countdown timer to build excitement for the band's upcoming shows.</p>
                  <p>Utilized HTML, CSS, and JavaScript to create an engaging user experience.</p>
                  <p>Incorporated social media integration to increase the band's online visibility.</p>
                  <p>Ensured mobile responsiveness for a seamless user experience on all devices.</p>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 mb-4">
            <div className="card">
              <img
                src="/assets/zelda.png"
                className="card-img-top mx-auto clickable-image"
                alt="The Legend of Zelda Compendium"
                onClick={toggleDescription3}
                style={{ ...projectImageStyle, ...showDescription1}}
              />
              {/* <i id="githubIcon3" className="fab fa-github" style={githubIconStyle}></i> */}
              {showDescription3 && (
                <div className="card-body" style={projectDescriptionStyle}>
                  <h5 className="card-title">The Legend of Zelda Compendium</h5>
                  <p className="card-text">Full Stack Developer | Sep. 2023</p>
                  <a href="https://github.com/ajSeadler/Zelda-Encyc" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-github"></i> GitHub Repository
                  </a>
                  <p>
                    The Legend of Zelda Compendium is a fan-made website where users can look up various types of information from the video game series The Legend of Zelda.
                  </p>
                  <p>
                    Developed a mobile-responsive web app for Zelda fans, offering quick access to in-depth information on games, dungeons, monsters, and equipment.
                  </p>
                  <p>Leveraged React and a REST API for a seamless user experience, focusing on responsive design and efficient data display.</p>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 mb-4">
            <div className="card">
              <img
                src="/assets/eco.png"
                className="card-img-top mx-auto clickable-image"
                alt="Eco Sync"
                onClick={toggleDescription4}
                style={{ ...projectImageStyle, ...showDescription1 }}
              />
              
              {showDescription4 && (
                <div className="card-body" style={projectDescriptionStyle}>
                  <h5 className="card-title">Eco Sync</h5>
                  <p className="card-text">Full Stack Developer | Sep. 2023</p>
                  <a href="https://github.com/ajSeadler/Eco-Sync-Repo" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-github"></i> GitHub Repository
                  </a>
                  <p>
                    Eco Sync is a project aimed at providing environmental enthusiasts with the tools and information they need to make a positive impact on the planet.
                  </p>
                  <p>
                    Developed a user-friendly web application that empowers users to discover sustainable practices, connect with eco-conscious communities, and track their environmental efforts.
                  </p>
                  <p>Leveraged cutting-edge technologies to create a seamless and informative platform that contributes to a more sustainable world.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectsSection;
