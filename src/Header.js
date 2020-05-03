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
                            <input type="button" onClick= "hello()" value="form">Login</input>
                            <a href="contact.html"> Contact</a>
                        </li>
                    </ul>
                </nav>
            </div>
            <script> 
                function hello(){
                    console.log("hello")
                }
            </script>
        </header>
        );
    }
}