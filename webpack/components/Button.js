import React, { Component } from 'react';

class Button extends Component {
  render (){
    return (
     <button className="instaQuoteButton">{this.props.buttonText}</button>
    );
  }
};

export default Button;
