import React, { Component } from "react";

export default class RegisterForm extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const data = new FormData(form);
    console.log("registering...");
    fetch("/api/register", {
      method: "POST",
      body: data,
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.registerSuccess) {
          // logged in
          alert("Register successful");
        } else {
          // failure
          alert("Register failed");
        }
      })
      .catch((err) => {
        console.error(err);
      });
  }
  render() {
    return (
      <div className="main-page-container">
        <article className="altern-bg">
          <section>
            <form className="login_form" onSubmit={this.handleSubmit}>
              <div className="login-container">
                <label>
                  <b>Email</b>
                  <input
                    type="email"
                    placeholder="Enter Email"
                    name="email"
                    maxLength="255"
                    required
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
                <label>
                  <b>Name</b>
                  <input
                    type="name"
                    placeholder="Name"
                    maxLength="255"
                    name="name"
                    required
                  ></input>
                </label>
                <label>
                  <b>Address</b>
                  <input
                    type="address"
                    placeholder="Address"
                    maxLength="255"
                    name="address"
                    required
                  ></input>
                </label>
                <button type="submit">Register</button>
              </div>
            </form>
          </section>
        </article>
      </div>
    );
  }
}
