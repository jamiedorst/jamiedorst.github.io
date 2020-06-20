import React from "react";
import Navbar from "../navbar";
import Footer from "../footer";
import david from "../../../assets/images/david.png";
import lowPoly from "../../../assets/images/lowPoly.png";
import controllers from "../../../assets/images/controllers.png";
import dude from "../../../assets/images/dude.png";
import grtCamp from "../../../assets/images/grtCamp.png";
import rendering from "../../../assets/images/rendering.png";
import ronan from "../../../assets/images/ronan.png";
import alainplaysguitar from "../../../assets/images/alainplaysguitar.png";
import alainlearnschem from "../../../assets/images/alainlearnschem.png";
import "./design.scss";

export default function Design() {
  return (
    <>
      <header>
        <nav className="navbarPage">
          <Navbar />
        </nav>
      </header>
      <main id="designSect">
        <h4 className="redText">DESIGN & ILLUSTRATION</h4>
        <hr id="resLine" className="redLine" />
        <p id="designText">
          A collection of miscellaneous design and illustration projects I've
          done in my free time or for freelance projects.
        </p>
        <div id="flexImages">
          <img
            src={rendering}
            className="flexImg "
            alt="Animation Rendering Poster"
          />
          <img src={grtCamp} className="flexImg " alt="Robotics Camp Poster" />
          <img
            src={controllers}
            className="flexImg"
            id="banner"
            alt="Nintendo Controller Illustration"
          />
          <img src={david} className="flexImg " alt="David Illustration" />
          <img src={ronan} className="flexImg " alt="Ronan Illustration" />
          <img
            src={alainplaysguitar}
            className="flexImg "
            alt="Guitar Illustration"
          />
          <img
            src={alainlearnschem}
            className="flexImg "
            alt="Chemistry Illustration"
          />
          <img
            src={lowPoly}
            className="flexImg "
            alt="Low Poly Portrait Illustration"
          />
          <img src={dude} className="flexImg " alt="Man Illustration" />
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
