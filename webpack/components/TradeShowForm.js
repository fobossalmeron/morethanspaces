import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import DateRanger from './DateRanger.js';
import TabCheckBox from './TabCheckBox';
        //<DateRange />

class TradeShowForm extends Component {
  render(){
    return (
      <div className="instaQuoteForm">
        <DateRanger />
      </div>
    )
  }
}
export default TradeShowForm;
