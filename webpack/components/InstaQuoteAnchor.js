import React, { Component } from 'react';

class InstaQuoteAnchor extends Component {
  constructor(props) {
     super(props);
     this.state = {
       isHovered: false
     };
  }

  handleHover(){
      this.setState({
          isHovered: !this.state.isHovered
      });
  }
  render (){
    const sayHi = this.state.isHovered ? "bounce" : "";
    return (
      <a href="#quoteSection">
        <div className={sayHi} id="instaQuoteAnchor" onMouseEnter={() => this.handleHover()} onMouseLeave={() => this.handleHover()}/>
      </a>
    );
  }
};

export default InstaQuoteAnchor;
