import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import TabCheckBox from './TabCheckBox';
import TradeShowForm from './TradeShowForm';
import BoothGrid from './BoothGrid';

class QuoteTabs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tabIndex: 0,
      boothSizeWidth: "All",
      boothSizeLength: "All",
      selectedIsland: true,
      selectedSplitIsland: true,
      selectedInline: true,
      selectedPeninsula: true,
      rentOwn: 1,
      eventInVegas: true
    };
  }

  toggleBooth(booth){
    switch (booth) {
      case "Island":
        this.setState({selectedIsland: !this.state.selectedIsland})
        break
      case "SplitIsland":
        this.setState({selectedSplitIsland: !this.state.selectedSplitIsland})
        break
      case "Peninsula":
        this.setState({selectedPeninsula: !this.state.selectedPeninsula})
        break
      case "Inline":
        this.setState({selectedInline: !this.state.selectedInline})
        break
    }
  }

  limitByWidth(width){
    this.setState({
      boothSizeWidth: width
    });
  }

  limitByLength(length){
    console.log("Booth size function triggered with length: " + length)
    this.setState({
      boothSizeLength: length
    }, () => {console.log("State changed, state.length is " + this.state.boothSizeLength)});
  }

  render(){
    return (
      <section id="quoteSection">
      <Tabs forceRenderTabPanel={false} selectedIndex={this.state.tabIndex} onSelect={tabIndex => this.setState({ tabIndex })}>
        <TabList>
          <Tab>
            <h2 id="booths">trade show booths</h2>
          </Tab>
          <Tab>
            <h2 id="videowalls">video walls</h2>
          </Tab>
        </TabList>

        <TabPanel>
          <TradeShowForm toggleBooth={this.toggleBooth.bind(this)}
                         limitByWidth={this.limitByWidth.bind(this)}
                         limitByLength={this.limitByLength.bind(this)}/>
          <BoothGrid
          selectedIsland={this.state.selectedIsland}
          selectedSplitIsland={this.state.selectedSplitIsland}
          selectedPeninsula={this.state.selectedPeninsula}
          selectedInline={this.state.selectedInline}
          boothSizeWidth={this.state.boothSizeWidth}
          boothSizeLength={this.state.boothSizeLength}
          />
        </TabPanel>
        <TabPanel>
          <img src="assets/img/mock.png"/>
        </TabPanel>
      </Tabs>
      </section>
    )
  }
}
export default QuoteTabs;
