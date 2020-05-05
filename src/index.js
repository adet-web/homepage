import React, { Component } from "react";
import ReactDOM from "react-dom";
import css from "./css/styles.scss";
import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";
import CodingImage from "./img/coding-image-new.png";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="header">
          <Header />
        </div>
        <img
          className="coding-image"
          src={CodingImage}
          alt="coding image"
          width="100%"
          height="250vw"
        />
        <Router>
          <Switch>
            <Route path="/">
              <Home />
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
            <Route path="/login" className="login">
            <Login />
            </Route>
            <Route path="/register">
            <Register />
            </Route>
            <Route path="/contact">
            <Contact />
          </Route> */}
          </Switch>
        </Router>

        <div className="footer">
          <Footer />
        </div>
      </div>
    );
  }
}
ReactDOM.render(<App />, document.getElementById("app"));
