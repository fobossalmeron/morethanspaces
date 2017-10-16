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
      images:[],
      tags: [],
      rent: '',
      size: '',
      diagonal: '',
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

  generateSingleVideoWall(singleValue, description, images, rent, size, diagonal, tags){
    this.setState({
      singleValue: singleValue,
      description: description,
      rent: rent,
      images : images,
      tags: tags,
      size: size,
      diagonal: diagonal
    })
    this.props.renderSingleVideoWall();
  }

  amITagged(videowall){
    if (videowall.includes("Tv") && this.props.selectedTv) {
        return true;
    }
    else if (videowall.includes("LED") && this.props.selectedLed) {
        return true;
    }
    else if (videowall.includes("LCD") && this.props.selectedLcd) {
        return true;
    }
    else if (videowall.includes("Custom")){
        return true;
    }
    return false;
  }

  render () {

    var doRenderVideoWalls = this.state.data.filter((item,index) => {
      if (this.amITagged(item.tags) == false) {
        return false
      } else if (item.featured == false) {
        return false
      } else {
        return true
      }
    }).map((item, index) => (
      <li key={item.id}
          onClick={() => this.generateSingleVideoWall(item.id, item.description, item.images, item.rent, item.size, item.diagonal, item.tags)}
          className={"boothGridItem"}
          style={{backgroundImage: 'url(' + item.images[0].url + ')'}}>
          <label>
            {item.id}
            {item.tags.map((tag, index) => <div className={"tagItem tag" + tag} key={"tagKeyVW" + index}>{tag.toLowerCase()}</div>)}
        </label>
      </li>
    ));

    var singleVideoWall = (
       <SingleItem  instaQuoteVideoWall={true}
                    description={this.state.description}
                    singleValue={this.state.singleValue}
                    tags={this.state.tags}
                    images={this.state.images}
                    no3D={true}
                    doRenderVideoWallInstaQuote={this.props.doRenderVideoWallInstaQuote.bind(this)}/>
      );

    var gridChoice = (this.props.individualVideoWallRender ? singleVideoWall : doRenderVideoWalls);

    var quote = (
      <div>
        <div className={"instaQuoteWhole"} id="videoWallInstaQuote">
        <InstaQuote images={this.state.images}
                    singleValue={this.state.singleValue}
                    tags={this.state.tags}
                    rent={this.state.rent}
                    size={this.state.size}
                    diagonal={this.state.diagonal}
                    eventInVegas={this.props.eventInVegas}
                    revealInstaQuote={this.props.revealInstaQuote}
                    discountOn={this.props.discountOn}
                    discountNumber={this.props.discountNumber}
                    discountType={this.props.discountType}
                    doRevealInstaQuote={this.props.doRevealInstaQuote.bind(this)}
                    hideCollectors={this.props.hideCollectors.bind(this)}
                    renderCollectors={this.props.renderCollectors}
                    generateUser={this.props.generateUser.bind(this)}
                    name={this.props.name}
                    email={this.props.email}
                    phone={this.props.phone}
                    weHaveUser={this.props.weHaveUser}/>
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
