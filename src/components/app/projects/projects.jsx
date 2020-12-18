import React from "react";
import Navbar from "../navbar";
import Footer from "../footer";
import courseAdvisor from "../../../assets/images/projectsImgs/courseAdvisor.png";
import macro from "../../../assets/images/projectsImgs/macro.png";
import resmed from "../../../assets/images/projectsImgs/resmed.png";
import assistant from "../../../assets/images/projectsImgs/assistant.png";
import "./projects.scss";
import { HashLink } from "react-router-hash-link";

export default function Projects() {
  return (
    <>
      <header>
        <nav className="navbarHome">
          <Navbar />
        </nav>
      </header>
      <main className="grid">
        {/* 
            RESMED
        */}
        <section>
          <div className="project">
            <HashLink to="/resmed#top">
              <img
                src={resmed}
                className="preview"
                alt="ResMed Design Project"
              />
            </HashLink>
            <div className="projectText">
              <HashLink to="/resmed#top" className="textLink">
                <h2 className="noMP">ResMed Maskmaker</h2>
              </HashLink>
              <h5 className="noMP">February 2020</h5>
              <p>
                AR app experience for newly diagnosed sleep apnea patients;
                built for ResMed, an IoT medical device company. Completed as
                part of my Interaction Design Studio II class.
              </p>
              <HashLink to="resmed#top" className="textLink">
                <h5 className="seeMore">see more</h5>
              </HashLink>
            </div>
          </div>
        </section>
        {/* 
            VIRTUAL ASSISTANT
        */}
        <section>
          <div className="project">
            <HashLink to="/virtualassistant#top">
              <img
                src={assistant}
                className="preview"
                alt="Virtual Assistant Design Project"
              />
            </HashLink>
            <div className="projectText">
              <HashLink to="/virtualassistant#top" className="textLink">
                <h2 className="noMP">AI Virtual Assistant</h2>
              </HashLink>
              <h5 className="noMP">November 2019</h5>
              <p>
                An AI-powered virtual assitant that serves to create a mental
                distance between remote workers and their workplace.
              </p>
              <HashLink to="/virtualassistant#top" className="textLink">
                <h5 className="seeMore">see more</h5>
              </HashLink>
            </div>
          </div>
        </section>
        {/* 
            CMU COURSE ADVISOR
        */}
        <section>
          <div className="project">
            <HashLink to="/cmucourseadvisor#top">
              <img
                src={courseAdvisor}
                className="preview"
                alt="CMU Course Advisor Project"
              />
            </HashLink>
            <div className="projectText">
              <HashLink to="/cmucourseadvisor#top" className="textLink">
                <h2 className="noMP">CMU Course Advisor</h2>
              </HashLink>
              <h5 className="noMP">Ongoing since August 2019</h5>
              <p>
                Creating a new way for CMU students to discover and learn about
                possible courses.
              </p>
              <HashLink to="/cmucourseadvisor#top" className="textLink">
                <h5 className="seeMore">see more</h5>
              </HashLink>
            </div>
          </div>
        </section>
        {/* 
            MACROINVERTEBRATES
        */}
        <section>
          <div className="project">
            <HashLink to="/macroinvertebrates#top">
              <img
                src={macro}
                className="preview"
                alt="Macroinvertebrates Design and Research Project"
              />
            </HashLink>
            <div className="projectText">
              <HashLink to="/macroinvertebrates#top" className="textLink">
                <h2 className="noMP">Macroinvertebrates</h2>
              </HashLink>
              <h5 className="noMP">Octover 2018 to May 2019</h5>
              <p>
                An innovative new learning and teaching tool for aquatic insect
                identification to support citizen scientists in pollution
                prevention.
              </p>
              <HashLink to="/macroinvertebrates#top" className="textLink">
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
