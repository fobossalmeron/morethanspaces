import React, { Component } from 'react';
import CheckBox from './presentational/CheckBox';
import Arrow from './presentational/Arrow';

class TradeShowForm extends Component {
  constructor(props) {
    super(props);
    this.handleWidthChange = this.handleWidthChange.bind(this);
    this.handleLengthChange = this.handleLengthChange.bind(this);
    this.handleBoothToggle = this.handleBoothToggle.bind(this);
    this.handleOwn = this.handleOwn.bind(this);
    this.handleRent = this.handleRent.bind(this);
    this.doShip = this.doShip.bind(this);
    this.doNotShip = this.doNotShip.bind(this);
  }

  doShip(){
    this.props.needShipping();
  }
  doNotShip(){
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
          <CheckBox onChange={this.handleBoothToggle} inputType="checkbox" classList="formCheck" nameFor="Island" checkFor="island" checked="checked"/>
          <CheckBox onChange={this.handleBoothToggle} inputType="checkbox" classList="formCheck" nameFor="SplitIsland" checkFor="split island" checked="checked" doubleLine="doubleLine"/>
          <CheckBox onChange={this.handleBoothToggle} inputType="checkbox" classList="formCheck" nameFor="Peninsula" checked="checked" checkFor="peninsula"/>
          <CheckBox onChange={this.handleBoothToggle} inputType="checkbox" classList="formCheck noMarginRight" nameFor="Inline" checked="checked" checkFor="inline"/>
      </div>
    )
    var backToBooths = (
      <div className={"goBackContainer"}>
        <div className="leaveOrStay">
          <Arrow className={"new-arrow"} color={"#f9f9f9"} width={"25px"}/>
          <a onClick={() => this.props.closeSingleBooth()}><b>back</b> to booths</a>
        </div>
      </div>
    )
    var menuChoice = (this.props.individualBoothRender ? backToBooths : boothMenu);
    return (
      <div className="instaQuoteForm">
        {menuChoice}
        <label>rent or own?</label>
          <CheckBox onClick={this.handleRent} inputType="radio" classList="formCheck" nameFor="rentOrOwn" checked="true" checkFor="rent"/>
          <CheckBox onClick={this.handleOwn} inputType="radio" classList="formCheck" nameFor="rentOrOwn" checkFor="own"/>
        <label>event location</label>
          <CheckBox onClick={this.doNotShip} inputType="radio" classList="formCheck" nameFor="inVegas" doubleLine="doubleLine" checked="checked" checkFor="Las Vegas"/>
          <CheckBox onClick={this.doShip} inputType="radio" classList="formCheck" nameFor="inVegas" checkFor="else"/>
      </div>
    )
  }
}
export default TradeShowForm;
