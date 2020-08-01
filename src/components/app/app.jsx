import React from "react";
import "./app.scss";
import Landing from "./landing";
import Work from "./work";
import CourseAdvisor from "./courseAdvisor";
import GlobalPrint from "./globalPrint";
import Resmed from "./resmed";
import Macroinvertebrates from "./macroinvertebrates";
import Design from "./design";
import Personality from "./personality";
import About from "./about";
import Blog from "./blog";
import Robot from "./robot";
import Photography from "./photography";
import Assistant from "./assistant";
import Resume from "./resume";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import SimpleReactLightbox from "simple-react-lightbox";

export default function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route path="/work" component={Work} />
          <Route path="/blog" component={Blog} />
          <Route path="/about" component={About} />
          <Route path="/resume" component={Resume} />
          <Route path="/globalprint" component={GlobalPrint} />
          <Route path="/cmucourseadvisor" component={CourseAdvisor} />
          <Route path="/resmed" component={Resmed} />
          <Route path="/macroinvertebrates" component={Macroinvertebrates} />
          <Route path="/designillustration" component={Design} />
          <Route path="/personalitypictures" component={Personality} />
          <Route path="/robotmotion" component={Robot} />
          <Route path="/virtualassistant" component={Assistant} />
          <SimpleReactLightbox>
            <Route path="/photography" component={Photography} />
          </SimpleReactLightbox>
        </Switch>
      </Router>
    </>
  );
}
