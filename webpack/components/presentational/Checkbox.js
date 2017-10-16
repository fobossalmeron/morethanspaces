import React, { Component } from 'react';

class CheckBox extends Component {

  render() {
    var marginRight = this.props.quoteRight? ' quoteRight' : ''
    return (
      <div className={"quoteCheck" + marginRight}>
        <input type={this.props.inputType} id={this.props.checkFor} onClick={this.props.onClick} value="true" onChange={this.props.onChange} name={this.props.nameFor} defaultChecked={this.props.defaultChecked} />
        <label className="noMargin" htmlFor={this.props.checkFor}>{this.props.checkFor}</label>
      </div>
    );
  }
};

export default CheckBox;
