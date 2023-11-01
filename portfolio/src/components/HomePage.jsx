import React from "react";
import NavBar from "./NavBar";
import "bootstrap/dist/css/bootstrap.min.css";

function HomePage() {
  return (
    <div id="home">
      <div className="bg-dark text-white py-5 custom-padding">
        <div className="container text-center">
          <img
            src="src/assets/portrait.jpg"
            alt="Anthony Seadler"
            className="rounded-circle img-fluid profile-pic"
            style={{ width: "200px", height: "200px" }}
          />
          <h1 className="mt-3">ANTHONY SEADLER</h1>

          {/* Custom Divider Below Full Stack Developer */}

          <div className="coding-divider">
          <i class="fa fa-code fa-spin fa-1x fa-fw"></i>
</div>

          <h2 className="text-white">Full Stack Developer</h2>
        </div>
        <div style={{ height: "100px" }}></div>
      </div>
      {/* Add your projects section here */}
    </div>
  );
}

export default HomePage;
