import React from "react";
import Navbar from "../navbar/navbar.jsx";
import Footer from "../footer/footer.jsx";
import redBlob from "../../../assets/images/redBlob.png";
import "./courseAdvisor.scss";

export default function CourseAdvisor() {
  return (
    <>
      <header id="home">
        <div className="blobs">
          <img src={redBlob} id="redBlob" alt="redBlob" />
        </div>
        <nav className="navbar" id="work">
          <Navbar />
        </nav>
      </header>
      <main className="grid"></main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
