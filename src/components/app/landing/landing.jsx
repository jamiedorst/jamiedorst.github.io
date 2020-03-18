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

export default function Landing() {
  return (
    <>
      <header id="home">
        <div className="blobs">
          <img src={blueBlob} id="blueBlob" alt="blueBlob" />
          <img src={yellowBlob} id="yellowBlob" alt="yellowBlob" />
          <img src={redBlob} id="redBlob" alt="redBlob" />
        </div>
        <nav className="navbar" id="work">
          <Navbar />
        </nav>
      </header>
      <main className="grid">
        {/* 
            CMU COURSE ADVISOR
        */}
        <section>
          <Link className="navItem" to="/cmucourseadvisor">
            <div className="overlay">
              <div className="details">
                <h4 className="title">CMU Course Advisor</h4>
                <h5>Ongoing since August 2019</h5>
                <p className="card">
                  Creating a new way for CMU students to discover and learn
                  about possible courses.
                </p>
                <h6 className="tags">#UXDESIGNER #FRONTENDDEVELOPER</h6>
              </div>
            </div>
          </Link>
          <img src={courseAdvisor} className="piece" alt="courseAdvisor" />
        </section>
        {/* 
            RESMED
        */}
        <section>
          <div className="overlay">
            <div className="details">
              <h4 className="title">ResMed</h4>
              <h5>February 2020</h5>
              <p className="card">
                AR mobile app design for ResMed, an IoT medical device company.
                Completed as part of my Interaction Design Studio II class.
              </p>
              <h6 className="tags">#UXDESIGNER</h6>
            </div>
          </div>
          <img src={resmed} className="piece" alt="resmed" />
        </section>
        {/* 
            AIRBNB
        */}
        <section>
          <div className="overlay">
            <div className="details">
              <h4 className="title">AirBnb Redesign</h4>
              <h5>January 2019</h5>
              <p className="card">
                An AirBnb app redesign to practice my design fundamentals.
                Completed as part of my application for the KP Fellows program.
              </p>
              <h6 className="tags">#UIDESIGNER</h6>
            </div>
          </div>
          <img src={airbnb} className="piece" alt="airbnb" />
        </section>
        {/* 
            MACROINVERTEBRATES
        */}
        <section>
          <div className="overlay">
            <div className="details">
              <h4 className="title">Macroinvertebrates</h4>
              <h5>October 2018 to May 2019</h5>
              <p className="card">
                Research on a new learning and teaching tool for aquatic insect
                identification to support citizen scientists in pollution
                prevention.
              </p>
              <h6 className="tags">#UIDESIGNER</h6>
            </div>
          </div>
          <img src={macro} className="piece" alt="macro" />
        </section>
        {/* 
            PERSONALITY PICTURES
        */}
        <section>
          <div className="overlay">
            <div className="details">
              <h4 className="title">Personality Pictures</h4>
              <h5>January 2018</h5>
              <p className="card">
                A photography project to showcase the quirky members of my
                robotics team and promote applications.
              </p>
              <h6 className="tags">#PHOTOGRAPHER</h6>
            </div>
          </div>
          <img src={personality} className="piece" alt="personality" />
        </section>
        {/* 
            PHOTOGRAPHY
        */}
        <section>
          <div className="overlay">
            <div className="details">
              <h4 className="title">Selected Photography</h4>
              <h5>Ongoing</h5>
              <p className="card">
                Some of my favorite photos that I've taken over the years.
              </p>
              <h6 className="tags">#PHOTOGRAPHER</h6>
            </div>
          </div>
          <img src={photography} className="piece" alt="photography" />
        </section>
        {/* 
            DESIGN/ILLUSTRATION
        */}
        <section>
          <div className="overlay">
            <div className="details">
              <h4 className="title">Design & Illustration</h4>
              <h5>Ongoing</h5>
              <p className="card">
                Miscellaneous design/illustration projects I've done in my free
                time.
              </p>
              <h6 className="tags">#GRAPHICDESIGNER</h6>
            </div>
          </div>
          <img src={illustration} className="piece" alt="illustration" />
        </section>
        {/* 
            YEARBOOK
        */}
        <section>
          <div className="overlay">
            <div className="details">
              <h4 className="title">Yearbook</h4>
              <h5>August 2017 to May 2018</h5>
              <p className="card">
                Photographs from my time as a yearbook photographer, showcasing
                school sports, events, and people.
              </p>
              <h6 className="tags">#PHOTOGRAPHER</h6>
            </div>
          </div>
          <img src={yearbook} className="piece" alt="yearbook" />
        </section>
        {/* 
            3D MODELING/ANIMATION
        */}
        <section>
          <div className="overlay">
            <div className="details">
              <h4 className="title">3D Modeling & Animation</h4>
              <h5>September 2016 to May 2018</h5>
              <p className="card">
                3D models and animations I've created in Autodesk Maya for my
                robotics team.
              </p>
              <h6 className="tags">#ANIMATOR</h6>
            </div>
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
