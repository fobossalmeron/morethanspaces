import React, { Component } from 'react';
import {render} from 'react-dom';
import Nav from './components/presentational/Nav';
import Footer from './components/presentational/Footer';
import ConventionsStatic from './components/presentational/ConventionsStatic';
import { loadDiscount } from './services/navservice.js';

class Conventions extends Component {
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
        <Nav relativePath="../../"
             barNav
             discountOn={this.state.discountOn}
             discountNumber={this.state.discountNumber}
             discountType={this.state.discountType}
             discountText={this.state.discountText}
             discountSmallText={this.state.discountSmallText}
             toggleMenu={this.toggleMenu.bind(this)}
             hideNav={this.hideNav.bind(this)}
             menuOn={this.state.menuOn} />
        <ConventionsStatic/>
        <Footer hideIconsBar={true} relativePath="../../"/>
      </div>
    );
  }
};

export default Conventions;

render(<Conventions/>, document.getElementById('app'));
