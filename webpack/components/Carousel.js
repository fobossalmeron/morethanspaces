import React, { Component } from 'react';
import Slider from 'react-slick';

function SampleNextArrow(props) {
  const {className, style, onClick} = props
  return (
      <div onClick={onClick}>
        <svg className={'arrow-icon next-arrow'} width={'50'} height={'50'} viewBox={'0 0 32 32'}>
          <g fill="none" stroke={'#f9f9f9'} strokeWidth={'1'} strokeLinejoin="round" strokeMiterlimit="10">
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
        <g fill="none" stroke={'#f9f9f9'} strokeWidth={'1'} strokeLinejoin="round" strokeMiterlimit="10">
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
      dots: false,
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
          <div>
          <div className="sliderCard">
            <h3>booths - <b>more than just space!</b></h3>
            <p>We at <b>morethanspaces</b> believe that when it comes to trade shows, a booth is more than
              just a booth. It showcases the history of your brand, by bringing out the uniqueness that
              is you. Our booths are designed with that in mind to offer you the most economical,
              innovative, and transportable booths out there. So that, you can get back to worrying
              about what&#39;s more important!</p>
              </div>
          </div>
          <div>
          <div className="sliderCard">
            <h3>video walls - <b>showcase your story</b></h3>
            <p>
              We understand that a <b>video wall</b> is more than a displaying for your brand.
              A <b>video wall</b> brings out the vision behind your brand by giving it three-dimensional
              depth. Our video walls are hassle free, easy to install, and user-friendly. We make it
              simple –<b>plug and play!</b> All visions are not equally created and we get that! We can
              customize your video wall to any business need –<b>ask us how!</b>
            </p>
            </div>
          </div>
        </Slider>
      </section>
    );
  }
};

export default Carousel;
