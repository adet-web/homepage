import React, { Component } from "react";
import img_NY from "./img/ny.jpg";
import img_stocks from "./img/stocks.jpg";
import img_handshake from "./img/handshake.jpg";

export default class Home extends Component {
  render() {
    return (
      <div className="main-page-container">
        <article className="altern-bg">
          <section className="section-flex-c">
            <div>
          <h1> Welcome to A.D.E.T! </h1>
              <p>
                {" "}
                Here you will find one of the greatest financial investment
                applications that you have ever come across in your life. This
                is one of our greatest project ever put into creation. It will
                open the world of financial investment to anyone that comes
                accross this site, were they to use the vast power that our
                algorithmic techniques may provide. With the ease of use of our
                website, and the predictive power of our algorithms, we have
                entrusted the user, you!, to begin investment will little
                worries of major loss of revenue. By securing your financial
                future, you will live a better and much happier life! Begin
                investing by signing up now!{" "}
              </p>
            </div>
            <img src={img_NY}></img>
          </section>
          <section className="section-flex-c">
            <img src={img_stocks}></img>
            <div>
              <h1> What We Do </h1>
              <p>
                {" "}
                Our team is made up of computer science geniuses who have teamed
                up to create community based projects that help bring people
                together for the purpose of creating a more connected world in a
                age where such undertakings is possible. Gifted with our own
                individual talent we our goal is to continue to use our
                knowledge that have been entrusted and given to us by NYU Tandon
                to bring the project we can imagine to life. There is no project
                that we will not take part in, any project is scaleable as long
                as we set our mind to it. This project (Project ADET) is one of
                many of our ingenius invention of bringing people together.{" "}
              </p>
            </div>
          </section>
          <section className="section-flex-c">
            <div>
              <h1> Why You Should Partner with Us </h1>
              <p>
                {" "}
                Although there is much hate and evil in this world, there always
                seems to be a guiding light of goodness and purity in people
                that never gets to shine. Our goal to connect more people to one
                another brings a solution to such a hardship that has been
                brought upon our species. Where before we were more isolated,
                unable to connect to one another instantly, with today's
                technology, such a feat is feasible. Using our gifted genius of
                the holy gods that rule over us, we have the potential to create
                much more difficult and inspiring projects that will solve some
                of the world's most difficult issues. Project ADET is just one
                of many projects that we have been devleoping, with many more
                potential projects that will inspire generations to come.
                Partner with us to join us on this great endeavor to develop
                stimulate the greatest that people have{" "}
              </p>
            </div>
            <img src={img_handshake}></img>
          </section>
        </article>

      </div>
    );
  }
}
