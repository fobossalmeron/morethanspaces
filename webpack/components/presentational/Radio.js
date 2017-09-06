import React, { Component } from 'react';

class CheckBox extends Component {

  render() {
    var classList = (this.props.classList + " quoteCheck");
    return (
      <div className={classList}>
        <input type="radio" id={this.props.checkFor} onChange={this.props.onChange} name={this.props.nameFor} defaultChecked={this.props.defaultChecked} />
        <label className="noMargin" htmlFor={this.props.checkFor}>{this.props.checkFor}</label>
      </div>
    );
  }
};

export default CheckBox;
