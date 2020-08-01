import React from "react";
import Navbar from "../navbar";
import Footer from "../footer";
import gp from "../../../assets/images/workCards/globalPrintCard.png";
import courseAdvisor from "../../../assets/images/workCards/courseAdvisorCard.png";
import macro from "../../../assets/images/workCards/macroCard.png";
import personality from "../../../assets/images/workCards/personalityCard.png";
import kuri from "../../../assets/images/workCards/kuriCard.png";
import design from "../../../assets/images/workCards/designCard.png";
import resmed from "../../../assets/images/workCards/resmedCard.png";
import photography from "../../../assets/images/workCards/photographyCard.png";
import assistant from "../../../assets/images/workCards/assistantCard.png";
import "./work.scss";
import { HashLink } from "react-router-hash-link";

export default function Work() {
  return (
    <>
      <header>
        <nav className="navbarHome">
          <Navbar />
        </nav>
      </header>
      <main className="grid">
        {/* 
            VMWARE GLOBAL PRINT
        */}
        <section>
          <div>
            <HashLink to="/globalPrint#top">
              <div className="overlay1">
                <div className="details">
                  <h3 className="title workCards">Global Print</h3>
                  <h5 className="date workCards">June to July 2020</h5>
                  <p className="card workCards">
                    A research project examining how remote working has impacted
                    the printing needs of VMware colleagues.
                  </p>
                  <h5 className="tags names workCards">#UXRESEARCHER</h5>
                </div>
              </div>
            </HashLink>
          </div>
          <img src={gp} className="piece" alt="VMware Global Print" />
        </section>
        {/* 
            RESMED
        */}
        <section>
          <div>
            <HashLink to="/resmed#top">
              <div className="overlay1">
                <div className="details">
                  <h3 className="title workCards">ResMed</h3>
                  <h5 className="date workCards">February 2020</h5>
                  <p className="card workCards">
                    AR mobile app design for ResMed, an IoT medical device
                    company. Completed as part of my Interaction Design Studio
                    II class.
                  </p>
                  <h5 className="tags names workCards">#UXDESIGNER</h5>
                </div>
              </div>
            </HashLink>
          </div>
          <img src={resmed} className="piece" alt="ResMed Design Project" />
        </section>
        {/* 
            VIRTUAL ASSISTANT
        */}
        <section>
          <div>
            <HashLink to="/virtualassistant#top">
              <div className="overlay1">
                <div className="details">
                  <h3 className="title workCards">AI Virtual Assistant</h3>
                  <h5 className="date workCards">November 2019</h5>
                  <p className="card workCards">
                    A design challenge aimed at utilizing emerging technology to
                    help tech companies retain talent; an AI-powered virtual
                    assitant that serves to create a mental distance between
                    remote workers and their workplace.
                  </p>
                  <h5 className="tags names workCards">
                    #UXRESEARCHER #UXDESIGNER
                  </h5>
                </div>
              </div>
            </HashLink>
          </div>
          <img
            src={assistant}
            className="piece"
            alt="AI Virtual Assistant Design/Research Project"
          />
        </section>
        {/* 
            CMU COURSE ADVISOR
        */}
        <section>
          <div>
            <HashLink to="/cmucourseadvisor#top">
              <div className="overlay1">
                <div className="details">
                  <h3 className="title workCards">CMU Course Advisor</h3>
                  <h5 className="date workCards">Ongoing since August 2019</h5>
                  <p className="card workCards">
                    Creating a new way for CMU students to discover and learn
                    about possible courses.
                  </p>
                  <h5 className="tags names workCards">
                    #UXDESIGNER #FRONTENDDEVELOPER
                  </h5>
                </div>
              </div>
            </HashLink>
          </div>
          <img
            src={courseAdvisor}
            className="piece"
            alt="CMU Course Advisor Website Project"
          />
        </section>
        {/* 
            ACCEPTABLE ROBOT MOTION
        */}
        <section>
          <div>
            <HashLink to="/robotmotion#top">
              <div className="overlay1">
                <div className="details">
                  <h3 className="title workCards">Acceptable Robot Motion</h3>
                  <h5 className="date workCards">January 2020 to May 2020</h5>
                  <p className="card workCards">
                    Research on what makes robot movements acceptable, what
                    acceptable means, and what a better tool might look like for
                    designing acceptable robot movements.
                  </p>
                  <h5 className="tags names workCards">
                    #UXRESEARCHER #RESEARCHASSISTANT
                  </h5>
                </div>
              </div>
            </HashLink>
          </div>
          <img
            src={kuri}
            className="piece"
            alt="Acceptable Robot Motion Research Project"
          />
        </section>
        {/* 
            MACROINVERTEBRATES
        */}
        <section>
          <div>
            <HashLink to="/macroinvertebrates#top">
              <div className="overlay1">
                <div className="details">
                  <h3 className="title workCards">Macroinvertebrates</h3>
                  <h5 className="date workCards">October 2018 to May 2019</h5>
                  <p className="card workCards">
                    Research on a new learning and teaching tool for aquatic
                    insect identification to support citizen scientists in
                    pollution prevention.
                  </p>
                  <h5 className="tags names workCards">
                    #UIDESIGNER #RESEARCHASSISTANT
                  </h5>
                </div>
              </div>
            </HashLink>
          </div>
          <img
            src={macro}
            className="piece"
            alt="Macroinvertebrates Research Project"
          />
        </section>
        {/* 
            PERSONALITY PICTURES
        */}
        <section>
          <div>
            <HashLink to="/personalitypictures#top">
              <div className="overlay1">
                <div className="details">
                  <h3 className="title workCards">Personality Pictures</h3>
                  <h5 className="date workCards">January 2018</h5>
                  <p className="card workCards">
                    A photography project to showcase the quirky members of my
                    robotics team and promote applications.
                  </p>
                  <h5 className="tags names workCards">#PHOTOGRAPHER</h5>
                </div>
              </div>
            </HashLink>
          </div>
          <img
            src={personality}
            className="piece"
            alt="Personality Pictures Project"
          />
        </section>
        {/* 
            DESIGN/ILLUSTRATION
        */}
        <section>
          <div>
            <HashLink to="/designillustration#top">
              <div className="overlay1">
                <div className="details">
                  <h3 className="title workCards">Design & Illustration</h3>
                  <h5 className="date workCards">Ongoing</h5>
                  <p className="card workCards">
                    Miscellaneous design/illustration projects I've done in my
                    free time.
                  </p>
                  <h5 className="tags names workCards">#GRAPHICDESIGNER</h5>
                </div>
              </div>
            </HashLink>
          </div>
          <img
            src={design}
            className="piece"
            alt="Freelance Design and Illustration"
          />
        </section>
        {/* 
            PHOTOGRAPHY
        */}
        <section>
          <div>
            <HashLink to="/photography#top">
              <div className="overlay1">
                <div className="details">
                  <h3 className="title workCards">Photography</h3>
                  <h5 className="date workCards">Ongoing</h5>
                  <p className="card workCards">
                    Some of my favorite photos I've taken over the years.
                  </p>
                  <h5 className="tags names workCards">#PHOTOGRAPHER</h5>
                </div>
              </div>
            </HashLink>
          </div>
          <img src={photography} className="piece" alt="Photography" />
        </section>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
