import React, { Component } from 'react';
import {render} from 'react-dom';
import QuoteTabs from './components/QuoteTabs';
import InstaQuoteAnchor from './components/InstaQuoteAnchor';
import './extras/Nav';

class Quote extends Component {
  render() {
    return (
      <div>
        <QuoteTabs />
        <InstaQuoteAnchor />
      </div>
    )
  }
}

render(<Quote/>, document.getElementById('quoteSection'));
