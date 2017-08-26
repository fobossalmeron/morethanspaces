import React, { Component } from 'react';
import { Form, Text, NestedForm, FormError } from 'react-form'
import Check from './presentational/Check';

class CollectBeforeQuote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showInstaQuote: false
    };
  this.showConf = this.showConf.bind(this);
  }

  showConf(){
    console.log("Success from function");
    this.setState({
        showInstaQuote: true
    })
  }

  render (){
    var calendlyUrl = 'https://calendly.com/morethanspaces'

    const dataCollector = (
      <div>
        <Text field='name' placeholder='your name'/>
        <Text field='email' placeholder='your email'/>
        <Text field='phone' placeholder='your phone'/>
        <button type='submit'>See instaQuote now!</button>
      </div>
    )

    const instaQuote = (
      <div>
        <Check className={"confirmCheck"} width={"100px"} color={"#42ba42"}/>
        <p>Email sent! We will get in touch with you soon.</p>
      </div>
    )

    const message = this.state.showInstaQuote ? instaQuote : dataCollector ;
    const messageClass = this.state.showInstaQuote ? 'half-card messaged' : 'half-card';

    return (
      <div id="dataCollector">
          <Form
            onSubmit={(values) => {
              console.log('Form Submitted Succesfully with:', values)
              this.showConf()

              const url = 'https://formspree.io/feron@gml.cem';
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
                        console.log('Danger');

                    } else if (response.target.status === 400) {
                        console.log(JSON.parse(responseText).error);

                    } else if (response.target.status === 200) {
                        console.log('Success!');
                      }
                  }
            }}

            validate={({ name, email, number }) => {
              return {
                name: !name ? 'Your name is required' : undefined,
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
                  undefined,
                number: !number ? 'Your number is required' : undefined
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
    );
  }
};

export default CollectBeforeQuote;
