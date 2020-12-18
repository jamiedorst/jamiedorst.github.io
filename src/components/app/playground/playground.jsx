import React from "react";
import Navbar from "../navbar";
import Footer from "../footer";
import personality from "../../../assets/images/playgroundImgs/personality.png";
import design from "../../../assets/images/playgroundImgs/design.png";
import photography from "../../../assets/images/playgroundImgs/photography.png";
import "./playground.scss";
import { HashLink } from "react-router-hash-link";

export default function Playground() {
  return (
    <>
      <header>
        <nav className="navbarHome">
          <Navbar />
        </nav>
      </header>
      <main className="grid">
        {/* 
            DESIGN/ILLUSTRATION
        */}
        <section>
          <div className="playground">
            <HashLink to="/designillustration#top">
              <img
                src={design}
                className="preview"
                alt="Design & Illustration"
              />
            </HashLink>
            <div className="playgroundText">
              <HashLink to="/designillustration#top" className="textLink">
                <h2 className="noMP">Design & Illustration</h2>
              </HashLink>
              <h5 className="noMP">Ongoing</h5>
              <p>
                Miscellaneous design/illustration projects I've done in my free
                time.
              </p>
              <HashLink to="/designillustration#top" className="textLink">
                <h5 className="seeMore">see more</h5>
              </HashLink>
            </div>
          </div>
        </section>
        {/* 
            PHOTOGRAPHY
        */}
        <section>
          <div className="playground">
            <HashLink to="/photography#top">
              <img src={photography} className="preview" alt="Photography" />
            </HashLink>
            <div className="playgroundText">
              <HashLink to="/photography#top" className="textLink">
                <h2 className="noMP">Photography</h2>
              </HashLink>
              <h5 className="noMP">Ongoing</h5>
              <p>Some of my favorite photos I've taken over the years.</p>
              <HashLink to="/photography#top" className="textLink">
                <h5 className="seeMore">see more</h5>
              </HashLink>
            </div>
          </div>
        </section>
        {/* 
            PERSONALITY PICTURES
        */}
        <section>
          <div className="playground">
            <HashLink to="/personalitypictures#top">
              <img
                src={personality}
                className="preview"
                alt="Personality Pictures Project"
              />
            </HashLink>
            <div className="playgroundText">
              <HashLink to="/personalitypictures#top" className="textLink">
                <h2 className="noMP">Personality Pictures</h2>
              </HashLink>
              <h5 className="noMP">January 2018</h5>
              <p>
                A photography project to showcase the quirky members of my
                robotics team and promote applications.
              </p>
              <HashLink to="/personalitypictures#top" className="textLink">
                <h5 className="seeMore">see more</h5>
              </HashLink>
            </div>
          </div>
        </section>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
