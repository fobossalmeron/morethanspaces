import React, { Component } from 'react';
import IconsBar from './IconsBar';

class Footer extends Component {

  render (){
    return (
      <div>
      <footer>
        <ul>
          <li>
            <h3>follow us!</h3>
             <p>social icons and social feeds</p>
            </li>
            <li>
            </li>
            <li>
              <h3>resources</h3>
              <p>Review our specifications on designs and uploads, trade show booths and video walls.</p>
              <a href="{{site.baseurl}}/assets/pdf/sample.pdf" target="_blank">graphic design specs</a>
              <a href="{{site.baseurl}}/assets/pdf/sample.pdf" target="_blank">booth types</a>
              <a href="{{site.baseurl}}/assets/pdf/sample.pdf" target="_blank">video walls</a>
              <a className="before-pinterest-snippet" href="{{site.baseurl}}/assets/pdf/sample.pdf" target="_blank">upload</a>
            </li>
            <li className="realestate">
              <h3>contact us!</h3>
              <p>send us an email</p>
              <a href="mailto:hello@morethanspaces.com" target="_blank">hello@morethanspaces.com</a>
              <p>or call us!</p>
              <a href="tel:1 833 667 3842">1833-morethanspaces</a><br/><a href="tel:1 833 667 3842">(1-833.667.3842)</a>
              <p><br/>visit our showroom</p>
              <a href="https://goo.gl/maps/ykw7oq8CJjx" target="_blank">900 Wigwam Parkway, Henderson NV</a>
            </li>
        </ul>

      </footer>
      <IconsBar backgroundColor={'#e0e221'} color={'#383838'}/>
          <p className="colophon">© <b>morethanspaces</b> 2017, all rights reserved.<br/>
          website developed by <b>Rodrigo Salmeron</b>
          </p>
      </div>
    );
  }
};

export default Footer;
