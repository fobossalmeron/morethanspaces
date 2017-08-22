import React, { Component } from 'react';
import { Form, Text, Select, Textarea, NestedForm, FormError } from 'react-form'

const contactForm = (
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

          // Callback function
          xhr.onloadend = function (response) {
              if (response.target.status === 0) {
                  // Failed XmlHttpRequest should be considered an undefined error.
                  console.log('danger');

              } else if (response.target.status === 400) {
                  console.log(JSON.parse(responseText).error);

              } else if (response.target.status === 200) {
                  console.log('Success!')

              }
          }
       }
    }

    validate={({ name, email, business, message }) => {
      return {
        name: !name ? 'A name is required' : undefined,
        business: !business ? 'A business name is required' : undefined,
        message: !message? 'The message cannot be empty' : undefined,
        email:
          !email ?
        'The email cannot be empty' :
          email.search('@') == -1?
        'Please give a valid email' :
          email.search(/gmail.com/i) !== -1?
        'Sorry for the inconvenience but we only work with businesses, please provide a business email' :
          email.search(/aol.com/i) !== -1?
        'Sorry for the inconvenience but we only work with businesses, please provide a business email' :
          email.search(/yahoo.com/i) !== -1?
        'Sorry for the inconvenience but we only work with businesses, please provide a business email' :
          email.search(/live.com/i) !== -1?
        'Sorry for the inconvenience but we only work with businesses, please provide a business email' :
          email.search(/hotmail.com/i) !== -1?
        'Sorry for the inconvenience but we only work with businesses, please provide a business email' :
          email.search('@') == -1?
        'Please give a valid email' :
          undefined
      }
    }}
    >
    {({submitForm}) => {
      return (
        <form onSubmit={submitForm}>
          <Text field='name' placeholder='your name'/>
          <Text field='email' placeholder='your email'/>
          <Text field='business' placeholder='your business name'/>
          <Textarea
            field='message'
            placeholder='message'
          />
          <button type='submit'>Send</button>
        </form>
      )
    }}
  </Form>
)

class ContactSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      successMessage: false
    };
  }

  showConf(){
    console.log("Success from function");
    this.setState({
        successMessage: true
    });
  }
  render (){
    var calendlyUrl = 'https://calendly.com/morethanspaces'
    return (
      <section id="contact">
        <h2><b>contact</b></h2>
        <p><b>Let us answer your question! Contact us for all your trade show needs.</b><br/>
        We understand you may have questions and general answers may not be what you are looking for. We
        will be more than happy to answer any of your questions. Please fill out your information below with
        your question and we will be happy to answer you back or if you need immediate assistant please give
        us a call at 1833-morethanspaces.</p>
        <div className="half-card">
          <h3>send us an email</h3>
          {contactForm}
        </div>
        <div className="half-card">
          <h3>or schedule a call!</h3>
          <div className="calendly-inline-widget" data-url={calendlyUrl}></div>
        </div>
      </section>
    );
  }
};

export default ContactSection;
