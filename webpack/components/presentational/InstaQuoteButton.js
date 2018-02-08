import React, { Component } from 'react';
import scrollToComponent from 'react-scroll-to-component';
import InstaQuoteIcon from 'svg-react-loader?name=InstaQuoteIcon!../../../assets/img/layout/instaQuote.svg';

class InstaQuoteButton extends Component {
  constructor(props) {
    super(props);
  }

  render (){
    return (
        <a onClick={this.props.scrollToContact} href={'#contact'}>
          <div className={"bounce"} id="instaQuoteButton"><InstaQuoteIcon/></div>
        </a>
    );
  }
};

export default InstaQuoteButton;
