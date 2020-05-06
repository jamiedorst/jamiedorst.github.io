import React from "react";
import "./app.scss";
import Landing from "./landing";
import CourseAdvisor from "./courseAdvisor";
import Resmed from "./resmed";
import Macroinvertebrates from "./macroinvertebrates";
import Design from "./design";
import Personality from "./personality";
import About from "./about";
import Robot from "./robot";
import Resume from "./resume";
import { HashRouter as Router, Switch, Route } from "react-router-dom";

export default function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route path="/about" component={About} />
          <Route path="/cmucourseadvisor" component={CourseAdvisor} />
          <Route path="/resmed" component={Resmed} />
          <Route path="/macroinvertebrates" component={Macroinvertebrates} />
          <Route path="/designillustration" component={Design} />
          <Route path="/personalitypictures" component={Personality} />
          <Route path="/robotmotion" component={Robot} />
          <Route path="/resume" component={Resume} />
        </Switch>
      </Router>
    </>
  );
}
