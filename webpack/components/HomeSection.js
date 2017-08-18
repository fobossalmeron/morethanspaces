import React, { Component } from 'react';

class HomeSection extends Component {
  componentDidMount() {
  }
  render (){
    return (
      <section id="homesection">
        <div id="homevideo">
          <iframe src="https://player.vimeo.com/video/230048827?color=ffffff&title=0&byline=0&portrait=0" frameBorder="0" allowFullScreen></iframe>
        </div>
      </section>
    );
  }
};

export default HomeSection;
