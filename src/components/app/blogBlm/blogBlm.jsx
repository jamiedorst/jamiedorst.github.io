import React from "react";
import Navbar from "../navbar";
import Footer from "../footer";
import blm from "../../../assets/images/blogImgs/blm.jpg";
import vm1 from "../../../assets/images/virtualAsstImgs/vm1.png";
import vm2 from "../../../assets/images/virtualAsstImgs/vm2.png";
import vmHi1 from "../../../assets/images/virtualAsstImgs/vmHi1.png";
import vmHi2 from "../../../assets/images/virtualAsstImgs/vmHi2.png";
import vm3 from "../../../assets/images/virtualAsstImgs/vm3.png";
import sketches from "../../../assets/images/virtualAsstImgs/sketches.png";
import "./blogBlm.scss";

export default function BlogBlm() {
  return (
    <>
      <header>
        <nav className="navbarBlog">
          <Navbar />
        </nav>
        <hr className="blogVertShortLine" />
        <div className="blogHeader">
          <span className="blogheaderGradient" />
          <img src={blm} className="blogheaderImg" alt="BLM Cover" />
          <div className="blogHeadText">
            <div>
              <h4 className="skinnyText">BLOG</h4>
              <h1 className="skinnyText">
                Why Black Lives Should Matter to Designers (and also Everyone
                Else)
              </h1>
              <div className="blogMeta">
                <h5 className="skinnyText">November 2019</h5>
                <h5 className="skinnyText">Jamie Dorst</h5>
              </div>
              <h2 className="blogBlurb">
                Take a second to listen, hear, understand, and change. It's
                worth it.
              </h2>
            </div>
          </div>
        </div>
        <hr className="headBottomLine" />
      </header>
      <main>
        <hr className="blogBodyLine blmLine" />
        <div className="blogBody">
          <p>
            his is some text that I have. Hello, text.This is some text that I
            have. Hello, text.This is some text that I have.his is some text
            that I have. Hello, text.This is some text that I have. Hello,
            text.This is some text that I have.his is some text that I have.
            Hello, text.This is some text that I have. Hello, text.This is some
            text that I have.his is some text that I have. Hello, text.This is
            some text that I have. Hello, text.This is some text that I have.
          </p>
          <p>
            his is some text that I have. Hello, text.This is some text that I
            have. Hello, text.This is some text that I have.his is some text
            that I have. Hello, text.This is some text that I have. Hello,
            text.This is some text that I have.his is some text that I have.
            Hello, text.This is some text that I have. Hello, text.This is some
            text that I have.his is some text that I have. Hello, text.This is
            some text that I have. Hello, text.This is some text that I have.
          </p>
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
