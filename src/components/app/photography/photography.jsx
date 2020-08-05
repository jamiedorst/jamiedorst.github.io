import React from "react";
import Navbar from "../navbar";
import Footer from "../footer";
import bean from "../../../assets/images/photoImgs/bean.jpg";
import landscape from "../../../assets/images/photoImgs/landscape.jpg";
import alps from "../../../assets/images/photoImgs/alps.jpg";
import disney from "../../../assets/images/photoImgs/disney.jpg";
import peak from "../../../assets/images/photoImgs/peak.jpg";
import china from "../../../assets/images/photoImgs/china.jpg";
import skyline from "../../../assets/images/photoImgs/skyline.jpg";
import rinc from "../../../assets/images/photoImgs/rinc.jpg";
import waterfall from "../../../assets/images/photoImgs/waterfall.jpg";
import ben from "../../../assets/images/photoImgs/ben.jpg";
import playboy from "../../../assets/images/photoImgs/playboy.jpg";
import orchids from "../../../assets/images/photoImgs/orchids.jpg";
import leaves from "../../../assets/images/photoImgs/leaves.jpg";
import ceiling from "../../../assets/images/photoImgs/ceiling.jpg";
import wishing from "../../../assets/images/photoImgs/wishing.jpg";
import peter from "../../../assets/images/photoImgs/peter.jpg";
import square from "../../../assets/images/photoImgs/square.jpg";
import plane from "../../../assets/images/photoImgs/plane.jpg";
import squirrel from "../../../assets/images/photoImgs/squirrel.jpg";
import john from "../../../assets/images/photoImgs/john.jpg";
import sf from "../../../assets/images/photoImgs/sf.jpg";
import moma from "../../../assets/images/photoImgs/moma.jpg";
import news from "../../../assets/images/photoImgs/news.jpg";
import window from "../../../assets/images/photoImgs/window.jpg";
import houston from "../../../assets/images/photoImgs/houston.jpg";
import bloedel from "../../../assets/images/photoImgs/bloedel.jpg";
import moon from "../../../assets/images/photoImgs/moon.jpg";
import curtainCat from "../../../assets/images/photoImgs/curtainCat.jpg";
import sym from "../../../assets/images/photoImgs/sym.jpg";
import beaubo from "../../../assets/images/photoImgs/beaubo.jpg";
import lemons from "../../../assets/images/photoImgs/lemons.jpg";
import croatia from "../../../assets/images/photoImgs/croatia.jpg";
import "./photography.scss";
import { SRLWrapper } from "simple-react-lightbox";

const options = {
  settings: {
    overlayColor: "rgba(19,21,22, 0.85)",
    transitionSpeed: 100,
  },
  buttons: {
    backgroundColor: "rgba(19,21,22, 0.95)",
    iconColor: "#E8E9EB",
    iconPadding: "7px",
    showAutoplayButton: false,
    showCloseButton: true,
    showDownloadButton: false,
    showFullscreenButton: false,
    showNextButton: true,
    showPrevButton: true,
    size: "40px",
  },
  caption: {
    captionColor: "#E8E9EB",
    captionFontFamily: "IBM Plex Serif, serif",
    captionFontWeight: "400",
  },
  thumbnails: {
    showThumbnails: false,
  },
};

export default function Photography() {
  return (
    <>
      <header>
        <nav className="navbarPage">
          <Navbar />
        </nav>
      </header>
      <main className="photoSect">
        <h3>Photography</h3>
        <SRLWrapper options={options}>
          <div className="photoGallery">
            {/* bluish */}
            <img src={bean} className="pgImg" alt="The Bean – Chicago, IL" />
            <img
              src={landscape}
              className="pgImg"
              alt="Nordkette – Innsbruck, Austria"
            />
            <img
              src={alps}
              className="pgImg"
              alt="Nordkette – Innsbruck, Austria"
            />
            <img
              src={disney}
              className="pgImg"
              alt="Disneyland – Shanghai, China"
            />
            <img
              src={peak}
              className="pgImg"
              alt="Nordkette – Innsbruck, Austria"
            />
            <img
              src={china}
              className="pgImg"
              alt="City God Temple (上海城隍庙) – Shanghai, China"
            />
            <img
              src={skyline}
              className="pgImg"
              alt="Skyline Boulevard – California"
            />
            <img
              src={rinc}
              className="pgImg"
              alt="Rinconada Pool – Palo Alto, CA"
            />
            <img
              src={waterfall}
              className="pgImg"
              alt="Plitvička Jezera – Croatia"
            />
            <img src={ben} className="pgImg" alt="Bennett Michael" />
            <img src={playboy} className="pgImg" alt="Playboy" />
            <img src={orchids} className="pgImg" alt="Orchids" />
            {/* greenish */}
            <img src={leaves} className="pgImg" alt="Nighttime Greenery" />
            <img
              src={ceiling}
              className="pgImg"
              alt="Bloedel Conservatory – Vancouver, British Columbia"
            />
            <img
              src={wishing}
              className="pgImg"
              alt="Bloedel Conservatory – Vancouver, British Columbia"
            />
            <img
              src={peter}
              className="pgImg"
              alt="California Wildfires 2018"
            />
            {/* blackish */}
            <img
              src={square}
              className="pgImg"
              alt="Carnegie Museum of Art – Pittsburgh, PA"
            />
            <img src={plane} className="pgImg" alt="Flying" />
            <img
              src={squirrel}
              className="pgImg"
              alt="Squirrel – Palo Alto, CA"
            />
            <img src={john} className="pgImg" alt="IKEA Portraits" />
            <img src={sf} className="pgImg" alt="San Francisco, CA" />
            <img
              src={moma}
              className="pgImg"
              alt="SF MOMA – San Francisco, CA"
            />
            <img src={news} className="pgImg" alt="News" />
            <img src={window} className="pgImg" alt="Sundays" />
            <img
              src={houston}
              className="pgImg"
              alt="George Bush Intercontinental Airport – Houston, TX"
            />
            <img
              src={bloedel}
              className="pgImg"
              alt="Bloedel Conservatory – Vancouver, British Columbia"
            />
            <img src={moon} className="pgImg" alt="The Moon" />
            {/* orangish */}
            <img src={curtainCat} className="pgImg" alt="Cat 1" />
            <img
              src={sym}
              className="pgImg"
              alt="Jing'an Temple (静安寺) – Shanghai, China"
            />
            <img src={beaubo} className="pgImg" alt="Cat 2" />
            <img src={lemons} className="pgImg" alt="Lemons – Palo Alto, CA" />
            <img
              src={croatia}
              className="pgImg"
              alt="Gornji Grad–Medveščak – Zagreb, Croatia"
            />
          </div>
        </SRLWrapper>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
