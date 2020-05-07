import React, {Component} from 'react';

export default class ClientPortal extends Component {
    render() {
      return (
            <div className="wrapper">
                    <div className="personal-info"> 
                        <h1> Personal Information</h1>
                        <div> Email Address: </div>
                        <div> First Name: </div>
                        <div> Last Name: </div>
                        <div> Address: </div>
                    </div>
                    <div className="portfolio">
                        <h1> Portfolio</h1>
                        <div> Portfolio Value: </div>
                        <div> Securities Owned: </div>
                        <form> 
                        <label for="ticker">Buy:</label><br/>
                            <input type="text" id="ticker" name="ticker" placeholder="Enter Ticker Symbol"/><br/>
                            <label for="quantity">Quantity:</label><br/>
                            <input type="text" id="quantity" name="quantity" placeholder="Enter Whole Numbers"/><br/><br/>
                            <input type="submit" value="Submit Buy Order"/>
                        </form>
                        <form> 
                            <label for="ticker">Sell:</label><br/>
                            <input type="text" id="ticker" name="ticker" placeholder="Enter Ticker Symbol"/><br/>
                            <label for="quantity">Quantity:</label><br/>
                            <input type="text" id="quantity" name="quantity" placeholder="Enter Whole Numbers"/><br/><br/>
                            <input type="submit" value="Submit Sell Order"/>
                        </form>                   
                    </div>
                    <div class="hedgefund-manager">
                        <h1> Your Hedgefund Manager</h1>
                        <div> First Name: </div>
                        <div> Last Name: </div>
                        <div> Email Address: </div>
                        <div> Phone Number: </div>
                    </div>
                    <div class="gain-insights">
                        <h1> Gain Insights</h1>
                        <p> Click on the stock you are interested in and we'll give you a pdf with our analysis. </p>
                            <br/>
                            <button> JPMorgan Chase Co.</button> 
                            <div> </div>
                            <button> Tesla Inc.</button>  
                            <div> </div>
                            <button> Visa Inc.</button> <br/> <br/>
                            <div> </div>
                            <button> Sprint Corporation</button> <br/>
                    </div>
                </div>       
        );
    }
}