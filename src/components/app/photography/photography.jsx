import React from "react";
import Navbar from "../navbar/navbar.jsx";
import Footer from "../footer/footer.jsx";
import z1 from "../../../assets/images/z1.JPG";
import z2 from "../../../assets/images/z2.jpg";
import z3 from "../../../assets/images/z3.jpg";
import z4 from "../../../assets/images/z4.jpg";
import z5 from "../../../assets/images/z5.jpg";
import z6 from "../../../assets/images/z6.jpg";
import z7 from "../../../assets/images/z7.jpg";
import z8 from "../../../assets/images/z8.jpg";
import z11 from "../../../assets/images/z11.jpg";
import z12 from "../../../assets/images/z12.jpg";
import z14 from "../../../assets/images/z14.jpg";
import z18 from "../../../assets/images/z18.jpg";
import z19 from "../../../assets/images/z19.jpg";
import z20 from "../../../assets/images/z20.jpg";
import z21 from "../../../assets/images/z21.jpg";
import z22 from "../../../assets/images/z22.jpg";
import z23 from "../../../assets/images/z23.jpg";
import z24 from "../../../assets/images/z24.jpg";
import z25 from "../../../assets/images/z25.jpg";
import z26 from "../../../assets/images/z26.jpg";
import z27 from "../../../assets/images/z27.jpg";
import z28 from "../../../assets/images/z28.jpg";
import z29 from "../../../assets/images/z29.jpg";
import z30 from "../../../assets/images/z30.jpg";
import z31 from "../../../assets/images/z31.jpg";
import z32 from "../../../assets/images/z32.jpg";
import z33 from "../../../assets/images/z33.jpg";
import z34 from "../../../assets/images/z34.jpg";
import z36 from "../../../assets/images/z36.jpg";
import z37 from "../../../assets/images/z37.jpg";
import z39 from "../../../assets/images/z39.jpg";
import z41 from "../../../assets/images/z41.jpg";
import "./photography.scss";

export default function Photography() {
  return (
    <>
      <header>
        <nav className="navbarPage">
          <Navbar />
        </nav>
      </header>
      <main className="photoSect">
        <h4 className="blueText">PHOTOGRAPHY</h4>
        <hr id="resLine" className="blueLine" />
        <p className="photoText">
          Some of my favorite photos that I've taken over the years, including
          landscape photography, portraits, yearbook photos, and more.
        </p>
        <div className="photoGallery">
          {/* bluish */}
          <img src={z1} className="pgImg" alt="Portrait" />
          <img src={z5} className="pgImg" alt="Portrait" />
          <img src={z8} className="pgImg" alt="Portrait" />
          <img src={z34} className="pgImg" alt="Portrait" />
          <img src={z11} className="pgImg" alt="Portrait" />
          <img src={z36} className="pgImg" alt="Portrait" />
          <img src={z19} className="pgImg" alt="Portrait" />
          <img src={z4} className="pgImg" alt="Portrait" />
          <img src={z22} className="pgImg" alt="Portrait" />
          <img src={z14} className="pgImg" alt="Portrait" />
          <img src={z20} className="pgImg" alt="Portrait" />
          <img src={z12} className="pgImg" alt="Portrait" />
          {/* greenish */}
          <img src={z33} className="pgImg" alt="Portrait" />
          <img src={z29} className="pgImg" alt="Portrait" />
          <img src={z30} className="pgImg" alt="Portrait" />
          <img src={z3} className="pgImg" alt="Portrait" />
          {/* blackish */}
          <img src={z2} className="pgImg" alt="Portrait" />
          <img src={z18} className="pgImg" alt="Portrait" />
          <img src={z6} className="pgImg" alt="Portrait" />
          <img src={z23} className="pgImg" alt="Portrait" />
          <img src={z24} className="pgImg" alt="Portrait" />
          <img src={z25} className="pgImg" alt="Portrait" />
          <img src={z26} className="pgImg" alt="Portrait" />
          <img src={z27} className="pgImg" alt="Portrait" />
          <img src={z28} className="pgImg" alt="Portrait" />
          <img src={z31} className="pgImg" alt="Portrait" />
          <img src={z41} className="pgImg" alt="Portrait" />
          {/* orangish */}
          <img src={z32} className="pgImg" alt="Portrait" />
          <img src={z37} className="pgImg" alt="Portrait" />
          <img src={z39} className="pgImg" alt="Portrait" />
          <img src={z7} className="pgImg" alt="Portrait" />
          <img src={z21} className="pgImg" alt="Portrait" />
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
