import React, { Component } from "react";
import AppContext from "./appContext";


export default class LoginForm extends Component {
  constructor(props) {
    super(props);
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
      if (data.loginSuccess) {
        data.loggedIn = true        
        this.context.updateLoginState(data)
        this.props.history.push("/portal")
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
    <div className="main-page-container">
      <article className="altern-bg">
      <section>

      <form className="form" onSubmit={this.handleSubmit}>
        <div className="login-container">
          <h1> Login Form</h1>
          <label>
            <b>Email</b>
            <input
              type="email"
              placeholder="Enter Email"
              name="email"
              required
              maxLength="255"
              ></input>
          </label>
          <label>
            <b>Password</b>
            <input
              type="password"
              placeholder="Enter Password"
              name="password"
              maxLength="255"
              required
              ></input>
          </label>
          <button type="submit">Login</button>
        </div>
      </form>
              </section>
      </article>
      </div>
    );
  }
}


LoginForm.contextType = AppContext;