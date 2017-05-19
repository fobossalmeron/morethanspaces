import React, { Component } from 'react';
//import './../db/db.json';

class BoothGrid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
    this.loadFromServer = this.loadFromServer.bind(this);
  }

  loadFromServer () {
       var xhr = new XMLHttpRequest();
       xhr.open('get', './assets/js/booths2.json', true);
       xhr.onload = function() {
           var data = JSON.parse(xhr.responseText);
           this.setState({ data: data.booths });

       }.bind(this);
       xhr.send();
   }

   componentDidMount() {
    this.loadFromServer();
}

  render (){
    var allBooths = this.state.data.map((booth, index) => (
      <li key={booth.id} className={"boothGridItem booth" + booth.type}>
            <img src={booth.images[1]}/>
            <label>{booth.id}</label>
      </li>
     ));
    return (
      <ul id="boothGrid">
          {allBooths}
      </ul>
    );
  }
};

export default BoothGrid;
