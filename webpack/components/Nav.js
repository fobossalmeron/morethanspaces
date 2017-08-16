import React, { Component } from 'react';

class Nav extends Component {

  render (){
    return (
      <nav>
        <img src="assets/img/logo.svg"/>
        <ul>
          <li><a href="#booths">booths</a></li>
          <li><a href="#videowalls">videowalls</a></li>
          <li><a href="#aboutus">about us</a></li>
          <li><a href="#services">services</a></li>
          <li><a href="#contact">contact</a></li>
        </ul>
      </nav>
    );
  }
};

export default Nav;
