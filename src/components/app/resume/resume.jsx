import React from "react";
import Navbar from "../navbar/navbar.jsx";
import Footer from "../footer/footer.jsx";
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
        <h4 className="courseAdvisor">RESUME</h4>
        <hr id="resLine" className="redLine" />
        <object className="resume" data={ResumeDoc} type="application/pdf">
          <iframe className="resume" src={ResumeDoc}></iframe>
        </object>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
