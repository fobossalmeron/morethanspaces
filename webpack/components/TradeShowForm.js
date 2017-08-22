import React, { Component } from 'react';
import FormCheckBox from './FormCheckBox';
import Arrow from './Arrow';

class TradeShowForm extends Component {
  constructor(props) {
    super(props);
    this.handleWidthChange = this.handleWidthChange.bind(this);
    this.handleLengthChange = this.handleLengthChange.bind(this);
  }

  handleWidthChange(event) {
    this.props.limitByWidth(event.target.value)
  }
  handleLengthChange(event) {
    this.props.limitByLength(event.target.value)
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
          <FormCheckBox toggleBooth={this.props.toggleBooth.bind(this)} inputType="checkbox" classList="formCheck" nameFor="Island" checkFor="island" checked="checked"/>
          <FormCheckBox toggleBooth={this.props.toggleBooth.bind(this)} inputType="checkbox" classList="formCheck" nameFor="SplitIsland" checkFor="split island" checked="checked" doubleLine="doubleLine"/>
          <FormCheckBox toggleBooth={this.props.toggleBooth.bind(this)} inputType="checkbox" classList="formCheck" nameFor="Peninsula" checked="checked" checkFor="peninsula"/>
          <FormCheckBox toggleBooth={this.props.toggleBooth.bind(this)} inputType="checkbox" classList="formCheck noMarginRight" nameFor="Inline" checked="checked" checkFor="inline"/>
      </div>
    )
    var backToBooths = (
      <div className={"goBackContainer"}>
        <div className="leaveOrStay">
          <Arrow color={"#f9f9f9"} width={"25px"}/>
          <a onClick={() => this.props.closeSingleBooth()}><b>back</b> to booths</a>
        </div>
        <div className="leaveOrStay">
          or get your <b>instaQuote</b>
          <Arrow forward color={"#f9f9f9"} width={"25px"}/>
        </div>
      </div>
    )
    var menuChoice = (this.props.individualBoothRender ? backToBooths : boothMenu);
    return (
      <div className="instaQuoteForm">
        {menuChoice}
        <label>rent or own?</label>
          <FormCheckBox inputType="radio" classList="formCheck" nameFor="rentOrOwn" checked="checked" checkFor="rent"/>
          <FormCheckBox inputType="radio" classList="formCheck" nameFor="rentOrOwn" checkFor="own"/>
        <label>event location</label>
        <FormCheckBox inputType="radio" classList="formCheck" nameFor="inVegas" doubleLine="doubleLine" checked="checked" checkFor="Las Vegas"/>
        <FormCheckBox inputType="radio" classList="formCheck" nameFor="inVegas" checkFor="else"/>
      </div>
    )
  }
}
export default TradeShowForm;
