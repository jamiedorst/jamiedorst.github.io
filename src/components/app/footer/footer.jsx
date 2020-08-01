import React from "react";
import "./footer.scss";
import { HashLink } from "react-router-hash-link";

export default function Footer() {
  return (
    <>
      <div id="footer">
        <HashLink id="toTop" to="#top">
          <h4 className="more">back to top</h4>
        </HashLink>
        <hr id="footerLine" />
        <h5 id="credit">© 2020 Jamie Dorst</h5>
      </div>
    </>
  );
}
