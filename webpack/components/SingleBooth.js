import React, { Component } from 'react';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import SketchFab from './SketchFab';
import Button from './Button';
import FormCheckBox from './FormCheckBox';


class SingleBooth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mainImage: '',
      render3D: false
    };
  }
  componentDidMount() {
   this.setState({
     mainImage: this.props.images[0].url
    });
  }

  handleView(value){
    value !== "3D" ?
    this.setState({mainImage: this.props.images[value].url, render3D:false}) : this.setState({render3D:true})
  }

  render() {
    var backgroundStyle = {
      backgroundImage: 'url(' + this.state.mainImage + ')',
    };
    var choice3D = (this.state.render3D ? <SketchFab/> : null);

    var imageOptions = (
      <div className="singleImage">
          <div className="visualizer" id="visualizer" style={backgroundStyle}>{ choice3D }</div>
          <img className="thumbnailBooth" onClick={() => this.handleView("3D")} src="assets/img/3dTrigger.svg"/>
          <img className="thumbnailBooth" onClick={() => this.handleView(0)} src={this.props.images[0].url}/>
          <img className="thumbnailBooth" onClick={() => this.handleView(1)} src={this.props.images[1].url}/>
          <img className="thumbnailBooth noMarginRight" onClick={() => this.handleView(2)} src={this.props.images[2].url}/>
      </div>
    );
    return (
      <div className="singleBooth">
        {imageOptions}
        <div className="singleInfo">
          <h3>{this.props.singleValue}</h3>
          <span onClick={() => this.props.closeIndividualBooth()}>&#8592; (Back to booths)</span>
          <p>{this.props.description}</p>
          <FormCheckBox inputType="checkbox" classList="addOnCheck" nameFor="TV" checkFor="TV"/>
          <label>add TV</label>
          <FormCheckBox inputType="checkbox" classList="addOnCheck" nameFor="videoWall" checkFor="videoWall"/>
          <label>add videowall</label>
          <Button buttonText="get InstaQuote"/>
        </div>
      </div>
    )
  }
}

export default SingleBooth;
