import React from "react";
import NavBar from "./NavBar";

function HomePage() {

  const iconStlye = {
    color:'#7E8D85'
  }

  return (
    <div id="home">
      <div className="bg-dark text-white py-5 custom-padding">
        <div className="container text-center">
          <img
            src="/assets/portrait.jpg"
            alt="Anthony Seadler"
            className="rounded-circle img-fluid profile-pic"
            style={{ width: "200px", height: "200px" }}
          />
          <h1 className="mt-3">ANTHONY SEADLER</h1>

          <div className="coding-divider1">
            <i class="fa fa-laptop-code fa-2x fa-fw" style={{iconStlye}}></i>
          </div>

          <h5 className="text-white job-position">Full Stack Web Developer</h5>
        </div>
        <div style={{ height: "100px" }}></div>
      </div>
    </div>
  );
}

export default HomePage;
