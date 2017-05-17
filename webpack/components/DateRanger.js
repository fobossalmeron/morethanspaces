import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';

class DateRanger extends Component {
  constructor (props) {
    super(props)
    this.state = {
      startDate: moment(),
      endDate: moment().add(3, "days")
    }
  }

     handleChange = ({ startDate, endDate }) => {
      startDate = startDate || this.state.startDate
      endDate = endDate || this.state.endDate

      if (startDate.isAfter(endDate)) {
        var temp = startDate
        startDate = endDate
        endDate = temp
      }

      this.setState({ startDate, endDate })
    }

  handleChangeStart = (startDate) => this.handleChange({ startDate })

  handleChangeEnd = (endDate) => this.handleChange({ endDate })

  render () {
    return (
      <div className="datePickerFields">
        <label>from</label>
        <DatePicker
            dateFormat="MMM DD"
            selected={this.state.startDate}
            selectsStart
            startDate={this.state.startDate}
            endDate={this.state.endDate}
            onChange={this.handleChangeStart}
            />
          <label>to</label>
        <DatePicker
            dateFormat="MMM DD"
            selected={this.state.endDate}
            selectsEnd
            startDate={this.state.startDate}
            endDate={this.state.endDate}
            onChange={this.handleChangeEnd} />
        </div>
      )
  }
}

export default DateRanger;
