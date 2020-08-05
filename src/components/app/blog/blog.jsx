import React from "react";
import Navbar from "../navbar";
import Footer from "../footer";
import blm from "../../../assets/images/blogImgs/blm.jpg";
import "./blog.scss";
import { HashLink } from "react-router-hash-link";

export default function Blog() {
  return (
    <>
      <header>
        <nav className="navbarPage">
          <Navbar />
        </nav>
        <div>
          <hr className="blogHorLine" />
          <div className="blogTitleText">
            <h4 className="skinnyText">BLOG</h4>
            <h1 className="skinnyText">I write things sometimes</h1>
          </div>
        </div>
      </header>
      <main>
        <hr className="blogVertLine" />
        <div className="blogPost">
          <HashLink to="/about#top">
            <img src={blm} className="blogCover" alt="Black Lives Matter" />
          </HashLink>
          <div className="blogText">
            <div className="blogPostLeftText">
              <HashLink to="/about#top">
                <h2 className="skinnyText blogTitle">
                  Why Black Lives Should Matter to Designers (and also Everyone
                  Else)
                </h2>
              </HashLink>
              <h5 className="blogDate">Aug 5, 2020</h5>
            </div>
            <div className="blogPostRightText">
              <p className="blogDesc">
                It's not just a phrase, it's not just a one-time decision. It's
                important, and it matters.
              </p>
              <HashLink to="/about#top">
                <h4 className="more">read more</h4>
              </HashLink>
            </div>
          </div>
        </div>
        <div className="blogPost">
          <HashLink to="/about#top">
            <img src={blm} className="blogCover" alt="Black Lives Matter" />
          </HashLink>
          <div className="blogText">
            <div className="blogPostLeftText">
              <HashLink to="/about#top">
                <h2 className="skinnyText blogTitle">
                  Why Black Lives Should Matter to Designers (and also Everyone
                  Else)
                </h2>
              </HashLink>
              <h5 className="blogDate">Aug 5, 2020</h5>
            </div>
            <div className="blogPostRightText">
              <p className="blogDesc">
                It's not just a phrase, it's not just a one-time decision. It's
                important, and it matters.
              </p>
              <HashLink to="/about#top">
                <h4 className="more">read more</h4>
              </HashLink>
            </div>
          </div>
        </div>
        <div className="blogPost">
          <HashLink to="/blacklivesmatter#top">
            <img src={blm} className="blogCover" alt="Black Lives Matter" />
          </HashLink>
          <div className="blogText">
            <div className="blogPostLeftText">
              <HashLink to="/blacklivesmatter#top">
                <h2 className="skinnyText blogTitle">
                  Why Black Lives Should Matter to Designers (and also Everyone
                  Else)
                </h2>
              </HashLink>
              <h5 className="blogDate">Aug 5, 2020</h5>
            </div>
            <div className="blogPostRightText">
              <p className="blogDesc">
                It's not just a phrase, it's not just a one-time decision. It's
                important, and it matters.
              </p>
              <HashLink to="/blacklivesmatter#top">
                <h4 className="more">read more</h4>
              </HashLink>
            </div>
          </div>
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
