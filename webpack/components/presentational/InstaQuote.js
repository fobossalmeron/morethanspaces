import React, { Component } from 'react';
import CollectBeforeQuote from '../CollectBeforeQuote';
import NumberFormat from 'react-number-format';

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
     this.formatNumber = this.formatNumber.bind(this);
  }

  submitForm(){
    document.getElementById("submitMe").click();
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
  }

  flagMaxDiscount(){
    this.setState({maxDiscount: true});
  }

  discountedBoothPrice(somePrice){
    var myself = this
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

  formatNumber(n, x, s, c) {
      var re = '\\d(?=(\\d{' + (x || 3) + '})+' + (n > 0 ? '\\D' : '$') + ')',
          num = this.toFixed(Math.max(0, ~~n));

      return (c ? num.replace(',', c) : num).replace(new RegExp(re, 'g'), '$&' + (s || ','));
  };

  render (){
    var originalPrice = this.boothPrice();
    var finalPrice = this.discountedBoothPrice(originalPrice);
    var ifExistsOwnableMessage = this.ifExistsWantToOwn();
    var ifExistsSize = this.ifExistsSize();
    var renderInVegas = this.props.eventInVegas? "in" : "outside";
    var reveal = this.props.revealInstaQuote? "revealQuote quoteNumber" : "quoteNumber";
    var renderTv = this.props.addTv? <li>You added a <b>Tv</b></li> : undefined;
    var renderVideoWall = this.props.addVideoWall? <li>You added a <b>videowall</b></li> : undefined;

    var maximumReached = this.state.maxDiscount?  <li>*maximum discount reached</li> : '';

    var narrateDiscount = (
      <li><b>{'(' + originalPrice + '$ - ' + this.props.discountNumber + this.discountSymbol() + ' discount)'}</b></li>
    )
    var isDiscount = this.props.discountOn? narrateDiscount : '';

    return (
      <div>
    <div className="instaBlock">
      <div className="instaColumn">
        <div className="instaThumbnail" onClick={() => this.submitForm()} style={{backgroundImage: 'url(' + this.props.images[0].url + ')'}}></div>
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
        <div className={reveal}>
        <h2><NumberFormat decimalPrecision={0} value={finalPrice} displayType={'text'} thousandSeparator={true} prefix={'$'} /> USD</h2>
          <ul>
          {isDiscount}
          {maximumReached}
          <li> *for up to 3 event days</li>
        </ul>
      </div>
        <button className="scheduleButton" onClick={() => this.showCalendly()}>schedule a call!</button>
        <p><b>we don&#39;t believe in pressure sales, schedule with confidence</b></p>
      </div>
    </div>
    <CollectBeforeQuote {...this.props} originalPrice={originalPrice}
                                        finalPrice={finalPrice}
                                        discountSymbol={this.discountSymbol.bind(this)}
                                        generateUser={this.props.generateUser.bind(this)}
                                        name={this.props.name}
                                        email={this.props.email}
                                        phone={this.props.phone}
                                        weHaveUser={this.props.weHaveUser}/>
      </div>
    );
  }
};

export default InstaQuote;
