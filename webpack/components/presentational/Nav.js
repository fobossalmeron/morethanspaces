import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import HamburgerIcon from 'svg-react-loader?name=HamburgerIcon!../../../assets/img/layout/icons/hamburger.svg';

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
  }
  doHideNav(){
    this.setState({ menuOn: false});
    document.body.classList.remove('restrictBody')
  }

  componentDidMount(){
    if (typeof this.props.relativePath !== 'undefined') {
      this.setState({ relative : true }, () => this.navScrollMagic());
    } else{
      this.navScrollMagic();
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
    var timeout = setTimeout(function(){
      controller.scrollTo("#products");
      if (window.history && window.history.pushState) {
          history.pushState("", document.title, '#products');
      }
    }, 1500);
    //Firefox
      $('body').bind('DOMMouseScroll', function(e){
      if(e.detail > 0) {
          clearTimeout(timeout)
      } else {
          clearTimeout(timeout)
      }
      });
   //IE, Opera, Safari
      $('body').bind('mousewheel', function(e){
      if(e.wheelDelta< 0) {
          clearTimeout(timeout)
      }else {
          clearTimeout(timeout)
      }
    });
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
        {isThereDiscount}
        <HamburgerIcon onClick={this.doToggleMenu} className={"menuButton " + isActive}/>
        <ul className={isActive}>
          <li onClick={() => {this.handleNavClick(0); this.doHideNav()}}><a href={baseUrl + "#discountbanner"}>booths</a></li>
          <li onClick={() => {this.handleNavClick(1); this.doHideNav()}}><a href={baseUrl + "#discountbanner"}>videowalls</a></li>
          <li onClick={() => this.doHideNav()}><a href={baseUrl + "#services"}>services</a></li>
          <li onClick={() => this.doHideNav()}><a href={baseUrl + "#about"}>about</a></li>
          <li onClick={() => this.doHideNav()}><a href={baseUrl + "#contact"}>contact</a></li>
        </ul>
      </nav>
    );
  }
};

export default Nav;
