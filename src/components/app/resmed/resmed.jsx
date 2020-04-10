import React from "react";
import Navbar from "../navbar/navbar.jsx";
import Footer from "../footer/footer.jsx";
import resmedBlob from "../../../assets/images/resmedBlob.png";
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
        <div>
          <img src={resmedBlob} className="blob" alt="Blob" />
          <div className="topLayer">
            <img src={resmedIso} className="coverPhoto" alt="iPhone" />
            <div className="leftText head phoneHead">
              <h3 className="blueText">ResMed</h3>
              <p className="blurb">
                An AR app experience for newly diagnosed sleep apnea patients
                built to complement ResMed, an IoT medical device company.
              </p>
            </div>
          </div>
        </div>
      </header>
      <main>
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
                      alt="Screenshot"
                    />
                    <img
                      src={frontRes}
                      className="frontPhoneLeft"
                      alt="Screenshot"
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
                      alt="Screenshot"
                    />
                    <img
                      src={ARup}
                      className="frontPhoneRight"
                      alt="Screenshot"
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
                  alt="Post-Its"
                />
                <img
                  src={whiteboard}
                  className="phoneImg3 pad20right"
                  alt="Whiteboard"
                />
                <img src={postits} className="phoneImg3" alt="Post-Its" />
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
                  alt="Candia"
                />
                <img src={stacy} className="phoneImg2" alt="Stacy" />
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
                  alt="Stakeholder Map"
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
                <span className="blueLight">Distributors</span> act as the
                middlemen between ResMed and healthcare providers. They get
                devices from ResMed, and then sell those to respiratory
                therapists. They have no direct contact with patients.
              </p>
              <br />
              <p>
                <span className="blueLight">Respiratory Therapists</span> are
                most often referred to patients by their general practitioner.
                They then work with the patient to find the right device, make a
                sale, and help teach them about how to properly use it.
              </p>
              <br />
              <p>
                <span className="blueLight">Patients</span> need to get a device
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
                activity: <span className="blueLight">pre-purchase</span> and{" "}
                <span className="blueLight">post-purchase</span>.
              </p>
              <br />
              <p>
                In the pre-purchase sector, we thought of a few different ideas.
                The first was a{" "}
                <span className="blueLight">
                  direct-to-consumer business model
                </span>{" "}
                that would help simplify the customer journey, and reduce the
                amount of people the patient has to deal with in order to get a
                device. The second was an{" "}
                <span className="blueLight">online device-finder</span> that
                would help users find the right device for them, not unlike a
                virtual respiratory therapist. Our third idea involved{" "}
                <span className="blueLight">device customization</span>. This
                could help patients feel less dread about wearing a mask to
                sleep every night for the rest of their lives–any opportunity to
                make the process a little more fun could be the difference
                between patients choosing ResMed or another company. Working in
                the pre-purchase sector might help{" "}
                <span className="blueLight">
                  offload some of the work for Respiratory Therapists
                </span>
                . Our ideas also{" "}
                <span className="blueLight">
                  give the patient a sense of agency
                </span>{" "}
                in responding to their disease, which they currently lack.
              </p>
              <br />
              <p>
                In the post-purchase sector, we thought of a few more ideas. The
                first was a <span className="blueLight">hands-off setup</span>{" "}
                that would leverage technology to make device setup easier than
                it currently is. The second was integrating{" "}
                <span className="blueLight">patient-family interaction</span>,
                by providing relevant health data to the patient's loved ones or
                caretakers. Our third idea revolved around{" "}
                <span className="blueLight">in-app support</span>, providing
                customers an easy way to receive help from an easily accessible
                AI/chatbot. Working in the post-purchase sector would likely
                mean a <span className="blueLight">longer-lasting app</span>.
                But, these
                <span className="blueLight">ideas largely exist already</span> ,
                and we would merely be improving them.
              </p>
              <br />
              <p>
                We decided that we wanted to innovate, and that even if our app
                wasn't one that patients kept on their phone long after first
                downloading it, that was ok, as long as it served its purpose.
                So, we went with the pre-purchase sector, and tried to combine
                our ideas into one cohesive app.
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
                <span className="blueLight">
                  simplify the patient experience
                </span>{" "}
                by seamlessly guiding users through{" "}
                <span className="blueLight">picking the perfect mask</span> for
                them.
              </p>
              <div className="flexDisplay m70top pad150bottom">
                <video className="demoVidPhone" controls>
                  <source src={resDemo} />
                </video>
              </div>
              <p>
                With the AR try-on feature, patients can literally{" "}
                <span className="blueLight">picture themselves</span> using
                ResMed.
              </p>
              <div className="flexDisplay m70top pad50bottom sbsComp">
                <img
                  src={high1}
                  className="phoneImg4 pad20right"
                  alt="AR try-on"
                />
                <img
                  src={high2}
                  className="phoneImg4 pad20right"
                  alt="AR try-on"
                />
                <div className="sbsPhone sbsCompText">
                  <p>
                    Users are able to swipe through their best-fit masks, and
                    see what parts of their face would be covered. We provide a
                    short description that{" "}
                    <span className="blueLight">
                      highlights the features of each mask
                    </span>
                    , and then{" "}
                    <span className="blueLight">
                      displays which of the user's selected needs are met
                    </span>{" "}
                    by it. This snapshot allows users to{" "}
                    <span className="blueLight">
                      quickly become familiar with each mask
                    </span>
                    . Users can also swipe up for more information about each
                    mask, showing them{" "}
                    <span className="blueLight">product highlights</span> and{" "}
                    <span className="blueLight">fun facts.</span>
                  </p>
                </div>
              </div>
              <p>
                We also wanted to add{" "}
                <span className="blueLight">
                  deliberate and delightful microinteractions
                </span>{" "}
                that would augment the experience of the app and also help us
                propel our vision forward.
              </p>
              <div className="flexDisplay m70top pad50bottom sbsComp">
                <video className="phoneImg4 pad20right" autoPlay loop muted>
                  <source src={microVid1} />
                </video>
                <img
                  src={micro1}
                  className="phoneImg4 pad20right"
                  alt="AR try-on"
                />
                <div className="sbsPhone sbsCompText">
                  <p>
                    When users first open the app, they're greeted with the{" "}
                    <span className="blueLight">familiar ResMed logo</span> that
                    fades to a comforting message about what the app is here to
                    help them with. We wanted to ensure that new users would{" "}
                    <span className="blueLight">
                      trust they were in good hands
                    </span>
                    –the language we used was very deliberate.
                  </p>
                </div>
              </div>
              <div className="flexDisplay m70top pad50bottom sbsComp">
                <video className="phoneImg4 pad20right" autoPlay loop muted>
                  <source src={microVid2} />
                </video>
                <img
                  src={micro2}
                  className="phoneImg4 pad20right"
                  alt="AR try-on"
                />
                <div className="sbsPhone sbsCompText">
                  <p>
                    The screens in between each step{" "}
                    <span className="blueLight">
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
                <span className="blueLight">guide product development</span> by
                uncovering patient preferences and revealing sales trends. It
                also{" "}
                <span className="blueLight">welcomes emerging technology</span>{" "}
                through the AR try-on, as well as allowing technology to carry
                more weight, relieving pressure from other stakeholders.
                Finally, it helps{" "}
                <span className="blueLight">build stronger relationships</span>{" "}
                with patients by saving their prescription information and
                catering to their individualized needs.
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
