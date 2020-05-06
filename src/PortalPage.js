import React, { Component } from "react";
import AdminPortalPage from "./AdminPortalPage";

export default class PortalPage extends Component {
  render() {
    return (
      <div className="main-page-container">
        <div className="wrapper">
          <div className="personal-info">
            <h1>Personal Information</h1>
            <div>Email Address:</div>
            <div>First Name:</div>
            <div>Last Name:</div>
            <div>Address:</div>
          </div>
        <AdminPortalPage />
        </div>
      </div>
    );
  }
}
