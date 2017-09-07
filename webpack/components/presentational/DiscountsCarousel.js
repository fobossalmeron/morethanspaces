import React, { Component } from 'react';
import Slider from 'react-slick';
import ReactModal from 'react-modal';
import Arrow from './Arrow';
import CrossIcon from 'svg-react-loader?name=CrossIcon!../../../assets/img/layout/cross.svg';


function SampleNextArrow(props) {
  const {className, style, onClick} = props
  return (
      <div onClick={onClick}>
        <svg className={'arrow-icon next-arrow'} width={'50'} height={'50'} viewBox={'0 0 32 32'}>
          <circle fill="#ffffff" className={'arrow-icon--circle'} cx={'16'} cy={'16'} r={'15.12'}/>
          <g fill="none" stroke={'#ec3092'} strokeWidth={'1'} strokeLinejoin="round" strokeMiterlimit="10">
            <circle className={'arrow-icon--circle'} cx={'16'} cy={'16'} r={'15.12'}/>
            <path className={'arrow-icon--arrow'} d={'M16.14 9.93L22.21 16l-6.07 6.07M8.23 16h13.98'}/>
          </g>
        </svg>
      </div>
  );
}

function SamplePrevArrow(props) {
  const {className, style, onClick} = props
  return (
    <div onClick={onClick}>
      <svg className={'arrow-icon back-arrow'} width={'50'} height={'50'} viewBox={'0 0 32 32'}>
        <circle fill="#ffffff" className={'arrow-icon--circle'} cx={'16'} cy={'16'} r={'15.12'}/>
        <g fill="none" stroke={'#ec3092'} strokeWidth={'1'} strokeLinejoin="round" strokeMiterlimit="10">
          <circle className={'arrow-icon--circle'} cx={'16'} cy={'16'} r={'15.12'}/>
          <path className={'arrow-icon--arrow'} d={'M15.9,22.1L9.8,16l6.1-6.1 M23.8,16h-14'}/>
        </g>
      </svg>
    </div>
  );
}

class DiscountsCarousel extends Component {
  constructor () {
    super();
    this.state = {
      showModal: false,
      modalIndex: '',
      relative: false
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

  componentDidMount(){
    if (typeof this.props.relativePath !== 'undefined') {
        this.setState({ relative : true });
      }
  }

  render (){
    var baseUrl = this.state.relative? this.props.relativePath : '';
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
        <img onClick={() => this.handleOpenModal(1)} src={baseUrl + "assets/img/layout/carousel/carousel1.jpg"}/>
        <img onClick={() => this.handleOpenModal(2)} src={baseUrl + "assets/img/layout/carousel/carousel2.jpg"}/>
        <img onClick={() => this.handleOpenModal(3)} src={baseUrl + "assets/img/layout/carousel/carousel3.jpg"}/>
        <img onClick={() => this.handleOpenModal(4)} src={baseUrl + "assets/img/layout/carousel/carousel4.jpg"}/>
        <img onClick={() => this.handleOpenModal(5)} src={baseUrl + "assets/img/layout/carousel/carousel5.jpg"}/>
        <img onClick={() => this.handleOpenModal(6)} src={baseUrl + "assets/img/layout/carousel/carousel6.jpg"}/>
      </Slider>
    )
    var classList = this.props.className? this.props.className : '';
    return (
      <section id={"discountsSlider"} className={classList}>
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
