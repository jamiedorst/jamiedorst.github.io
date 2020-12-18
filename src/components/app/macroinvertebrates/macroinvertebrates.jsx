import React from "react";
import Navbar from "../navbar";
import Footer from "../footer";
import radial from "../../../assets/images/macroImgs/radial.png";
import landing from "../../../assets/images/macroImgs/landing.png";
import poster from "../../../assets/images/macroImgs/poster.png";
import ephemeropteraFront from "../../../assets/images/macroImgs/ephemeropteraFront.png";
import ephemeropteraBack from "../../../assets/images/macroImgs/ephemeropteraBack.png";
import plecoptera from "../../../assets/images/macroImgs/plecoptera.png";
import trichopteraFront from "../../../assets/images/macroImgs/trichopteraFront.png";
import trichopteraBack from "../../../assets/images/macroImgs/trichopteraBack.png";
import key from "../../../assets/images/macroImgs/key.png";
import popUps from "../../../assets/images/macroImgs/popUps.png";
import "./macroinvertebrates.scss";

export default function Macroinvertebrates() {
  return (
    <>
      <header>
        <nav className="navbarPage">
          <Navbar />
        </nav>
        <div className="pageHeader">
          <span className="headerGradient" />
          <img src={radial} className="headerImg" alt="Macroinvertebrates" />
          <div className="pageHeadText">
            <div>
              <h4 className="noMP">WORK</h4>
              <h1 className="noMP">Macroinvertebrates</h1>
              <h5 className="noMP">October 2018 to May 2019</h5>
              <h2>
                A learning and teaching tool for aquatic insect identification,
                supporting citizen scientists in pollution prevention.
              </h2>
            </div>
            <div className="fastFacts">
              <div className="fact">
                <h5 className="names noMP">ROLE</h5>
                <p className="noMP">Research Assistant: UI Designer</p>
              </div>
              <div className="fact">
                <h5 className="names noMP">TOOLS</h5>
                <p className="noMP">Photoshop, Illustrator, InDesign, Sketch</p>
              </div>
              <div className="fact">
                <h5 className="names noMP">TEAM</h5>
                <p className="noMP">
                  Jamie Dorst, Marti Louw, MDes., Jessica Roberts, Ph.D.
                </p>
              </div>
            </div>
          </div>
        </div>
      </header>
      <main>
        <article className="sectionBreak">
          <h3 className="section">Overview</h3>
          <section className="textBlock">
            <h5 className="names noMP">PROBLEM</h5>
            <p className="noMP bottomM3">
              Citizen scientists are able to use information about aquatic
              insects to learn more about pollution levels in local streams.
              However, identifying these insects is notoriously difficult, and
              without correct identifications, citizen scientists would need
              more advanced technology to determine anything about pollution
              levels.
            </p>
            <h5 className="names noMP">SOLUTION</h5>
            <p className="noMP ">
              Learning to See, Seeing to Learn is an interdisciplinary research
              and development effort to bring aquatic insect identification into
              the 21st century. By transitioning away from the analog resources
              these materials are traditionally in, we are able to reach a much
              broader audience and teach more effectively.
            </p>
            <p className="bottomM3">
              <a
                className="linkObvi"
                href="https://www.macroinvertebrates.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                macroinvertebrates.org
              </a>
            </p>
            <h5 className="names noMP">MY CONTRIBUTION</h5>
            <p className="noMP">
              I had a few main responsibilities during my time as a Research
              Assistant. I analyzed user research data to create thoughtful and
              informed site content, such as an updated landing page, a poster
              displaying the full collection, and an expansive set of
              order-level print-outs. I also designed the first ever digital and
              interactive dichotomous key, including printable info pop-ups.
            </p>
            <p className="bottomM3">
              Aside from improving my technical skills, this project gave me
              newfound confidence in my design abilities and introduced me to a
              world outside of class projects. On a separate, but also
              significant note, this project also greatly reduced my (gigantic!)
              fear of insects. I guess looking at very large, very detailed
              images of bugs gets you pretty comfortable with them.
            </p>
          </section>
        </article>
        <article className="sectionBreak">
          <h3 className="section">Work</h3>
          <section className="textBlock">
            <h5 className="names noMP">UPDATED LANDING PAGE</h5>
            <p className="noMP">
              Our team had extremely high-quality gigapan images of every insect
              in our collection. However, when the website was first made, these
              images were not used for the landing page. I created an updated
              landing page image using high quality images to improve our
              first-impression on visitors and fully utilize the resources we
              had at our disposal.
            </p>
          </section>
          <img src={landing} className="w8 topM1 bottomM3" alt="Landing Page" />
          <section className="textBlock">
            <h5 className="names noMP">FULL COLLECTION POSTER</h5>
            <p className="noMP">
              Because we had such amazing images, we wanted a place where people
              could see them all at once and see the vast diversity in our
              collection. I created this poster displaying all of our specimen
              in each order level. It's included on our website as a way for
              users to get an overview of what insects we cover.
            </p>
          </section>
          <img
            src={poster}
            className="w8 topM1 bottomM3"
            alt="Full Collection Poster"
          />
          <section className="textBlock">
            <h5 className="names noMP">ORDER LEVEL PRINTOUTS</h5>
            <p className="noMP">
              Our website is a fantastic tool for citizen scientists looking to
              train themselves on different specimen or compare specimen
              directly to images we supply. However, when they are out by the
              streams, internet connection is not always reliable, so analog
              materials can be very helpful. I took our high quality images and
              turned them into printable sheets, each with one of the most
              common orders. These are also extremely helpful for teaching
              identification in a classroom setting.
            </p>
          </section>
          <div className="bottomM3">
            <img
              src={ephemeropteraFront}
              className="w4 topM1"
              alt="Ephemeroptera"
            />
            <img
              src={ephemeropteraBack}
              className="w4 topM1"
              alt="Ephemeroptera"
            />
            <img src={plecoptera} className="w8 topM1 " alt="Plecoptera" />
            <img
              src={trichopteraFront}
              className="w4 topM1"
              alt="Trichoptera"
            />
            <img src={trichopteraBack} className="w4 topM1" alt="Trichoptera" />
          </div>
          <section className="textBlock">
            <h5 className="names noMP">INTERACTIVE DICHOTOMOUS KEY</h5>
            <p className="noMP">
              Dichotomous keys are often used in identification activities.
              However, those for aquatic insects were all decades-old, analog,
              with only drawings. I created a digital and interactive
              dichotomous key that takes advantage of our high quality images
              and includes helpful pop-ups at each decision point. It's been
              updated since I originally created it in early 2019, but you can
              still{" "}
              <a
                className="linkObvi"
                href="https://www.macroinvertebrates.org/key"
                target="_blank"
                rel="noopener noreferrer"
              >
                check out the current version
              </a>
              .
            </p>
          </section>
          <div className="bottomM3">
            <img
              src={key}
              className="w8 topM1"
              alt="Interactive Dichotomous Key"
            />
            <img
              src={popUps}
              className="w8 topM1"
              alt="Interactive Dichotomous Key Pop-Ups"
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
