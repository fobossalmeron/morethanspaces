import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import TabCheckBox from './TabCheckBox';
import TradeShowForm from './TradeShowForm';
import BoothGrid from './BoothGrid';

class QuoteTabs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      boothSizeWidth: 0,
      boothSizeHeight: 0,
      boothType: 0,
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

  unselectIsland(){
    this.setState({
      selectedIsland: false
    })
  }

  toggleBooth(booth){
    console.log("function running ")
    switch (booth) {
      case "Island":
        this.setState({selectedIsland: !this.state.selectedIsland})
        console.log("island was toggled")
        break
      case "SplitIsland":
        this.setState({selectedSplitIsland: !this.state.selectedSplitIsland})
        console.log("split-island was toggled")
        break
      case "Peninsula":
        this.setState({selectedPeninsula: !this.state.selectedPeninsula})
        console.log("peninsula was toggled")
        break
      case "Inline":
        this.setState({selectedInline: !this.state.selectedInline})
        console.log("inline was toggled")
        break
    }
  }

  renderDifferentBooths(singleValue, description, obj, images){
    this.setState({
      boothSizeWidth: boothSizeWidth,
      boothSizeHeight: boothSizeHeight,
      boothType: boothType,
      rentOwn: rentOwn,
      eventLocation: eventLocation,
      dateFrom: dateFrom,
      dateTo: dateTo
    })
    console.log("successfully loaded " + singleValue);
    console.log(obj);
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
          <TradeShowForm toggleBooth={this.toggleBooth.bind(this)}/>
          <BoothGrid
          selectedIsland={this.state.selectedIsland}
          selectedSplitIsland={this.state.selectedSplitIsland}
          selectedPeninsula={this.state.selectedPeninsula}
          selectedInline={this.state.selectedInline}
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
