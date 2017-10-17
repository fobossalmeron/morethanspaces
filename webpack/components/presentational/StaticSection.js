import React, { Component } from 'react';
import ReactPlayer from 'react-player';
import CustomBoothDesignIcon from 'svg-react-loader?name=CustomBoothDesignIcon!../../../assets/img/layout/icons/customboothdesign.svg';
import BoothRentalsIcon from 'svg-react-loader?name=BoothRentalsIcon!../../../assets/img/layout/icons/boothrentals.svg';
import AudioVisualIcon from 'svg-react-loader?name=BoothRentalsIcon!../../../assets/img/layout/icons/audiovisual.svg';
import CustomRentalBoothIcon from 'svg-react-loader?name=CustomRentalBoothIcon!../../../assets/img/layout/icons/customrentalbooths.svg';
import AssembleDismantleIcon from 'svg-react-loader?name=AssembleDismantleIcon!../../../assets/img/layout/icons/assembledismantle.svg';
import StorageShippingIcon from 'svg-react-loader?name=StorageShippingIcon!../../../assets/img/layout/icons/storageshipping.svg';
import FullServiceIcon from 'svg-react-loader?name=FullServiceIcon!../../../assets/img/layout/icons/fullservice.svg';
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
      <div>
      <section id="services">
        <div id="servicesvideo">
            <ReactPlayer url={"assets/video/yellow.mp4"} playing={true} loop={true} muted={true} playsinline={true}/>
        </div>
        <h2>services</h2>
        <ul>
          <div className="row">
          <li className="full-service service7">
            <div className="service-container">
              <FullServiceIcon className="service-icon"/>
            </div>
            <h3>full service <em>- the smarter approach to trade show!</em></h3>
            <p>We are here to help by making it the <b>best experience</b> possible at a price you feel comfortable with!
            Innovative designs, turn-key A-to-Z solutions. We like to keep it <b>simple for you</b> and always guarantee to be on time. We are so sure in our service that we will <b>match or beat</b> any of our competitors’ <b>prices up to 20%</b>. Join our trusted list of clients such as <b>Nike</b>, <b>MoneyGram</b>, <b>CapitalOne</b>, <b>Coca-Cola</b>, and others!</p>
          </li>
          </div>
          <div className="row">
          <li className="service1">
            <div className="service-container">
              <BoothRentalsIcon className="service-icon"/>
            </div>
            <h3>booth rentals</h3>
            <p>If flexibility is what you’re looking for, we have multiple ready to go solutions
            for any budget. Our booth rentals <b>can save you up to 65%</b> when compared to buying. We
            have plenty of options in all sizes and designs to select from, it’s up to you! Don’t
            worry, if your trade show is somewhere other than Las Vegas, our booth rentals can be
            shipped to <b>anywhere you need it.</b></p>
          </li>
          <li className="service2">
            <div className="service-container">
              <AudioVisualIcon className="service-icon"/>
            </div>
            <h3>audio visual</h3>
            <p>A show isn’t a show without audio visual! We understand this and only bring you the
            best and newest technology; <b>LED/LCD video walls</b> and <b>LED TV’s</b>. We use the best equipment.
            We are there for you every step of the process making sure there are no bugs or mistakes.
            Because your trade show should be the center of attention, not technical issues!
            <b> We’ll have you ready</b> for any presentation.</p>
          </li>
          </div>
          <div className="row">
          <li className="service3">
            <div className="service-container">
              <CustomRentalBoothIcon className="service-icon"/>
            </div>
            <h3>custom rental booths</h3>
            <p>Short on time or need a ready to go booth with a little more than zest. Our custom rentals
            have you in mind. With our team, you’ll be able to <b>customize</b> the key things you’ll benefit
            from the most without having to build the entire booth from scratch. Get the same attention
            of a <b>custom design</b> with a <b>simpler approach</b>.
             </p>
          </li>
          <li className="service4">
              <div className="service-container">
                <CustomBoothDesignIcon className="service-icon"/>
              </div>
              <h3>custom design booths</h3>
              <p>Looking to make a statement? We can help you create bold design to standout from your
              competitor and <b>impress visitors!</b> We believe that innovation should help bring your vision
              to life, we’ll bring out the best in your brand. Our expert design team will work with you
              to create you an amazing booth. We handle everything from A to Z; <b>including 3D designs</b>.</p>
          </li>
          </div>
          <div className="row">
          <li className="service5">
              <div className="service-container">
                <AssembleDismantleIcon className="service-icon"/>
              </div>
              <h3>assemble & dismantle</h3>
              <p>We take pride in offering you the highest degree of service in assembling and dismantling
               your booths. Our team of <b>trained professionals</b> are experienced and reliable. We pay attention
               to the small details so that you won’t have too. We will finish assembling your booth <b>way before
               show-time</b>. We safely disassemble, transport, and store your booth to the next trade show venue.</p>
          </li>
          <li className="service6">
              <div className="service-container">
              <StorageShippingIcon className="service-icon"/>
              </div>
              <h3>storage & shipping</h3>
              <p>Located in <b>Las Vegas</b>, the convention capital of the world, we are more than experienced
              in the world of trade shows. When it comes to storage and shipping, our expert team can
              handle all your logistics needs - getting to and from any Las Vegas venues to any part of
              the world. We handle all your items <b>safely</b>, <b>carefully</b> and <b>on time</b>.</p>
          </li>
          </div>
        </ul>
      </section>

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
      </div>
    );
  }
};

export default StaticSection;
