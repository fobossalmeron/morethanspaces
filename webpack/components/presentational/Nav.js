import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      relative: false
    };
    this.navScrollMagic = this.navScrollMagic.bind(this);
  }

  componentDidMount(){
    if (typeof this.props.relativePath !== 'undefined') {
      this.setState({ relative : true }, () => this.navScrollMagic());
    } else{
      this.navScrollMagic();
    }
  }

  navScrollMagic(){
    var controller = new ScrollMagic.Controller({globalSceneOptions: {triggerHook: .5}});

    if (this.state.relative == true) {
      var logoScene = new ScrollMagic.Scene({triggerElement: "#content", offset:-100})
          .setClassToggle("nav", "navScroll")
          .addTo(controller);
    } else {
        var logoScene = new ScrollMagic.Scene({triggerElement: "#slider", offset:-300})
            .setClassToggle("nav", "navScroll")
            .addTo(controller);
      }
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
    setTimeout(function(){
      controller.scrollTo("#products");
      if (window.history && window.history.pushState) {
          history.pushState("", document.title, '#products');
      }
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

    return (
      <nav>
        <a href={baseUrl + "#home"}><img src={baseUrl + "assets/img/layout/logo.svg"}/><img src={baseUrl + "assets/img/layout/type.svg"}/></a>
        {isThereDiscount}
        <ul>
          <li onClick={() => this.handleNavClick(0)}><a href={baseUrl + "#discountbanner"}>booths</a></li>
          <li onClick={() => this.handleNavClick(1)}><a href={baseUrl + "#discountbanner"}>videowalls</a></li>
          <li><a href={baseUrl + "#services"}>services</a></li>
          <li><a href={baseUrl + "#about"}>about</a></li>
          <li><a href={baseUrl + "#contact"}>contact</a></li>
        </ul>
      </nav>
    );
  }
};

export default Nav;
