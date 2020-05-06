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
      </header>
      <main>
        <h4 className="blueText">ABOUT</h4>
        <hr id="resLine" className="blueLine" />
        <div id="aboutSect">
          <img src={jamie} className="phoneImg3" id="aboutImg" alt="Jamie" />
          <div className="leftText" id="aboutText">
            <h3 className="blueText" id="aboutTitle">
              Hi, I'm Jamie.
            </h3>
            <p>
              This summer, I'm a UX Research intern at{" "}
              <a className="linkObvi" href="https://www.vmware.com">
                VMware
              </a>{" "}
              in my hometown of Palo Alto, CA.
            </p>
            <br />
            <p>
              I'm currently pursuing a double major in Human-Computer
              Interaction and Psychology at Carnegie Mellon University. I'm
              interested in the intersection of human behavior and aesthetics,
              and how our decisions both inform and are informed by the
              affordances around us.
            </p>
            <br />
            <p>
              When I'm not designing, you can find me baking, doing crossword
              puzzles, or curling up with a cozy blanket and my cats (yes, I'm a
              cat person) and playing Animal Crossing.
            </p>
          </div>
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
