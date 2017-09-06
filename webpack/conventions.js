import React, { Component } from 'react';
import {render} from 'react-dom';
import Nav from './components/presentational/Nav';
import Footer from './components/presentational/Footer';

class Conventions extends Component {

  render() {
    return (
      <div>
        <Nav relativePath="/../"/>
        <Footer relativePath="/../"/>
      </div>
    );
  }
};

export default Conventions;

render(<Conventions/>, document.getElementById('app'));
