import React, { Component, Fragment } from "react";
import AppContext from "./appContext";
import SignOutBtn from "./SignOutBtn";
import { Link } from "react-router-dom";


const NavBar = () => {
  const context = React.useContext(AppContext);
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          {context.loggedIn ? (
            <Fragment>
              <Link to="/portal">Portal</Link>
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
  );
};

export default NavBar