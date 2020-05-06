import { Fragment } from "react";

const AdminPortalPage = () => {
  return (
    <Fragment>
      <div class="clients">
        <h1>Client List</h1>
        <ul class="client-list">
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
        <div class="add-client">
          <h1>Add New Client</h1>
          <p>
            Enter in the clients email address you wish to add then submit your
            request. Your request will be reviewed in shortly.
          </p>
          <form class="add-client-form">
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

      <div class="analyze-stocks">
        <h1>Analyze Stocks</h1>
        <div class="stocks">
          <div>
            <p>JPMorgan Chase & Co.</p>
            <a> Expected Closing Price Graph </a>
            <br />
            <a> Notable Future Events </a>
            <br />
            <a> Full PDF </a>
            <br />
          </div>
          <div>
            <p>Tesla Inc.</p>
            <a> Expected Closing Price Graph </a>
            <br />
            <a> Notable Future Events </a>
            <br />
            <a> Full PDF </a>
            <br />
          </div>
          <div>
            <p>Visa Inc.</p>
            <a> Expected Closing Price Graph </a>
            <br />
            <a> Notable Future Events </a>
            <br />
            <a> Full PDF </a>
            <br />
          </div>
          <div>
            <p>Sprint Corporation</p>
            <a> Expected Closing Price Graph </a>
            <br />
            <a> Notable Future Events </a>
            <br />
            <a> Full PDF </a>
            <br />
          </div>
        </div>
      </div>
      <div class="contact-us">
        <h1>Having Issues?</h1>
        <h2>Here is how to contact us</h2>
        <p>Name: Bryan Cuellar</p>
        <p>Email Address: Bryan Cuellar</p>
        <p>Phone Number: (916) 698-1280</p>
        <h2>Or you can use the form below</h2>
        <form class="contact-us-form">
          <label for="email"> What's your email address? </label>
          <br />
          <input
            type="text"
            id="email"
            name="email"
            placeholder="Enter Your Email"
          />
          <br />
          <br />
          <label for="problem"> What's the problem? </label> <br />
          <textarea type="text" id="problem"></textarea>
          <br />
          <br />
          <input type="submit" value="Submit" />
        </form>
      </div>
    </Fragment>
  );
};

export default AdminPortalPage;
