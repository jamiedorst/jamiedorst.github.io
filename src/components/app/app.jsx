import React from "react";
import "./app.scss";
import Landing from "./landing";
import CourseAdvisor from "./courseAdvisor";
import About from "./about";
import Resume from "./resume";
// import Error from "./error";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route path="/about" component={About} />
          <Route path="/CMUCourseAdvisor" component={CourseAdvisor} />
          <Route path="/resume" component={Resume} />
          {/* <Route component={Error} /> */}
        </Switch>
      </Router>
    </>
  );
}
