import React, { Component } from 'react';
import CustomBoothDesignIcon from 'svg-react-loader?name=CustomBoothDesignIcon!../../../assets/img/layout/icons/customboothdesign.svg';
import FreeDesignConsultationIcon from 'svg-react-loader?name=FreeDesignConsultationIcon!../../../assets/img/layout/icons/freedesignconsultation.svg';
import NoPressureSaleIcon from 'svg-react-loader?name=NoPressureSaleIcon!../../../assets/img/layout/icons/nopressuresale.svg';
import ApproveOnlineIcon from 'svg-react-loader?name=ApproveOnlineIcon!../../../assets/img/layout/icons/approveonline.svg';
import SaveTimeIcon from 'svg-react-loader?name=SaveTimeIcon!../../../assets/img/layout/icons/savetime.svg';
import SaveMoneyIcon from 'svg-react-loader?name=SaveMoneyIcon!../../../assets/img/layout/icons/savemoney.svg';


class IconsBar extends Component {

  render (){
    return (
      <section className="iconsBar" style={{backgroundColor:this.props.backgroundColor}}>
      <ul>
        <li style={{color:this.props.color}}>
        <FreeDesignConsultationIcon className="service-icon"/>
          free design<br/>consultation
        </li>
        <li style={{color:this.props.color}}>
        <NoPressureSaleIcon className="service-icon"/>
          NO<br/>pressure sale
        </li>
        <li style={{color:this.props.color}}>
        <ApproveOnlineIcon className="service-icon"/>
          approve<br/>online
        </li>
        <li style={{color:this.props.color}}>
        <SaveTimeIcon className="service-icon"/>
          save<br/>time
        </li>
        <li style={{color:this.props.color}}>
        <SaveMoneyIcon className="service-icon"/>
          save<br/>money
        </li>
      </ul>
      </section>
    );
  }
};

export default IconsBar;
