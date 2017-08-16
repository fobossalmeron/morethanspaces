import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Nav extends Component {
  handleClick = () => {
    console.log('this is:', this);
  }
  handleClock(input){
    console.log("this isn't ", input);
  }

  render (){
    return (
      <nav>

        <img src="assets/img/logo.svg"/>
        <ul>
          <li onClick={() => this.props.goToTab(0)}><a href="#booths">booths</a></li>
          <li onClick={() => this.props.goToTab(1)}><a href="#videowalls">videowalls</a></li>
          <li><a href="#aboutus">about us</a></li>
          <li><a href="#services">services</a></li>
          <li><a href="#contact">contact</a></li>
        </ul>
      </nav>
    );
  }
};

export default Nav;
