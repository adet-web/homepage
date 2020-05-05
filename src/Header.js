import React, {Component} from 'react';
import logo from './img/adet_logo.png';
import Login_Form from './login_register';

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
                            <button className="login"> Login </button>
                            <form className="login_form" >
                                <div className="login-container"> 
                                    <label for="uname"><b>Username</b></label>
                                    <input type="text" placeholder="Enter Username" name="uname" required></input>
                                    <label for="psw"><b>Password</b></label>
                                    <input type="password" placeholder="Enter Password" name="psw" required></input>
                                    <button type="submit">Login</button> 
                                </div>
                            </form>
                            <a href="contact.html"> Contact</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
        );
    }
}