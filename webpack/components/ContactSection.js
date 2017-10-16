import React, { Component } from 'react';
import { Form, Text, Select, Textarea, NestedForm, FormError } from 'react-form'
import Check from './presentational/Check';

class ContactSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      successMessage: false
    };
  this.showConf = this.showConf.bind(this);
  }

  showConf(){
    console.log("show success Message");
    this.setState({
        successMessage: true
    })
  }
  render (){
    var calendlyUrl = 'https://calendly.com/morethanspaces'
    const actualForm = (
      <div>
        <Text field='name' placeholder='your name'/>
        <Text field='email' placeholder='your email'/>
        <Text field='business' placeholder='your business name'/>
        <Textarea
          field='message'
          placeholder='message'
        />
        <button type='submit'>Send</button>
      </div>
    )
    const sentMessage = (
      <div>
        <Check className={"confirmCheck"} width={"100px"} color={"#42ba42"}/>
        <p>Email sent! We will get in touch with you soon.</p>
      </div>
    )
    const message = this.state.successMessage ? sentMessage : actualForm ;
    const messageClass = this.state.successMessage ? 'half-card messaged' : 'half-card';
    return (
      <section id="contact">
        <h2><b>contact</b></h2>
          <div className="half-card">
            <p><b>Have questions or want expert advise?</b><br/>
            We are happy to help.<br/>
            Friendly service. No pressure sale.</p>
          </div>
          <div className="half-card contact-different">
            <h3>call</h3>
            <a href="tel:1 833 667 3842"><b>1-833-MORETHANSPACES</b><br/>(1-833-667-3842)</a>
            <h3>email</h3>
            <a href="mailto:hello@morethanspaces.com"><b>hello@morethanspaces.com</b></a>
          </div>
        <div className={messageClass}>
          <h3>message</h3>
          <Form
            onSubmit={(values) => {
              console.log('Form Submitted Succesfully with:', values)

              const url = 'https://formspree.io/hello@morethanspaces.com';
              var data = values;
              var myself = this;
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
                        console.log('Danger');

                    } else if (response.target.status === 400) {
                        console.log(JSON.parse(responseText).error);

                    } else if (response.target.status === 200) {
                        console.log('Success!');
                        myself.showConf()
                      }
                  }
            }}

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
                  {message}
                </form>
              )
            }}
          </Form>
        </div>
        <div className="half-card">
          <h3>schedule a call</h3>
          <div className="calendly-inline-widget" data-url={calendlyUrl}></div>
        </div>
      </section>
    );
  }
};

export default ContactSection;
