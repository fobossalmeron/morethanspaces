import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import DateRanger from './DateRanger.js';
import FormCheckBox from './FormCheckBox';

class TradeShowForm extends Component {
  constructor(props) {
    super(props);
  }
  render(){
    return (
      <div className="instaQuoteForm">
        <label>booth size</label>
          <select>
            <option value="10">10ft</option>
            <option value="20">20ft</option>
            <option value="30">30ft</option>
            <option value="40">40ft</option>
            <option value="50">50ft</option>
          </select>
          <p>x</p>
          <select>
            <option value="10">10ft</option>
            <option value="20">20ft</option>
            <option value="30">30ft</option>
            <option value="40">40ft</option>
            <option value="50">50ft</option>
          </select>
        <label>booth type</label>
          <FormCheckBox toggleBooth={this.props.toggleBooth.bind(this)} inputType="checkbox" nameFor="Island" checkFor="island" checked="checked"/>
          <FormCheckBox toggleBooth={this.props.toggleBooth.bind(this)} inputType="checkbox" nameFor="SplitIsland" checkFor="split island" checked="checked" doubleLine="doubleLine"/>
          <FormCheckBox toggleBooth={this.props.toggleBooth.bind(this)} inputType="checkbox" nameFor="Peninsula" checked="checked" checkFor="peninsula"/>
          <FormCheckBox toggleBooth={this.props.toggleBooth.bind(this)} inputType="checkbox" nameFor="Inline" checked="checked" checkFor="inline"/>
        <label>rent or own?</label>
          <FormCheckBox inputType="radio" nameFor="tradeshowB" checked="checked" checkFor="rent"/>
          <FormCheckBox inputType="radio" nameFor="tradeshowB" checkFor="own"/>
        <label>event location</label>
        <input type="text" name="location" defaultValue=" "/>
        <DateRanger />
      </div>
    )
  }
}
export default TradeShowForm;
