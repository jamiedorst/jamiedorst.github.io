import React from "react";
import "./navbar.scss";
import { HashLink } from "react-router-hash-link";

export default function Navbar() {
  return (
    <>
      <ul id="top">
        <li id="nameMargins">
          <hr id="nameLine" />
          <h2 id="nameTitle">
            <HashLink to="/">Jamie Dorst</HashLink>
          </h2>
        </li>
        <div id="rightNav">
          <hr id="pagesLine" />
          <div id="navPages">
            <li>
              <h3 className="navItem">
                <HashLink to="/work#top">work</HashLink>
              </h3>
            </li>
            {/* <li>
              <h3 className="navItem">
                <HashLink to="/blog#top">blog</HashLink>
              </h3>
            </li> */}
            <li>
              <h3 className="navItem">
                <HashLink to="/about#top">about</HashLink>
              </h3>
            </li>
            <li>
              <h3 className="navItem">
                <HashLink to="/resume#top">resume</HashLink>
              </h3>
            </li>
          </div>
          <div id="buttonLinks">
            <li className="icon">
              <a
                className="icon"
                href="https://www.linkedin.com/in/jamiedorst/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="fab fa-linkedin-in fa-md"></span>
              </a>
            </li>
            <li className="icon">
              <a className="icon" href="mailto:jamie.g.dorst@gmail.com">
                <span className="far fa-envelope fa-md"></span>
              </a>
            </li>
            <li className="icon">
              <a
                className="icon"
                href="https://www.instagram.com/pookimadesomething/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="fab fa-instagram fa-md"></span>
              </a>
            </li>
            <li className="icon">
              <a
                className="icon"
                href="https://github.com/jamiedorst"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="fab fa-github fa-md"></span>
              </a>
            </li>
          </div>
        </div>
      </ul>
    </>
  );
}
