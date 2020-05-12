import React from "react";
import Navbar from "../navbar";
import Footer from "../footer";
import amaniel from "../../../assets/images/amaniel.jpg";

import audrey from "../../../assets/images/audrey.jpg";
import ax from "../../../assets/images/ax.jpg";
import chase from "../../../assets/images/chase.jpg";
import colin from "../../../assets/images/colin.jpg";
import dylan from "../../../assets/images/dylan.jpg";
import four from "../../../assets/images/four.jpg";
import greg from "../../../assets/images/greg.jpg";
import hannah from "../../../assets/images/hannah.jpg";
import isa from "../../../assets/images/isa.jpg";
import jai from "../../../assets/images/jai.jpg";
import jamie from "../../../assets/images/jamie.jpg";
import john from "../../../assets/images/john.jpg";
import josh from "../../../assets/images/josh.jpg";
import julia from "../../../assets/images/julia.jpg";
import kail from "../../../assets/images/kail.jpg";
import kaitlin from "../../../assets/images/kaitlin.jpg";
import karly from "../../../assets/images/karly.jpg";
import kian from "../../../assets/images/kian.jpg";
import lead from "../../../assets/images/lead.jpg";
import maya from "../../../assets/images/maya.jpg";
import mollie from "../../../assets/images/mollie.jpg";
import peter from "../../../assets/images/peter.jpg";
import poux from "../../../assets/images/poux.jpg";
import richard from "../../../assets/images/richard.jpg";
import steve from "../../../assets/images/steve.jpg";
import sylvaman from "../../../assets/images/sylvaman.jpg";
import victor from "../../../assets/images/victor.jpg";
import will from "../../../assets/images/will.jpg";
import yael from "../../../assets/images/yael.jpg";
import "./personality.scss";

export default function Personality() {
  return (
    <>
      <header>
        <nav className="navbarPage">
          <Navbar />
        </nav>
      </header>
      <main className="photoSect">
        <h4 className="redText">PERSONALITY PICTURES</h4>
        <hr id="resLine" className="redLine" />
        <p className="photoText">
          When the time came to advertise applications for my robotics team, I
          didn’t want to do the typical half-hearted club logo and copy/pasted
          caption on Facebook–I wanted to grab people’s attention. I wanted to
          convey what the team was actually about, not just show people the
          image on our sweatshirts. We were a quirky bunch, and that's a big
          part of what makes the team so fun–I wanted to show that off.
        </p>
        <br />
        <p className="photoText">
          I created a campaign I dubbed "Personality Pictures." Each team member
          got to pick what they wanted to do to show what the team meant to
          them, and I captured that through photography. I encouraged creativity
          with captions, because after all, the team members are the best people
          to describe what the team is all about. In the end, people were
          actually excited to upload their photos (rather than "forgetting" come
          5pm on Friday), write captions, and encourage applicants, and I was
          content with my successful campaign.
        </p>
        <div id="flexImagesSet">
          <img src={amaniel} className="flexImgLand" alt="Portrait" />
          <img src={audrey} className="flexImgLand" alt="Portrait" />

          <img src={poux} className="flexImgLand" alt="Portrait" />
          <img src={isa} className="flexImgLand" alt="Portrait" />

          <img src={ax} className="flexImgPort" alt="Portrait" />
          <img src={will} className="flexImgPort" alt="Portrait" />
          <img src={dylan} className="flexImgPort" alt="Portrait" />

          <img src={colin} className="flexImgLand" alt="Portrait" />
          <img src={four} className="flexImgLand" alt="Portrait" />

          <img src={kail} className="flexImgLand" alt="Portrait" />
          <img src={lead} className="flexImgLand" alt="Portrait" />

          <img src={chase} className="flexImgPort" alt="Portrait" />
          <img src={jai} className="flexImgPort" alt="Portrait" />
          <img src={greg} className="flexImgPort" alt="Portrait" />

          <img src={hannah} className="flexImgLand" alt="Portrait" />
          <img src={richard} className="flexImgLand" alt="Portrait" />

          <img src={steve} className="flexImgLand" alt="Portrait" />
          <img src={sylvaman} className="flexImgLand" alt="Portrait" />

          <img src={josh} className="flexImgPort" alt="Portrait" />
          <img src={julia} className="flexImgPort" alt="Portrait" />
          <img src={kaitlin} className="flexImgPort" alt="Portrait" />

          <img src={jamie} className="flexImgLand" alt="Portrait" />
          <img src={john} className="flexImgLand" alt="Portrait" />

          <img src={maya} className="flexImgLand" alt="Portrait" />
          <img src={mollie} className="flexImgLand" alt="Portrait" />

          <img src={karly} className="flexImgPort" alt="Portrait" />
          <img src={kian} className="flexImgPort" alt="Portrait" />
          <img src={peter} className="flexImgPort" alt="Portrait" />

          <img src={victor} className="flexImgLand" alt="Portrait" />
          <img src={yael} className="flexImgLand" alt="Portrait" />
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
