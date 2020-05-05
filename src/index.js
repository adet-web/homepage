import React, { Component } from "react";
import ReactDOM from "react-dom";
import css from "./css/styles.scss";
import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";
import LoginForm from "./Login";
import RegisterForm from "./Register";

import CodingImage from "./img/coding-image-new.png";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <img
          className="coding-image"
          src={CodingImage}
          alt="coding image"
          width="100%"
          height="250vw"
        />
        <Switch>
          <Route exact path="/login">
            <LoginForm />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/register">
            <RegisterForm />
          </Route>
          {/* <Route path="/about">
            <About />
            </Route>
            <Route path="/insights">
            <Insights />
            </Route>
            <Route path="/relations">
            <Relations />
            </Route>
            

            <Route path="/contact">
            <Contact />
          </Route> */}
        </Switch>

          <Footer />
      </div>
    );
  }
}
ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("app")
);
