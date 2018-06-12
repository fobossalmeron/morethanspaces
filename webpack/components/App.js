import React, { Component } from 'react';
import {render} from 'react-dom';
import HomeSection from './HomeSection';
import Carousel from './Carousel';
import QuoteTabs from './QuoteTabs';
import ContactSection from './ContactSection';
import Nav from './presentational/Nav';
import Footer from './presentational/Footer';
import ServicesSection from './presentational/ServicesSection';
import DiscountBanner from './presentational/DiscountBanner';
import AboutSection from './presentational/AboutSection';
import InteractiveKiosk from './presentational/InteractiveKiosk';
import ClientsSection from './presentational/ClientsSection';
import DiscountsCarousel from './presentational/DiscountsCarousel';
import ReactPlayer from 'react-player';
import scrollToComponent from 'react-scroll-to-component';
import { loadDiscount } from '../services/navservice.js';
import InstagramIcon from 'svg-react-loader?name=InstagramIcon!../../assets/img/layout/icons/instagram.svg';
import UnderConstruction from 'svg-react-loader?name=InstagramIcon!../../assets/img/underconstruction.svg';


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
        weHaveUser: false,
        name: '',
        email: '',
        phone: '',
        maintenance: true
      };
    this.loadDiscount = loadDiscount.bind(this);
    this.quitMaintenance = this.quitMaintenance.bind(this);
    this.initScrollMagic = this.initScrollMagic.bind(this);
  }

  generateUser(name, email, phone){
    this.setState({
      weHaveUser: true,
      name: name,
      email: email,
      phone: phone
    })
  }

  toggleMenu(){
    this.setState({ menuOn: !this.state.menuOn})
  }

  hideNav(){
    this.setState({ menuOn: false});
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
    this.loadDiscount(this);
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
            <UnderConstruction/>
        </div>
        <div className="aboveVideo">
          <img src="assets/img/layout/logo.svg"/>
          <img src="assets/img/layout/type.svg"/>
          <div className="secondLanding">
            <h2 className="blue">we're</h2>
            <h2 className="yellow">redesigning</h2>
            <h2 className="pink">ourselves</h2>
          </div>
          <div className="follow">
            <p>follow us on 
            <a href={"https://www.instagram.com/more.than.spaces/"} target="_blank">
                 <InstagramIcon/>
               </a>
            </p>
            <p><a href="http://instagram.com/more.than.spaces/">@<span className="blue">more</span>.<span className="yellow">than</span>.<span className="pink">spaces</span></a></p>
            </div>
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
             generateUser={this.generateUser.bind(this)}
             weHaveUser={this.state.weHaveUser}
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
                   generateUser={this.generateUser.bind(this)}
                   weHaveUser={this.state.weHaveUser}
                   name={this.state.name}
                   email={this.state.email}
                   phone={this.state.phone}
                   scrollToContact={() => scrollToComponent(this.Contact, { offset: -50, align: 'top'})}/>
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
