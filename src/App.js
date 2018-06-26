import React, { Component } from 'react';
import MediaQuery from 'react-responsive';
import './App.css';
import Sidebar from './Sidebar';
import Map from './Map';

const locations= [
                {title: 'Shiv Temple', location:{lat:30.461868, lng:78.096833}},
                {title: 'St Peters', location:{lat:30.463898, lng:78.095751}},
                {title: 'Klick Cafe Laal Tibba', location:{lat:30.466685, lng:78.095001}},
                {title: 'Rokeby Manor, Mussoorie', location:{lat:30.460217, lng:78.096442}},
                {title: 'La Villa Bethany', location:{lat:30.458669, lng:78.098145}},
                {title: 'State Bank of India', location:{lat:30.460941, lng:78.094922}},

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

  openInfoWindow=(marker,title)=>{
    this.closeInfoWindow();
    this.state.infowindow.open(this.state.map,marker)
    marker.setAnimation(window.google.maps.Animation.BOUNCE);
    this.setState({
      prevmarker: marker
    })
    this.state.infowindow.setContent(title)
    this.state.map.setCenter(marker.getPosition())
    this.state.map.panBy(0,-200)
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
                <h1>Neighborhood Map</h1>
              </div>
      </MediaQuery>
        <MediaQuery query="(max-device-width:640px)">
            <div className={this.state.condition? "display-sidebar":"hide-sidebar"}>
              {this.state.condition && <Sidebar locations={locations} openWindow = {this.openInfoWindow} closeWindow = {this.closeInfoWindow} iWindow={this.setInfoWindow} sMap = {this.setMap}/>}
            </div>
        </MediaQuery>

        <MediaQuery query="(min-device-width:650px">
            <div className={this.state.condition? "display-sidebar-increase":"hide-sidebar"}>
              {this.state.condition && <Sidebar locations={this.state.markers} openWindow = {this.openInfoWindow} closeWindow = {this.closeInfoWindow} iWindow={this.setInfoWindow} sMap = {this.setMap}/>}
            </div>
        </MediaQuery>
        <div className="map">
            <Map locations = {locations} openWindow = {this.openInfoWindow} closeWindow = {this.closeInfoWindow} iWindow={this.setInfoWindow} sMap = {this.setMap} markers = {this.setMarkers}/>
        </div>
      </div>
    );
  }
}

export default App;