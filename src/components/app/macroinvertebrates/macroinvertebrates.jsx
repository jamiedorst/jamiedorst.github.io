import React from "react";
import Navbar from "../navbar";
import Footer from "../footer";
import macroBlob from "../../../assets/images/macroBlob.png";
import macroMac from "../../../assets/images/macroMac.png";
import landing from "../../../assets/images/landing.png";
import poster from "../../../assets/images/poster.png";
import ephemeropteraFront from "../../../assets/images/ephemeropteraFront.png";
import ephemeropteraBack from "../../../assets/images/ephemeropteraBack.png";
import plecoptera from "../../../assets/images/plecoptera.png";
import trichopteraFront from "../../../assets/images/trichopteraFront.png";
import trichopteraBack from "../../../assets/images/trichopteraBack.png";
import key from "../../../assets/images/key.png";
import popUps from "../../../assets/images/popUps.png";
import "./macroinvertebrates.scss";

export default function Macroinvertebrates() {
  return (
    <>
      <header>
        <nav className="navbarPage">
          <Navbar />
        </nav>
        <div>
          <img src={macroBlob} className="blob" alt="Blob" />
          <div className="topLayer">
            <div className="rightText head">
              <h3 className="yellowText">Macroinvertebrates</h3>
              <p className="blurb">
                NSF supported research on a learning and teaching tool for
                aquatic insect identification supporting citizen scientists in
                pollution prevention.
              </p>
            </div>
            <img src={macroMac} className="coverPhoto" alt="Mac" />
          </div>
        </div>
      </header>
      <main>
        <article className="overview">
          <h4 className="yellowText">OVERVIEW</h4>
          <hr className="yellowLine" />
          <div>
            <div className="top sectionBreak">
              <section className="mainInfo">
                <h5 className="yellowText">PROBLEM</h5>
                <p>
                  Citizen scientists are able to use information about aquatic
                  insects to learn more about pollution levels in local streams.
                  However, identifying these insects is notoriously difficult,
                  and without correct identifications, citizen scientists would
                  need more advanced technology to determine anything about
                  pollution levels.
                </p>
                <h5 className="yellowText">SOLUTION</h5>
                <p>
                  Learning to See, Seeing to Learn is an interdisciplinary
                  research and development effort to bring aquatic insect
                  identification into the 21st century. By transitioning away
                  from the analog resources these materials are traditionally
                  in, we are able to reach a much broader audience and teach
                  more effectively.{" "}
                  <a
                    className="linkObvi"
                    href="https://www.macroinvertebrates.org"
                  >
                    macroinvertebrates.org
                  </a>
                </p>
              </section>
              <aside className="sideInfo">
                <h5 className="yellowText">ROLE</h5>
                <p>Research Assistant: UI Designer</p>
                <h5 className="yellowText">TIMELINE</h5>
                <p>October 2018 to May 2019</p>
                <h5 className="yellowText">TEAM</h5>
                <p>Jamie Dorst, Marti Louw, MDes., Jessica Roberts, Ph.D.</p>

                <p>
                  <a
                    className="linkObvi"
                    href="https://www.macroinvertebrates.org/about#project-team"
                  >
                    Full Team List
                  </a>
                </p>
                <h5 className="yellowText">TOOLS</h5>
                <p>Photoshop, Illustrator, InDesign, Sketch</p>
              </aside>
            </div>
            <section className="sectionBreak">
              <h5 className="yellowText">MY CONTRIBUTION</h5>
              <p>
                I had a few main responsibilities during my time as a research
                assistant. I analyzed user research data to create thoughtful
                and informed site content, such as an updated landing page, a
                poster displaying the full collection, and an expansive set of
                order-level print-outs. I also designed the first ever digital
                and interactive dichotomous key, including printable info
                pop-ups.
              </p>
              <br />
              <p>
                Aside from improving my technical skills, this project gave me a
                lot of newfound confidence in my design abilities and introduced
                me to a world outside of class projects. On a separate, but also
                significant note, this project also greatly reduced my
                (gigantic!) fear of insects. I guess looking at very large, very
                detailed images of bugs would get you pretty comfortable with
                them.
              </p>
            </section>
          </div>
        </article>
        <article className="overview">
          <h4 className="yellowText">WORK</h4>
          <hr className="yellowLine" />
          <div>
            <section className="sectionBreak">
              <h5 className="yellowText">UPDATED LANDING PAGE</h5>
              <p>
                Our team had extremely high-quality gigapan images of every
                insect in our collection. However, when the website was first
                made, these images were not used for the landing page. I created
                an updated landing page image using high quality images to
                improve our first-impression on visitors and fully utilize the
                resources we had at our disposal.
              </p>
              <div className="flexDisplay m70top">
                <img
                  src={landing}
                  className="fullWidthImg"
                  alt="Landing Page"
                />
              </div>
            </section>
            <section className="sectionBreak">
              <h5 className="yellowText">FULL COLLECTION POSTER</h5>
              <p>
                Because we had such amazing images, we wanted a place where
                people could see them all at once and see the vast diversity in
                our collection. I created this poster displaying all of our
                specimen in each order level. It's included on our website as a
                way for users to get an overview of what insects we cover.
              </p>
              <div className="flexDisplay m70top">
                <img src={poster} className="fullWidthImg" alt="Poster" />
              </div>
            </section>
            <section className="sectionBreak">
              <h5 className="yellowText">ORDER LEVEL PRINT-OUTS</h5>
              <p>
                Our website is a fantastic tool for citizen scientists looking
                to train themselves on different specimen or compare specimen
                directly to images we supply. However, when they are out by the
                streams, internet connection is not always reliable, so analog
                materials can be very helpful. I took our high quality images
                and turned them into printable sheets, each with one of the most
                common orders. These are also extremely helpful for teaching
                identification in a classroom setting.
              </p>
              <div className="flexDisplayWrap m70top">
                <img
                  src={ephemeropteraFront}
                  className="macroImg"
                  alt="Print-out"
                />
                <img
                  src={ephemeropteraBack}
                  className="macroImg"
                  alt="Print-out"
                />
                <img
                  src={plecoptera}
                  className="fullWidthImg pad20bottom"
                  alt="Print-out"
                />
                <img
                  src={trichopteraFront}
                  className="macroImg "
                  alt="Print-out"
                />
                <img
                  src={trichopteraBack}
                  className="macroImg"
                  alt="Print-out"
                />
              </div>
            </section>
            <section className="sectionBreak">
              <h5 className="yellowText">INTERACTIVE DICHOTOMOUS KEY</h5>
              <p>
                Dichotomous keys are often used in identification activities.
                However, those for aquatic insects were all analog, with only
                drawings of insects, and they were decades old. I created a
                digital and interactive dichotomous key, that takes advantage of
                our high quality images and includes helpful pop-ups at each
                decision point. It's been updated since I originally created it
                in early 2019, but you can still{" "}
                <a
                  className="linkObvi"
                  href="https://www.macroinvertebrates.org/key"
                >
                  check out the current version
                </a>
                .
              </p>
              <div className="flexDisplay m70top">
                <img src={key} className="fullWidthImg" alt="Key" />
              </div>
              <div className="flexDisplay m70top">
                <img src={popUps} className="fullWidthImg" alt="Pop-ups" />
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
