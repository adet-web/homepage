import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import css from './css/styles.scss';
import Header from './Header';
import Footer from './Footer'
import CodingImage from './img/coding-image-new.png'

export default class Homepage extends Component {
  render() {
    return (
      <div className="app">
        <div className="header">
          <Header/>
        </div>
        <img className="coding-image" src={CodingImage} alt="coding image" width='100%' height='250vw'/>
        <div className="main-page-container">
            <div className="row_1"> 
                <div className="welcome">
                    <h1> Welcome to A.D.E.T! </h1>
                    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Justo eget magna fermentum iaculis. Commodo elit at imperdiet dui accumsan sit amet. Senectus et netus et malesuada fames. Nibh praesent tristique magna sit amet. Eros donec ac odio tempor orci dapibus. Molestie ac feugiat sed lectus vestibulum mattis. Ultricies lacus sed turpis tincidunt id aliquet risus feugiat. Vulputate eu scelerisque felis imperdiet proin fermentum leo. Turpis egestas pretium aenean pharetra magna. </p>
                </div>
                <div className="image-container"> 
                    <h1> Place images here </h1>
                </div>
            </div>
            <div className="row_2">
                <div className="what-we-do"> 
                    <h1> What We Do </h1>
                    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Justo eget magna fermentum iaculis. Commodo elit at imperdiet dui accumsan sit amet. Senectus et netus et malesuada fames. Nibh praesent tristique magna sit amet. Eros donec ac odio tempor orci dapibus. Molestie ac feugiat sed lectus vestibulum mattis. Ultricies lacus sed turpis tincidunt id aliquet risus feugiat. Vulputate eu scelerisque felis imperdiet proin fermentum leo. Turpis egestas pretium aenean pharetra magna. </p>
                </div>
                <div className="why-us"> 
                    <h1> Why You Should Partner with Us </h1>
                    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Justo eget magna fermentum iaculis. Commodo elit at imperdiet dui accumsan sit amet. Senectus et netus et malesuada fames. Nibh praesent tristique magna sit amet. Eros donec ac odio tempor orci dapibus. Molestie ac feugiat sed lectus vestibulum mattis. Ultricies lacus sed turpis tincidunt id aliquet risus feugiat. Vulputate eu scelerisque felis imperdiet proin fermentum leo. Turpis egestas pretium aenean pharetra magna. </p>
                </div>
            </div>
        </div>
        <div className='footer'>
          <Footer/>
        </div>
      </div>
    );
  }
}
ReactDOM.render(
  <Homepage/>,
  document.getElementById('app')
);