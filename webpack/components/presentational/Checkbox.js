import React, { Component } from 'react';

class CheckBox extends Component {

  render() {
    var classList = (this.props.classList + " quoteCheck");
    return (
      <div className={classList}>
        <input type={this.props.inputType} id={this.props.checkFor} onChange={this.props.onChange} name={this.props.nameFor} value="true" defaultChecked={this.props.checked} />
        <label className="noMargin" htmlFor={this.props.checkFor} />
        <span className={this.props.doubleLine}>{this.props.checkFor}</span>
      </div>
    );
  }
};

export default CheckBox;
