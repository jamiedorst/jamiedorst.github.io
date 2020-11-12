import React from "react";
import Navbar from "../navbar";
import Footer from "../footer";
import david from "../../../assets/images/designImgs/david.png";
import lowPoly from "../../../assets/images/designImgs/lowPoly.png";
import controllers from "../../../assets/images/designImgs/controllers.png";
import dude from "../../../assets/images/designImgs/dude.png";
import grtCamp from "../../../assets/images/designImgs/grtCamp.png";
import rendering from "../../../assets/images/designImgs/rendering.png";
import alainplaysguitar from "../../../assets/images/designImgs/alainplaysguitar.png";
import alainlearnschem from "../../../assets/images/designImgs/alainlearnschem.png";
import kite from "../../../assets/images/designImgs/kite.png";
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
        <h3>Design & Illustration</h3>
        <div id="flexImages">
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
          <img src={david} className="flexImg " alt="David Illustration" />
          <img src={kite} className="flexImg " alt="One-Line Drawing" />
          <img
            src={controllers}
            className="flexImg"
            id="banner"
            alt="Nintendo Controller Illustration"
          />
          <img
            src={rendering}
            className="flexImg "
            alt="Animation Rendering Poster"
          />
          <img src={grtCamp} className="flexImg " alt="Robotics Camp Poster" />
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
