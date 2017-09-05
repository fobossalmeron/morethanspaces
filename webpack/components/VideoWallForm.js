import React, { Component } from 'react';
import CheckBox from './presentational/CheckBox';
import Arrow from './presentational/Arrow';
import ReactModal from 'react-modal';

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
          <CheckBox onChange={this.handleVideoWallToggle} inputType="checkbox" classList="formCheck" nameFor="Tv" checkFor="tv" defaultChecked="checked"/>
          <CheckBox onChange={this.handleVideoWallToggle} inputType="checkbox" classList="formCheck" nameFor="LED" checkFor="led" defaultChecked="checked"/>
          <CheckBox onChange={this.handleVideoWallToggle} inputType="checkbox" classList="formCheck" nameFor="LCD" checkFor="lcd" defaultChecked="checked"/>
          <div className="blueSuggest">
          <label onClick={() => this.handleOpenModal()}>what&#39;s the difference?</label>
          </div>
      </div>
    )
    var backToVideoWalls = (
      <div className="goBackContainer">
        <div className="leaveOrStay">
          <Arrow className={"new-arrow"} color={"#f9f9f9"} width={"25px"}/>
          <a onClick={() => this.props.closeSingleVideoWall()}><b>back</b> to videowalls</a>
        </div>
        <label>event location</label>
          <div className="formCheck quoteCheck">
            <input type="radio" id="Las Vegas" onClick={this.doNotShip} name={"inVegas"} defaultChecked={true} />
            <label className="noMargin" htmlFor="Las Vegas">Las Vegas</label>
          </div>
          <div className="formCheck quoteCheck">
            <input type="radio" id="else" onClick={this.doShip} name={"inVegas"} defaultChecked={false} />
            <label className="noMargin" htmlFor="else">else</label>
          </div>
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
      <div>
        <div className="instaQuoteForm">
          {menuChoice}
        </div>
        <ReactModal
           overlayClassName={"modalOverlay"}
           className={"modalItself"}
           isOpen={this.state.showModal}
           onRequestClose={this.handleCloseModal}
           closeTimeoutMS={500}
           contentLabel="What's the difference?">
           <img src={"assets/img/layout/videotypes.png"} />
           <button className="modalCloseButton" onClick={this.handleCloseModal}></button>
        </ReactModal>
      </div>
    )
  }
}
export default VideoWallForm;
