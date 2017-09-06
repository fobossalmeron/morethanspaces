import React, { Component } from 'react';
import ReactPlayer from 'react-player';
import ServicesBar from './ServicesBar';
import DiscountsCarousel from './DiscountsCarousel';
import IconsBar from './IconsBar';


class ConventionsStatic extends Component {

  render (){

    return (
      <div>
      <ServicesBar color={"#f9f9f9"} background-color={"#ec3092"}/>
      <DiscountsCarousel className="normalizeCarousel" relativePath="../../"/>
      <div className="conventionBackground">
        <div className="half-card frompdf conventionFromPdf">
          <span>1,</span> <span>2,</span> <span>3 </span> <span> go</span>
          <p>All you have to do is show up and <b>let the show begin!</b></p>
          <div id="stepbox1" className="stepbox"><b>1:</b><p>communicate your need<br/>and choose</p></div>
          <div id="stepbox2" className="stepbox"><b>2:</b><p>we create and<br/>make it happen</p></div>
          <div id="stepbox3" className="stepbox"><b>3:</b><p>we deliver<br/>…and take care of it all</p></div>
        </div>
        <div className="half-card conventionHalfCard">
        <h2>Las Vegas</h2>
        <p>Las Vegas is a standout amongst the most renowned destinations that companies. It&#39;s the entertainment
          capital of the World. Conventions are a HUGE piece of the Las Vegas culture with 28,000 annual events and meetings
          and over 6.3 million convention guests.</p>
        <p>A portion of the biggest shows are in Las Vegas are CES, Magic, World of Concrete, NAB (national association of
          broadcasting), JCK trade show, G2E (Global Gaming Expo), SEMA, International Market Centers, National Mining
          Association, Nightclub and Bar convention etc.</p>
        </div>
      </div>
      <IconsBar backgroundColor={'#eee81a'} color={'#383838'}/>
      <section className="lastConventionSection">
      <h2>Why MoreThanSpaces?</h2>
      <div className="half-card">
        <h3>More for Less</h3>
        <p>Because you get <b>better service</b>, better products, better results, <b>less stress</b>, less worry.</p>
        <h3>Friendly Local Service</h3>
        <p>We know Las Vegas better than most. MoreThanSpaces is founded and headquartered in Las Vegas, convention capital of the world.</p>
        </div>
        <div className="half-card">
        <h3>Easy</h3>
        <p>Simple and easy process (1,2,3 easy) to book and look extraordinary.</p>
        <h3>best price, best quality</h3>
        <p>In most cases we offer the <b>best rates</b>. In fact, we will try to match or beat any price <b>up to 20%</b>.</p>
        </div>
      </section>
      </div>
    );
  }
};

export default ConventionsStatic;
