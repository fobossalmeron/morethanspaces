import React, { Component } from 'react';
import CheckBox from './presentational/CheckBox';
import Arrow from './presentational/Arrow';

class VideoWallForm extends Component {
  constructor(props) {
    super(props);
    this.handleVideoWallToggle = this.handleVideoWallToggle.bind(this);
    this.doShip = this.doShip.bind(this);
    this.doNotShip = this.doNotShip.bind(this);
  }

  doShip(){
    this.props.needShipping();
  }
  doNotShip(){
    this.props.noNeedShipping();
  }

  handleVideoWallToggle(event){
    this.props.toggleVideoWall(event.target.name);
  }

  render(){
    var videoWallMenu = (
      <div>
        <label>choose type</label>
          <CheckBox onChange={this.handleVideoWallToggle} inputType="checkbox" classList="formCheck" nameFor="Tv" checkFor="tv" checked="checked"/>
          <CheckBox onChange={this.handleVideoWallToggle} inputType="checkbox" classList="formCheck" nameFor="LED" checkFor="led" checked="checked"/>
          <CheckBox onChange={this.handleVideoWallToggle} inputType="checkbox" classList="formCheck" nameFor="LCD" checkFor="lcd" checked="checked"/>
      </div>
    )
    var backToVideoWalls = (
      <div className="goBackContainer">
        <div className="leaveOrStay">
          <Arrow className={"new-arrow"} color={"#f9f9f9"} width={"25px"}/>
          <a onClick={() => this.props.closeSingleVideoWall()}><b>back</b> to videowalls</a>
        </div>
        <label>event location</label>
          <CheckBox onClick={this.doNotShip} inputType="radio" classList="formCheck" nameFor="inVegas" checked="checked" checkFor="Las Vegas"/>
          <CheckBox onClick={this.doShip} inputType="radio" classList="formCheck" nameFor="inVegas" checkFor="else"/>
        <div className="blueSuggest">
        <label>can&#39;t find &#39;your thing&#39;?</label>
          <p>no problem!<br/>
          We have 100&#39;s of other cool solutions.</p>
          <a href="#contact">free friendly service <Arrow className={"playButtonArrow"} forward/></a>
        </div>
      </div>
    )
    var menuChoice = (this.props.individualVideoWallRender ? backToVideoWalls : videoWallMenu);
    return (
      <div className="instaQuoteForm">
        {menuChoice}
      </div>
    )
  }
}
export default VideoWallForm;
