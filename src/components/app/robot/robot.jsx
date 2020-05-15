import React from "react";
import Navbar from "../navbar";
import Footer from "../footer";
import robotBlob from "../../../assets/images/robotBlob.png";
import roboBlob from "../../../assets/images/roboBlob.png";
import kuri from "../../../assets/images/kuri.png";
import acceptable1 from "../../../assets/images/acceptable1.mp4";
import unacceptable1 from "../../../assets/images/unacceptable1.mp4";
import gen1 from "../../../assets/images/gen2-1.mp4";
import gen2 from "../../../assets/images/gen2-2.mp4";
import gen3 from "../../../assets/images/gen2-3.mp4";
import gen4 from "../../../assets/images/gen2-4.mp4";
import gen5 from "../../../assets/images/gen2-5.mp4";
import gen6 from "../../../assets/images/gen2-6.mp4";
import gen7 from "../../../assets/images/gen2-7.mp4";
import gen8 from "../../../assets/images/gen2-8.mp4";
import gen9 from "../../../assets/images/gen2-9.mp4";
import gen10 from "../../../assets/images/gen2-10.mp4";
import testing from "../../../assets/images/testing.png";
import top1 from "../../../assets/images/top1.mp4";
import top3 from "../../../assets/images/top3.mp4";
import top5 from "../../../assets/images/top5.mp4";
import cata from "../../../assets/images/cata.png";
import cataResults from "../../../assets/images/cataResults.png";
import acceptableDef from "../../../assets/images/acceptableDef.png";
import tank from "../../../assets/images/tank.mp4";
import omni from "../../../assets/images/omnidrive.mp4";
import surv2 from "../../../assets/images/surv2.png";
import surv2Results from "../../../assets/images/surv2Results.png";

import "./robot.scss";

export default function Robot() {
  return (
    <>
      <header>
        <nav className="navbarPage">
          <Navbar />
        </nav>
        <div>
          <img src={robotBlob} className="blob" alt="Blob" />
          <div className="topLayer">
            <div id="robotText" className="rightText head">
              <h3 className="blueText">Acceptable Robot Motion</h3>
              <p className="blurb">
                Research on how we can support robot motion designers in
                creating motions that are acceptable to people and convey the
                intent of the designer.
              </p>
            </div>
            <img src={kuri} id="kuri" alt="Kuri" />
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
                <h5 className="blueText">PROJECT DESCRIPTION</h5>
                <p>
                  Robots that move through our everyday lives should do so in
                  ways that are acceptable to people. How can we design robotic
                  movement that not only is safe and understandable to people
                  but also doesn’t look odd or off putting? Moreover, how can we
                  ensure that the movements a robot takes are not
                  misinterpreted? This project explores how we can support robot
                  motion designers in creating movements that are acceptable to
                  people and convey the intent of the designer, and how we may
                  use user feedback to tune robotic motion algorithms.
                </p>
              </section>
              <aside className="sideInfo">
                <h5 className="blueText">ROLE</h5>
                <p>Research Assistant</p>
                <h5 className="blueText">TIMELINE</h5>
                <p>January 2020 to May 2020</p>
                <h5 className="blueText">TEAM</h5>
                <p>
                  Jamie Dorst,{" "}
                  <a
                    className="linkObvi"
                    href="https://hcii.cmu.edu/people/nikolas-martelaro"
                  >
                    Professor Nikolas Martelaro
                  </a>
                </p>
                <h5 className="blueText">TOOLS</h5>
                <p>Autodesk Maya, FFmpeg</p>
              </aside>
            </div>
            <section className="sectionBreak">
              <h5 className="blueText">MY CONTRIBUTION</h5>
              <p>
                I worked with Nik Martelaro as part of an Independent Study in
                HCI during my Spring semester at Carnegie Mellon. I performed a
                literature review on other robot movement projects, created
                animations in Autodesk Maya (using the{" "}
                <a
                  className="linkObvi"
                  href="https://github.com/KuriRobot/Kuri-Documentation/blob/master/guides/behavior/creating-animations.md"
                >
                  kuri robot
                </a>
                ), and ran surveys and interviews with these videos to explore
                what “acceptable” really means. Over the course of the semester
                I continuously adapted my goals based on my findings and ended
                up with a better sense of what “acceptable” means and some
                animations to exemplify that.
              </p>
              <br />
              <p>
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
          </div>
          <section>
            <h5 className="blueText sectionBreak">SUMMARY</h5>
            <div className="pad100top">
              <img src={roboBlob} className="blob" alt="Blob" />
              <div className="flexDisplay">
                <div id="kuriDemo">
                  <video className="kuriVidDemo" autoPlay loop muted>
                    <source src={acceptable1} />
                  </video>
                  <video className="kuriVidDemo" autoPlay loop muted>
                    <source src={unacceptable1} />
                  </video>
                </div>
                <div className="leftText">
                  <h3 className="blueText">Which of These is Acceptable?</h3>
                  <p className="blurb">
                    Imagine you are calling for this robot. Which motion would
                    be acceptable to you? This is the primary question behind
                    our research. These two animations exemplify what is clearly
                    acceptable and what is not–but where is that line drawn?
                  </p>
                </div>
              </div>
              <div className="flexDisplay m70top">
                <div className="rightText">
                  <h3 className="blueText">What Makes it Acceptable?</h3>
                  <p className="blurb">
                    Beyond getting a sense of what is acceptable and what is
                    not, we want to know why. What factors contribute to
                    people's perceptions of robot motion? We learned that
                    predictability is very important while "humanness"
                    isn't–people tend to have a certain level of forgiveness
                    because it is a robot.
                  </p>
                </div>
                <div id="kuriDemo">
                  <video className="kuriVidDemo" autoPlay loop muted>
                    <source src={tank} />
                  </video>
                  <video className="kuriVidDemo" autoPlay loop muted>
                    <source src={omni} />
                  </video>
                </div>
              </div>
            </div>
          </section>
        </article>
        <article className="overview">
          <h4 className="blueText">WORK</h4>
          <hr className="blueLine" />
          <div>
            <section className="sectionBreak">
              <h5 className="blueText">SPRINT 1</h5>
              <p>
                During my first two weeks on the project, we conducted a
                thorough <span className="bluelight">literature review</span>{" "}
                and I then created two animations based on what I had read and
                learned about. Based on my readings of six papers surrounding
                the field of robot movements, I created one animation that was
                "acceptable," and one that was "unacceptable." This gave us a
                baseline to work off of about what was definitely acceptable and
                what was definitely not. Next, we had to figure out{" "}
                <span className="bluelight">
                  where that line was between unacceptable and acceptable, and
                  why it was there
                </span>
                .
              </p>
              <div className="flexDisplayWrap m70top">
                <video className="kuriVid2" autoPlay loop muted>
                  <source src={acceptable1} />
                </video>
                <video className="kuriVid2" autoPlay loop muted>
                  <source src={unacceptable1} />
                </video>
              </div>
            </section>
            <section className="sectionBreak">
              <h5 className="blueText">SPRINT 2</h5>
              <p>
                In order to give us a better sense of where that line is drawn
                between unacceptable and unacceptable movements, I created a{" "}
                <span className="bluelight">
                  generative series of animations
                </span>
                , each with a slightly higher angle in head turn. To create
                these, I wrote a script using Maya MEL that generated 10 Maya
                Binary files, and then used FFmpeg to batch render them all at
                once and stitch the resulting images together into videos.{" "}
                <span className="bluelight">
                  Streamlining this process was key
                </span>{" "}
                to my success here–it would have taken much longer and been much
                more difficult had I not figured out how to create this
                workflow.
              </p>
              <div className="flexDisplay m70top pad20bottom">
                <video className="phoneImg2 pad20right" autoPlay loop muted>
                  <source src={gen1} />
                </video>
                <video className="phoneImg2 pad20right" autoPlay loop muted>
                  <source src={gen2} />
                </video>
              </div>
              <div className="flexDisplay pad20bottom">
                <video className="phoneImg2 pad20right" autoPlay loop muted>
                  <source src={gen3} />
                </video>
                <video className="phoneImg2 pad20right" autoPlay loop muted>
                  <source src={gen4} />
                </video>
              </div>
              <div className="flexDisplay pad20bottom">
                <video className="phoneImg2 pad20right" autoPlay loop muted>
                  <source src={gen5} />
                </video>
                <video className="phoneImg2 pad20right" autoPlay loop muted>
                  <source src={gen6} />
                </video>
              </div>
              <div className="flexDisplay pad20bottom">
                <video className="phoneImg2 pad20right" autoPlay loop muted>
                  <source src={gen7} />
                </video>
                <video className="phoneImg2 pad20right" autoPlay loop muted>
                  <source src={gen8} />
                </video>
              </div>
              <div className="flexDisplay">
                <video className="phoneImg2 pad20right" autoPlay loop muted>
                  <source src={gen9} />
                </video>
                <video className="phoneImg2 pad20right" autoPlay loop muted>
                  <source src={gen10} />
                </video>
              </div>
            </section>
            <section className="sectionBreak">
              <h5 className="blueText">SPRINT 3</h5>
              <p>
                After creating these videos, our next goal was to{" "}
                <span className="bluelight">
                  learn what people actually thought
                </span>{" "}
                of them. Until this point, we had been making assumptions about
                how the animations would be interpreted based on our own
                opinions, but now we were ready to get some outside feedback. I
                started by reviewing the literature about common evaluation
                methods, then putting together a small survey. Based on these
                results, we had a few more questions about{" "}
                <span className="bluelight">
                  how the angle we're viewing from would affect how we interpret
                  the motions
                </span>
                –Kuri was designed to be on the floor in your house. So, I
                created a few more animations where the viewer is looking down
                at Kuri.
              </p>
              <div className="flexDisplay m70top pad20bottom">
                <img
                  src={testing}
                  className="fullWidthImg"
                  alt="Testing Results"
                />
              </div>
              <div className="flexDisplayWrap m70top pad20bottom">
                <video className="kuriVid3" autoPlay loop muted>
                  <source src={top1} />
                </video>
                <video className="kuriVid3" autoPlay loop muted>
                  <source src={top3} />
                </video>
                <video className="kuriVid3" autoPlay loop muted>
                  <source src={top5} />
                </video>
              </div>
            </section>
            <section className="sectionBreak">
              <h5 className="blueText">SPRINT 4</h5>
              <p>
                We got some interesting and surprising results from when I had
                just gone around and asked a few people for their thoughts. Some
                videos got the reactions that we expected–the simple head turns
                were favored over the more dramatic ones, and somewhere around
                the middle of the generative videos is where people started to
                think something was off. However, some of the language that
                people used to describe some movements was new to us–some videos
                were described as{" "}
                <span className="bluelight">
                  threatening, judgemental, and evil
                </span>
                . From here I created a more structured survey that could
                further explore people’s thoughts. The results of this survey
                pointed us in a slightly new direction.{" "}
                <span className="bluelight">
                  What does “acceptable” actually mean?
                </span>
              </p>
              <div className="flexDisplay m70top pad20bottom">
                <img src={cata} className="phoneImg2" alt="Survey" />
                <img
                  src={cataResults}
                  className="phoneImg2"
                  alt="Survey Results"
                />
              </div>
            </section>
            <section className="sectionBreak">
              <h5 className="blueText">SPRINT 5</h5>
              <p>
                Defining acceptable is challenging because of the many ways it
                could be defined. In their paper “
                <a
                  className="linkObvi"
                  href="http://guyhoffman.com/publications/HoffmanJuJHRI14s.pdf"
                >
                  Designing Robots with Movement in Mind
                </a>
                ,” Guy Hoffman and Wendy Ju write that robot movements should
                <span className="bluelight">
                  “accurately [express] the robot’s purpose, intent, state,
                  mood, personality, attention, responsiveness, intelligence,
                  and capabilities.”
                </span>{" "}
                But does it need to mean all of those things, or could it be
                simplified? Additionally, what is “acceptable” could vary
                depending on the type of robot, or even what we want it to
                mean–something like emotion may or may not affect how a motion
                should be interpreted. An example we came up with to further
                explore acceptable versus unacceptable movements was having Kuri
                move across a space in different ways, either with omnidrive or
                tank drive.
              </p>
              <div className="flexDisplay m70top pad20bottom">
                <img
                  src={acceptableDef}
                  className="kuriVid2"
                  alt="Acceptable Definition"
                />
              </div>
              <div className="flexDisplayWrap">
                <video className="kuriVid2" autoPlay loop muted>
                  <source src={tank} />
                </video>
                <video className="kuriVid2" autoPlay loop muted>
                  <source src={omni} />
                </video>
              </div>
            </section>
            <section className="sectionBreak">
              <h5 className="blueText">SPRINT 6</h5>
              <p>
                For the final sprint of the project, I started by conducting
                interviews that were more focused on general feelings rather
                than specific keywords. I wanted to understand{" "}
                <span className="bluelight">
                  what is that ambiguously uncomfortable feeling when you see a
                  movement that just doesn’t seem right?
                </span>{" "}
                I then created a survey involving a few of the things that seem
                to evoke that feeling–expectedness and creepiness of a motion,
                and whether or not there seems to be something wrong with the
                robot itself. This resulted in more mixed responses than we had
                gotten previously.{" "}
                <span className="bluelight">
                  People typically didn't think the robot was broken
                </span>
                , but there was{" "}
                <span className="bluelight">
                  little consistency when it came to expectedness and creepiness
                </span>
                . This could provide some insight as to how we might move
                forward in the project–robot motion affords more forgiveness
                than we originally thought. How will this change what is
                "acceptable"?
              </p>
              <div className="flexDisplay m70top pad20bottom">
                <img src={surv2} className="phoneImg2" alt="Survey" />
                <img
                  src={surv2Results}
                  className="phoneImg2"
                  alt="Survey Results"
                />
              </div>
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
