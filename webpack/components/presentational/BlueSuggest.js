import React, { Component } from 'react';
import ArrowForwardIcon from 'svg-react-loader?name=ArrowForwardIcon!../../../assets/img/layout/arrowforward.svg';

class BlueSuggest extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="blueSuggest">
      <label>can&#39;t find &#39;your thing&#39;?</label>
        <p>We have 100&#39;s of other cool solutions, no problem!</p>
        <a href="#contact">free friendly service <ArrowForwardIcon/></a>
      </div>
    );
  }
};

export default BlueSuggest;
