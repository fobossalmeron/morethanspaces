import React, { Component } from 'react';

class SingleBooth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      main: ''
    };
  }
  componentDidMount() {
   this.setState({
     main: this.props.images[0].url
    });
  }

  handleView(value){
    value !== "3d" ?
    this.setState({
      main: this.props.images[value].url
    }) : console.log("value is 3d");
  }

  render() {

    var imageOptions = (
      <div className="singleImage">
        <img src={this.state.main}/>
          <img className="thumbnailBooth" onClick={() => this.handleView("3d")} src="assets/img/3dTrigger.svg"/>
          <img className="thumbnailBooth" onClick={() => this.handleView(0)} src={this.props.images[0].url}/>
          <img className="thumbnailBooth" onClick={() => this.handleView(1)} src={this.props.images[1].url}/>
          <img className="thumbnailBooth" onClick={() => this.handleView(2)} src={this.props.images[2].url}/>
      </div>
    );
    return (
      <div className="singleBooth">
        {imageOptions}
        <div className="singleInfo">
          <h3>{this.props.singleValue}</h3>
          <span onClick={() => this.props.handleBoothClick()}>(Back to booths)</span>
          <p>{this.props.description}</p>
        </div>
      </div>
    )
  }
}


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
    console.log("successfully loaded " + singleValue);
    console.log(obj);
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
          {gridChoice}
      </ul>
    );
  }
};

export default BoothGrid;
