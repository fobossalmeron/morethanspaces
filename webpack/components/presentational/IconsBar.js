import React, { Component } from 'react';

class IconsBar extends Component {

  render (){
    return (
      <section id="iconsBar" style={{backgroundColor:this.props.backgroundColor}}>
      <ul>
        <li style={{color:this.props.color}}>
        <div className="service-icon"></div>
          free design<br/>consultation
        </li>
        <li style={{color:this.props.color}}>
        <div className="service-icon"></div>
          NO<br/>pressure sale
        </li>
        <li style={{color:this.props.color}}>
        <div className="service-icon"></div>
          approve<br/>online
        </li>
        <li style={{color:this.props.color}}>
        <div className="service-icon"></div>
          save<br/>time
        </li>
        <li style={{color:this.props.color}}>
        <div className="service-icon"></div>
          save<br/>money
        </li>
      </ul>
      </section>
    );
  }
};

export default IconsBar;
