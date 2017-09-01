import React, { Component } from 'react';
import ReactPlayer from 'react-player';
import Arrow from './presentational/Arrow';

class HomeSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullVideo: false,
      playing: true,
      videoVolume: 0,
      urlVimeo: "https://vimeo.com/231768380",
      url: '/morethanspaces/assets/video/intro.mp4',
    };
  this.playFullVideo = this.playFullVideo.bind(this);
  this.backToLanding = this.backToLanding.bind(this);
  this.playVideo = this.playVideo.bind(this);
  this.pauseVideo = this.pauseVideo.bind(this);
  }

  playFullVideo(){
    this.setState({
      urlVimeo: "https://vimeo.com/231768166",
      url: "/morethanspaces/assets/video/full.mp4",
      fullVideo: true,
      videoVolume: 1
    }, () => console.log(this.state.fullVideo))
  }
  backToLanding(){
    this.setState({
      urlVimeo: "https://vimeo.com/231768380",
      url: '/morethanspaces/assets/video/intro.mp4',
      fullVideo: false,
      videoVolume: 0
    })
  }
  playVideo(){
    this.setState({
      playing: true
    })
  }
  pauseVideo(){
    this.setState({
      playing: false
    })
  }
  render (){
    var showOver = (
      <div className='overVideo'>
        <h1>trade shows & video walls: <br/><b>more for less</b></h1>
        <button onClick={this.playFullVideo}>play video <Arrow className={"playButtonArrow"} forward width={"30px"}/></button>
      </div>
    )
    var pauseOrPlay = (
      this.state.playing? <button onClick={this.pauseVideo}>pause</button> : <button onClick={this.playVideo}>play</button>
    )

    var videoControls = (
      <div className='overVideo controllsVideo'>
          <button onClick={this.backToLanding}>close</button>
          {pauseOrPlay}
      </div>
    )

    var doShowOver = (this.state.fullVideo? videoControls : showOver )

    return (
      <section id="home">
        {doShowOver}
        <div id="homevideo">
            <div className="video_overlay"></div>
            <ReactPlayer url={this.state.url} playing={this.state.playing} loop={true} volume={this.state.volume} onEnded={() => this.backToLanding}/>
        </div>
      </section>
    );
  }
};

export default HomeSection;
