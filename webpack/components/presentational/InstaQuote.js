import React, { Component } from 'react';
import ReactPlayer from 'react-player';

class InstaQuote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      discount: '',
      discountNumber: '',
      discountType: ''
    };
    this.loadDiscounts = this.loadDiscounts.bind(this);
  }

  loadDiscounts () {
       var xhr = new XMLHttpRequest();
       xhr.open('get', './assets/discounts/discount.js', true);
       xhr.onload = function() {
           var info = JSON.parse(xhr.responseText);

           this.setState({
             discount: info.discount,
             discountNumber: info.discountNumber,
             discountType: info.discountType
           });
       }.bind(this);
       xhr.send();
   }

   componentDidMount() {
    this.loadDiscounts();
  }

  showCalendly(){
    Calendly.showPopupWidget('https://calendly.com/morethanspaces');
    return false;
  }

  render (){
    var price = 13000;
    var renderRentOwn = this.props.wantToOwn? "own" : "rent";
    var renderInVegas = this.props.eventInVegas? "in" : "outside";
    var reveal = this.props.revealInstaQuote? "revealQuote quoteNumber" : "quoteNumber";

    var narrateDiscount = (
      <p>{'(' + price + '$ USD - ' + this.props.discountNumber + this.props.discountSymbol() + ')'}</p>
    )
    var isDiscount = this.props.discountOn? narrateDiscount : "we don't have discount";


    return (
    <div className="instaBlock">
      <div className="instaThumbnail" style={{backgroundImage: 'url(' + this.props.images[0].url + ')'}}></div>
      <div className="instaInfo">
        <h2>instaQuote</h2>
        <div className={reveal}>${price} USD</div>
        <span className="smallPrint">*for up to 3 event days</span>
        <p>{isDiscount}</p>
        <ul>
          <li>model: <b>{this.props.singleValue}</b></li>
          <li>size: <b>{this.props.width}</b>ft x <b>{this.props.length}</b>ft</li>
          <li>type: {this.props.boothType}</li>
          <li>You want to <b>{renderRentOwn}</b> it</li>
          <li>This event is <b>{renderInVegas}</b> Las Vegas </li>
        </ul>
        <p className="wasLink" onClick={() => this.showCalendly()}>Schedule a call!</p>
        <p><em>we don&quot;t believe in pressure sales, schedule with confidence</em></p>
      </div>
    </div>
    );
  }
};

export default InstaQuote;
