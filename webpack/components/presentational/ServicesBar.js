import React, { Component } from 'react';
import CustomBoothDesignIcon from 'svg-react-loader?name=CustomBoothDesignIcon!../../../assets/img/layout/icons/customboothdesign.svg';
import BoothRentalsIcon from 'svg-react-loader?name=BoothRentalsIcon!../../../assets/img/layout/icons/boothrentals.svg';
import AudioVisualIcon from 'svg-react-loader?name=BoothRentalsIcon!../../../assets/img/layout/icons/audiovisual.svg';
import CustomRentalBoothIcon from 'svg-react-loader?name=CustomRentalBoothIcon!../../../assets/img/layout/icons/customrentalbooths.svg';
import AssembleDismantleIcon from 'svg-react-loader?name=AssembleDismantleIcon!../../../assets/img/layout/icons/assembledismantle.svg';
import StorageShippingIcon from 'svg-react-loader?name=StorageShippingIcon!../../../assets/img/layout/icons/storageshipping.svg';
import VideoWallIcon from 'svg-react-loader?name=VideoWallIcon!../../../assets/img/layout/icons/videowall.svg';

class ServicesBar extends Component {
  componentDidMount(){
    var controllerServices = new ScrollMagic.Controller({globalSceneOptions: {triggerHook: .5}});
    var service7 = new ScrollMagic.Scene({triggerElement: "#servicesBar", offset:-150})
            .setClassToggle( "#servicesBar", "revealIcon")
            .addTo(controllerServices);
  }

  render (){
    return (
      <section id="servicesBar" className="iconsBar iconsBarServices" style={{backgroundColor:this.props.backgroundColor}}>
      <ul>
        <li style={{color:this.props.color}}>
        <BoothRentalsIcon className="service-icon"/>
          rental<br/>booths
        </li>
        <li style={{color:this.props.color}}>
        <CustomRentalBoothIcon className="service-icon"/>
          custom rental<br/> booths
        </li>
        <li style={{color:this.props.color}}>
        <CustomBoothDesignIcon className="service-icon"/>
          custom booth<br/>design
        </li>
        <li style={{color:this.props.color}}>
        <VideoWallIcon className="service-icon"/>
          video<br/>wall
        </li>
        <li style={{color:this.props.color}}>
        <AssembleDismantleIcon className="service-icon"/>
          assembly<br/>dismantle
        </li>
        <li style={{color:this.props.color}}>
        <StorageShippingIcon className="service-icon"/>
          storage<br/>shipping
        </li>
      </ul>
      </section>
    );
  }
};

export default ServicesBar;
