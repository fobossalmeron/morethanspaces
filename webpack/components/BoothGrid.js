import React, { Component } from 'react';
import SingleBooth from './SingleBooth';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup'

class BoothGrid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      singleVisible: false,
      singleValue: '',
      description: '',
      obj: '',
      images:[]
    };
    this.loadFromServer = this.loadFromServer.bind(this);
  }

  generateSingleBooth(singleValue, description, obj, images){
    this.setState({
      singleVisible: true,
      singleValue: singleValue,
      description: description,
      obj: obj,
      images : images
    })
  }

  loadFromServer () {
       var xhr = new XMLHttpRequest();
       xhr.open('get', './assets/js/booths2.json', true);
       xhr.onload = function() {
           var data = JSON.parse(xhr.responseText);
           this.setState({ data: data.booths });

       }.bind(this);
       xhr.send();
   }

   componentDidMount() {
    this.loadFromServer();
  }

  handleBoothClick(){
    this.setState({ singleVisible: false });
  }

  //tienes que buscar en la base el mismo id y compararlo con cada uno de los ids

  render () {

    var allBooths = this.state.data.map((booth, index) => (
      <li key={booth.id} onClick={() => this.generateSingleBooth(booth.id, booth.description, booth.obj, booth.images)} className={"boothGridItem booth" + booth.type}>
            <img src={booth.images[0].url}/>
            <label>{booth.id}</label>
      </li>
     ));
     var singleBooth = (
       <SingleBooth handleBoothClick={this.handleBoothClick.bind(this)}
                        description={this.state.description}
                        singleValue={this.state.singleValue}
                        obj={this.state.obj}
                        images={this.state.images} />
      );

     var gridChoice = (this.state.singleVisible ? singleBooth : allBooths);
    return (
      <ul id="boothGrid">
      <CSSTransitionGroup
               transitionName="example"
               transitionEnterTimeout={500}
               transitionLeaveTimeout={300}>
               {gridChoice}
             </CSSTransitionGroup>
      </ul>
    );
  }
};

export default BoothGrid;
