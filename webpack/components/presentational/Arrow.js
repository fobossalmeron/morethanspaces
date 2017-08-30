import React, { Component } from 'react';

class Arrow extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    var preClass = (this.props.className);
    var classChoice = (this.props.forward ? preClass + " forward" : preClass);
    return (
      <svg className={classChoice} width={this.props.width} viewBox={'0 0 100 100'}>
          <path fill={this.props.color} d={"M86.4,50.4V92c0,2.6-2.8,4.2-5.1,2.9l-36-20.8l-36-20.8C7,52,7,48.8,9.3,47.5l36-20.8l36-20.8c2.3-1.3,5.1,0.3,5.1,2.9L86.4,50.4z"}/>
      </svg>
    );
  }
};

export default Arrow;
