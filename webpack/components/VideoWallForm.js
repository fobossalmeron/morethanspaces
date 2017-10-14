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
        <a onClick={() => this.resetQuoteCloseVideoWall()}>
          <div className="leaveOrStay">
            <ArrowBackIcon/>
            <b>back</b> to videowalls
          </div>
        </a>
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
               <h2 className="h2Magenta">LCD video wall</h2>
               <p><b>LCD</b> (Liquid Crystal Display) <b>video wall</b> is a <b>special multi-monitor setup</b> that consists of multiple television monitors tiled together contiguously or overlapped in order to form one large screen.<br/>
               <b>At More Than Spaces we have the thinnest bezel</b> in order to minimize the gap between active display areas. </p>
               <p className="spanMagenta">
               <b>LCD video walls are great for:</b>
               <ul>
                 <li><em>✔</em> conferences</li>
                 <li><em>✔</em> sales and marketing events</li>
                 <li><em>✔</em> sales and marketing events</li>
                 <li><em>✔</em> pharmaceutical meetings</li>
                 <li><em>✔</em> private business events</li>
                 <li><em>✔</em> company presentations </li>
               </ul>
               </p>

               <h2 className="h2Blue">LED video wall</h2>
               <p><b>LED</b> (Light Emitting Diode) <b>video walls</b> are <b>modules seamlessly tiled together to customized sizes.</b><br/>MoreThanSpaces use the highest quality LED products as well as the best pitches - all the way down to 2.5 millimeter; one of the best resolutions on the rental market.</p>
              <p className="spanMagenta spanBlue">
              <b>LED video walls are great for:</b>
              <ul>
                <li><em>✔</em> conferences</li>
                <li><em>✔</em> sales and marketing events</li>
                <li><em>✔</em> sales and marketing events</li>
                <li><em>✔</em> pharmaceutical meetings</li>
                <li><em>✔</em> private business events</li>
                <li><em>✔</em> company presentations </li>
              </ul>
              </p>

               <h2 className="h2Yellow">HD & 4K Monitors</h2>
               <p><b>HD</b> (High-Definition) & <b>4K</b> (Ultra High-Definition) <b>Monitors or TV’s</b> from the most well-known brands gives super sharp images - and all displays have build-in sound.</p>
               <p className="spanMagenta spanYellow">
               <b>HD & 4K Monitors are great for:</b>
               <ul>
                 <li><em>✔</em> conferences</li>
                 <li><em>✔</em> sales and marketing events</li>
                 <li><em>✔</em> sales and marketing events</li>
                 <li><em>✔</em> pharmaceutical meetings</li>
                 <li><em>✔</em> private business events</li>
                 <li><em>✔</em> company presentations </li>
                 <li><em>✔</em> digital signage at trade shows/conferences</li>
              </ul>
                </p>
             <CrossIcon className="modalCloseButton" onClick={this.handleCloseModal}/>
        </ReactModal>
      </div>
    )
  }
}
export default VideoWallForm;
