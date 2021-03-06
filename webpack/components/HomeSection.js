import React, { Component } from 'react';
import ReactPlayer from 'react-player';
import screenfull from 'screenfull';
import CloseIcon from 'svg-react-loader?name=CloseIcon!../../assets/img/layout/cross.svg';
import PauseIcon from 'svg-react-loader?name=PauseIcon!../../assets/img/layout/pause.svg';
import ArrowForwardIcon from 'svg-react-loader?name=ArrowForwardIcon!../../assets/img/layout/arrowforward.svg';

class HomeSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullVideo: false,
      playing: false,
      loop: true,
      muted: true,
      playsinline: true,
      url: 'assets/video/intro.mp4',
      playerKey: 'oneKey'
    };
  this.playFullVideo = this.playFullVideo.bind(this);
  this.backToLanding = this.backToLanding.bind(this);
  this.playVideo = this.playVideo.bind(this);
  this.mobilePlayVideo = this.mobilePlayVideo.bind(this);
  this.pauseVideo = this.pauseVideo.bind(this);
  }

  playVideo(){
    this.setState({
      playing: true
    })
  }

  mobilePlayVideo(){
    document.getElementById("pauseMe").click();
    setTimeout(function(){document.getElementById("playMe").click();}, 500)
    document.getElementById("playForMobile").classList.add("destroy");
    const el = document.getElementById('#homevideo video');
    if (screenfull.enabled) {
      screenfull.request(el);
    }
  }

  changeKey(){
    this.setState({
      playerKey: 'twoKey'
    })
  }

  playFullVideo(){
    this.setState({
      url: "assets/video/full.mp4",
      playsinline: false,
      fullVideo: true,
      loop: false,
      muted: false
    }, () => this.changeKey())
    this.playVideo()
  }

  backToLanding(){
    this.setState({
      url: 'assets/video/intro.mp4',
      fullVideo: false,
      playsinline: true,
      loop: true,
      muted: true,
      playerKey: 'oneKey'
    })
  }

  pauseVideo(){
    this.setState({
      playing: false
    })
  }
  componentDidMount(){
    this.setState({playing:true})
  }
  componentWillReceiveProps(nextProps){

  }
  render (){
    var showOver = (
      <div className='overVideo'>
        <h1>trade shows <br/>& video walls: <br/><b>more for less</b></h1>
        <button onClick={this.playFullVideo}>play video <ArrowForwardIcon className="spaceLeft"/></button>
      </div>
    )
    var pauseOrPlay = (
      this.state.playing? <button id="pauseMe" onClick={this.pauseVideo}><PauseIcon/></button> : <button id="playMe" onClick={this.playVideo}><ArrowForwardIcon/></button>
    )

    var videoControls = (
      <div>
        <div onClick={this.mobilePlayVideo} id='playForMobile'><ArrowForwardIcon/></div>
        <div className='overVideo controllsVideo'>
            <button onClick={this.backToLanding}><CloseIcon/></button>
            {pauseOrPlay}
        </div>
      </div>
    )

    var doShowOver = (this.state.fullVideo? videoControls : showOver)
    return (
      <section id="home">
        {doShowOver}
        <div id="homevideo">
            <div className="video_overlay"></div>
            <ReactPlayer key={this.state.playerKey} url={this.state.url} playing={this.state.playing} loop={this.state.loop} muted={this.state.muted} playsinline={this.state.playsinline} onEnded={this.backToLanding}/>
        </div>
      </section>
    );
  }
};

export default HomeSection;
