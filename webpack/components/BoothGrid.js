import React, { Component } from 'react';
import SingleItem from './SingleItem';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import InstaQuote from './presentational/InstaQuote';
import IconsBar from './presentational/IconsBar';

class BoothGrid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      individualBoothRender: this.props.individualBoothRender,
      singleValue: '',
      description: '',
      tags: [],
      obj: '',
      images:[],
      width: '',
      length: '',
      rent: '',
      own: ''
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

  generateSingleItem(singleValue, description, obj, images, width, length, rent, own, tags){
    this.setState({
      singleValue: singleValue,
      description: description,
      tags: tags,
      obj: obj,
      images : images,
      width: width,
      length: length,
      rent: rent,
      own: own,
    })
    this.props.renderSingleBooth();
  }

  amITagged(booth){
    if (booth.includes("Island") && this.props.selectedIsland) {
        return true;
    }
    else if (booth.includes("Split-Island") && this.props.selectedSplitIsland) {
        return true;
    }
    else if (booth.includes("Perimeter") && this.props.selectedPerimeter) {
        return true;
    }
    else if (booth.includes("Inline") && this.props.selectedInline) {
        return true;
    }
    else if (booth.includes("Custom")){
        return true;
    }
    return false;
  }

  shouldIFit(sizeW, sizeL, tags){
    if (tags.includes("Custom")){
      return true;
    } else if ((this.props.boothSizeLength === sizeL || this.props.boothSizeLength === "All") &&
        (this.props.boothSizeWidth === sizeW || this.props.boothSizeWidth === "All")){
       return true;
    } else if ((this.props.boothSizeLength === sizeW || this.props.boothSizeLength === "All") &&
               (this.props.boothSizeWidth === sizeL || this.props.boothSizeWidth === "All")){
       return true;
    }
       return false;
    }

  render () {
    var doRenderBooths = this.state.data.filter((item,index) => {
      if (this.amITagged(item.tags) == false || this.shouldIFit(item.width, item.length, item.tags) == false) {
        return false
      } else if (item.featured == false) {
        return false
      } else {
        return true
      }
    }).map((item, index) => (
      <li key={item.id}
          onClick={() => this.generateSingleItem(item.id, item.description, item.obj, item.images, item.width, item.length, item.rent, item.own, item.tags)}
          className={"boothGridItem"}>
          <img src={'/' + item.images[0].url} alt={item.id}/>
          <label>
            {item.id}
            {item.tags.map((tag, index) => <div className={"tagItem tag" + tag} key={"tagKey" + index}>{tag.toLowerCase()}</div>)}
         </label>
      </li>
    ));

    var singleBooth = (
       <SingleItem  description={this.state.description}
                    singleValue={this.state.singleValue}
                    tags={this.state.tags}
                    obj={this.state.obj}
                    images={this.state.images}
                    doRenderBoothInstaQuote={this.props.doRenderBoothInstaQuote.bind(this)}/>
      );

    var gridChoice = (this.props.individualBoothRender ? singleBooth : doRenderBooths);

    var quote = (
      <div>
      <div className={"instaQuoteWhole"} id="boothInstaQuote">
      <InstaQuote images={this.state.images}
                  singleValue={this.state.singleValue}
                  tags={this.state.tags}
                  wantToOwn={this.props.wantToOwn}
                  addTv={this.props.addTv}
                  addVideoWall={this.props.addVideoWall}
                  eventInVegas={this.props.eventInVegas}
                  width={this.state.width}
                  length={this.state.length}
                  rent={this.state.rent}
                  own={this.state.own}
                  tv={this.state.tv}
                  videowall={this.state.videowall}
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

    var renderQuote = this.props.renderBoothInstaQuote ? quote : undefined ;
    var overflow = (this.props.individualBoothRender ? 'overflowVisible' : '');
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

export default BoothGrid;
