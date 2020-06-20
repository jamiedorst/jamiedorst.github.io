import React from "react";
import Navbar from "../navbar";
import Footer from "../footer";
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
          <img
            src={jamie}
            className="phoneImg3"
            id="aboutImg"
            alt="Jamie Dorst"
          />
          <div className="leftText" id="aboutText">
            <h3 className="blueText" id="aboutTitle">
              Hi, I'm Jamie.
            </h3>
            <p>
              This summer, I'm a{" "}
              <span className="bluelight">
                UX Research Intern at{" "}
                <a className="linkObvi" href="https://www.vmware.com">
                  VMware
                </a>
              </span>{" "}
              in my hometown of Palo Alto, CA.
            </p>
            <br />
            <p>
              I'm currently pursuing a double major in{" "}
              <span className="bluelight">
                Human-Computer Interaction and Psychology
              </span>{" "}
              at Carnegie Mellon University. I'm interested in the intersection
              of human behavior and aesthetics, and how our decisions both
              inform and are informed by the affordances around us.
            </p>
            <br />
            <p>
              Drop me a line if you want to chat about your latest baking
              endeavors, any (Monday) NYT crossword puzzle, Animal
              Crossing–preferably Wild World, or a project I might be able to
              help with, from illustration to research to web design.
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
