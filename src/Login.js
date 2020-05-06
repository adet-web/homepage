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
        console.log(data)
        this.context.updateLoginState({
          loggedIn: true,
          userType: data.userType
        })
        console.log(this.context)
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
      <form className="login_form" onSubmit={this.handleSubmit}>
        <div className="login-container">
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
    );
  }
}


LoginForm.contextType = AppContext;