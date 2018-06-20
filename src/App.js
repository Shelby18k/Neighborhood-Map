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
}
  widthIncrease = () =>{
    this.setState({condition:!this.state.condition})
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
              {this.state.condition && <Sidebar locations={locations}/>}
            </div>
        </MediaQuery>

        <MediaQuery query="(min-device-width:650px">
            <div className={this.state.condition? "display-sidebar-increase":"hide-sidebar"}>
              {this.state.condition && <Sidebar locations={locations}/>}
            </div>
        </MediaQuery>
        <div className="map">
            <Map locations = {locations}/>
        </div>
      </div>
    );
  }
}

export default App;
