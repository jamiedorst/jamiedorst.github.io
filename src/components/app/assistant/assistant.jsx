import React from "react";
import Navbar from "../navbar";
import Footer from "../footer";
import vmBlob from "../../../assets/images/vmBlob.png";
import vmCover from "../../../assets/images/vmCover.png";
import vmFinalBlob from "../../../assets/images/vmFinalBlob.png";
import vm1 from "../../../assets/images/vm1.png";
import vm2 from "../../../assets/images/vm2.png";
import vm3 from "../../../assets/images/vm3.png";
import sketches from "../../../assets/images/sketches.png";
import "./assistant.scss";

export default function Assistant() {
  return (
    <>
      <header>
        <nav className="navbarPage">
          <Navbar />
        </nav>
        <div>
          <img src={vmBlob} className="blob" alt="Blob" />
          <div className="topLayer">
            <img src={vmCover} className="coverPhoto" alt="iPhone" />
            <div className="leftText head phoneHead">
              <h3 className="blueText">AI Virtual Assistant</h3>
              <p className="blurb">
                An AI-powered virtual assistants to help remote workers create a
                mental divide between work and home.
              </p>
            </div>
          </div>
        </div>
      </header>
      <main>
        <article className="overview">
          <h4 className="blueText">OVERVIEW</h4>
          <hr className="blueLine" />
          <div>
            <div className="top sectionBreak">
              <section className="mainInfo">
                <h5 className="blueText">PROBLEM</h5>
                <p>
                  <i>
                    This was completed as part of a week-long design challenge.
                  </i>{" "}
                  Retaining talent is always a challenging task for tech
                  companies. Keeping your best employees engaged starts with
                  understanding the different factors that influence each
                  individual’s workday.
                </p>
                <h5 className="blueText">SOLUTION</h5>
                <p>
                  I created a smart AI powered assistant that will serve to
                  create a mental distance between remote workers and their
                  workplace. Through this app, the pressure will be removed from
                  employees to constantly be on the clock–their assistants can
                  take over after hours and handle any tasks that need attention
                  while they’re away.
                </p>
              </section>
              <aside className="sideInfo">
                <h5 className="blueText">ROLE</h5>
                <p>UX Researcher and Designer</p>
                <h5 className="blueText">TIMELINE</h5>
                <p>November 2019</p>
                <h5 className="blueText">TEAM</h5>
                <p>Jamie Dorst</p>
                <h5 className="blueText">TOOLS</h5>
                <p>Sketch</p>
              </aside>
            </div>
            <section>
              <h5 className="blueText sectionBreak">FINAL PRODUCT</h5>
              <div className="pad100top">
                <img src={vmFinalBlob} className="blob" alt="Blob" />
                <div className="flexDisplay">
                  <div className="soloPhone">
                    <img src={vm1} className="phoneImg2" alt="Screenshot" />
                  </div>
                  <div className="leftText">
                    <h3 className="blueText">Be Your Own Boss</h3>
                    <p className="blurb">
                      Even if you’re always in your workspace, it doesn’t mean
                      you’re always at work. Set clear boundaries for when
                      you’re officially on the clock and when you’re off, even
                      if your office is your living room. Take solace in the
                      mental distance provided by the app as a way to give
                      yourself more work-life balance.
                    </p>
                  </div>
                </div>
                <div className="flexDisplay m70top">
                  <div className="rightText">
                    <h3 className="blueText">A Smart AI Assistant</h3>
                    <p className="blurb">
                      When you’re off the clock, you’re off. Our smart assistant
                      will handle all requests that get sent while you’re away,
                      and either complete them, or save them until you can
                      approve them. When you’re back at work, you’ll get a
                      summary of everything you missed and anything that still
                      requires your attention.
                    </p>
                  </div>
                  <div className="soloPhone">
                    <img src={vm2} className="phoneImg2" alt="Screenshot" />
                  </div>
                </div>
                <div className="flexDisplay">
                  <div className="soloPhone">
                    <img src={vm3} className="phoneImg2" alt="Screenshot" />
                  </div>
                  <div className="leftText">
                    <h3 className="blueText">Respect for All</h3>
                    <p className="blurb">
                      Especially in a remote workplace, time zones can be a big
                      complication. If your coworker isn’t available, your smart
                      assistant can take over and help you get what you need.
                      Say goodbye to the days of bothering your coworkers while
                      they’re trying to sleep, and accomplish your goals with
                      the help of our smart assistant.
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </article>
        <article className="overview">
          <h4 className="blueText">RESEARCH</h4>
          <hr className="blueLine" />
          <div>
            <section className="sectionBreak">
              <h5 className="blueText">RESCOPING THE PROBLEM-SPACE</h5>
              <p>
                The problem-space I started out with was quite broad, and had a
                lot of potential to tackle many different areas. I decided to
                scope it down, then use both secondary research and
                semi-structured interviews to learn more about my research
                question.
              </p>
              <br />
              <p>
                For the purposes of this assignment, I decided to rescope the
                problem so that I could produce something more tenable on the
                one-week timeframe. I be focused on startups, specifically those
                with primarily remote employees from all over the world. I’ve
                chosen this domain because remote jobs are becoming more and
                more widespread, and without a common workspace or even time
                zone, it becomes a lot harder to maintain organization and
                security with your employees. Startups in particular tend to
                have less established practices for ensuring employee
                satisfaction, making them a great place to discover and explore
                common plights.
              </p>
              <br />
              <p>
                With this reframed problem, I can now create a more specific
                research question to work with:{" "}
                <span className="bluelight">
                  Startups with primarily remote employees often struggle to
                  maintain a strong company culture and retain their talent. We
                  want to understand what specific problems their employees
                  have, and how we might fix them.
                </span>
              </p>
            </section>
            <section className="sectionBreak">
              <h5 className="blueText">SECONDARY RESEARCH</h5>
              <p>
                Because I was working with a limited timeframe and budget, I
                elected to start with secondary research and use my findings to
                inform my primary research. My main goal for secondary research
                was to find{" "}
                <span className="bluelight">
                  what common workplace challenges are, specifically focusing on
                  those faced by remote workers.
                </span>
              </p>
              <br />
              <p>
                After conducting secondary research, my main findings were that
                remote employees often struggle with finding a{" "}
                <span className="bluelight">proper work-life balance</span>,{" "}
                <span className="bluelight">
                  ensuring their tech will work reliably
                </span>
                , and
                <span className="bluelight">
                  communication issues with their managers and colleagues
                </span>
                . Additionally,{" "}
                <span className="bluelight">
                  most remote workers are left to solve any challenge they're
                  facing on their own
                </span>
                , due to the gap created by the mental and physical distance.
              </p>
              <br />
              <p>
                These results motivated me to{" "}
                <span className="bluelight">conduct interviews</span> to get a
                better understanding of what it's like to face these problems,
                and come up with a{" "}
                <span className="bluelight">universal solution</span> rather
                than just encourage individual employees to make personal
                changes.
              </p>
            </section>
            <section className="sectionBreak">
              <h5 className="blueText">PRIMARY RESEARCH</h5>
              <p>
                After learning more about the problem-space through secondary
                research, I conducted semi-structured interviews with remote
                startup employees. My main goals for these interviews were to
                clarify my research domain, and gain more personal, qualitative
                insights to enrich my secondary research.
              </p>
              <br />
              <p>I based my interviews of off four main questions:</p>
              <p>
                <span className="bluelight">How long</span> have you been with
                your current employer and{" "}
                <span className="bluelight">how satisfied</span> are you?
              </p>
              <p>
                Why did you leave your last job or{" "}
                <span className="bluelight">
                  why would you consider leaving a job?
                </span>
              </p>
              <p>
                What do you currently consider to be your{" "}
                <span className="bluelight">biggest challenge</span> in the
                workplace?
              </p>
              <p>
                <span className="bluelight">
                  Have you ever done anything yoourself
                </span>{" "}
                to improve your satisfcation in the workplace?
              </p>
              <br />
              <p>
                After conducting five interviews, I found some common patterns
                in the responses I was getting. My main takeaways were:
              </p>
              <br />
              <p>
                Employees often feel like because they work from home,{" "}
                <span className="bluelight">
                  their employers think of them as always being at work
                </span>
                –this leads to mismatched expectations.
              </p>
              <p>
                One participant had recently had a baby. She told me she only
                got 5 weeks of maternity leave, and then was expected to go back
                to work straight away. Even when she was on maternity leave, she
                was constantly bombarded with work emails, because even though
                she was technically away from work, she was “living in her
                office.” Another participant detailed how when he was new at his
                company, he didn’t realize how much they were asking of him. He
                was working constantly and didn’t realize anything was wrong
                because going on his laptop for an extra 10 minutes on his couch
                at home to finish up “work stuff” feels a lot different from
                driving all the way back to the office.
              </p>
              <br />
              <p>
                Without proper management/organization,{" "}
                <span className="bluelight">
                  it’s easy for tasks to get piled on without recognition
                </span>
                –this leads to unhealthy pressure on employees to excel and
                builds resentment toward management.
              </p>
              <p>
                Multiple participants made complaints about their employers
                giving them more and more work, without recognizing how much
                work they had already been putting in. A shared sentiment was
                that even though they knew they didn’t have to do that work,
                they still felt like they should.
              </p>
              <br />
              <p>
                Doing interviews gave me a lot of essential insight into the
                problem-space. With this information, I was much better equipped
                to create a design that could possibly solve one of these
                problems.
              </p>
            </section>
            <section className="sectionBreak">
              <h5 className="blueText">REDEFINING THE PROBLEM</h5>
              <p>
                Based on my research, the problem I chose to tackle is that many
                remote employees struggle to create a healthy work-life balance.
                Whether it be that they can’t find a proper boundary with their
                employer or simply that the physical space they’re in every day
                blurs the line, having a clear distinction between work and home
                is crucial for peak performance and employee satisfaction. More
                specifically, my proposed solution should utilize a new/emerging
                technology.
              </p>
            </section>
          </div>
        </article>
        <article className="overview">
          <h4 className="blueText">DESIGN</h4>
          <hr className="blueLine" />
          <div>
            <section className="sectionBreak">
              <h5 className="blueText">IDEATION</h5>
              <p>
                Before I created my first iteration, I needed to make sure I was
                clear on what my product would accomplish, and how it might do
                so. The main problem I was trying to tackle was that there was a{" "}
                <span className="bluelight">
                  lack of work-life balance for remote workers
                </span>
                . The reasons for this were twofold–the lack of physical
                separation of work and home led to the lack of a mental
                separation on the employees part, and the fact that employees
                are always digitally available (whether they are officially on
                the clock or not) led to a lack of boundaries by employers.
              </p>
              <br />
              <p>
                Oftentimes, employees are told to create a home office, or
                somehow separate their work from their home on their own. While
                this could be a great solution, it is not an option for
                everyone, and implies that it is solely up to the employee to
                solve the problem. Another layer to this is that if an employee
                is always at home, it never feels like they officially leave the
                workplace. When their employer contacts them after hours asking
                for something, it’s a lot harder to say no.
              </p>
              <br />
              <p>
                I saw that a pattern emerged here–
                <span className="bluelight">
                  there has to be a way to set boundaries between work and home
                  for both the employee and the employer
                </span>
                . These boundaries should be non-physical, so that they are
                easily attainable for everyone, and should serve to create a
                mental divide between work and home for both the employee and
                the employer.
              </p>
              <br />
              <p>To get my brain flowing, I sketched out my initial ideas.</p>
              <div className="flexDisplay m70top pad50bottom">
                <img src={sketches} className="fullWidthImg" alt="Sketches" />
              </div>
            </section>
            <section className="sectionBreak">
              <h5 className="blueText">SOLUTION</h5>
              <p>
                Based on my sketches, I created som edigital mockups of a
                possible product solution.
              </p>
              <div className="flexDisplay m70top pad50bottom">
                <img
                  src={vm1}
                  className="phoneImg4 pad20right"
                  alt="assistant"
                />
                <div className="sbsPhone sbsCompText">
                  <p>
                    The app allows for{" "}
                    <span className="bluelight">
                      healthy and comfortable boundaries
                    </span>{" "}
                    to be set. It can be awkward to be firm with your boss about
                    when you’re at work and when you’re not, especially when
                    you’re on your laptop anyway after hours. My solution
                    intends to make your work hours unquestionable–they’re not
                    up for debate, and they’re not an issue. They’re just your
                    hours.
                  </p>
                </div>
              </div>
              <div className="flexDisplay m70top pad50bottom sbsComp">
                <img
                  src={vm2}
                  className="phoneImg4 pad20right"
                  alt="assistant"
                />
                <img
                  src={vm3}
                  className="phoneImg4 pad20right"
                  alt="assistant"
                />
                <div className="sbsPhone sbsCompText">
                  <p>
                    The app helps users by taking care of any tasks while
                    they're away, and also providing the same courtesy to their
                    coworkers. It provides a{" "}
                    <span className="bluelight">
                      summary of the things you missed
                    </span>
                    , allows you to{" "}
                    <span className="bluelight">
                      catch up on important tasks
                    </span>{" "}
                    it couldn't handle without your permission, and also allows
                    you (the considerate coworker) to{" "}
                    <span className="bluelight">
                      ask anytime for what you need
                    </span>{" "}
                    without worrying that your ping will wake them up.
                  </p>
                </div>
              </div>
              <p>
                In my initial sketches I also included a chat feature, but in
                the design process I realized that wasn't the purpose of my
                app–I wanted to provide a way for employees to distance
                themselves from work, not engage further.
              </p>
            </section>
            <section className="sectionBreak">
              <h5 className="blueText">NEXT STEPS</h5>
              <p>
                The next steps I would take in this project would be to do
                usability testing on my design, and find out how well it works
                or if this is even the optimal solution. I’d use those results
                to inform further design iterations and continue testing.
              </p>
            </section>
            <section className="sectionBreak">
              <h5 className="blueText">REFLECTION</h5>
              <p>
                I really enjoyed this exercise. Here are some of my main
                takeaways:
              </p>
              <br />
              <p>
                <span className="bluelight">
                  There are lots of different ways to do research.
                </span>{" "}
                I’ve done a lot of different projects with different types of
                research, but I’ve usually been given a good idea of what
                methods I should use and what I should expect to walk away with.
                In this project, everything was very open-ended, so determining
                the best method was a new challenge–and one that I think has
                multiple correct answers.
              </p>
              <br />
              <p>
                <span className="bluelight">
                  I really enjoy working on a team.
                </span>{" "}
                Sometimes group projects can be frustrating, but doing this
                project alone made me realize how beneficial having a group is.
                Having other people with different perspectives to bounce ideas
                off of is really valuable, and can take your projects a lot
                further.
              </p>
              <br />
              <p>
                <span className="bluelight">
                  Guerrilla research isn’t the strongest tool, but it’s super
                  helpful when you’re under a lot of constraints.
                </span>{" "}
                Because of the one week timeline, I didn’t do extremely robust
                research. However, this did teach me how valuable guerrilla
                research can be–any information you can gather can be
                beneficial, even if it wasn’t done in the most methodical way.
              </p>
              <br />
              <p>
                <span className="bluelight">I love UX!</span> I was a bit
                stumped when I first read the prompt, but working through it and
                learning and creating was a really fun process that only further
                confirmed my love for UX research and design. I truly enjoy
                problem-solving, and being able to do that in a way that helps
                people is the best of both worlds.
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
