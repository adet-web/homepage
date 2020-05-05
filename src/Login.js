import React, { Component } from "react";
import css from "./css/styles.scss";

export default class Login extends Component {
  render() {
    return (
        <form className="login_form">
          <div className="login-container">
            <label for="uname">
              <b>Username</b>
            </label>
            <input
              type="text"
              placeholder="Enter Username"
              name="uname"
              required
            ></input>
            <label for="psw">
              <b>Password</b>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              name="psw"
              required
            ></input>
            <button type="submit">Login</button>
          </div>
        </form>
    );
  }
}
