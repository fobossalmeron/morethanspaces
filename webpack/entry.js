import React, { Component } from 'react';
import {render} from 'react-dom';
import HomeSection from './components/HomeSection';
import Carousel from './components/Carousel';
import QuoteTabs from './components/QuoteTabs';
import Nav from './components/presentational/Nav';
import Footer from './components/presentational/Footer';
import InstaQuoteButton from './components/presentational/InstaQuoteButton';
import StaticSection from './components/presentational/StaticSection';
import ContactSection from './components/ContactSection';
import DiscountBanner from './components/presentational/DiscountBanner';

class App extends Component {
  constructor(props) {
    super(props);
      this.state = {
        tabIndex: 0,
        discountOn: 'off',
        discountNumber: '',
        discountType: '',
        discountText: '',
        discountSmallText: '',
        discountBanner: '',
        maintenance: true
      };
    this.loadDiscounts = this.loadDiscounts.bind(this);
    this.quitMaintenance = this.quitMaintenance.bind(this);
    this.initScrollMagic = this.initScrollMagic.bind(this);
  }

  loadDiscounts () {
       var xhr = new XMLHttpRequest();
       xhr.open('get', './assets/discounts/discount.js', true);
       xhr.onload = function() {
           var discountDigest = JSON.parse(xhr.responseText);
           console.log(discountDigest);
           this.setState({
             discountOn: discountDigest.discountOn,
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

   discountSymbol(){
     if (this.props.discountType === "percentage") {
         return "%"
       } else {
        return "$"
      }
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
    var maintenanceButton = (
      <div className="loading">
        <img src="assets/img/layout/logoshort.svg"/>
        <h2>Stay tuned</h2>
        <p>we&#39;re launching soon</p>
        <button onClick={this.quitMaintenance}>quit</button>
      </div>
    )
    var appDecision = (
      <div>
        <Nav goToTab={this.goToTab.bind(this)}
             discountOn={this.state.discountOn}
             discountNumber={this.state.discountNumber}
             discountType={this.state.discountType}
             discountText={this.state.discountText}
             discountSmallText={this.state.discountSmallText}/>
        <InstaQuoteButton />
        <HomeSection />
        <Carousel />
        <DiscountBanner discountBanner={this.state.discountBanner}/>
        <QuoteTabs tabIndex={this.state.tabIndex}
                    discountOn={this.state.discountOn}
                    discountNumber={this.state.discountNumber}
                    discountType={this.state.discountType}
                    discountSymbol={this.discountSymbol.bind(this)}
                    goToTab={this.goToTab.bind(this)}/>
        <StaticSection/>
        <ContactSection/>
        <Footer/>
      </div>
    )
    var doRenderApp = this.state.maintenance? maintenanceButton : appDecision;
    return doRenderApp
  }
}

render(<App/>, document.getElementById('app'));
