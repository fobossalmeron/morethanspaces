import React, { Component } from 'react';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import Object3D from './Object3D';


class SingleBooth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      main: '',
      render3D: false
    };
  }
  componentDidMount() {
   this.setState({
     main: this.props.images[0].url
    });
  }

  handleView(value){
    value !== "3D" ?
    this.setState({main: this.props.images[value].url, render3D:false}) : this.setState({render3D:true})
  }

  render() {
    var backgroundStyle = {
      backgroundImage: 'url(' + this.state.main + ')',
    };
    var object3D = (
      <Object3D/>
          )
    var choice3D = (this.state.render3D ? object3D : null);
    var imageOptions = (
      <div className="singleImage">
          <div className="visualizer" id="visualizer" style={backgroundStyle}>{ choice3D }</div>
          <img className="thumbnailBooth" onClick={() => this.handleView("3D")} src="assets/img/3dTrigger.svg"/>
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
          <span onClick={() => this.props.handleBoothClick()}>&#8592; (Back to booths)</span>
          <p>{this.props.description}</p>
        </div>
      </div>
    )
  }
}

export default SingleBooth;
