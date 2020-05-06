import React, { Component, Fragment } from "react";
import logo from "./img/adet_logo.png";
import { Link, useHistory } from "react-router-dom";
import SignOutBtn from "./SignOutBtn";
import AppContext from "./appContext";

export default class Header extends Component {
  render() {
    return (
      <header className="header">
        <div className="nav-unit">
          <img
            className="logo"
            src={logo}
            alt="logo"
            width="100px"
            height="100px"
          />
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/insights">Insights</Link>
                <Link to="/relations">Investor Relations</Link>
                {this.context.loggedIn ? (
                  <Fragment>
                    <Link to="/account">Account</Link>
                    <SignOutBtn></SignOutBtn>
                  </Fragment>
                ) : (
                  <Fragment>
                    <Link to="/login" className="login">
                      Login
                    </Link>
                    <Link to="/register">Register</Link>
                  </Fragment>
                )}
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    );
  }
}


Header.contextType = AppContext;
