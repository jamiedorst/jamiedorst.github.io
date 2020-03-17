import React from "react";
import "./footer.scss";

export default function Footer() {
  return (
    <>
      <h3>
        designed and handcoded with <span class="far fa-heart"></span>
      </h3>
      <nav className="foot">
        <a className="icon" href="https://www.linkedin.com/in/jamiedorst/">
          <span className="fab fa-linkedin-in fa-md"></span>
        </a>
        <a className="icon" href="mailto:jamie.g.dorst@gmail.com">
          <span class="far fa-envelope fa-md"></span>
        </a>
        <a className="icon" href="https://github.com/jamiedorst">
          <span className="fab fa-github fa-md"></span>
        </a>
      </nav>
      <h3 id="mini">© 2020 Jamie Dorst</h3>
    </>
  );
}
