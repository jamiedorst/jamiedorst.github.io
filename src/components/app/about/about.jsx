import React from "react";
import Navbar from "../navbar";
import Footer from "../footer";
import jamie from "../../../assets/images/aboutImgs/jamie.png";
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
        <img src={jamie} id="aboutImg" alt="Jamie Dorst" />
        <div id="aboutTopLayer">
          <section id="aboutTitle">
            <h2 className="noMP">Jamie Dorst</h2>
            <h3 className="sub noMP">about me</h3>
          </section>
          <hr id="aboutLine" />
          <div id="aboutText">
            <p>
              I'm currently a{" "}
              <span className="bold">
                UX Research Intern at{" "}
                <a className="linkObvi" href="https://www.vmware.com">
                  VMware
                </a>
              </span>{" "}
              in my hometown of Palo Alto, CA.
            </p>
            <p>
              I'm pursuing a double major in{" "}
              <span className="bold">
                Human-Computer Interaction and Psychology at Carnegie Mellon
                University
              </span>
              . I'm interested in the intersection of human behavior and
              aesthetics, and how our decisions both inform and are informed by
              the affordances around us.
            </p>
            <p>
              Drop me a line if you want to chat about your latest baking
              endeavors, any NYT crossword puzzle, Animal Crossing (preferably
              Wild World), or a project I might be able to help with.
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
