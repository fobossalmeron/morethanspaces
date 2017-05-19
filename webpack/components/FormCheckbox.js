import React, { Component } from 'react';

class FormCheckBox extends Component {
  render() {
    return (
      <div className="formCheck quoteCheck">
        <input type={this.props.inputType} id={this.props.checkFor} name={this.props.nameFor} value="true" defaultChecked={this.props.checked}/>
        <label className="noMargin" htmlFor={this.props.checkFor}></label>
        <span className={this.props.doubleLine}>{this.props.checkFor}</span>
      </div>
    );
  }
};

export default FormCheckBox;