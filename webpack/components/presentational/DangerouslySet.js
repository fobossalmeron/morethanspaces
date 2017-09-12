import React, { Component } from 'react';

class DangerouslySet extends Component {
  constructor(props) {
    super(props);
  }
  render (){
    var description = this.props.description;
    function createMarkup() { return {__html: description}; };
    return (
      <p dangerouslySetInnerHTML={createMarkup()}></p>
    );
  }
};

export default DangerouslySet;
