import React from "react";
import Navbar from "../navbar";
import Footer from "../footer";
import "./blog.scss";

export default function Blog() {
  return (
    <>
      <header>
        <nav className="navbarPage">
          <Navbar />
        </nav>
      </header>
      <main>
        <h4 className="blueText">BLOG</h4>
        <hr id="resLine" className="blueLine" />
        <div id="aboutSect">
          <div className="leftText" id="aboutText">
            <h3 className="blueText" id="aboutTitle">
              I write things sometimes
            </h3>
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
