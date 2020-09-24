import React from "react";
import Navbar from "../navbar";
import Footer from "../footer";
import kuri from "../../../assets/images/robotImgs/kuri.png";
import acceptable1 from "../../../assets/images/robotImgs/acceptable1.mp4";
import unacceptable1 from "../../../assets/images/robotImgs/unacceptable1.mp4";
import gen1 from "../../../assets/images/robotImgs/gen2-1.mp4";
import gen2 from "../../../assets/images/robotImgs/gen2-2.mp4";
import gen3 from "../../../assets/images/robotImgs/gen2-3.mp4";
import gen4 from "../../../assets/images/robotImgs/gen2-4.mp4";
import gen5 from "../../../assets/images/robotImgs/gen2-5.mp4";
import gen6 from "../../../assets/images/robotImgs/gen2-6.mp4";
import gen7 from "../../../assets/images/robotImgs/gen2-7.mp4";
import gen8 from "../../../assets/images/robotImgs/gen2-8.mp4";
import gen9 from "../../../assets/images/robotImgs/gen2-9.mp4";
import gen10 from "../../../assets/images/robotImgs/gen2-10.mp4";
import testing from "../../../assets/images/robotImgs/testing.png";
import top1 from "../../../assets/images/robotImgs/top1.mp4";
import top3 from "../../../assets/images/robotImgs/top3.mp4";
import top5 from "../../../assets/images/robotImgs/top5.mp4";
import cata from "../../../assets/images/robotImgs/cata.png";
import cataResults from "../../../assets/images/robotImgs/cataResults.png";
import acceptableDef from "../../../assets/images/robotImgs/acceptableDef.png";
import tank from "../../../assets/images/robotImgs/tank.mp4";
import omni from "../../../assets/images/robotImgs/omnidrive.mp4";
import surv2 from "../../../assets/images/robotImgs/surv2.png";
import surv2Results from "../../../assets/images/robotImgs/surv2Results.png";

import "./robot.scss";

export default function Robot() {
  return (
    <>
      <header>
        <nav className="navbarPage">
          <Navbar />
        </nav>
        <hr className="vertShortLine" />
        <div className="pageHeader">
          <span className="headerGradient" />
          <img src={kuri} className="headerImg" alt="Kuri" />
          <div className="pageHeadText">
            <div>
              <h4 className="skinnyText">WORK</h4>
              <h1 className="skinnyText">Acceptable Robot Motion</h1>
              <h5 className="skinnyText">January 2020 to May 2020</h5>
              <h2>
                Research on how we can support robot motion designers in
                creating motions that are acceptable to people and convey the
                intent of the designer.
              </h2>
            </div>
            <div className="fastFacts">
              <div className="fact">
                <h5 className="names skinnyText">ROLE</h5>
                <p className="skinnyText">Research Assistant</p>
              </div>
              <div className="fact">
                <h5 className="names skinnyText">TOOLS</h5>
                <p className="skinnyText">Autodesk Maya, FFmpeg</p>
              </div>
              <div className="fact">
                <h5 className="names skinnyText">TEAM</h5>
                <p className="skinnyText">
                  Jamie Dorst,{" "}
                  <a
                    className="linkObvi"
                    href="https://hcii.cmu.edu/people/nikolas-martelaro"
                  >
                    Professor Nikolas Martelaro
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <hr className="headBottomLine" />
      </header>
      <main>
        <hr className="vertBodyLineTop kuTop" />
        <article className="sectionBreak">
          <h3 className="section">Overview</h3>
          <div>
            <section className="textBlock">
              <h5 className="names skinnyText">PROJECT DESCRIPTION</h5>
              <p className="skinnyText bottomM3">
                Robots that move through our everyday lives should do so in ways
                that are acceptable to people. How can we design robotic
                movement that not only is safe and understandable to people but
                also doesn’t look odd or off-putting? Moreover, how can we
                ensure that these movements are not misinterpreted? This project
                explores how we can support robot motion designers in creating
                movements that are acceptable to people and convey the intent of
                the designer, and how we may use user feedback to tune robotic
                motion algorithms.
              </p>
              <h5 className="names skinnyText">MY CONTRIBUTION</h5>
              <p className="skinnyText">
                I worked with Nik Martelaro as part of an Independent Study in
                HCI during my Sophomore Spring semester at Carnegie Mellon. I
                performed a literature review on other robot movement projects,
                created animations in Autodesk Maya (using the{" "}
                <a
                  className="linkObvi"
                  href="https://github.com/KuriRobot/Kuri-Documentation/blob/master/guides/behavior/creating-animations.md"
                >
                  kuri robot
                </a>
                ), and ran surveys and interviews with these animations to
                explore what “acceptable” really means. Over the course of the
                semester I continuously adapted my goals based on my findings
                and ended up with a better sense of what “acceptable” is and
                some animations to exemplify that.
              </p>
              <p className="bottomM3">
                Over the course of the project, I became much more adept with
                Maya, learning how to write scripts and fully automate the
                rendering process, grew more familiar with various user testing
                methods, and generally became more comfortable with
                decision-making in a research environment. It helped me learn
                how to adapt based on results, giving me a new angle I can use
                in future design projects–the path I set out on doesn't have to
                be the path I finish on.
              </p>
            </section>
            <section>
              <h5 className="names">SUMMARY</h5>
              <hr className="highlightLineTop" />
              <div className="highlightSect">
                <div className="highlightText">
                  <h2>Is this Acceptable?</h2>
                  <h3 className="blurb">
                    Imagine you are calling for this robot and it turns to you
                    like this. Would that feel ok to you? This is the primary
                    question behind our research. This is an abnormal way for
                    something to turn and look at us–we know that instinctually.
                    But why?
                  </h3>
                </div>
                <span className="highlightGradient" />
                <video
                  className="highlightImg"
                  alt="Kuri Motion Video"
                  autoPlay
                  loop
                  muted
                >
                  <source src={unacceptable1} />
                </video>
              </div>
              <div className="highlightSect">
                <div className="highlightText">
                  <h2>What Makes it Acceptable?</h2>
                  <h3 className="blurb">
                    Beyond getting a sense of what is acceptable and what is
                    not, we want to know why. We learned that predictability is
                    very important while "humanness" isn't–people tend to have a
                    certain level of forgiveness because it is a robot.
                  </h3>
                </div>
                <span className="highlightGradient" />
                <video
                  className="highlightImg"
                  alt="Kuri Motion Video"
                  autoPlay
                  loop
                  muted
                >
                  <source src={omni} />
                </video>
              </div>
              <hr className="highlightLineBottom" />
            </section>
          </div>
        </article>
        <hr className="vertBodyLineBottom kuBott" />
        <article className="sectionBreak">
          <h3 className="section">Work</h3>
          <section className="textBlock">
            <h5 className="names skinnyText">SPRINT 1</h5>
            <p className="skinnyText">
              During my first two weeks on the project, I conducted a thorough{" "}
              <span className="bold">literature review</span> of six relevant
              papers, and I then created two animations based on what I had read
              and learned about. I created one animation that was "acceptable,"
              and one that was "unacceptable." This gave us a baseline to work
              off of about what was definitely acceptable and what was
              definitely not. Next, we had to figure out{" "}
              <span className="bold">
                where that line was between unacceptable and acceptable, and why
                it was there
              </span>
              .
            </p>
          </section>
          <div className="topM1 bottomM3">
            <video
              className="landscape4w removeHeight"
              alt="Kuri Motion Video"
              autoPlay
              loop
              muted
            >
              <source src={acceptable1} />
            </video>
            <video
              className="landscape4w removeHeight"
              alt="Kuri Motion Video"
              autoPlay
              loop
              muted
            >
              <source src={unacceptable1} />
            </video>
          </div>
          <section className="textBlock">
            <h5 className="names skinnyText">SPRINT 2</h5>
            <p className="skinnyText">
              In order to give us a better sense of where that line is drawn
              between unacceptable and unacceptable movements, I created a{" "}
              <span className="bold">generative series of animations</span>,
              each with a slightly higher angle in head turn. To create these, I
              wrote a script using Maya MEL that generated 10 Maya Binary files,
              and then used FFmpeg to batch render them all at once and stitch
              the resulting images together into videos.{" "}
              <span className="bold">Streamlining this process was key</span> to
              my success here–it would have taken much longer and been much more
              difficult had I not figured out how to create this workflow.
            </p>
          </section>
          <div className="topM1 gridConstraint bottomM3">
            <video
              className="portrait2w removeHeight"
              alt="Kuri Motion Video"
              autoPlay
              loop
              muted
            >
              <source src={gen1} />
            </video>
            <video
              className="portrait2w removeHeight"
              alt="Kuri Motion Video"
              autoPlay
              loop
              muted
            >
              <source src={gen2} />
            </video>
            <video
              className="portrait2w removeHeight"
              alt="Kuri Motion Video"
              autoPlay
              loop
              muted
            >
              <source src={gen3} />
            </video>
            <video
              className="portrait2w removeHeight"
              alt="Kuri Motion Video"
              autoPlay
              loop
              muted
            >
              <source src={gen4} />
            </video>
            <video
              className="portrait2w removeHeight noMP"
              alt="Kuri Motion Video"
              autoPlay
              loop
              muted
            >
              <source src={gen5} />
            </video>
            <video
              className="portrait2w removeHeight topM1"
              alt="Kuri Motion Video"
              autoPlay
              loop
              muted
            >
              <source src={gen6} />
            </video>
            <video
              className="portrait2w removeHeight topM1"
              alt="Kuri Motion Video"
              autoPlay
              loop
              muted
            >
              <source src={gen7} />
            </video>
            <video
              className="portrait2w removeHeight topM1"
              alt="Kuri Motion Video"
              autoPlay
              loop
              muted
            >
              <source src={gen8} />
            </video>
            <video
              className="portrait2w removeHeight topM1"
              alt="Kuri Motion Video"
              autoPlay
              loop
              muted
            >
              <source src={gen9} />
            </video>
            <video
              className="portrait2w removeHeight noMP topM1"
              alt="Kuri Motion Video"
              autoPlay
              loop
              muted
            >
              <source src={gen10} />
            </video>
          </div>
          <section className="textBlock">
            <h5 className="names skinnyText">SPRINT 3</h5>
            <p className="skinnyText">
              After creating these videos, our next goal was to{" "}
              <span className="bold">learn what people actually thought</span>{" "}
              of them. I started by reviewing the literature about common
              evaluation methods, then putting together a small survey. Based on
              these results, we had a few more questions about{" "}
              <span className="bold">
                how the angle we're viewing from would affect how we interpret
                the motions
              </span>
              –Kuri was designed to be on the floor in your house. So, I created
              a few more animations where the viewer is looking down at Kuri.
            </p>
          </section>
          <div className="bottomM3">
            <img
              src={testing}
              className="landscape8w topM1 removeHeight"
              alt="Testing Results Spreadsheet"
            />
            <video
              className="portrait3w removeHeight topM1"
              alt="Kuri Motion Video"
              autoPlay
              loop
              muted
            >
              <source src={top1} />
            </video>
            <video
              className="portrait3w removeHeight topM1"
              alt="Kuri Motion Video"
              autoPlay
              loop
              muted
            >
              <source src={top3} />
            </video>
            <video
              className="portrait3w removeHeight topM1"
              alt="Kuri Motion Video"
              autoPlay
              loop
              muted
            >
              <source src={top5} />
            </video>
          </div>
          <section className="textBlock">
            <h5 className="names skinnyText">SPRINT 4</h5>
            <p className="skinnyText">
              We got some interesting and surprising results compared to when I
              had just gone around and asked a few people for their thoughts.
              Some videos got the reactions that we expected–the simple head
              turns were favored over the more dramatic ones, and somewhere
              around the middle of the generative videos is where people started
              to think something was off. However, some of the language that
              people used to describe some movements was new to us–{" "}
              <span className="bold">threatening, judgemental, and evil</span>.
              From here I created a more structured survey that could further
              explore people’s thoughts. The results of this survey pointed us
              in a slightly new direction.{" "}
              <span className="bold">
                What does “acceptable” actually mean?
              </span>
            </p>
          </section>
          <div className="topM1 bottomM3">
            <img src={cata} className="portrait3w" alt="Survey" />
            <img
              src={cataResults}
              className="portrait3w"
              alt="Survey Results"
            />
          </div>
          <section className="textBlock">
            <h5 className="names skinnyText">SPRINT 5</h5>
            <p className="skinnyText">
              Defining acceptable is challenging because of the many ways it can
              be interpreted. In their paper “
              <a
                className="linkObvi"
                href="http://guyhoffman.com/publications/HoffmanJuJHRI14s.pdf"
              >
                Designing Robots with Movement in Mind
              </a>
              ,” Guy Hoffman and Wendy Ju write that robot movements should
              <span className="bold">
                “accurately [express] the robot’s purpose, intent, state, mood,
                personality, attention, responsiveness, intelligence, and
                capabilities.”
              </span>{" "}
              But does it need to mean all of those things, or could it be
              simplified? Additionally, what is “acceptable” could vary
              depending on the type of robot, or even what we want it to
              mean–something like emotion could matter in one scenario and not
              in another. An example we came up with to further explore
              acceptable versus unacceptable movements was having Kuri move
              across a space in different ways, either with omnidrive or tank
              drive.
            </p>
          </section>
          <div className="topM1 bottomM3">
            <img
              src={acceptableDef}
              className="landscape4w"
              alt="Acceptable Definition Brainstorming"
            />
            <br />
            <video
              className="landscape4w removeHeight topM1"
              alt="Kuri Motion Video"
              autoPlay
              loop
              muted
            >
              <source src={tank} />
            </video>
            <video
              className="landscape4w removeHeight topM1"
              alt="Kuri Motion Video"
              autoPlay
              loop
              muted
            >
              <source src={omni} />
            </video>
          </div>
          <section className="textBlock">
            <h5 className="names skinnyText">SPRINT 6</h5>
            <p className="skinnyText">
              For the final sprint of the project, I conducted interviews that
              were more focused on general feelings rather than specific
              keywords. I wanted to understand{" "}
              <span className="bold">
                what is that ambiguously uncomfortable feeling when you see a
                movement that just doesn’t seem right?
              </span>{" "}
              I then created a survey involving a few of the things that seem to
              evoke that feeling–expectedness and creepiness of a motion, and
              whether or not there seems to be something wrong with the robot
              itself. This resulted in more mixed responses than we had gotten
              previously.{" "}
              <span className="bold">
                People typically didn't think the robot was broken
              </span>
              , but there was{" "}
              <span className="bold">
                little consistency when it came to expectedness and creepiness
              </span>
              . This could provide some insight as to how we might move forward
              in the project–robot motion affords more forgiveness than we
              originally thought.{" "}
            </p>
            <p>How will this change what is "acceptable"?</p>
          </section>
          <div className="topM1">
            <img
              src={surv2}
              className="portrait3w removeHeight"
              alt="Survey Results"
            />
            <img
              src={surv2Results}
              className="portrait3w removeHeight"
              alt="Survey Results"
            />
          </div>
        </article>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
