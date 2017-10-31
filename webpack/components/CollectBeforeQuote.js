import React, { Component } from 'react';
import { Form, Text, NestedForm, FormError } from 'react-form'
import Check from './presentational/Check';
import InstaQuote from './presentational/InstaQuote';

class CollectBeforeQuote extends Component {
  constructor(props) {
    super(props);
  this.revealQuote = this.revealQuote.bind(this);
  this.doGenerateUser = this.doGenerateUser.bind(this);
  this.boothOrWall = this.boothOrWall.bind(this);
  }

  submitForm(){
      document.getElementById("submitMe").click();
  }

  doGenerateUser(name, email, phone){
    this.props.generateUser(name, email, phone);
  }

  revealQuote(){
    this.props.doRevealInstaQuote();
    this.props.hideCollectors();
  }

  isUserSelected(){
    if (this.props.weHaveUser == true) {
      var defaultName = this.props.name
    }
  }

  boothOrWall(){
    var renderOrNot
    if (typeof this.props.wantToOwn !== 'undefined') {
      renderOrNot = "Booth"
    } else {
      renderOrNot = "Wall"
    }
    return renderOrNot
  }

  componentDidMount(){
    if (this.props.renderCollectors == false){
    }
  }

  ifVideowallNoDiscount(){
    var renderOrNot
    if (typeof this.props.wantToOwn !== 'undefined') {
      return true
    }
    return false
  }

  render (){
    var calendlyUrl = 'https://calendly.com/morethanspaces'
    var isBoothOrWall = this.boothOrWall();
    var displayForm = (this.props.renderCollectors? '' : 'hidden')
    var actualForm = (
      <div className={displayForm}>
      <Text field='name' placeholder='your name'/>
      <Text field='email' placeholder='your email'/>
      <Text field='phone' placeholder='your phone'/>
      <Text field='model' className='hidden'/>
      <Text field='convention' className='hidden'/>
      <Text field='addons' className='hidden'/>
      <Text field='price' className='hidden'/>

      <button id={"submitMe" + isBoothOrWall} type='submit'>reveal base quote now!</button>
      <p>enter your information to reveal instant base quote</p>
      </div>
    )
    var renderInVegas = this.props.eventInVegas? "in" : "outside";
    var renderTv = this.props.addTv? "They added a TV." : '';
    var renderVideoWall = this.props.addVideoWall? "They added a videowall." : '';
    var renderRentOwn = this.props.wantToOwn? "own" : "rent";

    var narrateDiscount = (
      ' - ' + this.props.discountNumber + this.props.discountSymbol() + ' discount = ' + this.props.finalPrice
    )
    var preNarrate = this.ifVideowallNoDiscount()? narrateDiscount : '';
    var price = this.props.discountOn? this.props.originalPrice + '$' + preNarrate : "No discount applied.";

    var addons = (
      renderTv + " " + renderVideoWall
    )
    var redacted = (
      "This person quoted the " + this.props.singleValue + " model with the original price of " + this.props.originalPrice + ". "
    )
    var convention = (
      "They want to " + renderRentOwn + " it and the event is " + renderInVegas + " Las Vegas."
    )
    var name = (
      this.props.weHaveUser? this.props.name : ''
    )
    var email = (
      this.props.weHaveUser? this.props.email : ''
    )
    var phone = (
      this.props.weHaveUser? this.props.phone : ''
    )
    return (
      <div id="dataCollector">
      <Form

        defaultValues={{
            model: redacted,
            convention: convention,
            price: price,
            name: name,
            email: email,
            phone: phone
        }}

        onSubmit={(values) => {
          /*console.log('Form Submitted Succesfully with:', values)*/

          const url = 'https://formspree.io/hello@morethanspaces.com';
          const dummyUrl = 'https://formspree.io/fobos.salmeron@gmail.com';
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
                    myself.doGenerateUser(data.name, data.email, data.phone);
                  }
              }
        }}

        validate={({ name, email, phone }) => {
          return {
            phone:
              !phone ?
            '*Phone number is missing' :
              !phone.match(/^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/)?
            '*Please enter a valid phone number' :
            undefined,
            email:
              !email ?
            '*The email cannot be empty' :
              !email.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)?
            '*Please give a valid email' :
              email.search(/@gmail.com/i) !== -1?
            '*Sorry for the inconvenience but we only work with businesses, please provide a business email' :
              email.search(/@aol.com/i) !== -1?
            '*Sorry for the inconvenience but we only work with businesses, please provide a business email' :
              email.search(/@icloud.com/i) !== -1?
            '*Sorry for the inconvenience but we only work with businesses, please provide a business email' :
              email.search(/@me.com/i) !== -1?
            '*Sorry for the inconvenience but we only work with businesses, please provide a business email' :
              email.search(/@msn.com/i) !== -1?
            '*Sorry for the inconvenience but we only work with businesses, please provide a business email' :
              email.search(/@yahoo.com/i) !== -1?
            '*Sorry for the inconvenience but we only work with businesses, please provide a business email' :
              email.search(/@live.com/i) !== -1?
            '*Sorry for the inconvenience but we only work with businesses, please provide a business email' :
              email.search(/@hotmail.com/i) !== -1?
            '*Sorry for the inconvenience but we only work with businesses, please provide a business email' :
              undefined,
              name:
                !name ? '*A name is required' : undefined
          }
        }}
        >
        {({submitForm}) => {
          return (
            <div>
            <form onSubmit={submitForm}>
            {actualForm}
            </form>
            </div>
          )
        }}
      </Form>
    </div>
    );
  }
};

export default CollectBeforeQuote;
