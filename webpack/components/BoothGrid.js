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
      type: '',
      obj: '',
      images:[],
      width: '',
      length: '',
      rent: '',
      own: '',
      tv:'',
      videowall: ''
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

  generateSingleItem(singleValue, description, obj, images, type, width, length, rent, own, tv, videowall){
    this.setState({
      singleValue: singleValue,
      description: description,
      type: type,
      obj: obj,
      images : images,
      width: width,
      length: length,
      rent: rent,
      own: own,
      tv:tv,
      videowall: videowall
    })
    this.props.renderSingleBooth();
  }

  shouldIRender(booth){
    if (booth === "Island" && !this.props.selectedIsland) {
        return false;
    }
    else if (booth === "SplitIsland" && !this.props.selectedSplitIsland) {
        return false;
    }
    else if (booth === "Peninsula" && !this.props.selectedPeninsula) {
        return false;
    }
    else if (booth === "Inline" && !this.props.selectedInline) {
        return false;
    }
    return true;
  }

  shouldIFit(sizeW, sizeL){
    if ((this.props.boothSizeLength === sizeL || this.props.boothSizeLength === "All") &&
        (this.props.boothSizeWidth === sizeW || this.props.boothSizeWidth === "All")){
       return true
    }
       return false
    }

  render () {

    var doRenderBooths = this.state.data.filter((item,index) => {
      if (this.shouldIRender(item.type) == false || this.shouldIFit(item.width, item.length) == false) {
        return false
      } else {
        return true
      }
    }).map((item, index) => (
      <li key={item.id}
          onClick={() => this.generateSingleItem(item.id, item.description, item.obj, item.images, item.type, item.width, item.length, item.rent, item.own, item.tv, item.videowall)}
          className={"boothGridItem booth" + item.type}
          style={{backgroundImage: 'url(' + item.images[0].url + ')'}}>
          <label>{item.id}</label>
      </li>
    ));

    var singleBooth = (
       <SingleItem description={this.state.description}
                    singleValue={this.state.singleValue}
                    type={this.state.type}
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
                  type={this.state.type}
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
                  renderCollectors={this.props.renderCollectors}/>
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
