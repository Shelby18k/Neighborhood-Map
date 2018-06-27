import React, { Component } from 'react';
import MediaQuery from 'react-responsive';
import './App.css';
import Sidebar from './Sidebar';
import Map from './Map';

const locations= [
                {title: 'Char Dukan', location:{lat:30.4608859, lng:78.0929282}},
                {title: 'Tavern Restaurant', location:{lat:30.455175, lng:78.0789693}},
                {title: 'Clock Tower Cafe', location:{lat:30.4554958, lng:78.0846834}},
                {title: 'Chick Chocolate', location:{lat:30.4554441, lng:78.0767585}},
                {title: 'Lovely Omelette Center', location:{lat:30.4554161, lng:78.0775648}},
                {title: 'Landour Bakehouse', location:{lat:30.4568791, lng:78.1000129}},

               ]


class App extends Component {
  state = {
    condition:false,
    infowindow: '',
    prevmarker: '',
    map: '',
    markers: []
}
  widthIncrease = () =>{
    this.setState({condition:!this.state.condition})
  }

  setMap = (m) =>{
    this.setState({map:m})
  }

  setInfoWindow = (infoWindow) =>{
    this.setState({infowindow: infoWindow})
  }

  setMarkers = (marker)=>{
    this.setState({markers:marker})
  }


  markersFilter = (m) =>{
    this.state.markers.map(marker=>{
      marker.setMap(m);
    })
  }

  openInfoWindow=(marker,title,lat,lng)=>{
    var component = this
    this.closeInfoWindow();
    this.state.infowindow.open(this.state.map,marker)
    marker.setAnimation(window.google.maps.Animation.BOUNCE);
    this.setState({
      prevmarker: marker
    })
    this.state.infowindow.setContent(title+"\n")
    this.state.map.setCenter(marker.getPosition())
    this.state.map.panBy(0,-200)

    var foursquare = require('react-native-foursquare-api')({
    clientID: 'TS2T3WEGTKDDFTW3MIROWDZS235NA3QB324QSVLZPXF5CZVW',
    clientSecret: '2OCOEY2LADI3TF1TM10DSXUNXTVQK2QOKGURBGE5YG3L4DMM',
    style: 'foursquare', // default: 'foursquare'
    version: '20140806' //  default: '20140806'
    });
    
    var params = {
    "ll": lat+", "+lng,           //"10.652814,-61.3969835"
    "query": title
    };

    foursquare.venues.getVenues(params)
      .then(function(venues) {
        title = String(venues.response.venues[0].name)
        let body = "<strong>"+title+"</strong>" + "<br/>"
        body += "Tip Count: " + String(venues.response.venues[0].stats.tipCount) + "<br/>"
        body += "CheckIns Count: " + String(venues.response.venues[0].stats.checkinsCount) + "<br/>"
        body += "Users Count: " + String(venues.response.venues[0].stats.usersCount) + "<br/>"
        body += "Visits Count: " + String(venues.response.venues[0].stats.visitsCount) + "<br/>"
        component.state.infowindow.setContent(body)
      })
      .catch(function(err){
        component.state.infowindow.setContent("<strong>Network Error</strong>")
      });
  }


  closeInfoWindow=()=>{
    if (this.state.prevmarker) {
      this.state.prevmarker.setAnimation(null)
    }
    this.setState({
      prevmarker: ''
    })
    this.state.infowindow.close()
  }
  
  render() {
    return (
      <div className="App">
      <MediaQuery query="(max-device-width:1366px)">
        <div className="header">
                <div className="hamburger-container" onClick={this.widthIncrease} tabIndex="0" aria-label="Hamburger Icon">
                    <div className="hamburger1"></div>
                    <div className="hamburger2"></div>
                    <div className="hamburger3"></div>
                </div>
                <h1 tabIndex="0" aria-label="Main Heading">Neighborhood Map</h1>
              </div>
      </MediaQuery>
        <MediaQuery query="(max-device-width:640px)">
            <div className={this.state.condition? "display-sidebar":"hide-sidebar"}>
              {this.state.condition && <Sidebar locations={locations} openWindow = {this.openInfoWindow} closeWindow = {this.closeInfoWindow} iWindow={this.setInfoWindow} sMap = {this.setMap} markersFilter={this.markersFilter} mapWindow={this.state.map}/>}
            </div>
        </MediaQuery>

        <MediaQuery query="(min-device-width:650px">
            <div className={this.state.condition? "display-sidebar-increase":"hide-sidebar"}>
              {this.state.condition && <Sidebar locations={this.state.markers} openWindow = {this.openInfoWindow} places={locations} markersFilter={this.markersFilter} mapWindow={this.state.map}/>}
            </div>
        </MediaQuery>
        <div className="map" role="application">
            <Map locations = {locations} openWindow = {this.openInfoWindow} closeWindow = {this.closeInfoWindow} iWindow={this.setInfoWindow} sMap = {this.setMap} markers={this.setMarkers} />
        </div>
      </div>
    );
  }
}

export default App;