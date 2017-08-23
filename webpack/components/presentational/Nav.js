import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Nav extends Component {

  render (){
    return (
      <nav>
        <a href="#home"><img src="assets/img/logo.svg"/></a>
        <ul>
          <li onClick={() => this.props.goToTab(0)}><a href="#booths">booths</a></li>
          <li onClick={() => this.props.goToTab(1)}><a href="#videowalls">videowalls</a></li>
          <li><a href="#services">services</a></li>
          <li><a href="#aboutus">about us</a></li>
          <li><a href="#contact">contact</a></li>
        </ul>
      </nav>
    );
  }
};

export default Nav;