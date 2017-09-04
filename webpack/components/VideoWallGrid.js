import React, { Component } from 'react';
import SingleBooth from './SingleBooth';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import CollectBeforeQuote from './CollectBeforeQuote';
import InstaQuote from './presentational/InstaQuote';
import IconsBar from './presentational/IconsBar';

class VideoWallGrid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      individualVideoWallRender: this.props.individualVideoWallRender,
      singleValue: '',
      description: '',
      type: '',
      obj: '',
      images:[],
    };
    this.loadFromServer = this.loadFromServer.bind(this);
  }

  loadFromServer () {
       var xhr = new XMLHttpRequest();
       xhr.open('get', this.props.dataToLoad, true);
       xhr.onload = function() {
           var data = JSON.parse(xhr.responseText);
           this.setState({ data: data.items });
       }.bind(this);
       xhr.send();
   }

   componentDidMount() {
    this.loadFromServer();
  }

  generateSingleVideoWall(singleValue, description, obj, images, type){
    this.setState({
      singleValue: singleValue,
      description: description,
      obj: obj,
      images : images,
      type: type,
    })
    this.props.renderSingleVideoWall();
  }

  shouldIRender(videowall){
    if (videowall === "Tv" && !this.props.selectedTv) {
        return false;
    }
    else if (videowall === "LED" && !this.props.selectedLed) {
        return false;
    }
    else if (videowall === "LCD" && !this.props.selectedLcd) {
        return false;
    }
    return true;
  }

  render () {

    var doRenderVideoWalls = this.state.data.filter((item,index) => {
      if (this.shouldIRender(item.type) == false) {
        return false
      } else {
        return true
      }
    }).map((item, index) => (
      <li key={item.id}
          onClick={() => this.generateSingleVideoWall(item.id, item.description, item.obj, item.images, item.type)}
          className={"boothGridItem booth" + item.type}
          style={{backgroundImage: 'url(' + item.images[0].url + ')'}}>
          <label>{item.id}</label>
      </li>
    ));

    var singleVideowall = (
       <SingleBooth description={this.state.description}
                    singleValue={this.state.singleValue}
                    boothType={this.state.type}
                    obj={this.state.obj}
                    images={this.state.images}
                    doRenderInstaQuote={this.props.doRenderInstaQuote.bind(this)}/>
      );

    var gridChoice = (this.props.individualVideoWallRender ? singleVideoWall : doRenderVideoWalls);

    var quote = (
      <div>
      <div id="instaQuote">
      <InstaQuote images={this.state.images}
                  singleValue={this.state.singleValue}
                  type={this.state.type}
                  eventInVegas={this.props.eventInVegas}
                  revealInstaQuote={this.props.revealInstaQuote}
                  discountOn={this.props.discountOn}
                  discountNumber={this.props.discountNumber}
                  discountType={this.props.discountType}/>
        <CollectBeforeQuote
                  images={this.state.images}
                  singleValue={this.state.singleValue}
                  type={this.state.type}
                  eventInVegas={this.props.eventInVegas}
                  doRevealInstaQuote={this.props.doRevealInstaQuote.bind(this)}/>
      </div>
      <IconsBar/>
      </div>
    );

    var renderQuote = this.props.renderInstaQuote ? quote : undefined ;

    return (
      <div>
      <ul id="boothGrid">
        <CSSTransitionGroup transitionName="example"
                            transitionEnterTimeout={400}
                            transitionLeaveTimeout={400}>
          {gridChoice}
        </CSSTransitionGroup>
      </ul>
      {renderQuote}
      </div>
    );
  }
};

export default VideoWallGrid;
