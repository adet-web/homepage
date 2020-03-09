import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import css from './css/styles.scss';


export default class Homepage extends Component {
  render() {
    return (
      <div className={`${css.homepage}`}>
        <link href='http://fonts.googleapis.com/css?family=Lato:300,400,700,900' rel='stylesheet' type='text/css'></link>
        <header>
          <div className={`${css.Logo}`}>
            <p> Insert Logo Here</p>
          </div>

          <nav>
            <p>About</p>
            <p>LOGIN</p>
            <p>PRODUCT</p>
            <p>Contact</p>
          </nav>

          <div className={`${css.background}`}>
            <p>Insert Background here</p>
          </div>
        </header>

        <section className={`${css.intro}`}>
          <div className={`${css.content}`}>
            <div className={`${css.eyebrow}`}>Welcome to A.D.E.T !</div>
            <h1> Why choose A.D.E.T?</h1>
            <h2> No idea what to put here</h2>

            <div className={`${css.notice}`}>
              <div className={`${css.line1}`}>20% Off</div>
              <div className={`${css.line2}`}>Limited time offer</div>
              <div className={`${css.line3}`}>
                <p>Learn more</p>
              </div>
            </div>
          </div>

        </section>

        <section className={`${css.contentRow} ${css.why}`}>
          <div className={`${css.colL}`}>
            <div className={`${css.glitter}`}>
            </div>

            <div className={`${css.content}`}>
              <div className={`${css.hed}`}>
              </div>

              <div className={`${css.dek}`}>
                
              </div>

              <div className={`${css.button}`}>
                Learn more
              </div>
            </div>
          </div>

          <div className={`${css.colR}`}>
          </div>
        </section>

        <section className={`${css.quote}`}>
        </section>

        <section className={`${css.contentRow} ${css.start}`}>  
          <div className={`${css.colL}`}>
          </div>

          <div className={`${css.colR}`}>
            <div className={`${css.glitter}`}>
            </div>

            <div className={`${css.content}`}>
              <div className={`${css.hed}`}>
              </div>

              <div className={`${css.dek}`}>
                
              
              </div>

              <div className={`${css.button}`}>
                Learn more
              
              </div>
            </div>
          </div>
        </section>

        <section className={`${css.columnsRow}`}>
          <div className={`${css.header}`}>Certificate Courses Include</div>
          
          <div className={`${css.columns}`}>
            <div className={`${css.column}`}>
              <div className={`${css.image}`}></div>
              <div className={`${css.mobile}`}>
                <div className={`${css.hed}`}></div>
                <div className={`${css.dek}`}>      
                </div>
              </div>  
            </div>

            <div className={`${css.column}`}>
              <div className={`${css.image}`}></div>
              <div className={`${css.mobile}`}>  
                <div className={`${css.hed}`}></div>
                <div className={`${css.dek}`}>
                 
                </div>
              </div>  
            </div>

            <div className={`${css.column}`}>
              <div className={`${css.image}`}></div>
              <div className={`${css.mobile}`}>  
                <div className={`${css.hed}`}>Finance 101 for entrepreneurs</div>
                <div className={`${css.dek}`}>
                  
                </div>
              </div>  
            </div>

            <div className={`${css.column}`}>
              <div className={`${css.image}`}></div>
               <div className={`${css.mobile}`}> 
                <div className={`${css.hed}`}></div>
                <div className={`${css.dek}`}>
                  
                </div>
               </div>
            </div>
          </div>
        </section>

        <footer>
          <div className={`${css.hed}`}></div>
          <div className={`${css.arrow}`}></div>
          <div className={`${css.button}`}>
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