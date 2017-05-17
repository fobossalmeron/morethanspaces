import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import TabCheckBox from './TabCheckBox';
//import TradeShowForm from './TradeShowForm';
//<TradeShowForm />

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
            <TabCheckBox checkFor="tradeShowBooths"/>
          </Tab>
          <Tab>
            <h2>video walls</h2>
            <TabCheckBox checkFor="videoWalls"/>
          </Tab>
        </TabList>

        <TabPanel>
          <h2>Trade show booths content</h2>
        </TabPanel>
        <TabPanel>
          <h2>Video walls content</h2>
        </TabPanel>
      </Tabs>
    )
  }
}
export default QuoteTabs;
