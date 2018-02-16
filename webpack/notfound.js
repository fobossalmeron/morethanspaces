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
        discountBanner: '',
        weHaveUser: false,
        name: '',
        email: '',
        phone: ''
      };
    this.loadDiscount = loadDiscount.bind(this);
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
             menuOn={this.state.menuOn} 
             generateUser={this.generateUser.bind(this)}
             weHaveUser={this.state.weHaveUser} />
        <Footer relativePath="/"/>
      </div>
    );
  }
};

export default NotFound;

render(<NotFound/>, document.getElementById('layout'));
