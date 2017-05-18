import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import DateRanger from './DateRanger.js';
import FormCheckBox from './FormCheckBox';

class TradeShowForm extends Component {
  render(){
    return (
      <div className="instaQuoteForm">
        <label>booth size</label>
          <select>
            <option value="10">10ft</option>
            <option value="15">15ft</option>
            <option value="20">20ft</option>
            <option value="25">25ft</option>
          </select>
          <p>x</p>
          <select>
            <option value="10">10ft</option>
            <option value="15">15ft</option>
            <option value="20">20ft</option>
            <option value="25">25ft</option>
          </select>
        <label>booth type</label>
          <FormCheckBox inputType="checkbox" nameFor="island" checkFor="island" checked="checked"/>
          <FormCheckBox inputType="checkbox" nameFor="split island" checkFor="split island" checked="checked" doubleLine="doubleLine"/>
          <FormCheckBox inputType="checkbox" nameFor="peninsula" checked="checked" checkFor="peninsula"/>
          <FormCheckBox inputType="checkbox" nameFor="inline" checked="checked" checkFor="inline"/>
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
