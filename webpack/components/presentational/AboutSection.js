import React, { Component } from 'react';
import NikeIcon from 'svg-react-loader?name=NikeIcon!../../../assets/img/clients/clientNike.svg';
import CocaColaIcon from 'svg-react-loader?name=CocaColaIcon!../../../assets/img/clients/clientCocaCola.svg';
import ChanelIcon from 'svg-react-loader?name=ChanelIcon!../../../assets/img/clients/clientChanel.svg';
import MoneyGramIcon from 'svg-react-loader?name=MoneyGramIcon!../../../assets/img/clients/clientMoneyGram.svg';
import CapitalOneIcon from 'svg-react-loader?name=CapitalOneIcon!../../../assets/img/clients/clientCapitalOne.svg';
import BaseFIcon from 'svg-react-loader?name=BaseFIcon!../../../assets/img/clients/clientBaseF.svg';
import NovartisIcon from 'svg-react-loader?name=NovartisIcon!../../../assets/img/clients/clientNovartis.svg';
import DiageoIcon from 'svg-react-loader?name=DiageoIcon!../../../assets/img/clients/clientDiageo.svg';
import KraftIcon from 'svg-react-loader?name=KraftIcon!../../../assets/img/clients/clientKraft.svg';
import PepsicoIcon from 'svg-react-loader?name=PepsicoIcon!../../../assets/img/clients/clientPepsico.svg';
import BMWIcon from 'svg-react-loader?name=BMWIcon!../../../assets/img/clients/clientBMW.svg';
import BossIcon from 'svg-react-loader?name=BossIcon!../../../assets/img/clients/clientBoss.svg';


class StaticSection extends Component {

  render (){

    return (
        <section id="about">
          <h2><b>about us</b></h2>
          <div className="half-card frompdf">
            <span>1,</span> <span>2,</span> <span>3 </span> <span> go</span>
            <p>All you have to do is show up and <b>let the show begin!</b></p>
            <div id="stepbox1" className="stepbox"><b>1:</b><p>communicate your<br/>need and choose</p></div>
            <div id="stepbox2" className="stepbox"><b>2:</b><p>we create and<br/>make it happen</p></div>
            <div id="stepbox3" className="stepbox"><b>3:</b><p>we deliver<br/>…and take care of it all</p></div>
            <div className="stepblackbox"><b className="arbitraryPink">best price, best quality</b><p>we try to <b>match or beat any price</b> up to <b>20%</b></p></div>
          </div>
          <div className="half-card">
            <h2 className="motto">
              <b>we don’t believe in pressure sales,<br/>
              schedule with confidence</b>
            </h2>
            <div className="stepyellowbox">
              <p><b>more for less</b><br/>better service, better products, <br/>better results, less stress, less worry</p>
            </div>
            <h1><b>more than spaces</b></h1>
            <ul>
              <li>Established and located in Las Vegas, <b>the convention capital</b>, we understand the world of trade shows.</li>
              <li>Believes in creativity, simplicity and <b>good prices</b> - and always to go over and beyond with a smile.</li>
              <li>Is a concept by <b>design:success</b> a world leading design and innovation company. </li>
              <li>Trusted by the world’s most iconic brands and <b>Fortune500</b> companies.</li>
            </ul>
            <p>We proudly work with companies, event planners and agencies across the USA and international.</p>
          </div>
        </section>
    );
  }
};

export default StaticSection;
