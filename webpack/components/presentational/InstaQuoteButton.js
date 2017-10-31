import React, { Component } from 'react';
import InstaQuoteIcon from 'svg-react-loader?name=InstaQuoteIcon!../../../assets/img/layout/instaQuote.svg';

class InstaQuoteButton extends Component {
  constructor(props) {
    super(props);
    this.scrollToProducts = this.scrollToProducts.bind(this);
  }

  scrollToProducts(){
    controller.scrollTo("#products");
    if (window.history && window.history.pushState) {
        history.pushState("", document.title, '#products');
    }
  }

  render (){
    return (
        <div onClick={this.scrollToProducts} className={"bounce"} id="instaQuoteButton"><InstaQuoteIcon/></div>
    );
  }
};

export default InstaQuoteButton;
