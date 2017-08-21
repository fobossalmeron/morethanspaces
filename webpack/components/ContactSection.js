import React, { Component } from 'react';
import { Form, Text, Select, Textarea, Checkbox, Radio, RadioGroup, NestedForm, FormError } from 'react-form'

const contactForm = (
  <Form
    onSubmit={(values) => {
      console.log('Success!', values)
    }}
    validate={({ name, email }) => {
      return {
        name: !name ? 'A name is required' : undefined,
        email: (email && email.length < 5) ? 'Your email must be at least 5 characters long' : false
      }
    }}
    >
    {({submitForm}) => {
      return (
        <form onSubmit={submitForm}>
          <Text field='name' placeholder='your name'/>
          <Text field='email' placeholder='your email'/>
          <Text field='business' placeholder='your company'/>
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
