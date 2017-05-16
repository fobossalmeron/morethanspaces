var React = require('react');
var PropTypes = React.PropTypes;

var TabCheckBox = React.createClass({

  render: function() {
    return (
      <div className="quoteCheck">
        <input type="checkbox" id={this.props.checkFor} name={this.props.checkFor} value="true"/>
        <label for={this.props.checkFor}></label>
      </div>
    );
  }

});

module.exports = TabCheckBox;
