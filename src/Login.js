import React, { Component } from "react";

export default class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    // this.handleInputChange = this.handleInputChange.bind(this);
  }
  handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const data = new FormData(form);
    console.log("Logging in...");
    fetch("/api/login", {
      method: "POST",
      body: data,
    }).then((res) => 
       res.json()
    ).then(data => {
      console.log(data)
      if (data.loginSuccess) {
        // logged in
        alert("Login successful")
      }
      else {
        // failure
        alert("Login failed")
      }
    })
  .catch(err => {
      console.error(err)
    })
  }
  render() {
    return (
      <form className="login_form" onSubmit={this.handleSubmit}>
        <div className="login-container">
          <label>
            <b>Email</b>
            <input
              type="email"
              placeholder="Enter Email"
              name="email"
              required
              maxlength="255"
            ></input>
          </label>
          <label>
            <b>Password</b>
            <input
              type="password"
              placeholder="Enter Password"
              name="password"
              maxlength="255"
              required
            ></input>
          </label>
          <button type="submit">Login</button>
        </div>
      </form>
    );
  }
}
