import React, { Component } from 'react';
import SingleItem from './SingleItem';
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
      obj: '',
      images:[],
      type: '',
      rent: '',
      size: ''
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

  generateSingleVideoWall(singleValue, description, obj, images, type, rent, size){
    this.setState({
      singleValue: singleValue,
      description: description,
      obj: obj,
      rent: rent,
      images : images,
      type: type,
      size: size
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
          onClick={() => this.generateSingleVideoWall(item.id, item.description, item.obj, item.images, item.type, item.rent, item.size)}
          className={"boothGridItem booth" + item.type}
          style={{backgroundImage: 'url(' + item.images[0].url + ')'}}>
          <label>{item.id}</label>
      </li>
    ));

    var singleVideoWall = (
       <SingleItem instaQuoteVideoWall={true}
                    description={this.state.description}
                    singleValue={this.state.singleValue}
                    type={this.state.type}
                    obj={this.state.obj}
                    images={this.state.images}
                    doRenderVideoWallInstaQuote={this.props.doRenderVideoWallInstaQuote.bind(this)}/>
      );

    var gridChoice = (this.props.individualVideoWallRender ? singleVideoWall : doRenderVideoWalls);

    var quote = (
      <div>
        <div className={"instaQuoteWhole"} id="videoWallInstaQuote">
        <InstaQuote images={this.state.images}
                    singleValue={this.state.singleValue}
                    type={this.state.type}
                    rent={this.state.rent}
                    size={this.state.size}
                    eventInVegas={this.props.eventInVegas}
                    revealInstaQuote={this.props.revealInstaQuote}
                    discountOn={this.props.discountOn}
                    discountNumber={this.props.discountNumber}
                    discountType={this.props.discountType}
                    doRevealInstaQuote={this.props.doRevealInstaQuote.bind(this)}
                    hideCollectors={this.props.hideCollectors.bind(this)}
                    renderCollectors={this.props.renderCollectors}
                    generateUser={this.props.generateUser.bind(this)}/>
        </div>
        <IconsBar className={"iconsBarQuote"}/>
      </div>
    );

    var renderQuote = this.props.renderVideoWallInstaQuote ? quote : undefined ;
    var overflow = (this.props.individualVideoWallRender ? 'overflowVisible' : '');

    return (
      <div>
      <ul id="boothGrid" className={overflow}>
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
