import React, { Component } from 'react';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import SketchFab from './SketchFab';
import CheckBox from './presentational/CheckBox';
import Slider from 'react-slick';
import Arrow from './presentational/Arrow';

function SampleNextArrow(props) {
  const {className, style, onClick} = props
  return (
      <div id={"nextArrow"} onClick={onClick}>
        <Arrow className={"arrow-icon next-arrow"} forward color={"#ec3092"} width={"25px"}/>
      </div>
  );
}

function SamplePrevArrow(props) {
  const {className, style, onClick} = props
  return (
    <div id={"prevArrow"} onClick={onClick}>
      <Arrow className={"arrow-icon"} color={"#ec3092"} width={"25px"}/>
    </div>
  );
}

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

  nextStepCollector(event){
    this.props.doRenderCollector();
  }

  handleView(value){
    value !== "3D" ?
    this.setState({mainImage: this.props.images[value].url, render3D:false}) : this.setState({render3D:true})
  }

  render() {
    const settings = {
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: false,
      draggable: false,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />
    };

    var backgroundStyle = {
      backgroundImage: 'url(' + this.state.mainImage + ')',
    };
    var choice3D = (this.state.render3D ? <SketchFab/> : null);

    var numberOfImages = this.props.images.map((image, index) => (
      <img key={image.url} className="thumbnailBooth" onClick={() => this.handleView(index)} src={this.props.images[index].url}/>
    ));

    var imageOptions = (
      <div className="singleImage">
          <div className="visualizer" id="visualizer" style={backgroundStyle}>
            { choice3D }
          </div>
          <Slider {...settings}>
              <img className="thumbnailBooth" onClick={() => this.handleView("3D")} src="assets/img/3dTrigger.svg"/>
              {numberOfImages}
          </Slider>
      </div>
    );
    var button = (
      <button onClick={() => this.nextStepCollector()} className="instaQuoteButton">get instaQuote</button>
    )

    return (
      <div className="singleBooth">
        {imageOptions}
        <div className="singleInfo">
          <h3>{this.props.singleValue}</h3>
          <div className={"insertPadding booth" + this.props.boothType}>
          <label></label>
          </div>
          <p>{this.props.description}</p>
          <CheckBox inputType="checkbox" classList="addOnCheck" nameFor="TV" checkFor="TV"/>
          <label>add TV(s)</label>
          <CheckBox inputType="checkbox" classList="addOnCheck" nameFor="videoWall" checkFor="videoWall"/>
          <label>add videowall</label>
          {button}
        </div>
      </div>
    )
  }
}

export default SingleBooth;
