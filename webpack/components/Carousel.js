import React, { Component } from 'react';
import Slider from 'react-slick';

function SampleNextArrow(props) {
  const {className, style, onClick} = props
  return (
      <div onClick={onClick}>
        <svg className={'arrow-icon next-arrow'} width={'32'} height={'32'} viewBox={'0 0 32 32'}>
          <g fill="none" stroke={'#f9f9f9'} strokeWidth={'1.5'} strokeLinejoin="round" strokeMiterlimit="10">
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
      <svg className={'arrow-icon back-arrow'} width={'32'} height={'32'} viewBox={'0 0 32 32'}>
        <g fill="none" stroke={'#f9f9f9'} strokeWidth={'1.5'} strokeLinejoin="round" strokeMiterlimit="10">
          <circle className={'arrow-icon--circle'} cx={'16'} cy={'16'} r={'15.12'}/>
          <path className={'arrow-icon--arrow'} d={'M15.9,22.1L9.8,16l6.1-6.1 M23.8,16h-14'}/>
        </g>
      </svg>
    </div>
  );
}

class Carousel extends Component {
  render (){
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      pauseOnHover: true,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />
    };
    return (
      <section id="slider">

        <Slider {...settings}>
          <div><p><span>simply more</span><br/>we are the smarter, cooler, more affordable solution to your vision</p></div>
          <div><p>from<span>$7,999 all incl.</span><br/>Video wall rental in Vegas</p></div>
        </Slider>
      </section>
    );
  }
};

export default Carousel;
