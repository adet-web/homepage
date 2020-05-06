import React, { Component } from "react";
import ReactDOM from "react-dom";
import css from "./css/styles.scss";
import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";
import LoginForm from "./Login";
import RegisterForm from "./Register";
import PortalPage from "./PortalPage";
import CodingImage from "./img/coding-image-new.png";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import AppContext from "./appContext";
export default class App extends Component {
  constructor(props) {
    super(props);
    this.updateLoginState = (newState) => {
      this.setState(() => newState);
    };

    this.state = {
      loggedIn: false,
      userType: null,
      updateLoginState: this.updateLoginState,
    };
  }
  render() {
    return (
      <AppContext.Provider value={this.state}>
        <Header />
        <img
          className="coding-image"
          src={CodingImage}
          alt="coding image"
          width="100%"
          height="250vw"
        />
        <Switch>
        <Route exact path="/portal" render={() => <PortalPage userType={this.state.userType}/>}/>
          {!(this.state.loggedIn) &&  
          <Route exact path="/login" component={LoginForm}/>
  }
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/register">
            <RegisterForm />
          </Route>

          {/* <Route path="/about">
            <About />
            </Route>
            <Route path="/contact">
            <Contact />
          </Route> */}
        </Switch>

        <Footer />
      </AppContext.Provider>
    );
  }
}

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("app")
);
