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
        <select onChange={this.handleWidthChange}>
          <option value="All">All</option>
          <option value="10">10ft</option>
          <option value="20">20ft</option>
          <option value="30">30ft</option>
          <option value="40">40ft</option>
          <option value="50">50ft</option>
        </select>
        <p>x</p>
        <select onChange={this.handleLengthChange}>
          <option value="All">All</option>
          <option value="10">10ft</option>
          <option value="20">20ft</option>
          <option value="30">30ft</option>
          <option value="40">40ft</option>
          <option value="50">50ft</option>
        </select>
        <label>booth type</label>
          <CheckBox onChange={this.handleBoothToggle} inputType="checkbox" nameFor="Island" checkFor="island" defaultChecked={this.props.selectedIsland}/>
          <CheckBox onChange={this.handleBoothToggle} inputType="checkbox" nameFor="SplitIsland" checkFor="split island" defaultChecked="checked" doubleLine="doubleLine"/>
          <CheckBox onChange={this.handleBoothToggle} inputType="checkbox" nameFor="Peninsula" defaultChecked="checked" checkFor="peninsula"/>
          <CheckBox onChange={this.handleBoothToggle} inputType="checkbox" noMarginRight nameFor="Inline" defaultChecked="checked" checkFor="inline"/>
        <BlueSuggest/>
      </div>
    )
    var backToBooths = (
      <div className="goBackContainer">
        <div className="leaveOrStay">
          <ArrowBackIcon/>
          <a onClick={() => this.props.closeSingleBooth()}><b>back</b> to booths</a>
        </div>
        <label>rent or own?</label>
          <CheckBox onClick={this.handleRent} inputType="radio" nameFor="rentOrOwn" defaultChecked="checked" checkFor="rent"/>
          <CheckBox onClick={this.handleOwn} inputType="radio" nameFor="rentOrOwn" checkFor="own"/>
        <label>event location</label>
          <div className="quoteCheck">
            <input type="radio" id="Las Vegas" onClick={this.doNotShip} name={"inVegas"} defaultChecked={true} />
            <label className="noMargin" htmlFor="Las Vegas">Las Vegas</label>
          </div>
          <div className="quoteCheck">
            <input type="radio" id="else" onClick={this.doShip} name={"inVegas"} defaultChecked={false} />
            <label className="noMargin" htmlFor="else">else</label>
          </div>
        <label>stand out even more</label>
          <div className="quoteCheck">
            <input type="checkbox" id="add Tv(s)" onClick={this.setTv} defaultChecked={false} />
            <label className="noMargin" htmlFor={"add Tv(s)"}>add Tv(s)</label>
          </div>
          <CheckBox onClick={this.setVideoWall} inputType="checkbox" nameFor="else" checkFor="add videowall"/>
          <MagentaSuggest/>
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