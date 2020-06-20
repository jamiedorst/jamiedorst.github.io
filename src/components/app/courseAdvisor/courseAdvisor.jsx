import React from "react";
import Navbar from "../navbar";
import Footer from "../footer";
import courseAdvisorBlob from "../../../assets/images/courseAdvisorBlob.png";
import courseAdvisorMac from "../../../assets/images/courseAdvisorMac.png";
import finalBlob from "../../../assets/images/finalBlob.png";
import backCA from "../../../assets/images/backCA.png";
import frontCA from "../../../assets/images/frontCA.png";
import detailCA from "../../../assets/images/detailCA.png";
import cmunits from "../../../assets/images/cmunits.png";
import courseCat from "../../../assets/images/courseCat.png";
import enr from "../../../assets/images/enr.png";
import fce from "../../../assets/images/fce.png";
import rateMyProf from "../../../assets/images/rateMyProf.png";
import CAdemo from "../../../assets/images/CAdemo.mov";
import "./courseAdvisor.scss";

export default function CourseAdvisor() {
  return (
    <>
      <header>
        <nav className="navbarPage">
          <Navbar />
        </nav>
        <div>
          <img src={courseAdvisorBlob} className="blob" alt="Blob" />
          <div className="topLayer">
            <div className="rightText head">
              <h3 className="redText">CMU Course Advisor</h3>
              <p className="blurb">
                A new way for Carnegie Mellon students to discover and learn
                about classes.
              </p>
            </div>
            <img
              src={courseAdvisorMac}
              className="coverPhoto"
              alt="Course Advisor Mac Mockup"
            />
          </div>
        </div>
      </header>
      <main>
        <article className="overview" id="overview">
          <h4 className="redText">OVERVIEW</h4>
          <hr className="redLine" />
          <div>
            <div className="top sectionBreak">
              <section className="mainInfo">
                <h5 className="redText">PROBLEM</h5>
                <p>
                  CMU students don’t have an easy way of discovering new classes
                  or getting an idea of what they’re really like. The resources
                  that currently exist don’t address the questions students
                  actually tend to have or provide the information that would
                  actually be helpful when deciding between classes.
                </p>
                <h5 className="redText">SOLUTION</h5>
                <p>
                  Our tool allows students to browse classes, see relevant
                  insights about what they’re like, and view comments from
                  students who have taken them previously. Filters allow
                  students to discover new classes based on criteria that’s
                  important to them.
                </p>
              </section>
              <aside className="sideInfo">
                <h5 className="redText">ROLE</h5>
                <p>UX Designer and Front End Developer</p>
                <h5 className="redText">TIMELINE</h5>
                <p>Ongoing since August 2019</p>
                <h5 className="redText">TEAM</h5>
                <p>Jamie Dorst, Andy Chen, Jesse Chan</p>
                <h5 className="redText">TOOLS</h5>
                <p>Sketch, Principle, React</p>
              </aside>
            </div>
            <section className="sectionBreak">
              <h5 className="redText">MY CONTRIBUTION</h5>
              <p>
                I took the initiative of making the original design for the
                website so that we would have something to work with. I did a
                competitive analysis against the other relevant websites that
                CMU students currently use to see what features are most and
                least helpful and relevant to our project. I then edited my
                design based on my team’s feedback and coded the entire front
                end–without having any previous knowledge of HTML/CSS or React.
              </p>
            </section>
            <section>
              <h5 className="redText sectionBreak">WORKING FINAL PRODUCT</h5>
              <div className="pad100top">
                <img src={finalBlob} className="blob" alt="Blob" />
                <div className="flexDisplay">
                  <div className="stackedImagesMac">
                    <img
                      src={backCA}
                      className="backMac"
                      alt="Landing Page Screen"
                    />
                    <img
                      src={frontCA}
                      className="frontMac"
                      alt="Search Results Screen"
                    />
                  </div>
                  <div className="leftText">
                    <h3 className="redText">Advanced Search & Filter</h3>
                    <p className="blurb">
                      Allows students to see the information that’s important to
                      them, and discover new classes that can fulfill their
                      requirements.
                    </p>
                  </div>
                </div>
                <div className="flexDisplay m100top">
                  <div className="rightText bottomInfo">
                    <h3 className="redText">Relevant Details & Reviews</h3>
                    <p className="blurb">
                      Relevant quantitative data as well as personal reviews and
                      tags from previous students give students a well rounded
                      idea of what classes are like.
                    </p>
                  </div>
                  <div className="soloImageMac">
                    <img
                      src={detailCA}
                      className="aloneMac"
                      alt="Course Detail Screen"
                    />
                  </div>
                </div>
              </div>
            </section>
          </div>
        </article>
        <article className="overview">
          <h4 className="redText">RESEARCH</h4>
          <hr className="redLine" />
          <div>
            <section className="sectionBreak">
              <h5 className="redText">COMPETITIVE ANALYSIS</h5>
              <p>
                Our first step was to take a closer look at the resources that
                currently exist for students, and figure out what their best and
                worst features were. Based on this, we would know what features
                we needed to include in our product, and why.
              </p>
              <div className="flexDisplay m70top sbsComp">
                <img
                  src={fce}
                  className="sbsMac"
                  alt="Faculty Course Evaluations Screenshot"
                />
                <div className="leftText pad50bottom sbsCompText">
                  <h5 className="redText">Faculty Course Evaluations</h5>
                  <p>
                    Useful for getting a general idea of how well liked a class
                    is or how much time it will take.
                  </p>
                  <br />
                  <p>
                    However, the interface is frustrating to use and slow, and
                    the qualitative data shown is often not what students are
                    wondering about.
                  </p>
                </div>
              </div>
              <div className="flexDisplay m70top sbsComp">
                <img
                  src={rateMyProf}
                  className="sbsMac"
                  alt="RateMyProfessor Screenshot"
                />
                <div className="leftText pad50bottom sbsCompText">
                  <h5 className="redText">RateMyProfessor</h5>
                  <p>
                    Gives a well rounded view by providing an overall rating of
                    the professor along with class tags and comments.
                  </p>
                  <br />
                  <p>
                    However, it’s missing many professors, reviews are often
                    biased, and the site is riddled with ads.
                  </p>
                </div>
              </div>
              <div className="flexDisplay m70top sbsComp">
                <img
                  src={courseCat}
                  className="sbsMac"
                  alt="CMU Course Catalog Screenshot"
                />
                <div className="leftText pad50bottom sbsCompText">
                  <h5 className="redText">Course Catalog</h5>
                  <p>
                    The best source for accurate program requirements and
                    overall options.
                  </p>
                  <br />
                  <p>
                    However, it’s hard to navigate, the same information seems
                    to be located in multiple places, and it isn’t helpful for
                    discovering new courses.
                  </p>
                </div>
              </div>
              <div className="flexDisplay m70top sbsComp">
                <img
                  src={enr}
                  className="sbsMac"
                  alt="CMU Schedule of Classes Screenshot"
                />
                <div className="leftText pad50bottom sbsCompText">
                  <h5 className="redText">Schedule of Classes</h5>
                  <p>
                    Helpful for seeing which classes are offered in any given
                    semester, along with other relevant information.
                  </p>
                  <br />
                  <p>
                    However, it doesn’t have any helpful filters or sorting
                    functionalities, so it’s hard to find interesting classes.
                  </p>
                </div>
              </div>
              <div className="flexDisplay m70top sbsComp">
                <img
                  src={cmunits}
                  className="sbsMac"
                  alt="CMUnits Chrome Extension Screenshot"
                />
                <div className="leftText pad50bottom sbsCompText">
                  <h5 className="redText">CMUnits Chrome Extension</h5>
                  <p>
                    Aggregates FCE data to show how many hours a class takes per
                    week on average.
                  </p>
                  <br />
                  <p>
                    However, it’s only accessible through chrome, and it
                    averages across professors and years, meaning the data is
                    often inaccurate.
                  </p>
                </div>
              </div>
            </section>
          </div>
        </article>
        <article className="overview">
          <h4 className="redText">DESIGN</h4>
          <hr className="redLine" />
          <div>
            <section className="sectionBreak">
              <h5 className="redText">IMPORTANT FEATURES</h5>
              <p>
                Based on the competitive analysis, I made a list of important
                features that I wanted to include in our site. First, I wanted
                to have a simple landing page that{" "}
                <span className="redlight">
                  prompts users to use the search feature,
                </span>{" "}
                and{" "}
                <span className="redlight">
                  provides examples of possible queries.
                </span>{" "}
                Those search results then needed to present a{" "}
                <span className="redlight">
                  quick snapshot of the most important information.
                </span>{" "}
                An important thing that many other sites lack is a robust filter
                system, so having{" "}
                <span className="redlight">
                  filters that are relevant and useful
                </span>{" "}
                are critical for our site. On the individual course pages, a{" "}
                <span className="redlight">
                  course description, ratings, hours per week, tags, and reviews
                </span>{" "}
                would set our site apart from the rest. Finally, users should be
                able to{" "}
                <span className="redlight">
                  filter class-specific ratings and tags by professor and year
                </span>{" "}
                to get accurate information about the specific class they're
                looking into taking.
              </p>
            </section>
            <section className="sectionBreak">
              <h5 className="redText">INITIAL PROTOTYPE</h5>
              <p>
                After figuring out the most important features and creating some
                basic wireframes, I put together this prototype using Sketch and
                Principle.
              </p>
              <video className="demoVidMac" alt="Prototype" controls>
                <source src={CAdemo} />
              </video>
            </section>
            <section className="sectionBreak">
              <h5 className="redText">NEXT STEPS</h5>
              <p>
                This prototype combined the positive features from the other
                commonly used websites into one simple interface. However,
                during the process of creating it, many questions were raised
                that I hadn't previously considered.
              </p>
              <br />
              <p>
                First,{" "}
                <span className="redlight">tags can be very subjective</span>.{" "}
                Some people might consider heavy participation a pro, while
                others might consider it a con. How do we provide a set of easy
                to digest tags, that simultaneously show a balance of positive
                and negative, while considering that different people will view
                them differently?
              </p>
              <br />
              <p>
                Second,{" "}
                <span className="redlight">a catalog view could be useful</span>
                –the ability to sort all classes by certain criteria could help
                students discover new classes they hadn't thought about before.
                But would that be possible? What fast facts do people want to
                see when they're looking at all classes at the same time
                (professor, units, rating, etc.)?
              </p>
              <br />
              <p>
                Third,{" "}
                <span className="redlight">
                  implementing comments is easier said than done
                </span>
                . How do we ensure security and honesty with reviews without
                creating too high of a barrier in which no one will want to post
                anything?
              </p>
              <br />
              <p>
                Moving forward, our team will have to find answers to these
                questions. However, first priority right now is having something
                tangible to work with. So far, I've coded most of the front-end.
                Next steps are to finish the back end and tie up those loose
                ends, and then once we have our MVP, we can get it up and
                running and get some initial feedback.
              </p>
            </section>
          </div>
        </article>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
