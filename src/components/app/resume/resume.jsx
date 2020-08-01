import React from "react";
import Navbar from "../navbar";
import Footer from "../footer";
import ResumeDoc from "../../../assets/documents/resume.pdf";
import "./resume.scss";

export default function Resume() {
  return (
    <>
      <header>
        <nav className="navbarPage">
          <Navbar />
        </nav>
      </header>
      <main>
        <div>
          <div className="topLayer" id="resumeTop">
            <object className="resume" data={ResumeDoc} type="application/pdf">
              <iframe
                className="resume"
                title="Resume"
                name="Resume"
                src={ResumeDoc}
              />
            </object>
          </div>
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
