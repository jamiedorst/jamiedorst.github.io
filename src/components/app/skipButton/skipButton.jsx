import React from "react";
import "./skipButton.scss";
import { HashLink } from "react-router-hash-link";

export default function SkipButton() {
  return (
    <>
      <div id="skipButton">
        <HashLink id="toFinal" to="#final">
          <h5 className="names noMP">SKIP PROCESS</h5>
        </HashLink>
      </div>
    </>
  );
}
