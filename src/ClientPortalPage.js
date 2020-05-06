import { Fragment } from "react";

const ClientPortalPage = () => {
  return (
    <Fragment>
      <div class="portfolio">
        <h1>Portfolio</h1>
        <div>Portfolio Value:</div>
        <div>Securities Owned:</div>
        <form>
          <label for="ticker">Buy:</label>
          <br />
          <input
            type="text"
            id="ticker"
            name="ticker"
            placeholder="Enter Ticker Symbol"
          />
          <br />
          <label for="quantity">Quantity:</label>
          <br />
          <input
            type="text"
            id="quantity"
            name="quantity"
            placeholder="Enter Whole Numbers"
          />
          <br />
          <br />
          <input type="submit" value="Submit" />
        </form>
        <form>
          <label for="ticker">Sell:</label>
          <br />
          <input
            type="text"
            id="ticker"
            name="ticker"
            placeholder="Enter Ticker Symbol"
          />
          <br />
          <label for="quantity">Quantity:</label>
          <br />
          <input
            type="text"
            id="quantity"
            name="quantity"
            placeholder="Enter Whole Numbers"
          />
          <br />
          <br />
          <input type="submit" value="Submit" />
        </form>
      </div>
      <div class="hedgefund-manager">
        <h1>Your Hedgefund Manager</h1>
        <div>First Name:</div>
        <div>Last Name:</div>
        <div>Email Address:</div>
        <div>Phone Number:</div>
      </div>
      <div class="gain-insights">
        <h1>Gain Insights</h1>
        <p>
          Click on the stock you are interested in and we'll give you a pdf with
          our analysis.
        </p>

        <button>JPMorgan Chase & Co.</button>
        <div></div>
        <button>Tesla Inc.</button>
        <div></div>
        <button>Visa Inc.</button>
        <div></div>
        <button>Sprint Corporation</button>
      </div>
    </Fragment>
  );
};

export default ClientPortalPage;
