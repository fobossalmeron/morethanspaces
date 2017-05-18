import React, { Component } from 'react';
import ReactSelectize, { SimpleSelect } from 'react-selectize';

class Select extends Component {
  render (){
    var self = this,
    options = ["10", "20", "30", "40", "50"].map(function(sizeWidth){
                return {label: sizeWidth, value: sizeWidth}
            });
    return (
      <SimpleSelect options = {options} placeholder = "Select a size" theme = "default"></SimpleSelect>
    );
  }
};

export default Select;
