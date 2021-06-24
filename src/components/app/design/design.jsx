/* import React from "react";
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
import kitePoster from "../../../assets/images/designImgs/kitePoster.png";
import mahjong from "../../../assets/images/designImgs/mahjong.png";
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
          <img
            src={kitePoster}
            className="flexImg "
            alt="Berkeley Kite Festival Poster"
          />
          <img
            src={mahjong}
            className="flexImg"
            id="banner"
            alt="MCR Mahjong Guide"
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
 */

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
import kitePoster from "../../../assets/images/designImgs/kitePoster.png";
import mahjong from "../../../assets/images/designImgs/mahjong.png";
import "./design.scss";
import { SRLWrapper } from "simple-react-lightbox";

const options = {
  settings: {
    overlayColor: "rgba(0,0,0, 0.85)",
    transitionSpeed: 100,
  },
  buttons: {
    backgroundColor: "rgba(0,0,0, 0.95)",
    iconColor: "#ffffff",
    iconPadding: "7px",
    showAutoplayButton: false,
    showCloseButton: true,
    showDownloadButton: false,
    showFullscreenButton: false,
    showNextButton: true,
    showPrevButton: true,
    size: "40px",
  },
  caption: {
    captionColor: "#ffffff",
    captionFontFamily: "IBM Plex Sans, sans",
    captionFontWeight: "400",
  },
  thumbnails: {
    showThumbnails: false,
  },
};

export default function Design() {
  return (
    <>
      <header>
        <nav className="navbarPage">
          <Navbar />
        </nav>
      </header>
      <main className="designSect">
        <h3>Design & Illustration</h3>
        <SRLWrapper options={options}>
          <div className="designGallery">
            {/* bluish */}
            <img
              src={alainlearnschem}
              className="pgdImg"
              alt="Chemistry Man Illustration"
            />
            <img src={kite} className="pgdImg" alt="Love Line Drawing" />
            <img
              src={alainplaysguitar}
              className="pgdImg"
              alt="Guitar Man Illustration"
            />
            <img
              src={rendering}
              className="pgdImg"
              alt="Animation Rendering Guide"
            />
            <img
              src={kitePoster}
              className="pgdImg"
              alt="Berkeley Kite Festival Poster"
            />
            <img src={grtCamp} className="pgdImg" alt="Robotics Camp Poster" />
            <img src={mahjong} className="pgdImg" alt="MCR Mahjong Guide" />
            <img src={lowPoly} className="pgdImg" alt="Low-Poly Portrait" />
            <img
              src={david}
              className="pgdImg"
              alt="Michaelangelo's David – Frisbee Design"
            />
            <img src={dude} className="pgdImg" alt="Pen Tool Practice Person" />
            <img
              src={controllers}
              className="pgdImg"
              alt="Nintendo Evolution"
            />
          </div>
        </SRLWrapper>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
