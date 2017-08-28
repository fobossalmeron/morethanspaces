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

  render (){
    var renderRentOwn = this.props.wantToOwn? "own" : "rent";
    var renderInVegas = this.props.eventInVegas? "in" : "outside";
    return (
    <div id="instaQuote">
      <div className="instaThumbnail" style={{backgroundImage: 'url(' + this.props.images[0].url + ')'}}></div>
      <div className="instaInfo">
        <h2>instaQuote</h2>
        <div className="quoteNumber">$12,000 USD <span>*for up to 3 event days</span></div>
        <p>$13,000 USD - $1000 discount</p>
        <ul>
          <li>model: <b>{this.props.singleValue}</b></li>
          <li>size: <b>{this.props.width}</b>ft x <b>{this.props.length}</b>ft</li>
          <li>type: {this.props.boothType}</li>
          <li>You want to <b>{renderRentOwn}</b> it</li>
          <li>This event is <b>{renderInVegas}</b> Las Vegas </li>
        </ul>
      </div>
    </div>
    );
  }
};

export default InstaQuote;
