import React, { Fragment } from "react";

const ClientPortalPage = (props) => {
  console.log(props.values)
    return (
    <Fragment>
        <div className="portfolio">
          <h1>Portfolio</h1>
          <div>Portfolio Value:</div>
          <div>Securities Owned:</div>
          <form>
            <label htmlFor="ticker">Buy:</label><br />
            <input
              type="text"
              id="ticker"
              name="ticker"
              placeholder="Enter Ticker Symbol"
            /><br />
            <label htmlFor="quantity">Quantity:</label><br />
            <input
              type="text"
              id="quantity"
              name="quantity"
              placeholder="Enter Whole Numbers"
            /><br /><br />
            <input type="submit" value="Submit" />
          </form>
          <form>
            <label htmlFor="ticker">Sell:</label><br />
            <input
              type="text"
              id="ticker"
              name="ticker"
              placeholder="Enter Ticker Symbol"
            /><br />
            <label htmlFor="quantity">Quantity:</label><br />
            <input
              type="text"
              id="quantity"
              name="quantity"
              placeholder="Enter Whole Numbers"
            /><br /><br />
            <input type="submit" value="Submit" />
          </form>
        </div>
        <div className="hedgefund-manager">
          <h1>Your Hedgefund Manager</h1>
    <div>Name: {props.values.managerName}</div>
          <div>Email: {props.values.managerEmail}</div>
        </div>
        <div className="gain-insights">
          <h1>Gain Insights</h1>
          <p>
            Click on the stock you are interested in and we'll give you a pdf
            with our analysis.
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
    )
}

export default ClientPortalPage
