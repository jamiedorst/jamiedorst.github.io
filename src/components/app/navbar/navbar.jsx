import React from "react";
import "./navbar.scss";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

export default function Navbar() {
  return (
    <>
      <ul id="top">
        <div className="leftNav">
          <li>
            <h2>
              <HashLink className="navItem" to="/#work">
                Work
              </HashLink>
            </h2>
          </li>
          <li>
            <h2>
              <Link className="navItem" to="/about">
                About
              </Link>
            </h2>
          </li>
          <li>
            <h2>
              <HashLink className="navItem" to="/resume#top">
                Resume
              </HashLink>
            </h2>
          </li>
        </div>
        <li>
          <h1>
            <HashLink id="name" to="/#home">
              Jamie Dorst
            </HashLink>
          </h1>
        </li>
      </ul>
    </>
  );
}
