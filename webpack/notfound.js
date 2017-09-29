import React, { Component } from 'react';
import {render} from 'react-dom';
import Nav from './components/presentational/Nav';
import Footer from './components/presentational/Footer';

class NotFound extends Component {
  constructor(props) {
    super(props);
      this.state = {
        menuOn: false,
        discountOn: 'off',
        discountNumber: '',
        discountType: '',
        discountText: '',
        discountSmallText: '',
        discountBanner: ''
      };
    this.loadDiscounts = this.loadDiscounts.bind(this);
}
  loadDiscounts () {
       var xhr = new XMLHttpRequest();
       xhr.open('get', '/assets/discounts/discount.js', true);
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
   toggleMenu(){
     this.setState({ menuOn: !this.state.menuOn})
   }
   hideNav(){
     this.setState({ menuOn: false});
   }
   componentDidMount() {
    this.loadDiscounts();
  }

  render() {
    return (
      <div>
        <Nav relativePath="/"
             discountOn={this.state.discountOn}
             discountNumber={this.state.discountNumber}
             discountType={this.state.discountType}
             discountText={this.state.discountText}
             discountSmallText={this.state.discountSmallText}
             toggleMenu={this.toggleMenu.bind(this)}
             hideNav={this.hideNav.bind(this)}
             menuOn={this.state.menuOn} />
        <Footer relativePath="/"/>
      </div>
    );
  }
};

export default NotFound;

render(<NotFound/>, document.getElementById('layout'));
