import React, {Component} from 'react';

export default class Footer extends Component {
    render() {
      return (
        <footer className="footer">
            <div className="footer-unit">
                <p> © 2020 Analyze Data Execute Trades, LLC. All Rights reserved.</p>
                <p> 
                    This website is not an offer to, or solicitation of, any potential clients or investors 
                    for the provision by ADET of investment management, advisory or any other related services. 
                    No material listed on this website is or should be construed as investment advice, nor is anything on 
                    this website an offer to sell, or a solicitation of an offer to buy, any security or other instrument. 
                    Links from this website to third-party websites do not imply any endorsement by the third party of this 
                    website or of the link; nor do they imply any endorsement by this firm of the third-party website or of the link.
                </p>
            </div>
        </footer>
        );
    }
}