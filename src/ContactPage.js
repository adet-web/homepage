import React, { Fragment } from "react";

const ContactPage = () => {
  return (
    <div className="main-page-container">
      <p className="textcolor">
        If you have any questions or issues with the website, feel free to
        contact any the admins through email
      </p>
      <table className="contact-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Bryan Cuellar</td>
            <td>kbc302@nyu.edu</td>
          </tr>
          <tr>
            <td>Matthew Cen</td>
            <td>mc6844@nyu.edu </td>
          </tr>
          <tr>
            <td>CJ Syki</td>
            <td> cgs737@nyu.edu</td>
          </tr>
          <tr>
            <td>Chris Gao</td>
            <td>cg3113@nyu.edu</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ContactPage;
