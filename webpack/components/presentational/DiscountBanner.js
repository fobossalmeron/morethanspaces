import React, { Component } from 'react';

class DiscountBanner extends Component {

  render (){
    var bannerBackgroundImage = ('url(assets/img/conventions/' + this.props.discountBanner + '')
    return (
      <div id="discountbanner">
        <div className="hideBanner" style={{backgroundImage: bannerBackgroundImage}}></div>
      </div>
    );
  }
};

export default DiscountBanner;
