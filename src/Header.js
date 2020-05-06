import React, { Component, Fragment } from "react";
import logo from "./img/adet_logo.png";
import NavBar from "./NavBar"
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
          <NavBar />
        </div>
      </header>
    );
  }
}