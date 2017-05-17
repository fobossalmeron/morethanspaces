import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import TabCheckBox from './TabCheckBox';

class TradeShowForm extends Component {
  render(){
    return (
      <DatePicker
          selected={this.state.startDate}
          selectsStart
          startDate={this.state.startDate}
          endDate={this.state.endDate}
          onChange={this.handleChangeStart}
      />

      <DatePicker
          selected={this.state.endDate}
          selectsEnd
          startDate={this.state.startDate}
          endDate={this.state.endDate}
          onChange={this.handleChangeEnd}
      />
    )
  }
}
export default TradeShowForm;
