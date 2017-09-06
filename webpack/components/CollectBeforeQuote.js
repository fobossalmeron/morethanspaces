import React, { Component } from 'react';
import { Form, Text, NestedForm, FormError } from 'react-form'
import Check from './presentational/Check';
import InstaQuote from './presentational/InstaQuote';

class CollectBeforeQuote extends Component {
  constructor(props) {
    super(props);
  this.revealQuote = this.revealQuote.bind(this);
  }

  revealQuote(){
    this.props.doRevealInstaQuote();
    this.props.hideCollectors();
  }

  componentDidMount(){
    console.log(this.props);
  }

  render (){
    var calendlyUrl = 'https://calendly.com/morethanspaces'
    var actualForm = (
      <div>
      <Text field='name' placeholder='your name'/>
      <Text field='email' placeholder='your email'/>
      <Text field='phone' placeholder='your phone'/>
      <Text field='model' className='hidden'/>
      <Text field='convention' className='hidden'/>
      <Text field='addons' className='hidden'/>
      <Text field='price' className='hidden'/>

      <button type='submit'>reveal instaQuote now!</button>
      </div>
    )
    var displayForm = (this.props.renderCollectors? actualForm : undefined)
    var renderInVegas = this.props.eventInVegas? "in" : "outside";
    var renderTv = this.props.addTv? "They added a TV." : '';
    var renderVideoWall = this.props.addVideoWall? "They added a videowall." : '';
    var renderRentOwn = this.props.wantToOwn? "own" : "rent";
    var narrateDiscount = (
      this.props.originalPrice + '$ - ' + this.props.discountNumber + this.props.discountSymbol() + ' discount = ' + this.props.finalPrice
    )
    var price = this.props.discountOn? narrateDiscount : "No discount applied.";

    var addons = (
      renderTv + " " + renderVideoWall
    )
    var redacted = (
      "This person quoted the " + this.props.singleValue + " model with the original price of " + this.props.originalPrice +
      " and the final price after discounts of " + this.props.finalPrice + ". "
    )
    var convention = (
      "They want to " + renderRentOwn + " it and the event is " + renderInVegas + " Las Vegas."
    )
    return (
      <div id="dataCollector">
      <Form

        defaultValues={{
            model: redacted,
            convention: convention,
            addons: addons,
            price: price
        }}

        onSubmit={(values) => {
          console.log('Form Submitted Succesfully with:', values)

          const url = 'https://formspree.io/hello@morethanspaces.com';
          var data = values;

          var xhr = new XMLHttpRequest();
              xhr.open('POST', url, true);
              xhr.setRequestHeader('Accept', 'application/json; charset=utf-8');
              xhr.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');

              // Send the collected data as JSON
              xhr.send(JSON.stringify(data));
              var myself = this;
              // Callback function
              xhr.onloadend = function (response) {
                if (response.target.status === 0) {
                    // Failed XmlHttpRequest should be considered an undefined error.
                    console.log('Danger');

                } else if (response.target.status === 400) {
                    console.log(JSON.parse(responseText).error);

                } else if (response.target.status === 200) {
                    console.log('Success! Here is your quote');
                    myself.revealQuote();
                  }
              }
        }}

        validate={({ name, email, phone }) => {
          return {
            name: !name ? '*A name is required' : undefined,
            phone: !phone ? '*A phone is required' : undefined,
            email:
              !email ?
            '*The email cannot be empty' :
              email.search('@') == -1?
            '*Please give a valid email' :
              email.search(/@gmail.com/i) !== -1?
            '*Sorry for the inconvenience but we only work with businesses, please provide a business email' :
              email.search(/@aol.com/i) !== -1?
            '*Sorry for the inconvenience but we only work with businesses, please provide a business email' :
              email.search(/@icloud.com/i) !== -1?
            '*Sorry for the inconvenience but we only work with businesses, please provide a business email' :
              email.search(/@me.com/i) !== -1?
            '*Sorry for the inconvenience but we only work with businesses, please provide a business email' :
              email.search(/yahoo.com/i) !== -1?
            '*Sorry for the inconvenience but we only work with businesses, please provide a business email' :
              email.search(/@live.com/i) !== -1?
            '*Sorry for the inconvenience but we only work with businesses, please provide a business email' :
              email.search(/@hotmail.com/i) !== -1?
            '*Sorry for the inconvenience but we only work with businesses, please provide a business email' :
              undefined
          }
        }}
        >
        {({submitForm}) => {
          return (
            <form onSubmit={submitForm}>
            {displayForm}
            </form>
          )
        }}
      </Form>
    </div>
    );
  }
};

export default CollectBeforeQuote;
