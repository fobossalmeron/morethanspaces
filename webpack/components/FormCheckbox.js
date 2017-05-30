import React, { Component } from 'react';

class FormCheckBox extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    var classList = (this.props.classList + " quoteCheck");
    return (
      <div className={classList}>
        <input type={this.props.inputType} id={this.props.checkFor} name={this.props.nameFor} onChange={() => this.props.toggleBooth(this.props.nameFor)} value="true" defaultChecked={this.props.checked}/>
        <label className="noMargin" htmlFor={this.props.checkFor}></label>
        <span className={this.props.doubleLine}>{this.props.checkFor}</span>
      </div>
    );
  }
};

export default FormCheckBox;
