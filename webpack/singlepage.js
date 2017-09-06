import React, { Component } from 'react';
import {render} from 'react-dom';
import Nav from './components/presentational/Nav';
import Footer from './components/presentational/Footer';

class SinglePage extends Component {

  render() {
    return (
      <div>
        <Nav relativePath="/../../../../"/>
        <Footer relativePath="/../../../../"/>
      </div>
    );
  }
};

export default SinglePage;

render(<SinglePage/>, document.getElementById('content'));
