import React, {Component} from 'react';
import logo from './img/adet_logo.png';

export default class Header extends Component {
    render() {
      return (
        <header> 
            <div className="nav-unit">
                <img className="logo" src={logo} alt='logo' width='100px' height='100px'/> 
                <nav>
                    <ul> 
                        <li> 
                            <a href="about.html"> About</a>
                            <a href="#"> Insights</a>
                            <a href="#"> Investor Relations</a>
                            <input type="button" onclick= "" value="form">Login</input>
                            <a href="contact.html"> Contact</a>
                        </li>
                    </ul>
                </nav>
            </div>
            <script src="/login_register.js"></script>
        </header>
        );
    }
}