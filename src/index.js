import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app";
import "./index.css";
import * as serviceWorker from "./service-worker";
import { BrowserRouter as Router } from "react-router-dom";
import ScrollToTop from "react-router-scroll-top";

ReactDOM.render(
  <Router>
    <ScrollToTop>
      <App />
    </ScrollToTop>
  </Router>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
