import React, { Component } from 'react';
import { Form, Text, NestedForm, FormError } from 'react-form';

class CaptureLead extends Component {
  constructor(props) {
    super(props);
    this.state = {
      successMessage: false
    }
  this.doGenerateUser = this.doGenerateUser.bind(this);
  this.successMessage = this.successMessage.bind(this);
  }

  submitForm(){
      document.getElementById("submitMeCaptureLead").click();
  }

  doGenerateUser(name, email, phone){
    this.props.generateUser(name, email, phone);
  }

  isUserSelected(){
    if (this.props.weHaveUser == true) {
      var defaultName = this.props.name
    }
  }
  successMessage(){
    this.setState({
      successMessage: true
    })
  }

  render (){
    var displayForm = (this.props.weHaveUser? 'hidden' : this.state.successMessage? 'hidden' : '')
    var message = (<p className="successMessage">we'll contact you shortly!</p>)
    var displayMessage = (this.state.successMessage? message : '')
    var actualForm = (
      <div className={"leadgrid " + displayForm}>
      <Text field='name' placeholder='your name'/>
      <Text field='email' placeholder='your email'/>
      <Text field='phone' placeholder='your phone'/>
      <Text field='business' placeholder='your business'/>
      <Text field='page' className='hidden'/>
      <button id={"submitMeCaptureLead"} type='submit'>free quote now!</button>
      </div>
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
    var page = (
      document.URL
    )

    return (
      <div id="captureLead" className="discounts-menu">
      <Form

        defaultValues={{
            business: '',
            page: page,
            name: name,
            email: email,
            phone: phone
        }}

        onSubmit={(values) => {
          console.log('Form Submitted Succesfully with:', values)

          const url = 'https://formspree.io/hello@morethanspaces.com';
          const dummyUrl = 'https://formspree.io/fobos.salmeron@gmail.com';
          var data = values;

          var xhr = new XMLHttpRequest();
              xhr.open('POST', dummyUrl, true);
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
                    console.log('Success! Information sent!');
                    myself.successMessage();
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
            '*Please provide a business email' :
              email.search(/@aol.com/i) !== -1?
            '*Please provide a business email' :
              email.search(/@icloud.com/i) !== -1?
            '*Please provide a business email' :
              email.search(/@me.com/i) !== -1?
            '*Please provide a business email' :
              email.search(/@msn.com/i) !== -1?
            '*Please provide a business email' :
              email.search(/@yahoo.com/i) !== -1?
            '*Please provide a business email' :
              email.search(/@live.com/i) !== -1?
            '*Please provide a business email' :
              email.search(/@hotmail.com/i) !== -1?
            '*Please provide a business email' :
              undefined,
              name:
                !name ? '*A name is required' : undefined
          }
        }}
        >
        {({submitForm}) => {
          return (
            <div>
            {displayMessage}
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

export default CaptureLead;
