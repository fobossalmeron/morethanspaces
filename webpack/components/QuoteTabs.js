import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import TabCheckBox from './TabCheckBox';
import TradeShowForm from './TradeShowForm';
import BoothGrid from './BoothGrid';

class QuoteTabs extends Component {
//  onTabClick: function(evt){
//    alert('tab clicked');
    //quoteTabContent.addclassname(visible)
    //quoteTabContent.other.removeclassname(visible)
//  },
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
