import React, { Component } from 'react';
import ReactPlayer from 'react-player';

class HomeSection extends Component {

  render (){

    return (
      <section id="home">
        <h1>trade shows & video walls: <br/>you deserve <b>more - for less</b></h1>
        <div id="homevideo">
            <div className="video_overlay"></div>
            <ReactPlayer url='/morethanspaces/assets/video/intro.mp4' playing loop={true} volume={0}/>
        </div>
      </section>
    );
  }
};

export default HomeSection;
