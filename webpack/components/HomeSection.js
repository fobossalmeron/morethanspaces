import React, { Component } from 'react';
import ReactPlayer from 'react-player';

class HomeSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullVideo: false,
      videoVolume: 0,
      url: "intro.mp4"
    };
  this.playFullVideo = this.playFullVideo.bind(this);
  this.backToLanding = this.backToLanding.bind(this);
  }

  playFullVideo(){
    this.setState({
      url : "full.mp4",
      fullVideo: true,
      videoVolume: 1
    }, () => console.log(this.state.fullVideo))
  }
  backToLanding(){
    this.setState({
      url: 'intro.mp4',
      fullVideo: false,
      videoVolume: 0
    })
  }
  render (){
    var showOver = (
      <div className='overVideo'>
        <h1>trade shows & video walls: <br/>you deserve <b>more - for less</b></h1>
        <button onClick={this.playFullVideo}>watch our video!</button>
      </div>
    )
    var videoControls = (
      <div className='overVideo controllsVideo'>
        <button onClick={this.backToLanding}>close</button>
      </div>
    )

    var doShowOver = (this.state.fullVideo? videoControls : showOver )

    return (
      <section id="home">
        {doShowOver}
        <div id="homevideo">
            <div className="video_overlay"></div>
            <ReactPlayer url={'/morethanspaces/assets/video/' + this.state.url} playing loop={true} volume={this.state.volume} onEnded={() => this.backToLanding}/>
        </div>
      </section>
    );
  }
};

export default HomeSection;
