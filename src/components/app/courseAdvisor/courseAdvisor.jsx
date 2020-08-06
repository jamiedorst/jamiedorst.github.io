import React from "react";
import Navbar from "../navbar";
import Footer from "../footer";
import courseAdvisor from "../../../assets/images/courseAdvisorImgs/courseAdvisor.png";
import advSF from "../../../assets/images/courseAdvisorImgs/advSF.png";
import coursePage from "../../../assets/images/courseAdvisorImgs/coursePage.png";
import detailCA from "../../../assets/images/courseAdvisorImgs/detailCA.png";
import cmunits from "../../../assets/images/courseAdvisorImgs/cmunits.png";
import courseCat from "../../../assets/images/courseAdvisorImgs/courseCat.png";
import enr from "../../../assets/images/courseAdvisorImgs/enr.png";
import fce from "../../../assets/images/courseAdvisorImgs/fce.png";
import rateMyProf from "../../../assets/images/courseAdvisorImgs/rateMyProf.png";
import CAdemo from "../../../assets/images/courseAdvisorImgs/CAdemo.mov";
import "./courseAdvisor.scss";

export default function CourseAdvisor() {
  return (
    <>
      <header>
        <nav className="navbarPage">
          <Navbar />
        </nav>
        <hr className="vertShortLine" />
        <div className="pageHeader">
          <span className="headerGradient" />
          <img
            src={courseAdvisor}
            className="headerImg"
            alt="CMU Course Advisor"
          />
          <div className="pageHeadText">
            <div>
              <h4 className="skinnyText">WORK</h4>
              <h1 className="skinnyText">CMU Course Advisor</h1>
              <h5 className="skinnyText">Ongoing since August 2019</h5>
              <h2>
                A new way for CMU students to discover and learn about courses.
              </h2>
            </div>
            <div className="fastFacts">
              <div className="fact">
                <h5 className="names skinnyText">ROLE</h5>
                <p className="skinnyText">UX Designer & Front-End Developer</p>
              </div>
              <div className="fact">
                <h5 className="names skinnyText">TOOLS</h5>
                <p className="skinnyText">Sketch, Principle, React</p>
              </div>
              <div className="fact">
                <h5 className="names skinnyText">TEAM</h5>
                <p className="skinnyText">Jamie Dorst, Andy Chen, Jesse Chan</p>
              </div>
            </div>
          </div>
        </div>
        <hr className="headBottomLine" />
      </header>
      <main>
        <hr className="vertBodyLineTop caTop" />
        <article className="sectionBreak">
          <h3 className="section">Overview</h3>
          <div>
            <section className="textBlock">
              <h5 className="names skinnyText">PROBLEM</h5>
              <p className="skinnyText bottomM3">
                CMU students don’t have an easy way of discovering new classes
                or getting an idea of what they’re really like. The resources
                that currently exist don’t address the questions students
                actually tend to have or provide the information that would
                actually be helpful when deciding between classes.
              </p>
              <h5 className="names skinnyText">SOLUTION</h5>
              <p className="skinnyText bottomM3">
                Our tool allows students to browse classes, see relevant
                insights about what they’re like, and view comments from
                students who have taken them previously. Filters allow students
                to discover new classes based on criteria that’s important to
                them.
              </p>
              <h5 className="names skinnyText">MY CONTRIBUTION</h5>
              <p className="skinnyText bottomM3">
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
              <h5 className="names">FINAL PRODUCT</h5>
              <hr className="highlightLineTop" />
              <div className="highlightSect">
                <div className="highlightText">
                  <h2>Advanced Search & Filter</h2>
                  <h3 className="blurb">
                    Allows students to see the information that’s important to
                    them, and discover new classes that can fulfill their
                    requirements.
                  </h3>
                </div>
                <span className="highlightGradient" />
                <img
                  src={advSF}
                  className="highlightImg"
                  alt="Course Advisor Highlight"
                />
              </div>
              <div className="highlightSect">
                <div className="highlightText">
                  <h2>Relevant Details & Reviews</h2>
                  <h3 className="blurb">
                    Relevant quantitative data as well as personal reviews and
                    tags from previous students give students a well rounded
                    idea of what classes are like.
                  </h3>
                </div>
                <span className="highlightGradient" />
                <img
                  src={coursePage}
                  className="highlightImg"
                  alt="Course Advisor Highlight"
                />
              </div>
              <hr className="highlightLineBottom" />
            </section>
          </div>
        </article>
        <hr className="vertBodyLineBottom caBott" />
        <article className="sectionBreak">
          <h3 className="section">Research</h3>
          <div>
            <section className="textBlock">
              <h5 className="names skinnyText">COMPETITIVE ANALYSIS</h5>
              <p className="skinnyText bottomM3">
                My first step was to take a closer look at the resources that
                currently exist for students, and figure out what their best and
                worst features were. Based on this, we would know what features
                we needed to include in our product, and why.
              </p>
            </section>
            <section>
              <div className="sbsUnit">
                <img
                  src={fce}
                  className="sbsImg"
                  alt="Faculty Course Evaluations"
                />
                <div className="sbsText">
                  <h4 className="secondary">Faculty Course Evaluations</h4>
                  <p>
                    FCEs are useful for getting a general idea of how well liked
                    a class is or how much time it will likely take.
                  </p>
                  <p>
                    However, the interface is frustrating to use and slow, and
                    the qualitative data shown is often not what students are
                    wondering about. ALthough there are helpful pieces of
                    information here, they’re often too difficult to decipher.
                  </p>
                </div>
              </div>
              <div className="sbsUnit">
                <img
                  src={rateMyProf}
                  className="sbsImg"
                  alt="RateMyProfessor"
                />
                <div className="sbsText">
                  <h4 className="secondary">RateMyProfessor</h4>
                  <p>
                    RateMyProfessor gives a well rounded view of a course by
                    providing an overall rating of the professor along with
                    class tags and comments from previous students.
                  </p>
                  <p>
                    However, it’s missing many professors, reviews are often
                    biased and unhelpful, and the site is riddled with
                    obstructive and distracting ads.
                  </p>
                </div>
              </div>
              <div className="sbsUnit">
                <img src={courseCat} className="sbsImg" alt="Course Catalog" />
                <div className="sbsText">
                  <h4 className="secondary">Course Catalog</h4>
                  <p>
                    As the official CMU Course Catalog, it’s the best source for
                    accurate program requirements and overall options.
                  </p>
                  <p>
                    However, it’s hard to navigate, the same information seems
                    to be located in multiple places, and it isn’t helpful for
                    discovering new courses. As much as I’d like to be able to
                    use this as a source of truth, it’s often being
                    changed/updated and it’s difficult to find a straight answer
                    to simple questions.
                  </p>
                </div>
              </div>
              <div className="sbsUnit">
                <img src={enr} className="sbsImg" alt="Schedule of Classes" />
                <div className="sbsText">
                  <h4 className="secondary">Schedule of Classes</h4>
                  <p>
                    A resource also provided by CMU, the schedule of classes is
                    the best and most reliable place to see which classes are
                    offered in any given semester, along with other relevant
                    information such as location, professor, and time.
                  </p>
                  <p>
                    However, it doesn’t have any helpful filters or sorting
                    functionalities, so it’s hard to find interesting classes.
                  </p>
                </div>
              </div>
              <div className="sbsUnit">
                <img src={cmunits} className="sbsImg" alt="CMUnits" />
                <div className="sbsText">
                  <h4 className="secondary">CMUnits Chrome Extension</h4>
                  <p>
                    CMUnits is a student favorite–it aggregates FCE data and
                    displays it with the course planning website to show how
                    many hours a class takes per week on average.
                  </p>
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
        <article className="sectionBreak">
          <h3 className="section">Design</h3>
          <section className="textBlock">
            <h5 className="names skinnyText">IMPORTANT FEATURES</h5>
            <p className="skinnyText">
              Based on the competitive analysis, I made a list of important
              features that I wanted to include in our site.
            </p>
            <div className="indentText bottomM3">
              <p>
                1. A <span className="bold">simple landing page</span> that
                prompts users to use the search feature, and provides examples
                of possible queries
              </p>
              <p>
                2. Search results that present a{" "}
                <span className="bold">quick snapshot</span> of the most
                important information
              </p>
              <p>
                3. <span className="bold">Filters</span> that are relevant and
                useful
              </p>
              <p>
                4. On the individual course pages, a course description,
                ratings, hours per week, tags, and reviews
              </p>
              <p>
                5. Ability to{" "}
                <span className="bold">filter by professor and year</span> for
                class-specific ratings and tags
              </p>
            </div>
            <h5 className="names skinnyText">INITIAL DESIGN</h5>
            <p className="skinnyText">
              After figuring out the most important features and creating some
              basic wireframes, I put together this prototype using Sketch and
              Principle.
            </p>
          </section>
          <video className="demoVidMac bottomM3" alt="Prototype" controls>
            <source src={CAdemo} />
          </video>
          <div className="textBlock">
            <h5 className="names skinnyText">NEXT STEPS</h5>
            <p className="skinnyText">
              This prototype combined the positive features from the other
              commonly used websites into one simple interface. However, during
              the process of creating it, many questions were raised that I
              hadn't previously considered.
            </p>
            <div className="indentText">
              <p>
                <span className="bold">1. Tags can be very subjective.</span>{" "}
                Some people might consider heavy participation to be a pro,
                while others might consider it a con. How do we provide a set of
                easy to digest tags, that simultaneously show a balance of
                positive and negative, while considering that different people
                will view them differently?
              </p>
              <p>
                <span className="bold">2. A catalog view could be useful.</span>{" "}
                The ability to sort all classes by certain criteria could help
                students discover new classes they hadn't thought about before.
                But would that be possible? What fast facts do people want to
                see when they're looking at all classes at the same time
                (professor, units, rating, etc.)?
              </p>
              <p>
                <span className="bold">
                  3. Implementing comments is easier said than done.
                </span>{" "}
                How do we ensure security and honesty with reviews without
                creating too high of a barrier in which no one will want to post
                anything?
              </p>
            </div>
            <p>
              Moving forward, our team will have to find answers to these
              questions. However, first priority right now is having something
              tangible to work with. So far, I've coded most of the front-end.
              Next steps are to finish the back end and tie up those loose ends,
              and then once we have our MVP, we can get it up and running and
              get some initial feedback.
            </p>
          </div>
        </article>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}