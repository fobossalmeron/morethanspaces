import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import HamburgerIcon from 'svg-react-loader?name=HamburgerIcon!../../../assets/img/layout/icons/hamburger.svg';
import CaptureLead from '../CaptureLead';

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      relative: false,
      menuOn: false
    };
    this.navScrollMagic = this.navScrollMagic.bind(this);
    this.doToggleMenu = this.doToggleMenu.bind(this);
    this.doHideNav = this.doHideNav.bind(this);
  }

  doToggleMenu(){
    this.setState({ menuOn: !this.state.menuOn})
    document.body.classList.toggle('restrictBody')
    document.addEventListener('touchstart', this.touchstart);
    document.addEventListener('touchmove', this.touchmove);
    function touchstart(e) {
        e.preventDefault()
    }
    function touchmove(e) {
        e.preventDefault()
    }
  }
  doHideNav(){
    this.setState({ menuOn: false});
    document.body.classList.remove('restrictBody')
    document.removeEventListener('touchstart', this.touchstart);
    document.removeEventListener('touchmove', this.touchmove);
  }

  componentDidMount(){
    if (typeof this.props.relativePath !== 'undefined') {
      this.setState({ relative : true }, () => this.navScrollMagic());
    } else{
      this.navScrollMagic();
    }
  }

  doScrollToAbout(event){
    if (typeof this.props.scrollToAbout !== 'undefined') {
      event.preventDefault();
      this.props.scrollToAbout();
      if (window.history && window.history.pushState) {
        history.pushState("", document.title, "#about");
      }
    }
  }
  doScrollToServices(){
    if (typeof this.props.scrollToServices !== 'undefined') {
      event.preventDefault();
      this.props.scrollToServices();
      if (window.history && window.history.pushState) {
        history.pushState("", document.title, "#services");
      }
    }
  }
  doScrollToContact(){
    if (typeof this.props.scrollToContact !== 'undefined') {
      event.preventDefault();
      this.props.scrollToContact();
      if (window.history && window.history.pushState) {
        history.pushState("", document.title, "#contact");
      }
    }
  }

  navScrollMagic(){
      var offset
    if (typeof this.props.barNav !== 'undefined'){
      offset = 15
    } else {
      offset = 0
    }
    var controllerX = new ScrollMagic.Controller({globalSceneOptions: {triggerHook: 0}});
    var logoScene = new ScrollMagic.Scene({triggerElement: "body", offset: offset})
            .setClassToggle("nav", "navScroll")
            .addTo(controllerX);
  }

   discountSymbol(){
     if (this.props.discountType === "percentage") {
         return "%"
       } else {
        return "$"
      }
    }

  handleNavClick(booth){
    this.props.goToTab(booth);
    this.props.scrollToDiscountBanner();
    console.log("to discount banner")
    var myself = this
    var timeout = setTimeout(function(){
      console.log("to before products")
      myself.props.scrollToProducts();
    }, 1500);
  }

  render (){
    var baseUrl = this.state.relative? this.props.relativePath : '';
    var discountBlock = (
      <div className="discounts-menu">
      <b>{this.props.discountNumber}{this.discountSymbol()}</b> {this.props.discountText} <span>{this.props.discountSmallText}</span>
      </div>
    );
    var isThereDiscount = (this.props.discountOn ? discountBlock : undefined);
    var isActive = this.state.menuOn? "menuActive" : "";
    var navIsActive = this.state.menuOn? "navActive" : "";

    return (
      <nav id={navIsActive}>
        <a href={baseUrl + "#home"}><img src={baseUrl + "assets/img/layout/logo.svg"}/><img src={baseUrl + "assets/img/layout/type.svg"}/></a>
        <CaptureLead generateUser={this.props.generateUser.bind(this)}/>
        <HamburgerIcon onClick={this.doToggleMenu} className={"menuButton " + isActive}/>
        <ul className={isActive}>
          <li onClick={() => {this.handleNavClick(0); this.doHideNav()}}><a href={baseUrl + "#products"}>booths</a></li>
          <li onClick={() => {this.handleNavClick(1); this.doHideNav()}}><a href={baseUrl + "#products"}>videowalls</a></li>
          <li onClick={() => {this.doHideNav(); this.doScrollToServices()}}><a href={baseUrl + "#services"}>services</a></li>
          <li onClick={() => {this.doHideNav(); this.doScrollToAbout(event)}}><a href={baseUrl + "#about"}>about</a></li>
          <li onClick={() => {this.doHideNav(); this.doScrollToContact()}}><a href={baseUrl + "#contact"}>contact</a></li>
        </ul>
      </nav>
    );
  }
};

export default Nav;
