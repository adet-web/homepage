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
    if (this.props.state.userType === 1) {
      view = <ClientPortalPage values={this.props.state} />;
    } else if (this.props.state.userType === 2) {
      view = <AdminPortalPage values={this.props.state}/>;
    }
    return (
      <div className="main-page-container">
        <div className="wrapper">
          <div className="personal-info">
            <table>
          <tr>
            <td>Name</td>
        <td>{this.props.state.name}</td>
          </tr>
            </table>
            <h1>Personal Information</h1>
    <div>Name: </div>
            <div>Email: {this.props.state.email}</div>
            <div>Address: {this.props.state.address}</div>
          </div>
          {view}
        </div>
      </div>
    );
  }
}

PortalPage.contextType = AppContext;
