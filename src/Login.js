import React, { Component } from "react";

export default class LoginForm extends Component {
  render() {
    return (
        <form className="login_form">
          <div className="login-container">
            <label for="email">
              <b>Email</b>
            </label>
            <input
              type="text"
              placeholder="Enter Email"
              name="email"
              required
            ></input>
            <label for="password">
              <b>Password</b>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              name="password"
              required
            ></input>
            <button type="submit">Login</button>
          </div>
        </form>
    );
  }
}
