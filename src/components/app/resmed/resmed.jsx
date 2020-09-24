import React from "react";
import Navbar from "../navbar";
import Footer from "../footer";
import resmed from "../../../assets/images/resmedImgs/resmed.png";
import mmo from "../../../assets/images/resmedImgs/mmo.png";
import arTry from "../../../assets/images/resmedImgs/arTry.png";
import postits from "../../../assets/images/resmedImgs/postits.png";
import pinkPost from "../../../assets/images/resmedImgs/pinkPost.png";
import candia from "../../../assets/images/resmedImgs/candiaMap.png";
import stacy from "../../../assets/images/resmedImgs/stacyMap.png";
import stakeMap from "../../../assets/images/resmedImgs/stakeMap.png";
import reverse from "../../../assets/images/resmedImgs/reverse.png";
import lofi1 from "../../../assets/images/resmedImgs/lofi1.png";
import lofi2 from "../../../assets/images/resmedImgs/lofi2.png";
import med1 from "../../../assets/images/resmedImgs/med1.png";
import med2 from "../../../assets/images/resmedImgs/med2.png";
import med3 from "../../../assets/images/resmedImgs/med3.png";
import med4 from "../../../assets/images/resmedImgs/med4.png";
import hifi1 from "../../../assets/images/resmedImgs/hifi1.png";
import hifi2 from "../../../assets/images/resmedImgs/hifi2.png";
import hifi3 from "../../../assets/images/resmedImgs/hifi3.png";
import hifi4 from "../../../assets/images/resmedImgs/hifi4.png";
import resDemo from "../../../assets/images/resmedImgs/resDemo.mov";
import high1 from "../../../assets/images/resmedImgs/high1.png";
import high2 from "../../../assets/images/resmedImgs/high2.png";
import microVid1 from "../../../assets/images/resmedImgs/microVid1.mov";
import micro1 from "../../../assets/images/resmedImgs/micro1.png";
import microVid2 from "../../../assets/images/resmedImgs/microVid2.mov";
import micro2 from "../../../assets/images/resmedImgs/micro2.png";
import SkipButton from "../skipButton";
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
          <span className="headerGradient" />
          <img src={resmed} className="headerImg" alt="ResMed Logo" />
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
        <hr className="vertBodyLineTop rmTop" />
        <article className="sectionBreak">
          <h3 className="section">Overview</h3>
          <div>
            <section className="textBlock">
              <h5 className="names skinnyText">PROBLEM</h5>
              <p className="skinnyText bottomM3">
                As part of my Interaction Design Studio II class, we were tasked
                with creating a native mobile app to either augment an existing
                service or create a new service for ResMed, an IoT medical
                device company.
              </p>
              <h5 className="names skinnyText">SOLUTION</h5>
              <p className="skinnyText bottomM3">
                We created an AR app experience for newly diagnosed sleep apnea
                patients that will lower the barrier of entry to getting a
                device, and help new patients feel more comfortable with the
                new, intimidating territory they were entering for the first
                time.
              </p>
              <h5 className="names skinnyText">MY CONTRIBUTION</h5>
              <p className="skinnyText bottomM3">
                I'm proud to say that this team worked beautifully together. To
                highlight some specifics that I did, I scaffolded our
                stakeholder map by fleshing out who was involved in our story
                and what their roles were. I then created the first version of
                our lo-fi prototype, and was the driving force in translating
                that from mid-fi to hi-fi. I also did most of the animations in
                Figma, honing my skills in creating smooth interactions despite
                not actually creating a working prototype.
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
                <span className="highlightGradient" />
                <img
                  src={mmo}
                  className="highlightImg"
                  alt="Maskmaker Highlight"
                />
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
                <span className="highlightGradient" />
                <img
                  src={arTry}
                  className="highlightImg"
                  alt="Maskmaker Highlight"
                />
              </div>
              <hr className="highlightLineBottom" />
            </section>
          </div>
        </article>
        <SkipButton />
        <hr className="vertBodyLineBottom rmBott" />
        <article className="sectionBreak">
          <h3 className="section">Research</h3>
          <section className="textBlock">
            <h5 className="names skinnyText">STAKEHOLDER MAPPING</h5>
            <p className="skinnyText">
              We began by creating a stakeholder map to explore and understand
              the relationships between important people and groups. Because
              it's a healthcare company, there are a lot of important players,
              and a lot of very specific ways that they're allowed to interact
              to maintain patient privacy.
            </p>
            <p>
              We started as a group using a post-its to generate a comprehensive
              list of stakeholders and their primary relationships, as well as
              just exploring our associations with ResMed as a company. This
              helped us get a sense of these complex relationships and start
              wrapping our minds about what domain we might tackle.
            </p>
          </section>
          <div className="bottomM3">
            <img src={pinkPost} className="landscape4w" alt="Post Its" />
            <img src={postits} className="landscape4w" alt="Post Its" />
          </div>
          <section className="textBlock">
            <p>
              After our initial mapping, we created a couple more refined maps
              to focus on the important relationships and optimally organize our
              information.
            </p>
          </section>
          <div className="bottomM3">
            <img src={candia} className="portrait4w" alt="Stakeholder Map" />
            <img src={stacy} className="portrait4w" alt="Stakeholder Map" />
          </div>
          <section className="textBlock">
            <p>
              We then combined our best ideas to create a high-fidelity map.
              Because there were so many stakeholders involved in the process,
              we chose to simplify the map as much as possible so that we could
              focus on the key stakeholders that our solution might affect.
            </p>
          </section>
          <img
            src={stakeMap}
            className="landscape8w bottomM3"
            alt="Stakeholder Map"
          />
          <section className="textBlock">
            <p>
              Through our stakeholder map, we examined complex relationships
              between patients, caretakers, medical professionals, and ResMed
              itself. Three key stakeholders emerged from this process:
              distributors, respiratory therapists, and patients.
            </p>
            <div className="indentText">
              <p>
                <span className="bold">1. Distributors</span> act as the
                middlemen between ResMed and healthcare providers. They get
                devices from ResMed, and then sell those to respiratory
                therapists. They have no direct contact with patients.
              </p>
              <p>
                <span className="bold">2. Respiratory Therapists</span> are most
                often referred to patients by their general practitioner. They
                then work with the patient to find the right device, make a
                sale, and help teach them about how to properly use it.
              </p>
              <p>
                <span className="bold">3. Patients</span> need to get a device
                to improve their health and quality of life. However, this can
                be an inimidating endeavor, and the number of hoops they need to
                jump through to finally get the device doesn't help. Our app
                should focus on making the patient experience as easy and
                pleasant as possible.
              </p>
            </div>
          </section>
        </article>
        <article className="sectionBreak">
          <h3 className="section">Design</h3>
          <section className="textBlock">
            <h5 className="names skinnyText">REVERSE ASSUMPTIONS</h5>
            <p className="skinnyText">
              To get ideas flowing, we used a reverse assumptions exercise.
              First, a list of assumptions is generated, then each is reversed,
              and ideas are generated based upon those reversals. This helped us
              explore opportunities for innovation by reassessing existing
              beliefs.
            </p>
          </section>
          <img
            src={reverse}
            className="portrait4w topM1"
            alt="Reverse Assumptions"
          />
          <section className="textBlock bottomM3">
            <p>
              While not all reversals yielded actionable ideas, separation of
              the generative and evaluative processes prevented ideas from being
              rejected prematurely, and helped us find interesting avenues.
            </p>
          </section>
          <section className="textBlock">
            <h5 className="names skinnyText">SYNTHESIS</h5>
            <p className="skinnyText">
              Two channels of opportunity emerged from our reverse assumptions
              activity: pre-purchase and post-purchase.
            </p>
            <div className="indentText">
              <p>
                <span className="bold">Pre-Purchase Sector:</span> A
                direct-to-consumer business model, an online device-finder, and
                a device customizer. Working in the pre-purchase sector might
                help{" "}
                <span className="bold">
                  offload some of the work for Respiratory Therapists
                </span>
                . Our ideas also{" "}
                <span className="bold">give the patient a sense of agency</span>{" "}
                in responding to their disease, which they currently lack.
              </p>
              <p>
                <span className="bold">Post-Purchase Sector:</span> A hands-off
                setup, better patient-family connection, and in-app support.
                Working in the post-purchase sector would likely mean a{" "}
                <span className="bold">longer lasting app</span>. However, these
                ideas largely exist already, and we would merely be improving
                them.
              </p>
            </div>
            <p className="bottomM3">
              We decided that{" "}
              <span className="bold">we wanted to innovate</span>, and that even
              if our app wasn't one that patients kept on their phone long after
              first downloading it, that was ok, as long as it served its
              purpose. So, we went with the pre-purchase sector, and tried to
              combine our ideas into one cohesive app.
            </p>
          </section>
          <section className="textBlock">
            <h5 className="names skinnyText">PROTOTYPING</h5>
            <p className="skinnyText">
              We began with some simple sketches to start working out what the
              UI might be like.
            </p>
          </section>
          <div className="bottomM3 topM1">
            <img src={lofi1} className="landscape4w" alt="LoFi Prototype" />
            <img src={lofi2} className="landscape4w" alt="LoFi Prototype" />
          </div>
          <section className="textBlock">
            <p className="skinnyText">
              We then selected the most impactful interactions to translate into
              medium-fidelity screens.
            </p>
          </section>
          <div className="bottomM3 topM1">
            <img src={med1} className="portrait2w" alt="MedFi Prototype" />
            <img src={med2} className="portrait2w" alt="MedFi Prototype" />
            <img src={med3} className="portrait2w" alt="MedFi Prototype" />
            <img src={med4} className="portrait2w" alt="MedFi Prototype" />
          </div>
          <section className="textBlock">
            <p className="skinnyText">
              From there, we refined our designs, made them more cohesive, and
              created our final wireframes.
            </p>
          </section>
          <div className="bottomM3 topM1">
            <img src={hifi1} className="portrait2w" alt="HiFi Prototype" />
            <img src={hifi2} className="portrait2w" alt="HiFi Prototype" />
            <img src={hifi3} className="portrait2w" alt="HiFi Prototype" />
            <img src={hifi4} className="portrait2w" alt="HiFi Prototype" />
          </div>
          <section className="textBlock" id="final">
            <h5 className="names skinnyText">FINAL PRODUCT</h5>
            <p className="skinnyText">
              Maskmaker: a new app that simplifies the patient experience by
              seamlessly guiding users through picking the perfect mask for
              them.
            </p>
          </section>
          <video
            className="demoVidPhone topM1 bottomM3"
            alt="ResMed Prototype"
            controls
          >
            <source src={resDemo} />
          </video>
          <section className="textBlock">
            <p className="skinnyText">
              With the AR try-on feature,{" "}
              <span className="bold">
                patients can literally picture themselves using ResMed
              </span>
              .
            </p>
            <p>
              Users are able to swipe through their best-fit masks and see what
              parts of their face would be covered. We highlight the features of
              each mask, and display which of their selected needs would be met.
              This snapshot allows users to quickly become familiar with each
              option. They can also swipe up for more information, showing them
              product highlights and fun facts.
            </p>
          </section>
          <div className="bottomM3 topM1">
            <img src={high1} className="portrait3w" alt="HiFi Prototype" />
            <img src={high2} className="portrait3w" alt="HiFi Prototype" />
          </div>
          <section className="textBlock">
            <p className="skinnyText">
              <span className="bold">
                Deliberate and delightful microinteractions
              </span>{" "}
              augment the experience of the app.
            </p>
            <p>
              When users first open the app, they're greeted with the familiar
              ResMed logo that fades to a comforting message about what the app
              is here to help them with. We wanted to ensure that new users
              would trust they were in good hands–the language we used was very
              deliberate.
            </p>
          </section>
          <div className="bottomM3 topM1">
            <img src={micro1} className="portrait3w" alt="HiFi Prototype" />
            <video
              className="portrait3w"
              alt="ResMed Prototype"
              autoPlay
              loop
              muted
            >
              <source src={microVid1} />
            </video>
          </div>
          <section className="textBlock">
            <p className="skinnyText">
              Users are{" "}
              <span className="bold">always grounded and informed.</span>
            </p>
            <p>
              The screens in between each step show users where they are in the
              process. We maintain this sense of security throughout by having
              the current step always at the top of the screen.
            </p>
          </section>
          <div className="bottomM3 topM1">
            <img src={micro2} className="portrait3w" alt="HiFi Prototype" />
            <video
              className="portrait3w"
              alt="ResMed Prototype"
              autoPlay
              loop
              muted
            >
              <source src={microVid2} />
            </video>
          </div>
          <section className="textBlock">
            <p className="skinnyText">
              Overall, our app achieves three main goals. It helps{" "}
              <span className="bold">guide product development</span> by
              uncovering patient preferences and revealing sales trends. It also{" "}
              <span className="bold">embraces emerging technology</span> through
              the AR try-on, as well as allowing technology to carry more
              weight, relieving pressure from other stakeholders. Finally, it
              helps <span className="bold">build stronger relationships</span>{" "}
              with patients by saving their prescription information and
              catering to their individualized needs.
            </p>
          </section>
        </article>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
