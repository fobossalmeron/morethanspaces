import React, { Component } from 'react';
import CustomBoothDesignIcon from 'svg-react-loader?name=CustomBoothDesignIcon!../../../assets/img/layout/icons/customboothdesign.svg';


class IconsBar extends Component {

  render (){
    return (
      <section id="iconsBar" style={{backgroundColor:this.props.backgroundColor}}>
      <ul>
        <li style={{color:this.props.color}}>
        <CustomBoothDesignIcon className="service-icon"/>
          free design<br/>consultation
        </li>
        <li style={{color:this.props.color}}>
        <CustomBoothDesignIcon className="service-icon"/>
          NO<br/>pressure sale
        </li>
        <li style={{color:this.props.color}}>
        <CustomBoothDesignIcon className="service-icon"/>
          approve<br/>online
        </li>
        <li style={{color:this.props.color}}>
        <CustomBoothDesignIcon className="service-icon"/>
          save<br/>time
        </li>
        <li style={{color:this.props.color}}>
        <CustomBoothDesignIcon className="service-icon"/>
          save<br/>money
        </li>
      </ul>
      </section>
    );
  }
};

export default IconsBar;
