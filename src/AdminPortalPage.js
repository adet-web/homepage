import React, { Fragment } from "react";

const AdminPortalPage = () => {
  return (
    <Fragment>
      <div className="clients">
        <h1>Client List</h1>
        <ul className="client-list">
          <li>
            <div>
              <p>Client: &nbsp; &nbsp; &nbsp; John Doe</p>
              <p>Email Address: &nbsp; &nbsp; &nbsp; john_doe@email.com</p>
              <p>Portfolio Value: &nbsp; &nbsp; &nbsp; $20,000</p>
            </div>
            <div>
              <p>Client: &nbsp; &nbsp; &nbsp; Jane Doe</p>
              <p>Email Address: &nbsp; &nbsp; &nbsp; jane_doe@email.com</p>
              <p>Portfolio Value: &nbsp; &nbsp; &nbsp; $20,000</p>
            </div>
          </li>
        </ul>
        <div className="add-client">
          <h1>Add New Client</h1>
          <p>
            Enter in the clients email address you wish to add then submit your
            request. Your request will be reviewed in shortly.
          </p>
          <form className="add-client-form">
            <input
              type="text"
              id="ticker"
              name="ticker"
              placeholder="Enter Client Email"
            />
            <br />
            <input type="submit" value="Submit" />
          </form>
        </div>
      </div>

      <div className="analyze-stocks">
        <h1>Analyze Stocks</h1>
        <div className="stocks">
          <div>
            <p>JPMorgan Chase & Co.</p>
            <a href=""> Expected Closing Price Graph </a>
            <br />
            <a href=""> Notable Future Events </a>
            <br />
            <a href="/api/pdf/adet_jp_morgan.pdf"> Full PDF </a>
            <br />
          </div>
          <div>
            <p>Tesla Inc.</p>
            <a href=""> Expected Closing Price Graph </a>
            <br />
            <a href=""> Notable Future Events </a>
            <br />
            <a href="/api/pdf/adet_tesla.pdf"> Full PDF </a>
            <br />
          </div>
          <div>
            <p>Visa Inc.</p>
            <a href=""> Expected Closing Price Graph </a>
            <br />
            <a href=""> Notable Future Events </a>
            <br />
            <a href="/api/pdf/adet_visa.pdf"> Full PDF </a>
            <br />
          </div>
          <div>
            <p>Sprint Corporation</p>
            <a href=""> Expected Closing Price Graph </a>
            <br />
            <a href=""> Notable Future Events </a>
            <br />
            <a href="/api/pdf/adet_sprint.pdf"> Full PDF </a>
            <br />
          </div>
        </div>
      </div>
      <div className="contact-us">
        <h1>Having Issues?</h1>
        <h2>Here is how to contact us</h2>
        <p>Name: Bryan Cuellar</p>
        <p>Email Address: Bryan Cuellar</p>
        <p>Phone Number: (916) 698-1280</p>
        <h2>Or you can use the form below</h2>
        <form className="contact-us-form">
          <label>
            {" "}
            What's your email address?
            <span> </span>
            <input
              type="text"
              id="email"
              name="email"
              placeholder="Enter Your Email"
            />
          </label>
          <span> </span>
          <label>
            {" "}
            What's the problem?
            <span> </span>
            <textarea type="text" id="problem"></textarea>
          </label>
          <span> </span>
          <input type="submit" value="Submit" />
        </form>
      </div>
    </Fragment>
  );
};

export default AdminPortalPage;
