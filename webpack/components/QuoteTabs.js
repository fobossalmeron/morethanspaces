import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import BoothForm from './BoothForm';
import VideoWallForm from './VideoWallForm';
import BoothGrid from './BoothGrid';
import VideoWallGrid from './VideoWallGrid';
import InstaQuoteButton from './presentational/InstaQuoteButton';

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
      selectedTv: true,
      selectedLed: true,
      selectedLcd: true,
      wantToOwn: false,
      eventInVegas: true,
      addVideoWall: false,
      addTv: false,
      individualBoothRender: false,
      individualVideoWallRender: false,
      renderBoothInstaQuote: false,
      renderVideoWallInstaQuote: false,
      revealInstaQuote: false,
      renderCollectors: true
    };
    this.clickFor = this.clickFor.bind(this);
  }

  seeState(){
    console.log(this.state);
  }

  hideCollectors(){
    this.setState({ renderCollectors: false });
  }

  doAddVideoWall(){
    this.setState({ addVideoWall: !this.state.addVideoWall }, ()=> console.log("videowall " + this.state.addVideoWall));
  }

  doAddTv(){
    this.setState({ addTv: !this.state.addTv}, ()=> console.log("Tv " + this.state.addTv));
  }

  noNeedShipping(){
    this.setState({ eventInVegas: true}, ()=> console.log("in vegas XX"));
  }

  needShipping(){
    this.setState({ eventInVegas: false}, ()=> console.log("not in vegas XX"));
  }

  doWantToOwn(){
    this.setState({ wantToOwn: true }, ()=> console.log("i want to OWN it"));
  }

  doWantToRent(){
    this.setState({ wantToOwn: false }, ()=> console.log("just want to RENT it"));
  }

  doRenderBoothInstaQuote(){
    this.setState({ renderBoothInstaQuote: true }, ()=> controller.scrollTo("#boothInstaQuote"))
  }
  doRenderVideoWallInstaQuote(){
    this.setState({ renderVideoWallInstaQuote: true }, ()=> controller.scrollTo("#videoWallInstaQuote"))
  }

  doRevealInstaQuote(){
    this.setState({ revealInstaQuote: true });
  }

  renderSingleBooth(){
    this.setState({ individualBoothRender: true })
  }

  renderSingleVideoWall(){
    this.setState({ individualVideoWallRender: true })
  }

  closeSingleBooth(){
    this.setState({
      individualBoothRender: false
     });
  }

  closeSingleVideoWall(){
    this.setState({ individualVideoWallRender: false });
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

  toggleVideoWall(videoWall){
    switch (videoWall) {
      case "Tv":
        this.setState({selectedTv: !this.state.selectedTv})
        break
      case "LED":
        this.setState({selectedLed: !this.state.selectedLed})
        break
      case "LCD":
        this.setState({selectedLcd: !this.state.selectedLcd})
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
      <section id="products">
      <InstaQuoteButton renderBoothInstaQuote={this.state.renderBoothInstaQuote}
                        renderVideoWallInstaQuote={this.state.renderVideoWallInstaQuote}/>

      <Tabs forceRenderTabPanel={true} selectedIndex={this.props.tabIndex} onSelect={tabIndex => this.props.goToTab( tabIndex )}>
        <TabList>
          <Tab>
            <div className={"frontSlide backSlide"}><span></span></div>
            <h2 id="booths">{this.clickFor(0)}<div className="hideOnMobile">trade show </div>booths</h2>
            <div className={"frontSlide"}><span></span></div>
          </Tab>
          <Tab>
            <div className={"frontSlide backSlide"}><span></span></div>
            <h2 id="videowalls">{this.clickFor(1)}video walls</h2>
            <div className={"frontSlide"}><span></span></div>
          </Tab>
        </TabList>

        <TabPanel>
          <BoothForm     toggleBooth={this.toggleBooth.bind(this)}
                         limitByWidth={this.limitByWidth.bind(this)}
                         limitByLength={this.limitByLength.bind(this)}
                         individualBoothRender={this.state.individualBoothRender}
                         closeSingleBooth={this.closeSingleBooth.bind(this)}
                         doWantToOwn={this.doWantToOwn.bind(this)}
                         doWantToRent={this.doWantToRent.bind(this)}
                         needShipping={this.needShipping.bind(this)}
                         noNeedShipping={this.noNeedShipping.bind(this)}
                         doAddVideoWall={this.doAddVideoWall.bind(this)}
                         doAddTv={this.doAddTv.bind(this)}
                         addTv={this.state.addTv}
                         wantToOwn={this.state.wantToOwn}
                         eventInVegas={this.state.eventInVegas}
                         addVideoWall={this.state.addVideoWall}
                         selectedIsland={this.state.selectedIsland}
                         seeState={this.seeState.bind(this)}
                         selectedIsland={this.state.selectedIsland}
                         selectedSplitIsland={this.state.selectedSplitIsland}
                         selectedPeninsula={this.state.selectedPeninsula}
                         selectedInline={this.state.selectedInline}
                         boothSizeWidth={this.state.boothSizeWidth}
                         boothSizeLength={this.state.boothSizeLength}/>

          <BoothGrid    dataToLoad={"./assets/js/booths.json"}
                        selectedIsland={this.state.selectedIsland}
                        selectedSplitIsland={this.state.selectedSplitIsland}
                        selectedPeninsula={this.state.selectedPeninsula}
                        selectedInline={this.state.selectedInline}
                        boothSizeWidth={this.state.boothSizeWidth}
                        boothSizeLength={this.state.boothSizeLength}
                        individualBoothRender={this.state.individualBoothRender}
                        revealInstaQuote={this.state.revealInstaQuote}
                        renderBoothInstaQuote={this.state.renderBoothInstaQuote}
                        wantToOwn={this.state.wantToOwn}
                        eventInVegas={this.state.eventInVegas}
                        addVideoWall={this.state.addVideoWall}
                        addTv={this.state.addTv}
                        renderSingleBooth={this.renderSingleBooth.bind(this)}
                        doRevealInstaQuote={this.doRevealInstaQuote.bind(this)}
                        doRenderBoothInstaQuote={this.doRenderBoothInstaQuote.bind(this)}
                        discountOn={this.props.discountOn}
                        discountNumber={this.props.discountNumber}
                        discountType={this.props.discountType}
                        hideCollectors={this.hideCollectors.bind(this)}
                        renderCollectors={this.state.renderCollectors}/>
        </TabPanel>
        <TabPanel>
          <VideoWallForm toggleVideoWall={this.toggleVideoWall.bind(this)}
                         individualVideoWallRender={this.state.individualVideoWallRender}
                         closeSingleVideoWall={this.closeSingleVideoWall.bind(this)}
                         needShipping={this.needShipping.bind(this)}
                         noNeedShipping={this.noNeedShipping.bind(this)}
                         selectedTv={this.state.selectedTv}
                         selectedLcd={this.state.selectedLcd}
                         selectedLed={this.state.selectedLed}
                         eventInVegas={this.state.eventInVegas}/>

          <VideoWallGrid dataToLoad={"./assets/js/videowalls.json"}
                         individualVideoWallRender={this.state.individualVideoWallRender}
                         selectedTv={this.state.selectedTv}
                         selectedLcd={this.state.selectedLcd}
                         selectedLed={this.state.selectedLed}
                         revealInstaQuote={this.state.revealInstaQuote}
                         renderInstaQuote={this.state.renderInstaQuote}
                         eventInVegas={this.state.eventInVegas}
                         renderSingleVideoWall={this.renderSingleVideoWall.bind(this)}
                         doRevealInstaQuote={this.doRevealInstaQuote.bind(this)}
                         renderVideoWallInstaQuote={this.state.renderVideoWallInstaQuote}
                         doRenderVideoWallInstaQuote={this.doRenderVideoWallInstaQuote.bind(this)}
                         discountOn={this.props.discountOn}
                         discountNumber={this.props.discountNumber}
                         discountType={this.props.discountType}
                         hideCollectors={this.hideCollectors.bind(this)}
                         renderCollectors={this.state.renderCollectors}/>
        </TabPanel>
      </Tabs>
      </section>
    )
  }
}
export default QuoteTabs;
