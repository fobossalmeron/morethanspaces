import React, { Component } from 'react';
import CheckBox from './presentational/CheckBox';
import BlueSuggest from './presentational/BlueSuggest';
import MagentaSuggest from './presentational/MagentaSuggest';
import ReactModal from 'react-modal';
import ArrowBackIcon from 'svg-react-loader?name=ArrowBackIcon!../../assets/img/layout/arrowback.svg';

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
          <div className="blueSuggest">
          <label onClick={() => this.handleOpenModal()}>what&#39;s the difference?</label>
          </div>
          <BlueSuggest/>
      </div>
    )
    var backToVideoWalls = (
      <div className="goBackContainer">
        <div className="leaveOrStay">
          <ArrowBackIcon/>
          <a onClick={() => this.props.closeSingleVideoWall()}><b>back</b> to videowalls</a>
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
           className={"modalItself"}
           isOpen={this.state.showModal}
           onRequestClose={this.handleCloseModal}
           contentLabel="What's the difference?">
           <img src={"assets/img/layout/videotypes.png"} />
           <button className="modalCloseButton" onClick={this.handleCloseModal}></button>
        </ReactModal>
      </div>
    )
  }
}
export default VideoWallForm;
