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
          <g fill="none" stroke={'#ec3092'} strokeWidth={'1'} strokeLinejoin="round" strokeMiterlimit="10">
            <path className={'arrow-icon--arrow'} stroke-linecap="round" d={'M16.14 9.93L22.21 16l-6.07 6.07M8.23 16h13.98'}/>
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
        <g fill="none" stroke={'#ec3092'} strokeWidth={'1'} strokeLinejoin="round" strokeMiterlimit="10">
          <path className={'arrow-icon--arrow'} stroke-linecap="round" d={'M15.9,22.1L9.8,16l6.1-6.1 M23.8,16h-14'}/>
        </g>
      </svg>
    </div>
  );
}

class InteractiveKiosk extends Component {
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
      infinite: false,
      slidesToShow: 3,
      slidesToScroll: 1,
      variableWidth: true,
      centerMode: false,
      autoplay: false,
      responsive: [ { breakpoint: 500, settings: { slidesToShow: 1 } }, { breakpoint: 900, settings: { slidesToShow: 2 } } ],
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />
    };
    var slider = (
      <Slider {...settings}>
        <div className="sliderP">
          <p>Tired of boring and bland exhibitions?<br/>
          Give your visitors amazing experiences<br/>
          and interactions.<br/>
          <br/>
          <b>more</b>than<b>spaces</b> has it all and much more!<br/>
          We take care of it all; a-to-z</p>
        </div>
        <div className="sliderI"><img onClick={() => this.handleOpenModal(1)} src={baseUrl + "assets/img/layout/interactivekiosk/interactivekiosk1.jpg"}/>LED/LCD Video Walls</div>
        <div className="sliderI"><img onClick={() => this.handleOpenModal(2)} src={baseUrl + "assets/img/layout/interactivekiosk/interactivekiosk2.gif"}/>3D Holograms; incl. development</div>
        <div className="sliderI"><img onClick={() => this.handleOpenModal(3)} src={baseUrl + "assets/img/layout/interactivekiosk/interactivekiosk3.jpg"}/>interactive kiosks & touch screens</div>
        <div className="sliderI"><img onClick={() => this.handleOpenModal(4)} src={baseUrl + "assets/img/layout/interactivekiosk/interactivekiosk4.jpg"}/>Content: Professional in-house video production and 3D studio.</div>
      </Slider>
    )
    var classList = this.props.className? this.props.className : '';
    var modal = (
      <ReactModal
        overlayClassName={"modalOverlay"}
        key={"interactiveKioskModal"}
        className={"modalItself"}
        isOpen={this.state.showModal}
        onRequestClose={this.handleCloseModal}
        closeTimeoutMS={0}
        contentLabel="Interactive Kiosk Modal Example">
        <img src={baseUrl + "assets/img/layout/interactivekiosk/interactivekiosk" + this.state.modalIndex + ".jpg"} />
        <CrossIcon className="modalCloseButton" onClick={this.handleCloseModal}/>
      </ReactModal>
    )
    return (
      <section id={"interactiveKiosk"} className={classList}>
      <h3>more interactions & more experiences</h3>
      {slider}
      {modal}
      </section>
    );
  }
};

export default InteractiveKiosk;
