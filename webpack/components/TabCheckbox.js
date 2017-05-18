import React, { Component } from 'react';

class TabCheckBox extends Component {
  render() {
    return (
      <div className="quoteCheck">
        <input type="checkbox" id={this.props.checkFor} name={this.props.checkFor} value="true" defaultChecked={this.props.checked}/>
        <label htmlFor={this.props.checkFor}></label>
      </div>
    );
  }
};

export default TabCheckBox;
