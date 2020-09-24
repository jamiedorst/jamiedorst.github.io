import React from "react";
import Navbar from "../navbar";
import Footer from "../footer";
import vmCover from "../../../assets/images/virtualAsstImgs/vmCover.png";
import vm1 from "../../../assets/images/virtualAsstImgs/vm1.png";
import vm2 from "../../../assets/images/virtualAsstImgs/vm2.png";
import vmHi1 from "../../../assets/images/virtualAsstImgs/vmHi1.png";
import vmHi2 from "../../../assets/images/virtualAsstImgs/vmHi2.png";
import vm3 from "../../../assets/images/virtualAsstImgs/vm3.png";
import sketches from "../../../assets/images/virtualAsstImgs/sketches.png";
import "./assistant.scss";
import SkipButton from "../skipButton/skipButton";

export default function Assistant() {
  return (
    <>
      <header>
        <nav className="navbarPage">
          <Navbar />
        </nav>
        <hr className="vertShortLine" />
        <div className="pageHeader">
          <span className="headerGradient" />
          <img
            src={vmCover}
            className="headerImg"
            alt="Virtual Assistant Cover"
          />
          <div className="pageHeadText">
            <div>
              <h4 className="skinnyText">WORK</h4>
              <h1 className="skinnyText">AI Virtual Assistant</h1>
              <h5 className="skinnyText">November 2019</h5>
              <h2>
                An AI-powered virtual assistant to help remote workers create a
                mental divide between work and home.
              </h2>
            </div>
            <div className="fastFacts">
              <div className="fact">
                <h5 className="names skinnyText">ROLE</h5>
                <p className="skinnyText">UX Researcher, UX Designer</p>
              </div>
              <div className="fact">
                <h5 className="names skinnyText">TOOLS</h5>
                <p className="skinnyText">Sketch</p>
              </div>
              <div className="fact">
                <h5 className="names skinnyText">TEAM</h5>
                <p className="skinnyText">Jamie Dorst</p>
              </div>
            </div>
          </div>
        </div>
        <hr className="headBottomLine" />
      </header>
      <main>
        <hr className="vertBodyLineTop vaTop" />
        <article className="sectionBreak">
          <h3 className="section">Overview</h3>
          <div>
            <section className="textBlock">
              <h5 className="names skinnyText">PROBLEM</h5>
              <p className="skinnyText bottomM3">
                <span className="italics">
                  This was completed as part of a week-long design challenge.
                </span>{" "}
                Retaining talent is always a challenging task for tech
                companies. Keeping your best employees engaged starts with
                understanding the different factors that influence each
                individual’s workday.
              </p>
              <h5 className="names skinnyText">SOLUTION</h5>
              <p className="skinnyText bottomM3">
                I created an AI-powered assistant to create a mental distance
                between remote workers and their workplace. This app removes
                pressure from employees to constantly be on the clock–their
                assistants can take over after hours and handle any tasks that
                need attention while they’re away.
              </p>
            </section>
            <section>
              <h5 className="names">FINAL PRODUCT</h5>
              <hr className="highlightLineTop" />
              <div className="highlightSect">
                <div className="highlightText">
                  <h2>Be Your Own Boss</h2>
                  <h3 className="blurb">
                    Even if you’re always in your workplace, it doesn’t mean
                    you’re always at work. Set clear boundaries for when you’re
                    on the clock and when you’re off, and quickly know your
                    colleagues' hours as well.
                  </h3>
                </div>
                <span className="highlightGradient" />
                <img
                  src={vmHi1}
                  className="highlightImg"
                  alt="Virtual Assistant Highlight"
                />
              </div>
              <div className="highlightSect">
                <div className="highlightText">
                  <h2>A Smart AI Assistant</h2>
                  <h3 className="blurb">
                    The app will handle all requests you get while you’re away
                    and either complete them or save them for your explicit
                    approval. When you’re back at work, you’ll get a summary of
                    what you missed and anything still requiring your attention.
                  </h3>
                </div>
                <span className="highlightGradient" />
                <img
                  src={vmHi2}
                  className="highlightImg"
                  alt="Virtual Assistant Highlight"
                />
              </div>
              <hr className="highlightLineBottom" />
            </section>
          </div>
        </article>
        <SkipButton />
        <hr className="vertBodyLineBottom vaBott" />
        <article className="sectionBreak">
          <h3 className="section">Research</h3>
          <section className="textBlock bottomM3">
            <h5 className="names skinnyText">RESCOPING THE PROBLEM-SPACE</h5>
            <p className="skinnyText">
              I decided to rescope the problem so that I could produce something
              more tenable on the one-week timeframe. I focused on startups,
              specifically those with primarily remote employees from all over
              the world. I chose this domain because remote jobs are becoming
              more and more widespread, and without a common workspace or even
              time zone, it's much harder to maintain organization and security
              with your employees. Startups in particular tend to have less
              established practices for ensuring employee satisfaction, making
              them a great place to discover and explore common plights.
            </p>
            <p>
              With this reframed problem, I could then create a more specific
              research question to work with:{" "}
              <span className="bold">
                Startups with primarily remote employees often struggle to
                maintain a strong company culture and retain their talent. We
                want to understand what specific problems their employees have,
                and how we might fix them.
              </span>
            </p>
          </section>
          <section className="textBlock bottomM3">
            <h5 className="names skinnyText">SECONDARY RESEARCH</h5>
            <p className="skinnyText">
              Because I was working with a limited timeframe and budget, I
              elected to start with secondary research. My main goal here was to
              find what common workplace challenges are, specifically focusing
              on those faced by remote workers.
            </p>
            <p>
              My main findings were that remote employees often struggle with
              finding a <span className="bold">healthy work-life balance</span>,
              ensuring <span className="bold">reliable technology</span>, and{" "}
              <span className="bold">solving communication issues</span> with
              their managers and colleagues. Additionally,{" "}
              <span className="bold">
                most remote workers are left to solve any challenge they're
                facing on their own
              </span>{" "}
              due to the gap created by the mental and physical distance from
              the office.
            </p>
          </section>
          <section className="textBlock bottomM3">
            <h5 className="names skinnyText">PRIMARY RESEARCH</h5>
            <p className="skinnyText">
              After learning more about the problem-space through secondary
              research, I conducted semi-structured interviews with remote
              startup employees. My main goals here were to clarify my research
              domain and gain more personal, qualitative insights to enrich my
              secondary research.
            </p>
            <p>I based my interviews off of four main questions:</p>
            <div className="indentText">
              <p>
                1. How long have you been with your current employer and how
                satisfied are you?
              </p>
              <p>
                2. Why did you leave your last job or what would make you
                consider leaving a job?
              </p>
              <p>
                3. What do you currently consider to be your biggest challenge
                in the workplace?
              </p>
              <p>
                4. Have you ever done anything to improve your own satisfaction
                in the workplace?
              </p>
            </div>
            <p>
              After conducting five interviews, I found some common patterns in
              the responses I was getting. My main takeaways were:
            </p>
            <div className="indentText">
              <p>
                <span className="bold">
                  1. Employees often feel like because they work from home,
                  their employers think of them as always being at work.
                </span>
                This leads to mismatched expectations.
              </p>
              <p className="italics">
                One participant had recently had a baby. She told me she only
                got 5 weeks of maternity leave, and then was expected to go back
                to work straight away. Even when she was on maternity leave, she
                was constantly bombarded with work emails, because even though
                she was technically away from work, she was “living in her
                office.”
              </p>
              <p className="italics">
                Another participant detailed how when he was new at his company,
                he didn’t realize how much they were asking of him. He was
                working constantly and didn’t realize anything was wrong because
                going on his laptop for an extra 10 minutes on his couch at home
                to finish up “work stuff” feels a lot different from driving all
                the way back to the office.
              </p>
              <p>
                <span className="bold">
                  2. Without proper management and organization, it's easy for
                  tasks to get piled on without recognition.
                </span>
                This leads to unhealthy pressure on employees to excel and
                builds resentment toward management.
              </p>
              <p className="italics">
                Multiple participants made complaints about their employers
                giving them more and more work, without recognizing how much
                work they had already been putting in. A shared sentiment was
                that even though they knew they didn’t have to do that work,
                they still felt like they should.
              </p>
            </div>
            <p>
              Doing interviews gave me a lot of essential insight into the
              problem-space. With this information, I was much better equipped
              to create a design that could possibly solve one of these
              problems.
            </p>
          </section>
          <section className="textBlock">
            <h5 className="names skinnyText">REDEFINING THE PROBLEM</h5>
            <p className="skinnyText">
              I decided to tackle the problem of creating a healthy work-life
              balance. Whether it be that they can’t find a proper boundary with
              their employer or simply that the physical space they’re in every
              day blurs the line, having a clear distinction between work and
              home is crucial for peak performance and employee satisfaction.
            </p>
          </section>
        </article>
        <article className="sectionBreak">
          <h3 className="section">Design</h3>
          <section className="textBlock">
            <h5 className="names skinnyText">IDEATION</h5>
            <p className="skinnyText">
              Oftentimes, employees are told to create a home office or somehow
              separate their work from their home on their own. While this can
              be a great solution, it isn't an option for everyone, and implies
              that it's solely up to the employee to solve the problem. Another
              layer to this is that if an employee is always at home, it never
              feels like they officially leave the workplace. When their
              employer contacts them after-hours asking for something, it’s a
              lot harder to say no.
            </p>
            <p>
              I saw that a pattern emerged here–there has to be a way to{" "}
              <span className="bold">
                set boundaries between work and home for both the employee and
                the employer
              </span>
              . These boundaries should be non-physical, so that they are easily
              attainable for everyone.
            </p>
            <p>To get my brain flowing, I sketched out my initial ideas.</p>
          </section>
          <img
            src={sketches}
            className="landscape4w bottomM3"
            alt="Wireframe Sketches"
          />
          <section className="textBlock" id="final">
            <h5 className="names skinnyText">SOLUTION</h5>
            <p className="skinnyText">
              Based on my sketches, I created some digital mockups of a possible
              product solution.
            </p>
            <p>
              The app allows for{" "}
              <span className="bold">healthy and comfortable boundaries</span>{" "}
              to be set. It can be awkward to be firm with your boss about when
              you’re at work and when you’re not, especially when you’re going
              to be on your laptop anyway. My solution makes your work hours
              unquestionable–they’re not up for debate, and they’re not an
              issue. They’re just your hours.
            </p>
          </section>
          <div className="bottomM3 topM1">
            <img src={vm1} className="portrait3w" alt="Virtual Assistant" />
          </div>
          <section className="textBlock">
            <p className="skinnyText">
              The app helps users by taking care of any tasks while they're
              away, and also providing the same courtesy to their coworkers. It
              provides a{" "}
              <span className="bold">summary of what you missed</span>, allows
              you to <span className="bold">catch up on important tasks</span>{" "}
              it couldn't handle without your permission, and also allows you
              (the considerate colleague) to{" "}
              <span className="bold">ask anytime for what you need</span>{" "}
              without worrying that your ping will wake them up.
            </p>
          </section>
          <div className="bottomM3 topM1">
            <img src={vm2} className="portrait3w" alt="Virtual Assistant" />
            <img src={vm3} className="portrait3w" alt="Virtual Assistant" />
          </div>
          <section className="textBlock bottomM3">
            <p>
              In my initial sketches I also included a chat feature, but in the
              design process I realized that wasn't the purpose of my app–I
              wanted to provide a way for employees to distance themselves from
              work, not engage further.
            </p>
          </section>
          <section className="textBlock bottomM3">
            <h5 className="names skinnyText">NEXT STEPS</h5>
            <p className="skinnyText">
              The next steps I would take in this project would be to do
              usability testing on my design, and find out how well it works or
              if this is even the optimal solution. I’d use those results to
              inform further design iterations and continue testing.
            </p>
          </section>
          <section className="textBlock">
            <h5 className="names skinnyText">REFLECTION</h5>
            <p className="skinnyText">
              I really enjoyed this exercise. Here are some of my main
              takeaways:
            </p>
            <div className="indentText">
              <p>
                <span className="bold">
                  1. There are lots of different ways to do research.
                </span>{" "}
                I’ve done a lot of different projects with different types of
                research, but I’ve usually been given a good idea of what
                methods I should use and what I should expect to walk away with.
                In this project, everything was very open-ended, so determining
                the best method was a new challenge–and one that I think has
                multiple correct answers.
              </p>
              <p>
                <span className="bold">
                  2. I really enjoy working on a team.
                </span>{" "}
                Sometimes group projects can be frustrating, but doing this
                project alone made me realize how beneficial having a group is.
                Having other people with different perspectives to bounce ideas
                off of is really valuable, and can take your projects a lot
                further.
              </p>
              <p>
                <span className="bold">
                  3. Guerrilla research isn’t the strongest tool, but it’s super
                  helpful when you’re under a lot of constraints.
                </span>{" "}
                Because of the one week timeline, I didn’t do extremely robust
                research. However, this did teach me how valuable guerrilla
                research can be–any information you can gather can be
                beneficial, even if it wasn’t done in the most methodical way.
              </p>
              <p>
                <span className="bold">4. I love UX!</span> I was a bit stumped
                when I first read the prompt, but working through it and
                learning and creating was a really fun process that only further
                confirmed my love for UX research and design. I truly enjoy
                problem-solving, and being able to do that in a way that helps
                people is the best of both worlds.
              </p>
            </div>
          </section>
        </article>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
