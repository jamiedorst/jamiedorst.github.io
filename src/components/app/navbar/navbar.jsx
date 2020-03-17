import React from "react";
import "./navbar.scss";

export default function Navbar() {
  return (
    <>
      <ul>
        <div className="leftNav">
          <li>
            <h2>
              <a className="navItem" href="#work">
                Work
              </a>
            </h2>
          </li>
          <li>
            <h2>
              <a className="navItem" href="news.asp">
                About
              </a>
            </h2>
          </li>
          <li>
            <h2>
              <a className="navItem" href="contact.asp">
                Resume
              </a>
            </h2>
          </li>
        </div>
        <li>
          <h1>
            <a id="name" href="#home">
              Jamie Dorst
            </a>
          </h1>
        </li>
      </ul>
    </>
  );
}
