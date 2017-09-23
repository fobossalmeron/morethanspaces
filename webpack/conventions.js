import React, { Component } from 'react';
import {render} from 'react-dom';
import Nav from './components/presentational/Nav';
import Footer from './components/presentational/Footer';
import ConventionsStatic from './components/presentational/ConventionsStatic';

class Conventions extends Component {

  render() {
    return (
      <div>
        <Nav relativePath="../../" barNav/>
        <ConventionsStatic/>
        <Footer hideIconsBar={true} relativePath="../../"/>
      </div>
    );
  }
};

export default Conventions;

render(<Conventions/>, document.getElementById('app'));
