import React, { Component } from 'react';
import {render} from 'react-dom';
import Nav from './components/Nav';
import HomeSection from './components/HomeSection';
import Slider from './components/Slider';
import QuoteTabs from './components/QuoteTabs';
import InstaQuoteAnchor from './components/InstaQuoteAnchor';
import './extras/Nav';

class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <InstaQuoteAnchor />
        <HomeSection />
        <Slider />
        <QuoteTabs />
      </div>
    )
  }
}

render(<App/>, document.getElementById('app'));
