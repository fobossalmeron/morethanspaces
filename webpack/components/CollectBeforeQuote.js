import React, { Component } from 'react';
import { Form, Text, NestedForm, FormError } from 'react-form'
import Check from './presentational/Check';
import InstaQuote from './presentational/InstaQuote';

class CollectBeforeQuote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showInstaQuote: false
    };
  this.revealQuote = this.revealQuote.bind(this);
  }

  revealQuote(){
    this.setState({
        showInstaQuote: true
    })
  }
  componentDidMount(){
    console.log(this.props);
  }

  render (){
    var calendlyUrl = 'https://calendly.com/morethanspaces'

    const dataCollector = (
      <div>
        <Text field='name' placeholder='your name'/>
        <Text field='email' placeholder='your email'/>
        <Text field='phone' placeholder='your phone'/>
        <button type='submit'>see instaQuote now!</button>
      </div>
    )

    const instaQuote = (
      <InstaQuote images={this.props.images}
                  singleValue={this.props.singleValue}
                  boothType={this.props.boothType}
                  wantToOwn={this.props.wantToOwn}
                  eventInVegas={this.props.eventInVegas}
                  width={this.props.width}
                  length={this.props.length}/>
    );

    const collector = this.state.showInstaQuote ? undefined : dataCollector ;
    const quote = this.state.showInstaQuote ? instaQuote : undefined ;

    return (
      <div id="dataCollector" onClick={() => this.revealQuote()}>
          <Form
            onSubmit={(values) => {
              console.log('Form Submitted Succesfully with:', values)
              this.revealQuote()

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
                number: !number ? 'Your number is required' : undefined,
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
                  {collector}
                </form>
              )
            }}
          </Form>
          {quote}
        </div>
    );
  }
};

export default CollectBeforeQuote;
