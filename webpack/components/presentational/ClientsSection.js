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
        <section id="clients">
          <div className="column">
            <h3>we are trusted by</h3>
            <img src="assets/img/layout/yourlogohere.svg"/>
          </div>
          <ul>
            <li className="clientNike">Nike<NikeIcon/></li>
            <li className="clientCocaCola">Coca-Cola<CocaColaIcon/></li>
            <li className="clientChanel">Chanel<ChanelIcon/></li>
            <li className="clientMoneyGram">MoneyGram<MoneyGramIcon/></li>
            <li className="clientCapitalOne">CapitalOne<CapitalOneIcon/></li>
            <li className="clientBaseF">BaseF<BaseFIcon/></li>
            <li className="clientNovartis">Novartis<NovartisIcon/></li>
            <li className="clientDiageo">Diageo<DiageoIcon/></li>
            <li className="clientKraft">Kraft<KraftIcon/></li>
            <li className="clientPepsico">Pepsico<PepsicoIcon/></li>
            <li className="clientBMW">BMW<BMWIcon/></li>
            <li className="clientBoss">Boss<BossIcon/></li>
          </ul>
          <p className="manyMore">...and many more</p>
        </section>
    );
  }
};

export default StaticSection;
