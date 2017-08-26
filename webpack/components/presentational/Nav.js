import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      discount: '',
      discountNumber: '',
      discountType: '',
      discountText: '',
      discountSmallText: ''
    };
    this.loadDiscounts = this.loadDiscounts.bind(this);
  }

  loadDiscounts () {
       var xhr = new XMLHttpRequest();
       xhr.open('get', './assets/discounts/discount.js', true);
       xhr.onload = function() {
           var info = JSON.parse(xhr.responseText);

           this.setState({
             discount: info.discount,
             discountNumber: info.discountNumber,
             discountType: info.discountType,
             discountText: info.discountText,
             discountSmallText: info.discountSmallText
           });
       }.bind(this);
       xhr.send();
   }

   discountSymbol(){
     if (this.state.discountType === "percentage") {
         return "%"
       } else {
        return "$"
      }
    }

   componentDidMount() {
    this.loadDiscounts();
  }

  render (){
    return (
      <nav>
        <a href="#home"><img src="assets/img/logo.svg"/></a>
        <div className="discounts-menu">
        <b>{this.state.discountNumber}{this.discountSymbol()} {this.state.discountText}</b> <span>{this.state.discountSmallText}</span>
        </div>
        <ul>
          <li onClick={() => this.props.goToTab(0)}><a href="#booths">booths</a></li>
          <li onClick={() => this.props.goToTab(1)}><a href="#videowalls">videowalls</a></li>
          <li><a href="#services">services</a></li>
          <li><a href="#about">about</a></li>
          <li><a href="#contact">contact</a></li>
        </ul>
      </nav>
    );
  }
};

export default Nav;
