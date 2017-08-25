import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      discount: [],
      discountNumber: '',
      discountType: '',
      discountText: '',
      discountText: ''
    };
    this.loadFromServer = this.loadFromServer.bind(this);
  }

  loadFromServer () {
       var xhr = new XMLHttpRequest();
       xhr.open('get', './assets/discounts/discount.js', true);
       xhr.onload = function() {
           var info = JSON.parse(xhr.responseText);
           this.setState({ discount: info.discount });

       }.bind(this);
       xhr.send();
   }

   componentDidMount() {
    this.loadFromServer();
  }

  render (){
    return (
      <nav>
        <a href="#home"><img src="assets/img/logo.svg"/></a>
        <div className="discounts-menu">
        <b>$1000 dollars off!</b> <span>for purchases over $30,000</span>
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
