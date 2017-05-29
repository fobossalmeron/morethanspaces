import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import TabCheckBox from './TabCheckBox';
import TradeShowForm from './TradeShowForm';
import BoothGrid from './BoothGrid';

class QuoteTabs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      boothSizeWidth: "All",
      boothSizeLength: "All",
      selectedIsland: true,
      selectedSplitIsland: true,
      selectedInline: true,
      selectedPeninsula: true,
      rentOwn: 1,
      eventLocation: '',
      dateFrom: '',
      dateTo: ''
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
      <Tabs>
        <TabList>
          <Tab>
            <h2>trade show booths</h2>
            <TabCheckBox checkFor="tradeShowBooths" checked="checked"/>
          </Tab>
          <Tab>
            <h2>video walls</h2>
            <TabCheckBox checkFor="videoWalls"/>
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
          <img src="/morethanspaces/assets/img/mock.png"></img>
        </TabPanel>
      </Tabs>
    )
  }
}
export default QuoteTabs;
