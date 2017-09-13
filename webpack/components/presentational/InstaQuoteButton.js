import React, { Component } from 'react';
import InstaQuoteIcon from 'svg-react-loader?name=InstaQuoteIcon!../../../assets/img/layout/instaQuote.svg';

class InstaQuoteButton extends Component {

  render (){
    return (
      <a href="#products">
        <div className={"bounce"} id="instaQuoteButton"><InstaQuoteIcon/></div>
      </a>
    );
  }
};

export default InstaQuoteButton;
