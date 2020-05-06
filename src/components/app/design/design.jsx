import React from "react";
import Navbar from "../navbar/navbar.jsx";
import Footer from "../footer/footer.jsx";
import david from "../../../assets/images/david.png";
import lowPoly from "../../../assets/images/lowPoly.png";
import controllers from "../../../assets/images/controllers.png";
import dude from "../../../assets/images/dude.png";
import grtCamp from "../../../assets/images/grtCamp.png";
import rendering from "../../../assets/images/rendering.png";
import ronan from "../../../assets/images/ronan.png";
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
          <img src={rendering} className="flexImg " alt="Screenshot" />
          <img src={grtCamp} className="flexImg " alt="Screenshot" />
          <img
            src={controllers}
            className="flexImg"
            id="banner"
            alt="Screenshot"
          />
          <img src={david} className="flexImg " alt="Screenshot" />
          <img src={ronan} className="flexImg " alt="Screenshot" />
          <img src={lowPoly} className="flexImg " alt="Screenshot" />
          <img src={dude} className="flexImg " alt="Screenshot" />
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
