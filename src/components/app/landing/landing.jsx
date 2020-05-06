import React from "react";
import Navbar from "../navbar/navbar.jsx";
import Footer from "../footer/footer.jsx";
import blueBlob from "../../../assets/images/blueBlob.png";
import yellowBlob from "../../../assets/images/yellowBlob.png";
import redBlob from "../../../assets/images/redBlob.png";
import courseAdvisor from "../../../assets/images/courseAdvisor.png";
import macro from "../../../assets/images/macro.png";
import personality from "../../../assets/images/personality.png";
import kuri from "../../../assets/images/kuriCover.png";
import design from "../../../assets/images/design.png";
import resmed from "../../../assets/images/resmed.png";
import "./landing.scss";
import { HashLink } from "react-router-hash-link";

export default function Landing() {
  return (
    <>
      <header id="home">
        <div>
          <img src={blueBlob} id="blueBlob" alt="blueBlob" />
          <img src={yellowBlob} id="yellowBlob" alt="yellowBlob" />
          <img src={redBlob} id="redBlob" alt="redBlob" />
        </div>
        <nav className="navbarHome" id="work">
          <Navbar />
        </nav>
      </header>
      <main className="grid">
        {/* 
            CMU COURSE ADVISOR
        */}
        <section>
          <div>
            <HashLink to="/cmucourseadvisor#top">
              <div className="overlay1">
                <div className="details">
                  <h3 className="title">CMU Course Advisor</h3>
                  <p className="date">Ongoing since August 2019</p>
                  <p className="card">
                    Creating a new way for CMU students to discover and learn
                    about possible courses.
                  </p>
                  <h5 className="tags">#UXDESIGNER #FRONTENDDEVELOPER</h5>
                </div>
              </div>
            </HashLink>
          </div>
          <img src={courseAdvisor} className="piece" alt="courseAdvisor" />
        </section>
        {/* 
            RESMED
        */}
        <section>
          <div>
            <HashLink to="/resmed#top">
              <div className="overlay1">
                <div className="details">
                  <h3 className="title">ResMed</h3>
                  <p className="date">February 2020</p>
                  <p className="card">
                    AR mobile app design for ResMed, an IoT medical device
                    company. Completed as part of my Interaction Design Studio
                    II class.
                  </p>
                  <h5 className="tags">#UXDESIGNER</h5>
                </div>
              </div>
            </HashLink>
          </div>
          <img src={resmed} className="piece" alt="resmed" />
        </section>
        {/* 
            ACCEPTABLE ROBOT MOTION
        */}
        <section>
          <div>
            <HashLink to="/robotmotion#top">
              <div className="overlay1">
                <div className="details">
                  <h3 className="title">Acceptable Robot Motion</h3>
                  <p className="date">January 2020 to May 2020</p>
                  <p className="card">
                    Research on what makes robot movements acceptable, what
                    acceptable means, and what a better tool might look like for
                    designing acceptable robot movements.
                  </p>
                  <h5 className="tags">#UXRESEARCHER #RESEARCHASSISTANT</h5>
                </div>
              </div>
            </HashLink>
          </div>
          <img src={kuri} className="piece" alt="kuri" />
        </section>
        {/* 
            MACROINVERTEBRATES
        */}
        <section>
          <div>
            <HashLink to="/macroinvertebrates#top">
              <div className="overlay1">
                <div className="details">
                  <h3 className="title">Macroinvertebrates</h3>
                  <p className="date">October 2018 to May 2019</p>
                  <p className="card">
                    Research on a new learning and teaching tool for aquatic
                    insect identification to support citizen scientists in
                    pollution prevention.
                  </p>
                  <h5 className="tags">#UIDESIGNER #RESEARCHASSISTANT</h5>
                </div>
              </div>
            </HashLink>
          </div>
          <img src={macro} className="piece" alt="macro" />
        </section>
        {/* 
            PERSONALITY PICTURES
        */}
        <section>
          <div>
            <HashLink to="/personalitypictures#top">
              <div className="overlay1">
                <div className="details">
                  <h3 className="title">Personality Pictures</h3>
                  <p className="date">January 2018</p>
                  <p className="card">
                    A photography project to showcase the quirky members of my
                    robotics team and promote applications.
                  </p>
                  <h5 className="tags">#PHOTOGRAPHER</h5>
                </div>
              </div>
            </HashLink>
          </div>
          <img src={personality} className="piece" alt="personality" />
        </section>
        {/* 
            DESIGN/ILLUSTRATION
        */}
        <section>
          <div>
            <HashLink to="/designillustration#top">
              <div className="overlay1">
                <div className="details">
                  <h3 className="title">Design & Illustration</h3>
                  <p className="date">Ongoing</p>
                  <p className="card">
                    Miscellaneous design/illustration projects I've done in my
                    free time.
                  </p>
                  <h5 className="tags">#GRAPHICDESIGNER</h5>
                </div>
              </div>
            </HashLink>
          </div>
          <img src={design} className="piece" alt="design and illustration" />
        </section>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}