import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import TradeShowForm from './TradeShowForm';
import BoothGrid from './BoothGrid';
import CollectBeforeQuote from './CollectBeforeQuote';

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
      wantToOwn: false,
      eventInVegas: true,
      individualBoothRender: false,
      renderInstaQuote: false,
      revealInstaQuote: false,
    };
    this.clickFor = this.clickFor.bind(this);
  }

  needShipping(){
    this.setState({ eventInVegas: false}, ()=> console.log("not in vegas XX"));
  }
  noNeedShipping(){
    this.setState({ eventInVegas: true}, ()=> console.log("in vegas XX"));
  }

  doWantToOwn(){
    this.setState({ wantToOwn: true });
  }
  doWantToRent(){
    this.setState({ wantToOwn: false });
  }

  doRenderInstaQuote(){
    this.setState({ renderInstaQuote: true }, ()=> controller.scrollTo("#instaQuote"))
  }

  doRevealInstaQuote(){
    this.setState({ revealInstaQuote: true });
  }

  renderSingleBooth(){
    this.setState({ individualBoothRender: true })
  }

  closeSingleBooth(){
    this.setState({ individualBoothRender: false });
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
    this.setState({
      boothSizeLength: length
    });
  }

  clickFor(tab){
    if (this.props.tabIndex !== tab){
      return  (<div className="clickFor">click for</div>)
    }
  }

  render(){
    return (
      <section id="quoteSection">
      <Tabs forceRenderTabPanel={true} selectedIndex={this.props.tabIndex} onSelect={tabIndex => this.props.goToTab( tabIndex )}>
        <TabList>
          <Tab>
            <h2 id="booths">{this.clickFor(0)}trade show booths</h2>
            <div className={"frontSlide"}><span></span></div>
          </Tab>
          <Tab>
            <h2 id="videowalls">{this.clickFor(1)}video walls</h2>
            <div className={"frontSlide"}><span></span></div>
          </Tab>
        </TabList>

        <TabPanel>
          <TradeShowForm toggleBooth={this.toggleBooth.bind(this)}
                         limitByWidth={this.limitByWidth.bind(this)}
                         limitByLength={this.limitByLength.bind(this)}
                         individualBoothRender={this.state.individualBoothRender}
                         closeSingleBooth={this.closeSingleBooth.bind(this)}
                         doWantToOwn={this.doWantToOwn.bind(this)}
                         doWantToRent={this.doWantToRent.bind(this)}
                         needShipping={this.needShipping.bind(this)}
                         noNeedShipping={this.noNeedShipping.bind(this)}/>

          <BoothGrid    selectedIsland={this.state.selectedIsland}
                        selectedSplitIsland={this.state.selectedSplitIsland}
                        selectedPeninsula={this.state.selectedPeninsula}
                        selectedInline={this.state.selectedInline}
                        boothSizeWidth={this.state.boothSizeWidth}
                        boothSizeLength={this.state.boothSizeLength}
                        individualBoothRender={this.state.individualBoothRender}
                        revealInstaQuote={this.state.revealInstaQuote}
                        renderInstaQuote={this.state.renderInstaQuote}
                        wantToOwn={this.state.wantToOwn}
                        eventInVegas={this.state.eventInVegas}
                        renderSingleBooth={this.renderSingleBooth.bind(this)}
                        doRevealInstaQuote={this.doRevealInstaQuote.bind(this)}
                        doRenderInstaQuote={this.doRenderInstaQuote.bind(this)}/>
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
