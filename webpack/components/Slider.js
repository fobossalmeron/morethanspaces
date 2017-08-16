import React, { Component } from 'react';
var {SparkScroll, SparkProxy, sparkScrollFactory} =
  require('react-spark-scroll')({
    invalidateAutomatically: true
  });

class Slider extends Component {
  render (){
    return (
      <section id="slider">
          <p><span>simply more</span><br/>we are the smarter, cooler, more affordable solution to your vision</p>
          <p style={{display:'none'}}>from<span>$7,999 all incl.</span><br/>Video wall rental in Vegas</p>
      </section>
    );
  }
};

export default Slider;
