import React, { Component } from 'react';

class Check extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <svg  className={this.props.className} width={this.props.width} x={"0px"} y="0px" viewBox={"0 0 426.7 426.7"} xmlSpace={"preserve"}>
      <path fill={this.props.color} d={"M153.5,366.8c-8.7,0-17.3-3.3-23.9-9.9L9.9,237.3c-13.2-13.2-13.2-34.6,0-47.9c13.2-13.2,34.6-13.2,47.9,0l95.7,95.7L368.9,69.7c13.2-13.2,34.6-13.2,47.9,0c13.2,13.2,13.2,34.7,0,47.9L177.4,356.9C170.8,363.5,162.2,366.8,153.5,366.8z"}/>
      </svg>
    );
  }
};

export default Check;
