import React, { Component } from "react";
import logo from "./img/adet_logo.png";
import Login_Form from "./login_register";

import { Link } from "react-router-dom";

export default class Header extends Component {
  render() {
    return (
      <header>
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
                  <Link to="/login" className="login">
                    Login
                  </Link>
                  <Link to="/register">Register</Link>
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </nav>
        </div>
      </header>
    );
  }
}
