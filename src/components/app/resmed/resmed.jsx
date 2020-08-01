import React from "react";
import Navbar from "../navbar";
import Footer from "../footer";
import resmed from "../../../assets/images/resmedImgs/resmed.png";
import resmedIso from "../../../assets/images/resmedIso.png";
import resFinalBlob from "../../../assets/images/resFinalBlob.png";
import backRes from "../../../assets/images/resMach.png";
import frontRes from "../../../assets/images/resBubbles.png";
import ARdown from "../../../assets/images/resARdown.png";
import ARup from "../../../assets/images/resARup.png";
import whiteboard from "../../../assets/images/whiteboard.png";
import postits from "../../../assets/images/postits.png";
import pinkPost from "../../../assets/images/pinkPost.png";
import candia from "../../../assets/images/candia.png";
import stacy from "../../../assets/images/stacy.png";
import stakeMap from "../../../assets/images/stakeMap.png";
import reverse from "../../../assets/images/reverse.png";
import lofi1 from "../../../assets/images/lofi1.png";
import lofi2 from "../../../assets/images/lofi2.png";
import med1 from "../../../assets/images/med1.png";
import med2 from "../../../assets/images/med2.png";
import med3 from "../../../assets/images/med3.png";
import med4 from "../../../assets/images/med4.png";
import hifi1 from "../../../assets/images/hifi1.png";
import hifi2 from "../../../assets/images/hifi2.png";
import hifi3 from "../../../assets/images/hifi3.png";
import hifi4 from "../../../assets/images/hifi4.png";
import resDemo from "../../../assets/images/resDemo.mov";
import high1 from "../../../assets/images/high1.png";
import high2 from "../../../assets/images/high2.png";
import microVid1 from "../../../assets/images/microVid1.mov";
import micro1 from "../../../assets/images/micro1.png";
import microVid2 from "../../../assets/images/microVid2.mov";
import micro2 from "../../../assets/images/micro2.png";
import "./resmed.scss";

export default function Resmed() {
  return (
    <>
      <header>
        <nav className="navbarPage">
          <Navbar />
        </nav>
        <hr className="vertShortLine" />
        <div className="pageHeader">
          <img src={resmed} className="headerImg" alt="VMware Logo" />
          <div className="pageHeadText">
            <div>
              <h4 className="skinnyText">WORK</h4>
              <h1 className="skinnyText">ResMed</h1>
              <h5 className="skinnyText">February 2020</h5>
              <h2>
                An AR app experience for newly diagnosed sleep apnea patients;
                built for ResMed, an IoT medical device company.
              </h2>
            </div>
            <div className="fastFacts">
              <div className="fact">
                <h5 className="names skinnyText">ROLE</h5>
                <p className="skinnyText">UI Designer</p>
              </div>
              <div className="fact">
                <h5 className="names skinnyText">TOOLS</h5>
                <p className="skinnyText">Figma, Lucidchart</p>
              </div>
              <div className="fact">
                <h5 className="names skinnyText">TEAM</h5>
                <p className="skinnyText">
                  Jamie Dorst, Stacy Kellner, Matt Franklin, Candia Gu
                </p>
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
                As part of my Interaction Design Studio II class, we were tasked
                with creating a native mobile app to either augment an existing
                service or create a new service for a given company. We were
                assigned ResMed, an IoT medical device company that makes
                equipment for respiratory conditions such as sleep apnea and
                COPD.
              </p>
              <h5 className="names skinnyText">SOLUTION</h5>
              <p className="skinnyText bottomM3">
                We created an AR app experience for newly diagnosed sleep apnea
                patients that will lower the barrier of entry to getting a
                device, and help new patients feel more comfortable with the new
                territory they were now entering for the rest of their lives.
              </p>
              <h5 className="names skinnyText">MY CONTRIBUTION</h5>
              <p className="skinnyText bottomM3">
                I'm proud to say that this team worked beautifully together. To
                highlight some specifics that I did, I first helped create the
                stakeholder map by focusing on who our key stakeholders were and
                fleshing out what needs they had. I then created the first
                version of our lo-fi prototype, and was the driving force in
                translating that from mid-fi to hi-fi. I also did most of the
                animations in Figma, aiming to create smooth interactions
                despite not actually creating a working prototype.
              </p>
            </section>
            <section>
              <h5 className="names">FINAL PRODUCT</h5>
              <hr className="highlightLineTop" />
              <div className="highlightSect">
                <div className="highlightText">
                  <h2>Machine, Mask, Order</h2>
                  <h3 className="blurb">
                    Our app walks the user through these three simple steps,
                    resulting in the perfect equipment for them. We cut out the
                    middle-men in the typical customer journey, and make it as
                    easy as 1, 2, 3.
                  </h3>
                </div>
                <img src={resmed} className="highlightImg" alt="VMware Logo" />
              </div>
              <div className="highlightSect">
                <div className="highlightText">
                  <h2>AR Mask Try-On</h2>
                  <h3 className="blurb">
                    Patients can now literally picture themselves using ResMed.
                    Get a sense of what your equipment will be like with the AR
                    try-on, bringing a little comfort and a little smile in an
                    uneasy time.
                  </h3>
                </div>
                <img src={resmed} className="highlightImg" alt="VMware Logo" />
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
              <h5 className="names skinnyText">STAKEHOLDER MAPPING</h5>
              <p className="skinnyText">
                We began by creating a stakeholder map in order to explore and
                understand the relationships between important people and
                groups. Because it's a healthcare company, there are a lot of
                important people and groups, and a lot of very specific ways
                that they're allowed to interact to maintain patient privacy.
              </p>
              <p className="bottomM3">
                We started as a group using a whiteboard and post-its to
                generate a comprehensive list of stakeholders and their primary
                relationships, as well as just exploring our associations with
                ResMed as a company. We wanted to get a sense of the complex
                relationships we were working with, and start wrapping our minds
                about what domain we could potentially tackle.
              </p>
            </section>
            <img
              src={resmed}
              className="img3c"
              alt="Faculty Course Evaluations"
            />
            <img
              src={resmed}
              className="img2c"
              alt="Faculty Course Evaluations"
            />
            <img
              src={resmed}
              className="img3c"
              alt="Faculty Course Evaluations"
            />
            <section>
              <div className="sbsUnit">
                <img
                  src={resmed}
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
                <img src={resmed} className="sbsImg" alt="RateMyProfessor" />
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
                <img src={resmed} className="sbsImg" alt="Course Catalog" />
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
                <img
                  src={resmed}
                  className="sbsImg"
                  alt="Schedule of Classes"
                />
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
                <img src={resmed} className="sbsImg" alt="CMUnits" />
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
            <source src={resmed} />
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
      {/* <main>
        <article className="overview">
          <h4 className="blueText">OVERVIEW</h4>
          <hr className="blueLine" />
          <div>
            <div className="top sectionBreak">
              <section className="mainInfo">
                <h5 className="blueText">PROBLEM</h5>
                <p>
                  As part of my Interaction Design Studio II class, we were
                  tasked with creating a native mobile app to either augment an
                  existing service or create a new service for a given company.
                  We were assigned ResMed, an IoT medical device company.
                </p>
                <h5 className="blueText">SOLUTION</h5>
                <p>
                  We created an AR app experience for newly diagnosed sleep
                  apnea patients that will lower the barrier of entry to getting
                  a device, and help new patients feel more comfortable with the
                  new territory they were now entering for the rest of their
                  lives.
                </p>
              </section>
              <aside className="sideInfo">
                <h5 className="blueText">ROLE</h5>
                <p>UI Designer</p>
                <h5 className="blueText">TIMELINE</h5>
                <p>February 2020</p>
                <h5 className="blueText">TEAM</h5>
                <p>Jamie Dorst, Stacy Kellner, Matt Franklin, Candia Gu</p>
                <h5 className="blueText">TOOLS</h5>
                <p>Figma, Lucidchart</p>
              </aside>
            </div>
            <section className="sectionBreak">
              <h5 className="blueText">MY CONTRIBUTION</h5>
              <p>
                I'm proud to say that this team worked beautifully together. To
                highlight some specifics that I did, I first helped create the
                stakeholder map by focusing on who our key stakeholders were and
                fleshing out what needs they had. I then created the first
                version of our lo-fi prototype, and was the driving force in
                translating that from mid-fi to hi-fi. I also did most of the
                animations in Figma, aiming to create smooth interactions
                despite not actually creating a working prototype.
              </p>
            </section>
            <section>
              <h5 className="blueText sectionBreak">FINAL PRODUCT</h5>
              <div className="pad100top">
                <img src={resFinalBlob} className="blob" alt="Blob" />
                <div className="flexDisplay">
                  <div className="stackedImagesPhone">
                    <img
                      src={backRes}
                      className="backPhoneLeft"
                      alt="ResMed iPhone Mockup Screen 1"
                    />
                    <img
                      src={frontRes}
                      className="frontPhoneLeft"
                      alt="ResMed iPhone Mockup Screen 2"
                    />
                  </div>
                  <div className="leftText">
                    <h3 className="blueText">Find Machine, Find Mask, Order</h3>
                    <p className="blurb">
                      Our app walks the user through these three simple steps,
                      resulting in the perfect equipment for them. We cut out
                      the middle-men in the typical customer journey, and make
                      it as easy as 1, 2, 3.
                    </p>
                  </div>
                </div>
                <div className="flexDisplay m70top">
                  <div className="rightText">
                    <h3 className="blueText">AR Mask Try-On</h3>
                    <p className="blurb">
                      Patients can now literally picture themselves using
                      ResMed. Get a sense of what your equipment will be like
                      with the AR try-on, bringing a little comfort and a little
                      smile in an uneasy time.
                    </p>
                  </div>
                  <div className="stackedImagesPhone">
                    <img
                      src={ARdown}
                      className="backPhoneRight"
                      alt="ResMed iPhone Mockup AR Screen 1"
                    />
                    <img
                      src={ARup}
                      className="frontPhoneRight"
                      alt="ResMed iPhone Mockup AR Screen 2"
                    />
                  </div>
                </div>
              </div>
            </section>
          </div>
        </article>
        <article className="overview">
          <h4 className="blueText">RESEARCH</h4>
          <hr className="blueLine" />
          <div>
            <section className="sectionBreak">
              <h5 className="blueText">STAKEHOLDER MAPPING</h5>
              <p>
                We began by creating a stakeholder map in order to explore and
                understand the relationships between important people and
                groups. Because it's a healthcare company, there are a lot of
                important people and groups, and a lot of very specific ways
                that they're allowed to interact to maintain patient privacy.
              </p>
              <br />
              <p>
                We started as a group using a whiteboard and post-its to
                generate a comprehensive list of stakeholders and their primary
                relationships. We wanted to get a sense of the complex
                relationships we were working with, and start wrapping our minds
                about what domain we could potentially tackle.
              </p>
              <div className="flexDisplay m70top pad50bottom">
                <img
                  src={pinkPost}
                  className="phoneImg3 pad20right"
                  alt="Post-It Brainstorming"
                />
                <img
                  src={whiteboard}
                  className="phoneImg3 pad20right"
                  alt="Whiteboard Stakeholder Mapping"
                />
                <img
                  src={postits}
                  className="phoneImg3"
                  alt="Post-It Brainstorming"
                />
              </div>
              <p>
                After our initial mapping, we created a couple more refined maps
                to focus on the important relationships and optimally organize
                our information.
              </p>
              <div className="flexDisplay m70top pad50bottom">
                <img
                  src={candia}
                  className="phoneImg2 pad20right"
                  alt="Initial Stakeholder Mapping"
                />
                <img
                  src={stacy}
                  className="phoneImg2"
                  alt="Initial Stakeholder Mapping"
                />
              </div>
              <p>
                We then combined our best ideas to create a high-fidelity
                stakeholder map. Because there were so many stakeholders
                involved in the process, we chose to simplify the map as much as
                possible so that we could focus on the key stakeholders that our
                solution might affect.
              </p>
              <div className="flexDisplay m70top pad50bottom">
                <img
                  src={stakeMap}
                  className="fullWidthImg"
                  alt="Final Stakeholder Map"
                />
              </div>
            </section>
            <section className="sectionBreak">
              <h5 className="blueText">KEY STAKEHOLDERS</h5>
              <p>
                Through our stakeholder map, we examined complex relationships
                between patients, caretakers, medical professionals, and ResMed
                itself. Three key stakeholders emerged from this process:
                distributors, respiratory therapists, and patients.
              </p>
              <br />
              <p>
                <span className="bluelight">Distributors</span> act as the
                middlemen between ResMed and healthcare providers. They get
                devices from ResMed, and then sell those to respiratory
                therapists. They have no direct contact with patients.
              </p>
              <br />
              <p>
                <span className="bluelight">Respiratory Therapists</span> are
                most often referred to patients by their general practitioner.
                They then work with the patient to find the right device, make a
                sale, and help teach them about how to properly use it.
              </p>
              <br />
              <p>
                <span className="bluelight">Patients</span> need to get a device
                to improve their health and quality of life. However, this can
                be an inimidating endeavor, and the number of hoops they need to
                jump through to finally get the device doesn't help. Our app
                should focus on making the patient experience as easy and
                pleasant as possible.
              </p>
            </section>
          </div>
        </article>
        <article className="overview">
          <h4 className="blueText">DESIGN</h4>
          <hr className="blueLine" />
          <div>
            <section className="sectionBreak">
              <h5 className="blueText">REVERSE ASSUMPTIONS</h5>
              <p>
                To get ideas flowing, we used a reverse assumptions exercise.
                First, a list of assumptions is generated, then each is
                reversed, and finally ideas are generated based upon those
                reversals. This helped us explore opportunities for innovation
                by reassessing existing beliefs.
              </p>
              <div className="flexDisplay m70top pad50bottom">
                <img
                  src={reverse}
                  className="phoneImg2"
                  alt="Reverse Assumptions"
                />
              </div>
              <p>
                While not all reversals yielded actionable ideas, separation of
                the generative and evaluative processes prevented ideas from
                being rejected prematurely, and helped us find opportunities to
                pursue.
              </p>
            </section>
            <section className="sectionBreak">
              <h5 className="blueText">SYNTHESIS</h5>
              <p>
                Two channels of opportunity emerged from our reverse assumptions
                activity: <span className="bluelight">pre-purchase</span> and{" "}
                <span className="bluelight">post-purchase</span>.
              </p>
              <br />
              <p>
                In the pre-purchase sector, we thought of a few different ideas.
                A{" "}
                <span className="bluelight">
                  direct-to-consumer business model
                </span>
                , an <span className="bluelight">online device-finder</span>,
                and a <span className="bluelight">device customizer</span>.
                Working in the pre-purchase sector might help{" "}
                <span className="bluelight">
                  offload some of the work for Respiratory Therapists
                </span>
                . Our ideas also{" "}
                <span className="bluelight">
                  give the patient a sense of agency
                </span>{" "}
                in responding to their disease, which they currently lack.
              </p>
              <br />
              <p>
                In the post-purchase sector, we thought of a few more ideas. A{" "}
                <span className="bluelight">hands-off setup</span>, better{" "}
                <span className="bluelight">patient-family connection</span>,
                and <span className="bluelight">in-app support</span>. Working
                in the post-purchase sector would likely mean a{" "}
                <span className="bluelight">longer-lasting app</span>. However,
                these ideas largely exist already, and we would merely be
                improving them.
              </p>
              <br />
              <p>
                We decided that{" "}
                <span className="bluelight">we wanted to innovate</span>, and
                that even if our app wasn't one that patients kept on their
                phone long after first downloading it, that was ok, as long as
                it served its purpose. So, we went with the pre-purchase sector,
                and tried to combine our ideas into one cohesive app.
              </p>
            </section>
            <section className="sectionBreak">
              <h5 className="blueText">PROTOTYPING</h5>
              <p>
                We began with some simple sketches to start working out what the
                UI might be like.
              </p>
              <div className="flexDisplay m70top pad50bottom">
                <img
                  src={lofi1}
                  className="phoneImg2 pad20right"
                  alt="Low Fidelity Prototyping"
                />
                <img
                  src={lofi2}
                  className="phoneImg2"
                  alt="Low Fidelity Prototyping"
                />
              </div>
              <p>
                We then selected the most impactful interactions to translate
                into medium-fidelity screens.
              </p>
              <div className="flexDisplay m70top pad50bottom">
                <img
                  src={med1}
                  className="phoneImg4 pad20right"
                  alt="Medium Fidelity Prototyping"
                />
                <img
                  src={med2}
                  className="phoneImg4 pad20right"
                  alt="Medium Fidelity Prototyping"
                />
                <img
                  src={med3}
                  className="phoneImg4 pad20right"
                  alt="Medium Fidelity Prototyping"
                />
                <img
                  src={med4}
                  className="phoneImg4"
                  alt="Medium Fidelity Prototyping"
                />
              </div>
              <p>
                From there, we refined our designs, made them more cohesive, and
                created our final wireframes.
              </p>
              <div className="flexDisplay m70top pad50bottom">
                <img
                  src={hifi1}
                  className="phoneImg4 pad20right"
                  alt="High Fidelity Prototyping"
                />
                <img
                  src={hifi2}
                  className="phoneImg4 pad20right"
                  alt="High Fidelity Prototyping"
                />
                <img
                  src={hifi3}
                  className="phoneImg4 pad20right"
                  alt="High Fidelity Prototyping"
                />
                <img
                  src={hifi4}
                  className="phoneImg4"
                  alt="High Fidelity Prototyping"
                />
              </div>
            </section>
            <section className="sectionBreak">
              <h5 className="blueText">FINAL PRODUCT</h5>
              <p>
                Maskmaker: a new app built to{" "}
                <span className="bluelight">
                  simplify the patient experience
                </span>{" "}
                by seamlessly guiding users through{" "}
                <span className="bluelight">picking the perfect mask</span> for
                them.
              </p>
              <div className="flexDisplay m70top pad150bottom">
                <video
                  className="demoVidPhone"
                  alt="ResMed Prototype Video"
                  controls
                >
                  <source src={resDemo} />
                </video>
              </div>
              <p>
                With the AR try-on feature, patients can literally{" "}
                <span className="bluelight">picture themselves</span> using
                ResMed.
              </p>
              <div className="flexDisplay m70top pad50bottom sbsComp">
                <img
                  src={high1}
                  className="phoneImg4 pad20right"
                  alt="ResMed iPhone Mockup AR Screen 1"
                />
                <img
                  src={high2}
                  className="phoneImg4 pad20right"
                  alt="ResMed iPhone Mockup AR Screen 2"
                />
                <div className="sbsPhone sbsCompText">
                  <p>
                    Users are able to swipe through their best-fit masks, and
                    see what parts of their face would be covered. We provide a
                    short description that{" "}
                    <span className="bluelight">
                      highlights the features of each mask
                    </span>
                    , and then{" "}
                    <span className="bluelight">
                      displays which of the user's selected needs are met
                    </span>{" "}
                    by it. This snapshot allows users to{" "}
                    <span className="bluelight">
                      quickly become familiar with each mask
                    </span>
                    . Users can also swipe up for more information about each
                    mask, showing them{" "}
                    <span className="bluelight">product highlights</span> and{" "}
                    <span className="bluelight">fun facts.</span>
                  </p>
                </div>
              </div>
              <p>
                We also wanted to add{" "}
                <span className="bluelight">
                  deliberate and delightful microinteractions
                </span>{" "}
                that would augment the experience of the app and also help us
                propel our vision forward.
              </p>
              <div className="flexDisplay m70top pad50bottom sbsComp">
                <video
                  className="phoneImg4 pad20right"
                  alt="Splash Page Prototype Video"
                  autoPlay
                  loop
                  muted
                >
                  <source src={microVid1} />
                </video>
                <img
                  src={micro1}
                  className="phoneImg4 pad20right"
                  alt="Welcome Screen Mockup"
                />
                <div className="sbsPhone sbsCompText">
                  <p>
                    When users first open the app, they're greeted with the{" "}
                    <span className="bluelight">familiar ResMed logo</span> that
                    fades to a comforting message about what the app is here to
                    help them with. We wanted to ensure that new users would{" "}
                    <span className="bluelight">
                      trust they were in good hands
                    </span>
                    –the language we used was very deliberate.
                  </p>
                </div>
              </div>
              <div className="flexDisplay m70top pad50bottom sbsComp">
                <video
                  className="phoneImg4 pad20right"
                  alt="Page Transition Prototype Video"
                  autoPlay
                  loop
                  muted
                >
                  <source src={microVid2} />
                </video>
                <img
                  src={micro2}
                  className="phoneImg4 pad20right"
                  alt="Page Stage Mockup"
                />
                <div className="sbsPhone sbsCompText">
                  <p>
                    The screens in between each step{" "}
                    <span className="bluelight">
                      keep users grounded and informed
                    </span>{" "}
                    about where they are in the process. We maintain this sense
                    of security throughout by having the current step always at
                    the top of the screen.
                  </p>
                </div>
              </div>
              <p>
                Overall, our app achieves three main goals. It helps{" "}
                <span className="bluelight">guide product development</span> by
                uncovering patient preferences and revealing sales trends. It
                also{" "}
                <span className="bluelight">welcomes emerging technology</span>{" "}
                through the AR try-on, as well as allowing technology to carry
                more weight, relieving pressure from other stakeholders.
                Finally, it helps{" "}
                <span className="bluelight">build stronger relationships</span>{" "}
                with patients by saving their prescription information and
                catering to their individualized needs.
              </p>
            </section>
          </div>
        </article>
      </main> */}
      <footer>
        <Footer />
      </footer>
    </>
  );
}
