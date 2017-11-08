import React, { Component } from 'react';
import {render} from 'react-dom';
import HomeSection from './HomeSection';
import Carousel from './Carousel';
import QuoteTabs from './QuoteTabs';
import Nav from './presentational/Nav';
import Footer from './presentational/Footer';
import ServicesSection from './presentational/ServicesSection';
import ContactSection from './ContactSection';
import DiscountBanner from './presentational/DiscountBanner';
import AboutSection from './presentational/AboutSection';
import ClientsSection from './presentational/ClientsSection';
import DiscountsCarousel from './presentational/DiscountsCarousel';
import ReactPlayer from 'react-player';
import scrollToComponent from 'react-scroll-to-component';

class App extends Component {
  constructor(props) {
    super(props);
      this.state = {
        menuOn: false,
        tabIndex: 0,
        discountOn: 'off',
        discountNumber: '',
        discountType: '',
        discountText: '',
        discountSmallText: '',
        discountBanner: '',
        maintenance: false
      };
    this.loadDiscounts = this.loadDiscounts.bind(this);
    this.quitMaintenance = this.quitMaintenance.bind(this);
    this.initScrollMagic = this.initScrollMagic.bind(this);
  }

  toggleMenu(){
    this.setState({ menuOn: !this.state.menuOn})
  }
  hideNav(){
    this.setState({ menuOn: false});
  }

  loadDiscounts () {
       var xhr = new XMLHttpRequest();
       xhr.open('get', './assets/discounts/discount.js', true);
       xhr.onload = function() {
           var discountDigest = JSON.parse(xhr.responseText);
           console.log(discountDigest);
           var discountIsOn
           if (discountDigest.discountOn == 'true'){
             var discountIsOn = true
           } else if (discountDigest.discountOn == 'false'){
             var discountIsOn = false
           }
           this.setState({
             discountOn: discountIsOn,
             discountNumber: discountDigest.discountNumber,
             discountType: discountDigest.discountType,
             discountText: discountDigest.discountText,
             discountSmallText: discountDigest.discountSmallText,
             discountBanner: discountDigest.discountBanner
           });
       }.bind(this);
       xhr.send();
   }

   initScrollMagic(){
     const script = document.createElement("script");
     script.src = "assets/js/scrollmagic.js";
     script.async = true;
     document.body.appendChild(script);
   }

   quitMaintenance(){
     this.setState({maintenance: false})
     this.initScrollMagic();
   }

   componentDidMount() {
    this.loadDiscounts();
    if (this.state.maintenance == false){
      this.initScrollMagic();
    }
  }

  goToTab(index){
    this.setState({tabIndex: index})
  }

  render() {
    var maintenanceScreen = (
      <div className="loading">
        <div id="loadingvideo">
            <ReactPlayer url={"assets/video/intro.mp4"} playing={true} loop={true} muted={true} playsinline={true}/>
        </div>
        <div className="aboveVideo">
          <img src="assets/img/layout/logo.svg"/>
          <img src="assets/img/layout/type.svg"/>
          <h2>Stay tuned</h2>
          <p>We are re-designing the site to be the <em>Uber</em> of trade show both and video wall rentals</p>
          <p>Can’t wait?<br/>
          call: <a href="tel:1 833 667 3842"><b>1-833-MORETHANSPACES</b><br/>(1-833-667-3842)</a><br/>
          email: <a href="mailto:hello@morethanspaces.com"><b>hello@morethanspaces.com</b></a>
          </p>
        </div>
        <button onClick={this.quitMaintenance}>quit</button>
      </div>
    )
    var app = (
      <div>
        <Nav goToTab={this.goToTab.bind(this)}
             discountOn={this.state.discountOn}
             discountNumber={this.state.discountNumber}
             discountType={this.state.discountType}
             discountText={this.state.discountText}
             discountSmallText={this.state.discountSmallText}
             toggleMenu={this.toggleMenu.bind(this)}
             hideNav={this.hideNav.bind(this)}
             menuOn={this.state.menuOn}
             barNav
             scrollToAbout={() => scrollToComponent(this.About, { offset: -50, align: 'top'})}
             scrollToContact={() => scrollToComponent(this.Contact, { offset: -50, align: 'top'})}
             scrollToServices={() => scrollToComponent(this.Services, { offset: -50, align: 'top'})}
             scrollToProducts={() => scrollToComponent(this.Products, { offset: -50, align: 'top'})}
             scrollToDiscountBanner={() => scrollToComponent(this.DiscountBanner, { offset: -50, align: 'top'})}/>
        <HomeSection />
        <Carousel />
        <DiscountBanner discountBanner={this.state.discountBanner}
                        ref={(section) => { this.DiscountBanner = section; }}/>
        <DiscountsCarousel />
        <QuoteTabs tabIndex={this.state.tabIndex}
                   discountOn={this.state.discountOn}
                   discountNumber={this.state.discountNumber}
                   discountType={this.state.discountType}
                   goToTab={this.goToTab.bind(this)}
                   ref={(section) => { this.Products = section; }}
                   scrollToProducts={() => scrollToComponent(this.Products, { offset: -50, align: 'top'})}/>
        <ServicesSection ref={(section) => { this.Services = section; }}/>
        <AboutSection ref={(section) => { this.About = section; }}/>
        <ClientsSection />
        <ContactSection ref={(section) => { this.Contact = section; }}/>
        <Footer />
      </div>
    )
    var doRenderApp = this.state.maintenance? maintenanceScreen : app;
    return doRenderApp
  }
};

export default App;
