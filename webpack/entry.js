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
      };
    this.loadDiscounts = this.loadDiscounts.bind(this);
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

   discountSymbol(){
     if (this.props.discountType === "percentage") {
         return "%"
       } else {
        return "$"
      }
    }

   componentDidMount() {
    this.loadDiscounts();
  }

  goToTab(index){
    this.setState({tabIndex: index})
  }

  render() {
    return (
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
  }
}

render(<App/>, document.getElementById('app'));
