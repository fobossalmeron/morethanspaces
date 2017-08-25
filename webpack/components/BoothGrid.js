import React, { Component } from 'react';
import SingleBooth from './SingleBooth';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup'

class BoothGrid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      individualBoothRender: this.props.individualBoothRender,
      singleValue: '',
      description: '',
      boothType: '',
      obj: '',
      images:[]
    };
    this.loadFromServer = this.loadFromServer.bind(this);
  }

  loadFromServer () {
       var xhr = new XMLHttpRequest();
       xhr.open('get', './assets/js/database.json', true);
       xhr.onload = function() {
           var data = JSON.parse(xhr.responseText);
           this.setState({ data: data.booths });

       }.bind(this);
       xhr.send();
   }

   componentDidMount() {
    this.loadFromServer();
  }

  generateSingleBooth(singleValue, description, obj, images, boothType){
    this.setState({
      singleValue: singleValue,
      description: description,
      boothType: boothType,
      obj: obj,
      images : images
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

    var doRenderBooths = this.state.data.filter((booth,index) => {
      if (this.shouldIRender(booth.type) == false || this.shouldIFit(booth.width, booth.length) == false) {
        return false
      } else {
        return true
      }
    }).map((booth, index) => (
      <li key={booth.id}
          onClick={() => this.generateSingleBooth(booth.id, booth.description, booth.obj, booth.images, booth.type)}
          className={"boothGridItem booth" + booth.type}
          style={{backgroundImage: 'url(' + booth.images[0].url + ')'}}>
          <label>{booth.id}</label>
      </li>
    ));

    var singleBooth = (
       <SingleBooth description={this.state.description}
                    singleValue={this.state.singleValue}
                    boothType={this.state.boothType}
                    obj={this.state.obj}
                    images={this.state.images} />
      );

    var gridChoice = (this.props.individualBoothRender ? singleBooth : doRenderBooths);

    return (
      <ul id="boothGrid">
        <CSSTransitionGroup transitionName="example"
                            transitionEnterTimeout={400}
                            transitionLeaveTimeout={400}>
          {gridChoice}
        </CSSTransitionGroup>
      </ul>
    );
  }
};

export default BoothGrid;
