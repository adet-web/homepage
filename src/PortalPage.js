import React, { Component } from "react";
import AdminPortalPage from "./AdminPortalPage";
import ClientPortalPage from "./ClientPortalPage";
import AppContext from "./appContext";

export default class PortalPage extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    var view
    if (this.props.userType === 1) {
      view = <ClientPortalPage />;
    } else if (this.props.userType === 2) {
      view = <AdminPortalPage />;
    }

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
          {view}
        </div>
      </div>
    );
  }
}

PortalPage.contextType = AppContext;
