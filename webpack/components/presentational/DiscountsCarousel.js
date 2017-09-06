import React, { Component } from 'react';
import Slider from 'react-slick';
import ReactModal from 'react-modal';
import Arrow from './Arrow';
import CrossIcon from 'svg-react-loader?name=CrossIcon!../../../assets/img/layout/cross.svg';


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
    <div id={"nextArrow"} onClick={onClick}>
      <Arrow className={"arrow-icon"} color={"#ec3092"} width={"30px"}/>
    </div>
  );
}

class DiscountsCarousel extends Component {
  constructor () {
    super();
    this.state = {
      showModal: false,
      modalIndex: ''
    };

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  handleOpenModal (index) {
    this.setState({ modalIndex: index, showModal: true });
  }

  handleCloseModal () {
    this.setState({ showModal: false });
  }

  render (){
    const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      centerMode: true,
      autoplay: true,
      autoplaySpeed: 3000,
      pauseOnHover: true,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />
    };
    var slider = (
      <Slider {...settings}>
        <img onClick={() => this.handleOpenModal(1)} src="assets/img/layout/carousel/carousel1.jpg"/>
        <img onClick={() => this.handleOpenModal(2)} src="assets/img/layout/carousel/carousel2.jpg"/>
        <img onClick={() => this.handleOpenModal(3)} src="assets/img/layout/carousel/carousel3.jpg"/>
        <img onClick={() => this.handleOpenModal(4)} src="assets/img/layout/carousel/carousel4.jpg"/>
        <img onClick={() => this.handleOpenModal(5)} src="assets/img/layout/carousel/carousel5.jpg"/>
        <img onClick={() => this.handleOpenModal(6)} src="assets/img/layout/carousel/carousel6.jpg"/>
      </Slider>
    )
    return (
      <section id="discountsSlider">
      {slider}
        <ReactModal
           overlayClassName={"modalOverlay"}
           className={"modalItself"}
           isOpen={this.state.showModal}
           onRequestClose={this.handleCloseModal}
           closeTimeoutMS={500}
           contentLabel="Minimal Modal Example">
           <img src={"assets/img/layout/carousel/carousel" + this.state.modalIndex + ".jpg"} />
           <CrossIcon className="modalCloseButton" onClick={this.handleCloseModal}/>
        </ReactModal>
      </section>
    );
  }
};

export default DiscountsCarousel;
