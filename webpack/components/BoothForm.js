import React, { Component } from 'react';
import CheckBox from './presentational/CheckBox';
import ArrowBackIcon from 'svg-react-loader?name=ArrowBackIcon!../../assets/img/layout/arrowback.svg';
import BlueSuggest from './presentational/BlueSuggest';
import MagentaSuggest from './presentational/MagentaSuggest';

class BoothForm extends Component {
  constructor(props) {
    super(props);
    this.handleWidthChange = this.handleWidthChange.bind(this);
    this.handleLengthChange = this.handleLengthChange.bind(this);
    this.handleBoothToggle = this.handleBoothToggle.bind(this);
    this.handleOwn = this.handleOwn.bind(this);
    this.handleRent = this.handleRent.bind(this);
    this.doShip = this.doShip.bind(this);
    this.doNotShip = this.doNotShip.bind(this);
    this.setTv = this.setTv.bind(this);
    this.setVideoWall = this.setVideoWall.bind(this);
    this.resetQuoteCloseBooth = this.resetQuoteCloseBooth.bind(this);
  }

  resetQuoteCloseBooth(){
    this.props.closeSingleBooth();
    this.props.hideInstaQuote();
  }

  doSeeState(){
    this.props.seeState();
  }

  setVideoWall(){
    this.props.doAddVideoWall();
  }
  setTv(){
    this.props.doAddTv();
  }
  doShip(event){
    this.props.needShipping();
  }
  doNotShip(event){
    this.props.noNeedShipping();
  }
  handleOwn(){
    this.props.doWantToOwn();
  }
  handleRent(){
    this.props.doWantToRent();
  }
  handleWidthChange(event) {
    this.props.limitByWidth(event.target.value)
  }
  handleLengthChange(event) {
    this.props.limitByLength(event.target.value)
  }
  handleBoothToggle(event){
    this.props.toggleBooth(event.target.name);
  }

  render(){
    var boothMenu = (
      <div>
      <label>booth size</label>
        <select onChange={this.handleWidthChange} value={this.props.boothSizeWidth}>
          <option value="All">width</option>
          <option value="10">10ft</option>
          <option value="20">20ft</option>
          <option value="30">30ft</option>
          <option value="40">40ft</option>
          <option value="50">50ft</option>
        </select>
        <div className={"theX"}>x</div>
        <select onChange={this.handleLengthChange} value={this.props.boothSizeLength}>
          <option value="All">length</option>
          <option value="10">10ft</option>
          <option value="20">20ft</option>
          <option value="30">30ft</option>
          <option value="40">40ft</option>
          <option value="50">50ft</option>
        </select>
        <label>booth type</label>
          <CheckBox onChange={this.handleBoothToggle} inputType="checkbox" nameFor="Island" checkFor="island" defaultChecked={this.props.selectedIsland}/>
          <CheckBox onChange={this.handleBoothToggle} inputType="checkbox" nameFor="SplitIsland" checkFor="split island" defaultChecked={this.props.selectedSplitIsland} doubleLine="doubleLine"/>
          <CheckBox onChange={this.handleBoothToggle} inputType="checkbox" nameFor="Perimeter" defaultChecked={this.props.selectedPerimeter} checkFor="perimeter"/>
          <CheckBox onChange={this.handleBoothToggle} inputType="checkbox" noMarginRight nameFor="Inline" defaultChecked={this.props.selectedInline} checkFor="inline"/>
        <MagentaSuggest/>
        <BlueSuggest/>
      </div>
    )
    var backToBooths = (
      <div className="goBackContainer">
        <a onClick={() => this.resetQuoteCloseBooth()}>
          <div className="leaveOrStay">
            <ArrowBackIcon/>
            <b>back</b> to booths
          </div>
        </a>
        <label>rent or own?</label>
          <CheckBox onClick={this.handleRent} inputType="radio" nameFor="rentOrOwn" defaultChecked={!this.props.wantToOwn} checkFor="rent"/>
          <CheckBox onClick={this.handleOwn} inputType="radio" nameFor="rentOrOwn" defaultChecked={this.props.wantToOwn} checkFor="own"/>
        <label>event location</label>
          <div className="quoteCheck">
            <input type="radio" id="Las Vegas" onClick={this.doNotShip} name={"inVegas"} defaultChecked={this.props.eventInVegas} />
            <label className="noMargin" htmlFor="Las Vegas">Las Vegas</label>
          </div>
          <div className="quoteCheck">
            <input type="radio" id="other" onClick={this.doShip} name={"inVegas"} defaultChecked={!this.props.eventInVegas} />
            <label className="noMargin" htmlFor="other">other</label>
          </div>
          <MagentaSuggest/>
          <BlueSuggest/>
      </div>
    )
    var menuChoice = (this.props.individualBoothRender ? backToBooths : boothMenu);
    return (
      <div className="instaQuoteForm">
        {menuChoice}
      </div>
    )
  }
}
export default BoothForm;
