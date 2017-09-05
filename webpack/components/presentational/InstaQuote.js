import React, { Component } from 'react';
import ReactPlayer from 'react-player';

class InstaQuote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      maxDiscount: false,
    };
     this.boothPrice = this.boothPrice.bind(this);
     this.discountedBoothPrice = this.discountedBoothPrice.bind(this);
     this.flagMaxDiscount = this.flagMaxDiscount.bind(this);
     this.ifExistsWantToOwn = this.ifExistsWantToOwn.bind(this);
     this.ifExistsSize = this.ifExistsSize.bind(this);
  }

  discountSymbol(){
    if (this.props.discountType === "percentage") {
        return "%"
      } else {
       return "$"
     }
   }

  showCalendly(){
    Calendly.showPopupWidget('https://calendly.com/morethanspaces');
    return false;
  }

  boothPrice(){
    var price = 0
    if (this.props.wantToOwn){
      price = this.props.own
    } else {
      price = this.props.rent
    }
    if (this.props.addTv){
      price = price + this.props.tv
    }
    if (this.props.addVideoWall){
      price = price + this.props.videowall
    }
   return price
   console.log(price);
  }

  flagMaxDiscount(){
    this.setState({maxDiscount: true});
  }

  discountedBoothPrice(somePrice){
    var price = somePrice
    if (this.props.discountOn){
      if (this.props.discountType === "amount"){
        price = (price - this.props.discountNumber)
      } else if (this.props.discountType === "percentage"){
          price = (1 - (this.props.discountNumber / 100)) * price
          if ((somePrice - price) > 5000) {
            price = somePrice - 5000
          }
      }
    }
   return price
  }

  ifExistsWantToOwn(){
    var renderOrNot
    if (typeof this.props.wantToOwn !== 'undefined') {
      renderOrNot = this.props.wantToOwn? <li>You want to <b>own</b> it</li> : <li>You want to <b>rent</b> it</li>;
    } else {
      renderOrNot = ' '
    }
    return renderOrNot
  }

  ifExistsSize(){
    var renderOrNot
    if (typeof this.props.size !== 'undefined') {
      renderOrNot = <li>size: {this.props.size} </li>
    } else {
      renderOrNot = <li>size: <b>{this.props.width}</b>ft x <b>{this.props.length}</b>ft</li>
    }
    return renderOrNot
  }

  render (){
    var originalPrice = this.boothPrice();
    var finalPrice = this.discountedBoothPrice(originalPrice);
    var ifExistsOwnableMessage = this.ifExistsWantToOwn();
    var ifExistsSize = this.ifExistsSize();
    var renderInVegas = this.props.eventInVegas? "in" : "outside";
    var reveal = this.props.revealInstaQuote? "revealQuote quoteNumber" : "quoteNumber";
    var renderTv = this.props.addTv? <li>You added a <b>Tv</b></li> : undefined;
    var renderVideoWall = this.props.addVideoWall? <li>You added a <b>videowall</b></li> : undefined;

    var maximumReached = this.state.maxDiscount?  ' *maximum discount amount reached' : '';

    var narrateDiscount = (
      '(' + originalPrice + '$ - ' + this.props.discountNumber + this.discountSymbol() + ' discount)' + maximumReached
    )
    var isDiscount = this.props.discountOn? narrateDiscount : "we don't have discount";


    return (
    <div className="instaBlock">
      <div className="instaColumn">
        <div className="instaThumbnail" style={{backgroundImage: 'url(' + this.props.images[0].url + ')'}}></div>
        <ul>
          <li>model: <b>{this.props.singleValue}</b></li>
          {ifExistsSize}
          <li>type: {this.props.type}</li>
          {ifExistsOwnableMessage}
          <li>This event is <b>{renderInVegas}</b> Las Vegas </li>
          {renderTv}
          {renderVideoWall}
        </ul>
      </div>
      <div className="instaInfo">
        <h2>instaQuote</h2>
        <div className={reveal}><p>${finalPrice} USD</p><span>{isDiscount}</span></div>
        <ul>
          <li>*for up to 3 event days</li>
        </ul>
        <button className="instaQuoteButton wasLink" onClick={() => this.showCalendly()}>schedule a call!</button>
        <p><em>we don&quot;t believe in pressure sales, schedule with confidence</em></p>
      </div>
    </div>
    );
  }
};

export default InstaQuote;
