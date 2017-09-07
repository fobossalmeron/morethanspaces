import React, { Component } from 'react';
import {render} from 'react-dom';
import Nav from './components/presentational/Nav';
import Footer from './components/presentational/Footer';

class NotFound extends Component {

  render() {
    return (
      <div>
        <Nav relativePath="/"/>
        <Footer relativePath="/"/>
      </div>
    );
  }
};

export default NotFound;

render(<NotFound/>, document.getElementById('layout'));
