import React, { Component } from 'react';
import {render} from 'react-dom';
import HomeSection from './components/HomeSection';
import Slider from './components/Slider';
import QuoteTabs from './components/QuoteTabs';
import Nav from './components/Nav';
import InstaQuoteAnchor from './components/InstaQuoteAnchor';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tabIndex: 0,
    };
  }
  componentDidMount(){
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
        <Slider />
        <QuoteTabs tabIndex={this.state.tabIndex}
                   goToTab={this.goToTab.bind(this)}/>
      </div>
    )
  }
}

render(<App/>, document.getElementById('app'));
