import React from "react";
import Navbar from "../navbar/navbar.jsx";
import Footer from "../footer/footer.jsx";
import jamie from "../../../assets/images/jamie.png";
import "./about.scss";

export default function About() {
  return (
    <>
      <header>
        <nav className="navbarPage">
          <Navbar />
        </nav>
        <h4 className="blueText">ABOUT</h4>
        <hr id="resLine" className="blueLine" />
        <div id="aboutSect">
          <img src={jamie} className="phoneImg3" id="aboutImg" alt="Jamie" />
          <div className="leftText" id="aboutText">
            <h3 className="blueText" id="aboutTitle">
              Hi, I'm Jamie.
            </h3>
            <p className="blurb">
              I'm from the Bay Area, currently pursuing a double major in
              Human-Computer Interaction and Psychology at Carnegie Mellon
              University. I'm interested in the intersection of human behavior
              and aesthetics, and how our decisions both inform and are informed
              by the affordances around us.
            </p>
            <br />
            <p className="blurb">
              When I'm not designing, you can find me baking, doing crossword
              puzzles, or curling up with a cozy blanket and my cats (yes, I'm a
              cat person).
            </p>
            <br />
            <p className="blurb">
              I love learning about people–both as a designer and as a human.
              Feel free to contact me if you want to learn more about me,
              collaborate, or just chat!
            </p>
          </div>
        </div>
      </header>
      <main></main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
