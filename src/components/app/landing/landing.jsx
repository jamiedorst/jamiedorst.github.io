import React from "react";
import Navbar from "../navbar/navbar.jsx";
import Footer from "../footer/footer.jsx";
import blueBlob from "../../../assets/images/blueBlob.png";
import yellowBlob from "../../../assets/images/yellowBlob.png";
import redBlob from "../../../assets/images/redBlob.png";
import courseAdvisor from "../../../assets/images/courseAdvisor.png";
import macro from "../../../assets/images/macro.png";
import airbnb from "../../../assets/images/airbnb.png";
import personality from "../../../assets/images/personality.png";
import photography from "../../../assets/images/photography.png";
import illustration from "../../../assets/images/illustration.png";
import yearbook from "../../../assets/images/yearbook.png";
import model from "../../../assets/images/model.png";
import resmed from "../../../assets/images/resmed.png";
import "./landing.scss";
import { Link } from "react-router-dom";
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
            <HashLink className="navItem" to="/cmucourseadvisor#top">
              <div className="overlay">
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
            <Link className="navItem" to="/cmucourseadvisor">
              <div className="overlay">
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
            </Link>
          </div>
          <img src={resmed} className="piece" alt="resmed" />
        </section>
        {/* 
            AIRBNB
        */}
        <section>
          <div>
            <Link className="navItem" to="/cmucourseadvisor">
              <div className="overlay">
                <div className="details">
                  <h3 className="title">AirBnb Redesign</h3>
                  <p className="date">January 2019</p>
                  <p className="card">
                    An AirBnb app redesign to practice my design fundamentals.
                    Completed as part of my application for the KP Fellows
                    program.
                  </p>
                  <h5 className="tags">#UIDESIGNER</h5>
                </div>
              </div>
            </Link>
          </div>
          <img src={airbnb} className="piece" alt="airbnb" />
        </section>
        {/* 
            MACROINVERTEBRATES
        */}
        <section>
          <div>
            <Link className="navItem" to="/cmucourseadvisor">
              <div className="overlay">
                <div className="details">
                  <h3 className="title">Macroinvertebrates</h3>
                  <p className="date">October 2018 to May 2019</p>
                  <p className="card">
                    Research on a new learning and teaching tool for aquatic
                    insect identification to support citizen scientists in
                    pollution prevention.
                  </p>
                  <h5 className="tags">#UIDESIGNER</h5>
                </div>
              </div>
            </Link>
          </div>
          <img src={macro} className="piece" alt="macro" />
        </section>
        {/* 
            PERSONALITY PICTURES
        */}
        <section>
          <div>
            <Link className="navItem" to="/cmucourseadvisor">
              <div className="overlay">
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
            </Link>
          </div>
          <img src={personality} className="piece" alt="personality" />
        </section>
        {/* 
            PHOTOGRAPHY
        */}
        <section>
          <div>
            <Link className="navItem" to="/cmucourseadvisor">
              <div className="overlay">
                <div className="details">
                  <h3 className="title">Selected Photography</h3>
                  <p className="date">Ongoing</p>
                  <p className="card">
                    Some of my favorite photos that I've taken over the years.
                  </p>
                  <h5 className="tags">#PHOTOGRAPHER</h5>
                </div>
              </div>
            </Link>
          </div>
          <img src={photography} className="piece" alt="photography" />
        </section>
        {/* 
            DESIGN/ILLUSTRATION
        */}
        <section>
          <div>
            <Link className="navItem" to="/cmucourseadvisor">
              <div className="overlay">
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
            </Link>
          </div>
          <img src={illustration} className="piece" alt="illustration" />
        </section>
        {/* 
            YEARBOOK
        */}
        <section>
          <div>
            <Link className="navItem" to="/cmucourseadvisor">
              <div className="overlay">
                <div className="details">
                  <h3 className="title">Yearbook</h3>
                  <p className="date">August 2017 to May 2018</p>
                  <p className="card">
                    Photographs from my time as a yearbook photographer,
                    showcasing school sports, events, and people.
                  </p>
                  <h5 className="tags">#PHOTOGRAPHER</h5>
                </div>
              </div>
            </Link>
          </div>
          <img src={yearbook} className="piece" alt="yearbook" />
        </section>
        {/* 
            3D MODELING/ANIMATION
        */}
        <section>
          <div>
            <Link className="navItem" to="/cmucourseadvisor">
              <div className="overlay">
                <div className="details">
                  <h3 className="title">3D Modeling & Animation</h3>
                  <p className="date">September 2016 to May 2018</p>
                  <p className="card">
                    3D models and animations I've created in Autodesk Maya for
                    my robotics team.
                  </p>
                  <h5 className="tags">#ANIMATOR</h5>
                </div>
              </div>
            </Link>
          </div>
          <img src={model} className="piece" alt="model" />
        </section>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
