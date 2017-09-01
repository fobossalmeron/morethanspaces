import React, { Component } from 'react';
import IconsBar from './IconsBar';
import LinkedInIcon from 'svg-react-loader?name=LinkedInIcon!../../../assets/img/icons/linkedin.svg';
import FacebookIcon from 'svg-react-loader?name=FacebookIcon!../../../assets/img/icons/facebook.svg';
import InstagramIcon from 'svg-react-loader?name=InstagramIcon!../../../assets/img/icons/instagram.svg';
import YouTubeIcon from 'svg-react-loader?name=YouTubeIcon!../../../assets/img/icons/youtube.svg';
import PinterestIcon from 'svg-react-loader?name=PinterestIcon!../../../assets/img/icons/pinterest.svg';
import GooglePlusIcon from 'svg-react-loader?name=GooglePlusIcon!../../../assets/img/icons/googleplus.svg';
import TwitterIcon from 'svg-react-loader?name=TwitterIcon!../../../assets/img/icons/twitter.svg';

class Footer extends Component {

  render (){
    return (
      <div>
      <footer>
        <ul>
          <li>
            <h3>follow us</h3>
            <ul className="social-list">
               <a href={"https://facebook.com/morethanspaces/"}>
                <LinkedInIcon/>
               </a>
               <a href={"https://facebook.com/morethanspaces/"}>
                 <FacebookIcon/>
               </a>
               <a href={"https://facebook.com/morethanspaces/"}>
                 <InstagramIcon/>
               </a>
               <a href={"https://facebook.com/morethanspaces/"}>
                 <YouTubeIcon/>
               </a>
               <a href={"https://facebook.com/morethanspaces/"}>
                 <TwitterIcon/>
               </a>
               <a href={"https://facebook.com/morethanspaces/"}>
                 <GooglePlusIcon/>
               </a>
             </ul>
            </li>
            <li>
            <h3>be inspired</h3>
            <div className="pinterestFeed">
               <a data-pin-do="embedBoard" data-pin-board-width="300" data-pin-scale-height="200" data-pin-scale-width="115" href="https://www.pinterest.com/MoreThanSpaces/design/"></a>
            </div>
            </li>
            <li>
              <h3>resources</h3>
              <a href="assets/pdf/sample.pdf" target="_blank">booth types</a>
              <a href="assets/pdf/mts_timeline_and_graphic_specs.pdf" target="_blank">timeline &<br/>graphic specs</a>
              <a href="assets/pdf/sample.pdf" target="_blank">video walls</a>
              <a href="assets/pdf/sample.pdf" target="_blank">how to upload</a>
              <a href="assets/pdf/sample.pdf" target="_blank">payment info</a>
            </li>
            <li className="realestate">
              <h3>contact us</h3>
              <div className="contactBox">
                <p>call</p>
                <a href="tel:1 833 667 3842"><b>1-833-morethanspaces</b></a><br/><a href="tel:1 833 667 3842">1-833-667-3842</a>
              </div>
              <div className="contactBox">
              <p>email</p>
              <a href="mailto:hello@morethanspaces.com" target="_blank"><b>hello@morethanspaces.com</b></a>
              </div>
              <div className="contactBox boxInvert">
              <p>visit</p>
              <a href="https://goo.gl/maps/PY2Umx41Pey" target="_blank">900 Wigwam Parkway, Suite 100 Henderson, NV 89014</a>
              </div>
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
