import React, { Component } from 'react';
import {render} from 'react-dom';
import Nav from './components/presentational/Nav';
import Footer from './components/presentational/Footer';
import { loadDiscount } from './services/navservice.js';

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
    this.loadDiscount = loadDiscount.bind(this);
}
   toggleMenu(){
     this.setState({ menuOn: !this.state.menuOn})
   }
   hideNav(){
     this.setState({ menuOn: false});
   }
   componentDidMount() {
    this.loadDiscount(this);
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
