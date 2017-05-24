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
      rentOwn: 1,
      eventLocation: '',
      dateFrom: '',
      dateTo: ''
    };
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
          <TradeShowForm />
          <BoothGrid/>
        </TabPanel>
        <TabPanel>
          <img src="/morethanspaces/assets/img/mock.png"></img>
        </TabPanel>
      </Tabs>
    )
  }
}
export default QuoteTabs;
