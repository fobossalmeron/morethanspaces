import React, { Component } from 'react';
import {render} from 'react-dom';
import QuoteTabs from './components/QuoteTabs';
import InstaQuoteButton from './components/InstaQuoteButton';
import './extras/nav';

class Quote extends Component {
  render() {
    return (
      <div>
      <QuoteTabs />
            <InstaQuoteButton />
      </div>
    )
  }
}

render(<Quote/>, document.getElementById('quoteSection'));
