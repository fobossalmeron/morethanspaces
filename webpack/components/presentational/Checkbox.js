import React, { Component } from 'react';

class CheckBox extends Component {

  render() {
    var classList = (this.props.classList + " quoteCheck");
    return (
      <div className={classList}>
        <input type={this.props.inputType} id={this.props.checkFor} onClick={this.props.onClick} onChange={this.props.onChange} name={this.props.nameFor} defaultChecked={this.props.checked} />
        <label className="noMargin" htmlFor={this.props.checkFor}>{this.props.checkFor}</label>
      </div>
    );
  }
};

export default CheckBox;
