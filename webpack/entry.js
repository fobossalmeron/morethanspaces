import React, { Component } from 'react';
import {render} from 'react-dom';
import Hello from './components/Hello';
import './extras/nav';

class Quote extends Component {
  render() {
    return (
      <Hello />
    )
  }
}

render(<Quote/>, document.getElementById('quoteSection'));
