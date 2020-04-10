import React from "react";
import Navbar from "../navbar/navbar.jsx";
import Footer from "../footer/footer.jsx";
import ResumeDoc from "../../../assets/documents/resume.pdf";
import ResumeBlob from "../../../assets/images/resumeBlob.png";
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
        <h4 className="yellowText">RESUME</h4>
        <hr id="resLine" className="yellowLine" />
        <div>
          <img src={ResumeBlob} className=" blob" id="resumeBlob" alt="Blob" />
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
