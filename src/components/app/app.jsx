import React from "react";
import "./app.scss";
import Landing from "./landing";
import CourseAdvisor from "./courseAdvisor";
import About from "./about";
// import Error from "./error";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/about" component={About} />
          <Route exact path="/CMUCourseAdvisor" component={CourseAdvisor} />
          {/* <Route component={Error} /> */}
        </Switch>
      </Router>
    </>
  );
}
