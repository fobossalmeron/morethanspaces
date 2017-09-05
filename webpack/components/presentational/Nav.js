import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Nav extends Component {
  constructor(props) {
    super(props);
  }

   discountSymbol(){
     if (this.props.discountType === "percentage") {
         return "%"
       } else {
        return "$"
      }
    }

  handleNavClick(booth){
    this.props.goToTab(booth);
    setTimeout(function(){
      controller.scrollTo("#products");
      if (window.history && window.history.pushState) {
          history.pushState("", document.title, '#products');
      }
    }, 1500);
  }

  render (){

    var discountBlock = (
      <div className="discounts-menu">
      <b>{this.props.discountNumber}{this.discountSymbol()}</b> {this.props.discountText} <span>{this.props.discountSmallText}</span>
      </div>
    );
    var isThereDiscount = (this.props.discountOn ? discountBlock : undefined);

    return (
      <nav>
        <a href="#home"><img src="assets/img/layout/logo.svg"/><img src="assets/img/layout/type.svg"/></a>
        {isThereDiscount}
        <ul>
          <li onClick={() => this.handleNavClick(0)}><a href="#discountbanner">booths</a></li>
          <li onClick={() => this.handleNavClick(1)}><a href="#discountbanner">videowalls</a></li>
          <li><a href="#services">services</a></li>
          <li><a href="#about">about</a></li>
          <li><a href="#contact">contact</a></li>
        </ul>
      </nav>
    );
  }
};

export default Nav;
