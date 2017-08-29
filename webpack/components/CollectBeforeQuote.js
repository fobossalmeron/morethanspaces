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
  }

  componentDidMount(){
    console.log(this.props);
  }

  render (){
    var calendlyUrl = 'https://calendly.com/morethanspaces'

    return (
      <div id="dataCollector">
      <Form
        onSubmit={(values) => {
          console.log('Form Submitted Succesfully with:', values)

          const url = 'https://formspree.io/fobos.salmeron@gmail.com';
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
            name: !name ? 'A name is required' : undefined,
            phone: !phone ? 'A phone is required' : undefined,
            email:
              !email ?
            'The email cannot be empty' :
              email.search('@') == -1?
            'Please give a valid email' :
              email.search(/@gmail.com/i) !== -1?
            'Sorry for the inconvenience but we only work with businesses, please provide a business email' :
              email.search(/@aol.com/i) !== -1?
            'Sorry for the inconvenience but we only work with businesses, please provide a business email' :
              email.search(/@icloud.com/i) !== -1?
            'Sorry for the inconvenience but we only work with businesses, please provide a business email' :
              email.search(/@me.com/i) !== -1?
            'Sorry for the inconvenience but we only work with businesses, please provide a business email' :
              email.search(/yahoo.com/i) !== -1?
            'Sorry for the inconvenience but we only work with businesses, please provide a business email' :
              email.search(/@live.com/i) !== -1?
            'Sorry for the inconvenience but we only work with businesses, please provide a business email' :
              email.search(/@hotmail.com/i) !== -1?
            'Sorry for the inconvenience but we only work with businesses, please provide a business email' :
              undefined
          }
        }}
        >
        {({submitForm}) => {
          return (
            <form onSubmit={submitForm}>
              <Text field='name' placeholder='your name'/>
              <Text field='email' placeholder='your email'/>
              <Text field='phone' placeholder='your phone'/>
              <button type='submit'>reveal instaQuote now!</button>
            </form>
          )
        }}
      </Form>
    </div>
    );
  }
};

export default CollectBeforeQuote;
