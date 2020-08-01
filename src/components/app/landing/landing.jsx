import React from "react";
import Navbar from "../navbar";
import Footer from "../footer";
import "./landing.scss";

export default function Landing() {
  return (
    <>
      <header>
        <nav className="navbarHome">
          <Navbar />
        </nav>
      </header>
      <main id="homePage">
        <section id="spotlightText">
          <h1 id="spotlight">designer, researcher, front-end developer</h1>
        </section>
        <section id="currentTitle">
          <h2 className="job">UX Research Intern @ VMware</h2>
          <h2 className="location">Palo Alto, CA</h2>
        </section>
      </main>
      <footer className="stickyFooter">
        <Footer />
      </footer>
    </>
  );
}
