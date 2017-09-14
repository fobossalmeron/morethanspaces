import React, { Component } from 'react';
import CheckBox from './presentational/CheckBox';
import BlueSuggest from './presentational/BlueSuggest';
import MagentaSuggest from './presentational/MagentaSuggest';
import ReactModal from 'react-modal';
import ArrowBackIcon from 'svg-react-loader?name=ArrowBackIcon!../../assets/img/layout/arrowback.svg';
import CrossIcon from 'svg-react-loader?name=CrossIcon!../../assets/img/layout/cross.svg';

class VideoWallForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false
    };
    this.handleVideoWallToggle = this.handleVideoWallToggle.bind(this);
    this.doShip = this.doShip.bind(this);
    this.doNotShip = this.doNotShip.bind(this);
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
    this.resetQuoteCloseVideoWall = this.resetQuoteCloseVideoWall.bind(this);
  }

  resetQuoteCloseVideoWall(){
    this.props.closeSingleVideoWall();
    this.props.hideInstaQuote();
  }

  handleOpenModal () {
    this.setState({ showModal: true });
  }

  handleCloseModal () {
    this.setState({ showModal: false });
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
          <CheckBox onChange={this.handleVideoWallToggle} inputType="checkbox" nameFor="Tv" checkFor="tv" defaultChecked={this.props.selectedTv}/>
          <CheckBox onChange={this.handleVideoWallToggle} inputType="checkbox" nameFor="LED" checkFor="led" defaultChecked={this.props.selectedLed}/>
          <CheckBox onChange={this.handleVideoWallToggle} inputType="checkbox" nameFor="LCD" checkFor="lcd" defaultChecked={this.props.selectedLcd}/>
          <div className="blueSuggest whatDifferenceButton">
          <label onClick={() => this.handleOpenModal()}>what&#39;s the difference?</label>
          </div>
          <BlueSuggest/>
      </div>
    )
    var backToVideoWalls = (
      <div className="goBackContainer">
        <div className="leaveOrStay">
          <ArrowBackIcon/>
          <a onClick={() => this.resetQuoteCloseVideoWall()}><b>back</b> to videowalls</a>
        </div>
        <label>event location</label>
          <div className="quoteCheck">
            <input type="radio" id="Las Vegas" onClick={this.doNotShip} name={"inVegas"} defaultChecked={this.props.eventInVegas} />
            <label className="noMargin" htmlFor="Las Vegas">Las Vegas</label>
          </div>
          <div className="quoteCheck">
            <input type="radio" id="other" onClick={this.doShip} name={"inVegas"} defaultChecked={!this.props.eventInVegas} />
            <label className="noMargin" htmlFor="other">other</label>
          </div>
        <BlueSuggest/>
      </div>
    )
    var menuChoice = (this.props.individualVideoWallRender ? backToVideoWalls : videoWallMenu);
    return (
      <div>
        <div className="instaQuoteForm">
          {menuChoice}
        </div>
        <ReactModal
           overlayClassName={"modalOverlay"}
           className={"modalItself whatDifference"}
           isOpen={this.state.showModal}
           onRequestClose={this.handleCloseModal}
           contentLabel="What's the difference?">
             <img src="assets/img/layout/icons/lcd.svg"/>
             <h2>LCD video wall</h2>
             <p>LCD <b>video wall</b> is a special multi-monitor setup that consists of multiple television
             sets tiled together contiguously or overlapped in order to form one large screen.
             We have the <b>thinnest bezel</b> in order to minimize the gap between active display areas.<br/>
             LCD video walls have a broad area of usage from small meetings to large trade show application to
             engage your targeted audience.</p>
             <img src="assets/img/layout/icons/led.svg"/>
             <h2>LED video wall</h2>
             <p>LED is the acronym for Light Emitting Diode.<br/>
             Pitch is the distance between pixels, usually measured by millimeters.<br/>
             MoreThanSpaces use the highest quality LED products as well as the best pitches - all the way down
             to 2.5 pitch; one of the best resolutions on the rental market.</p>
             <img src="assets/img/layout/icons/tv.svg"/>
             <h2>TV’s</h2>
             <p>Television (TV) is a telecommunication medium used for transmitting moving images in color, and
             in two or three dimensions and sound.<br/>
             I mean common, its a TV :)</p>
             <CrossIcon className="modalCloseButton" onClick={this.handleCloseModal}/>
        </ReactModal>
      </div>
    )
  }
}
export default VideoWallForm;
