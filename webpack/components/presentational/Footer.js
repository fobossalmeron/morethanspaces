import React, { Component } from 'react';
import IconsBar from './IconsBar';
import LinkedInIcon from 'svg-react-loader?name=LinkedInIcon!../../../assets/img/layout/icons/linkedin.svg';
import FacebookIcon from 'svg-react-loader?name=FacebookIcon!../../../assets/img/layout/icons/facebook.svg';
import InstagramIcon from 'svg-react-loader?name=InstagramIcon!../../../assets/img/layout/icons/instagram.svg';
import YouTubeIcon from 'svg-react-loader?name=YouTubeIcon!../../../assets/img/layout/icons/youtube.svg';
import PinterestIcon from 'svg-react-loader?name=PinterestIcon!../../../assets/img/layout/icons/pinterest.svg';
import GooglePlusIcon from 'svg-react-loader?name=GooglePlusIcon!../../../assets/img/layout/icons/googleplus.svg';
import TwitterIcon from 'svg-react-loader?name=TwitterIcon!../../../assets/img/layout/icons/twitter.svg';

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      relative: false
    };
  }

  componentDidMount(){
    if (typeof this.props.relativePath !== 'undefined') {
      this.setState({ relative : true });
    }
  }

  render (){
    var baseUrl = this.state.relative? this.props.relativePath : '';
    var iconsBar = this.props.hideIconsBar? '' : <IconsBar backgroundColor={'#383838'} color={'#eee81a'}/>;
    return (
      <div>
      <footer>
        <ul>
          <li>
            <h3>follow</h3>
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
              <a href={baseUrl + "resources/booth_types/"} target="_blank">booth types</a>
              <a href={baseUrl + "resources/timeline_and_graphic_specs/"} target="_blank">timeline &<br/>graphic specs</a>
              <a href={baseUrl + "resources/sample/"} target="_blank">video walls</a>
              <a href={baseUrl + "resources/sample/"} target="_blank">how to upload</a>
              <a href={baseUrl + "resources/sample/"} target="_blank">payment info</a>
              <a href={baseUrl + "resources/sample/"} target="_blank">industry clients</a>
            </li>
            <li className="realestate">
              <h3>contact</h3>
              <div className="contactBox">
                <p>call</p>
                <a href="tel:1 833 667 3842"><b>1-833-MORETHANSPACES</b></a><br/><a href="tel:1 833 667 3842">1-833-667-3842</a>
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
      {iconsBar}
          <p className="colophon">© <b>morethanspaces</b> 2017, all rights reserved.<br/>
          website developed by <b>Rodrigo Salmeron</b>
          </p>
      </div>
    );
  }
};

export default Footer;
