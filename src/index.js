import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import css from './css/styles.scss';


export default class Homepage extends Component {
  render() {
    return (
      <div class = 'homepage'>
        <link href='http://fonts.googleapis.com/css?family=Lato:300,400,700,900' rel='stylesheet' type='text/css'></link>
        <header>
          <div class = 'Logo'>
            <p> Insert Logo Here</p>
          </div>

          <nav>
            <p>About</p>
            <p>LOGIN</p>
            <p>PRODUCT</p>
            <p>Contact</p>
          </nav>

          <div class = 'background'>
            <p>Insert Background here</p>
          </div>
        </header>

        <section class = 'intro'>
          <div class = 'content'>
            <div class = 'eyebrow'>Welcome to A.D.E.T !</div>
            <h1> Why choose A.D.E.T?</h1>
            <h2> No idea what to put here</h2>

            <div class = 'notice'>
              <div class = 'line1'>20% Off</div>
              <div class = 'line2'>Limited time offer</div>
              <div class = 'line3'>
                <p>Learn more</p>
              </div>
            </div>
          </div>

        </section>

        <section class = 'contentRow} ${css.why'>
          <div class = 'colL'>
            <div class = 'glitter'>
            </div>

            <div class = 'content'>
              <div class = 'hed'>
              </div>

              <div class = 'dek'>
                
              </div>

              <div class = 'button'>
                Learn more
              </div>
            </div>
          </div>

          <div class = 'colR'>
          </div>
        </section>

        <section class = 'quote'>
        </section>

        <section class = 'contentRow} ${css.start'>  
          <div class = 'colL'>
          </div>

          <div class = 'colR'>
            <div class = 'glitter'>
            </div>

            <div class = 'content'>
              <div class = 'hed'>
              </div>

              <div class = 'dek'>
                
              
              </div>

              <div class = 'button'>
                Learn more
              
              </div>
            </div>
          </div>
        </section>

        <section class = 'columnsRow'>
          <div class = 'header'>Certificate Courses Include</div>
          
          <div class = 'columns'>
            <div class = 'column'>
              <div class = 'image'></div>
              <div class = 'mobile'>
                <div class = 'hed'></div>
                <div class = 'dek'>      
                </div>
              </div>  
            </div>

            <div class = 'column'>
              <div class = 'image'></div>
              <div class = 'mobile'>  
                <div class = 'hed'></div>
                <div class = 'dek'>
                 
                </div>
              </div>  
            </div>

            <div class = 'column'>
              <div class = 'image'></div>
              <div class = 'mobile'>  
                <div class = 'hed'>Finance 101 for entrepreneurs</div>
                <div class = 'dek'>
                  
                </div>
              </div>  
            </div>

            <div class = 'column'>
              <div class = 'image'></div>
               <div class = 'mobile'> 
                <div class = 'hed'></div>
                <div class = 'dek'>
                  
                </div>
               </div>
            </div>
          </div>
        </section>

        <footer>
          <div class = 'hed'></div>
          <div class = 'arrow'></div>
          <div class = 'button'>
            LEARN MORE
          </div>
        </footer>
      </div>
    );
  }
}
ReactDOM.render(
  <Homepage/>,
  document.getElementById('app')
);