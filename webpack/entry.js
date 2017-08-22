import React, { Component } from 'react';
import {render} from 'react-dom';
import HomeSection from './components/HomeSection';
import Carousel from './components/Carousel';
import QuoteTabs from './components/QuoteTabs';
import Nav from './components/Nav';
import InstaQuoteAnchor from './components/InstaQuoteAnchor';
import StaticSection from './components/StaticSection';
import ContactSection from './components/ContactSection';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tabIndex: 0,
    };
  }

  goToTab(index){
    this.setState({tabIndex: index})
  }
  render() {
    return (
      <div>
        <Nav goToTab={this.goToTab.bind(this)}/>
        <InstaQuoteAnchor />
        <HomeSection />
        <Carousel />
        <QuoteTabs tabIndex={this.state.tabIndex}
                   goToTab={this.goToTab.bind(this)}/>
        <StaticSection/>
        <ContactSection/>           
      </div>
    )
  }
}

render(<App/>, document.getElementById('app'));
