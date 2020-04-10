import React from "react";
import "./footer.scss";
import { HashLink } from "react-router-hash-link";

export default function Footer() {
  return (
    <>
      <div id="clickable">
        <HashLink to="#top">
          <h5 id="back2top">BACK TO TOP</h5>
        </HashLink>
      </div>
      <h6 className="credit">
        designed and handcoded with <span className="far fa-heart"></span>
      </h6>
      <nav id="foot">
        <a className="icon" href="https://www.linkedin.com/in/jamiedorst/">
          <span className="fab fa-linkedin-in fa-md"></span>
        </a>
        <a className="icon" href="mailto:jamie.g.dorst@gmail.com">
          <span className="far fa-envelope fa-md"></span>
        </a>
        <a className="icon" href="https://github.com/jamiedorst">
          <span className="fab fa-github fa-md"></span>
        </a>
      </nav>
      <h6 id="mini" className="credit">
        © 2020 Jamie Dorst
      </h6>
    </>
  );
}
