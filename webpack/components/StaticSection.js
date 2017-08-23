import React, { Component } from 'react';

class StaticSection extends Component {

  render (){

    return (
      <div>
      <section id="services">
        <h2>services</h2>
        <ul>
          <div className="row">
          <li className="service1">
            <div className="service-icon"></div>
            <h3>booth rentals</h3>
            <p>Investment in a trade show booth may not be for everyone. Why spend more on a
            booth you might only use once or be limited to a certain layout or size for many trade
            shows to come. If flexibility is what you’re looking for, we have multiple ready to go
            solutions for any budget.
            Our booth rentals can save you up to 65% when compared to buying. Since Las Vegas
            (the convention capital) is our home we have plenty of options in all sizes and designs to
            select from, it’s up to you! Don’t worry, if your trade show is somewhere other than Las
            Vegas, our booth rentals can be shipped to anywhere you need it.</p>
          </li>
          <li className="service2">
            <div className="service-icon"></div>
            <h3>audio visual</h3>
            <p>A show isn’t a show without audio visual! We understand this and only bring you the
            best when it comes to audio visual including the newest technology; LED/LCD video
            walls and LED TV’s. Our certified technician only uses the best equipment when it comes
            to setting up your show. We are there for you every step of the process making sure
            there are no bugs or mistakes. Because your trade show should be the center of
            attention, not technical issues! Straightforward and smooth we’ll have you ready for any
            presentation.</p>
          </li>
          </div>
          <div className="row">
          <li className="service3">
              <div className="service-icon"></div>
              <h3>storage / shipping</h3>
              <p>Located in Las Vegas the convention capital of the world, we are more than experienced
              in the world of trade shows. When it comes to storage and shipping, we will not sacrifice
              quality or speed. Our experts can handle all your logistics needs - getting to and from
              any Las Vegas venues to any part of the world. We handle all your items safely and
              carefully.</p>
          </li>
          <li className="service4">
            <div className="service-icon"></div>
            <h3>custom rental</h3>
            <p>Short on time or need a ready to go booth with a little more than zest. Our custom
            rentals have you in mind. With our team, you’ll be able to customize the key things
            you’ll benefit from the most without having to build the entire booth from scratch. Get
            the same attention of a custom design with a simpler approach.</p>
          </li>
          </div>
          <div className="row">
          <li className="service5">
              <div className="service-icon"></div>
              <h3>custom design</h3>
              <p>Looking to make a statement with your booth? By working together, we can help you
              create bold design to standout from your competitor and impress visitors! We believe
              that innovation should help bring your vision to life, we’ll bring out the best in your
              brand. Our dedicated design team will work with you to create any booths from in-line
              islands, or uniquely individualized exhibition containers- we’ll design it! Not sure how it
              will look? We will show you our 3D creation before to goes to production.</p>
          </li>
          <li className="service6">
              <div className="service-icon"></div>
              <h3>install / teardown</h3>
              <p>We take pride in offering you the highest degree of service in assembling and
              dismantling your booths. Our team of trained professionals are experienced and
              reliable. We pay attention to the small details so that you won’t have too. We will finish
              assembling your booth long before show-time. No need to worry about after the show,
              we got you covered! We will safely disassemble, transport, and stored your booth to the
              next trade show venue.</p>
          </li>
          </div>
          <div className="row">
          <li className="full-service service7">
            <div className="service-icon"></div>
            <h3>full service -<b>service for you, designed for you, 100 percent yours!</b></h3>
            <h4>The Smarter Approach to Trade show</h4>
            <p>We know the cost of trade shows, and we are here to help by making it the best
            experience possible at a price you feel comfortable with! Don’t waste your time with
            overly complicated booth’s, set-up / tear down, logistics or high rental cost. We like to
            keep it simple for you and always guarantee to be on time. We are so sure in our service
            that we will match or beat any of our competitors’ prices up to 20%. Join our trusted list
            of clients such as Nike, MoneyGarm, CapitalOne, Coca-Cola, and others!</p>
          </li>
          </div>
        </ul>
      </section>

      <section id="aboutus">
        <div className="half-card">
        <h2><b>about us</b></h2>
        <p><b>morethanspaces</b> was founded to give more than other trade show vendors. Established and located in <b>Las Vegas</b>,
        the convention capital, we understand the world or trade shows thoroughly. We believe in
        creativity, simplicity and quality before prices and always go over and beyond with a smile.<br/>
        <br/>
        Trusted by the world’s most iconic brands and <b>Fortune500 companies</b>, our job has always been to give more,
        charge less, and help big and small business bring their vision to life with innovative booth designs and
        high-end audio-visual equipment. Connect with us today to learn how we can transform your brand into
        a show stopper for your next trade show.</p>
        <p><b>best price & quality guaranteed</b></p>
        <p>In most cases we offer the <b>best rates</b>. In fact, we will try to match or beat any price <b>up to 20%</b>.
            We proudly work with companies, event planners and agencies across the USA.</p>
        </div>
        <div className="half-card frompdf">
        <span>1,</span> <span>2,</span> <span>3 </span> <span> go</span>
        <div className="stepbox"><b>1:</b><p>choose your <br/>package</p></div>
        <div className="stepbox"><b>2:</b><p>communicate <br/>your needs</p></div>
        <div className="stepbox"><b>3:</b><p>we deliver</p></div>
        <p><b>more for less:</b><br/>
            better service, better products, better results, less stress, less worry</p>
        <p>All you have to do is show up and <b>let the show begin!</b> It’s that simple with <b>more than spaces</b></p>
        </div>
      </section>

      <section id="clients">
        <h3>we are trusted by amongst others</h3>
        <ul>
          <li className="clientNike">Nike</li>
          <li className="clientCocaCola">Coca-Cola</li>
          <li className="clientMoneyGram">MoneyGram</li>
          <li className="clientChanel">Chanel</li>
          <li className="clientCapitalOne">CapitalOne</li>
          <li className="clientBaseF">BaseF</li>
          <li className="clientBMW">BMW</li>
          <li className="clientDiageo">Diageo</li>
          <li className="clientKraft">Kraft</li>
          <li className="clientNovartis">Novartis</li>
          <li className="clientPepsico">Pepsico</li>
          <li className="clientBoss">Boss</li>
        </ul>
      </section>
      </div>
    );
  }
};

export default StaticSection;
