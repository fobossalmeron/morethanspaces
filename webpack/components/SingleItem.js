import React, { Component } from 'react';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import SketchFab from './SketchFab';
import Slider from 'react-slick';
import Arrow from './presentational/Arrow';
import DangerouslySet from './presentational/DangerouslySet';

function SampleNextArrow(props) {
  const {className, style, onClick} = props
  return (
      <div id={"nextArrow"} onClick={onClick}>
        <Arrow className={"arrow-icon next-arrow"} forward color={"#ec3092"} width={"30px"}/>
      </div>
  );
}

function SamplePrevArrow(props) {
  const {className, style, onClick} = props
  return (
    <div id={"prevArrow"} onClick={onClick}>
      <Arrow className={"arrow-icon"} color={"#ec3092"} width={"30px"}/>
    </div>
  );
}

class SingleItem extends Component {
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
  nextStepBoothInstaQuote(event){
    this.props.doRenderBoothInstaQuote();
  }

  nextStepVideoWallInstaQuote(event){
    this.props.doRenderVideoWallInstaQuote();
  }

  handleView(value){
    value !== "3D" ?
    this.setState({mainImage: this.props.images[value].url, render3D:false}) : this.setState({render3D:true})
  }

  render() {
    const settings = {
      infinite: true,
      slidesToShow: 4,
      autoplay: false,
      draggable: false,
      responsive: [ { breakpoint: 500, settings: { slidesToShow: 2 } }, { breakpoint: 900, settings: { slidesToShow: 3 } } ],
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />
    };

    var backgroundStyle = {
      backgroundImage: 'url(' + this.state.mainImage + ')',
    };
    var choice3D = (this.state.render3D ? <SketchFab obj={this.props.obj} /> : null);

    var numberOfImages = this.props.images.map((image, index) => (
      <img key={image.url} className="thumbnailBooth" onClick={() => this.handleView(index)} src={this.props.images[index].url}/>
    ));

    var trigger3D = (
      this.props.no3D? '' : <img className="thumbnailBooth" onClick={() => this.handleView("3D")} src="assets/img/layout/3dTrigger.svg"/>
    )

    var imageOptions = (
      <div className="singleImage">
          <div className="visualizer" id="visualizer" style={backgroundStyle}>
            { choice3D }
          </div>
          <Slider className={"heightSlider"} {...settings}>
              {trigger3D}
              {numberOfImages}
          </Slider>
      </div>
    );
    var boothButton = (
      <button onClick={() => this.nextStepBoothInstaQuote()} className="instaQuoteButton">get instaQuote</button>
    )
    var videoWallButton = (
      <button onClick={() => this.nextStepVideoWallInstaQuote()} className="instaQuoteButton">get instaQuote</button>
    )
    var buttonChoice = this.props.instaQuoteVideoWall? videoWallButton : boothButton;
    var description = <DangerouslySet description={this.props.description}/>

    return (
      <div className="singleBooth">
        {imageOptions}
        <div className="singleInfo">
          <h3>{this.props.singleValue}</h3>
          <div className={"insertPadding booth" + this.props.type}>
          <label></label>
          </div>
          {description}
          {buttonChoice}
        </div>
      </div>
    )
  }
}

export default SingleItem;
