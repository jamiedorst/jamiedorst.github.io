import React from "react";
import Navbar from "../navbar";
import Footer from "../footer";
import vmw from "../../../assets/images/globalPrintImgs/vmw.png";
import highlight1 from "../../../assets/images/globalPrintImgs/highlight1.png";
import highlight2 from "../../../assets/images/globalPrintImgs/highlight2.png";
import "./globalPrint.scss";

export default function GlobalPrint() {
  return (
    <>
      <header>
        <nav className="navbarPage">
          <Navbar />
        </nav>
        <hr className="vertShortLine" />
        <div className="pageHeader">
          <span className="headerGradient" />
          <img src={vmw} className="headerImg" alt="VMware Logo" />
          <div className="pageHeadText">
            <div>
              <h4 className="skinnyText">WORK</h4>
              <h1 className="skinnyText">Global Print</h1>
              <h5 className="skinnyText">June to July 2020</h5>
              <h2>
                Research examining how remote working has affected printing
                needs at VMware.
              </h2>
            </div>
            <div className="fastFacts">
              <div className="fact">
                <h5 className="names skinnyText">ROLE</h5>
                <p className="skinnyText">UX Researcher</p>
              </div>
              <div className="fact">
                <h5 className="names skinnyText">TOOLS</h5>
                <p className="skinnyText">Maritz, Excel, Powerpoint</p>
              </div>
              <div className="fact">
                <h5 className="names skinnyText">TEAM</h5>
                <p className="skinnyText">Jamie Dorst, VMware CX Team</p>
              </div>
            </div>
          </div>
        </div>
        <hr className="headBottomLine" />
      </header>
      <main>
        <hr className="vertBodyLineTop gpTop" />
        <article className="sectionBreak">
          <h3 className="section">Overview</h3>
          <div>
            <section className="textBlock">
              <h5 className="names skinnyText">PROBLEM</h5>
              <p className="skinnyText bottomM3">
                Since the COVID-19 pandemic, VMware employees have been working
                from home. This brought about its own set of challenges and
                benefits, but one thing that was unclear was how our colleagues
                were performing office-reliant tasks such as printing, from
                home.
              </p>
              <h5 className="names skinnyText">SOLUTION</h5>
              <p className="skinnyText bottomM3">
                Through global surveys and interviews, I was able to gain a much
                better understanding of what people's needs are, and how they
                currently are or are not being met. Through this I also ideated
                upon solutions and presented those to the Global Print team.{" "}
                <p>
                  <span className="italics">
                    Because much of the work I did in this project has not been
                    publicly released, I will be omitting certain information.
                    Contact me to learn more.
                  </span>
                </p>
              </p>
            </section>
            <section>
              <h5 className="names">FINAL PRODUCT</h5>
              <hr className="highlightLineTop" />
              <div className="highlightSect">
                <div className="highlightText">
                  <h2>Four Types of Users</h2>
                  <h3 className="blurb">
                    I discovered that there are four main categories that
                    printers at VMware fall under. These cateogires would
                    heavily influence any solutions the Global Print team would
                    implement.
                  </h3>
                </div>
                <span className="highlightGradient" />
                <img
                  src={highlight1}
                  className="highlightImg confidential"
                  alt="Global Print Confidential"
                />
              </div>
              <div className="highlightSect">
                <div className="highlightText">
                  <h2>Suggested Solutions</h2>
                  <h3 className="blurb">
                    Based on the four types of users and the insights I gathered
                    from the survey and interviews, I proposed multiple
                    solutions and gave an analysis of which groups would
                    primarily benefit from each.
                  </h3>
                </div>
                <span className="highlightGradient" />
                <img
                  src={highlight2}
                  className="highlightImg confidential"
                  alt="Global Print Confidential"
                />
              </div>
              <hr className="highlightLineBottom" />
            </section>
          </div>
        </article>
        <hr className="vertBodyLineBottom gpBott" />
        <article className="sectionBreak">
          <h3 className="section">Research</h3>
          <div>
            <section className="textBlock">
              <h5 className="names skinnyText">SURVEY</h5>
              <p className="skinnyText bottomM3">
                I started with a survey to get a better, general understanding
                of why/how often people print, how important it is for their
                role, and how the remote transition has affected them. The
                survey was sent out globally to 30 frequent users in each of the
                seven business units that used printing services most in 2019.
                This allowed me to reach a variety of locations and job roles,
                and ensured I would not be excluding any important voices. This
                had a 24% response rate.
              </p>
              <h5 className="names skinnyText">INTERVIEWS</h5>
              <p className="skinnyText bottomM3">
                After the survey I conducted 19 1:1 interviews with willing
                participants. These allowed me to dig a little deeper into why
                people print, and what their specific challenges have been. This
                would help me better understand what nuances the print team
                should be aware of, and was also an opportunity to ideate upon
                ideas with affected colleagues. Participants were sourced
                through an opt-in question at the end of the survey, and were a
                global group representing all seven target business units.
              </p>
              <h5 className="names skinnyText">FINDINGS</h5>
              <p className="skinnyText">
                <span className="italics">
                  Again, because much of the work I did in this project has not
                  been publicly released, I am unable to disclose my findings in
                  detail. I will share general ideas here, but contact me to
                  learn more.
                </span>{" "}
              </p>
              <p>
                Some interesting quantitative data came from the survey, giving
                me insight as to what the printing population at VMware looks
                like, specifically when remote. This would be helpful for my
                project but also any future work the Global Print team does.
              </p>
              <p className=" bottomM3">
                The interviews gave me more in-depth information about people's
                experiences, and through them I found four main types of print
                users. These four categories would help guide how we address the
                remote printing problem–they demonstrate that there is no
                one-size-fits-all solution. After uncovering and exploring these
                four categories, I was able to present multiple ideas to the
                team in the context of these user types, and identify which
                ideas would primarily benefit which groups to aid in
                prioritization.
              </p>
            </section>
          </div>
        </article>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
