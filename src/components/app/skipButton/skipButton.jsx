import React from "react";
import "./skipButton.scss";
import { HashLink } from "react-router-hash-link";

export default function SkipButton() {
  return (
    <>
      <div id="skipButton">
        <HashLink id="toFinal" to="#final">
          <h5 className="names skinnyText">SKIP TO FINAL PRODUCT</h5>
        </HashLink>
      </div>
    </>
  );
}
