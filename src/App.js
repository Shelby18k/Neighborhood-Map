import React, { Component } from 'react';
import MediaQuery from 'react-responsive';
import './App.css';
import Sidebar from './Sidebar';
import Map from './Map';

const locations= [
                {title: 'Cafe Ivy', location:{lat:30.461089, lng:78.0944515}},
                {title: 'Shiv Temple', location:{lat:30.4627351, lng:78.0936576}},
                {title: 'St Peters', location:{lat:30.4628921, lng:78.0924487}},
                {title: 'Klick Cafe Laal Tibba', location:{lat:30.4655996, lng:78.0939008}},
                {title: 'Rokeby Manor, Mussoorie', location:{lat:30.4611909, lng:78.0917625}},
                {title: 'La Villa Bethany', location:{lat:30.4610914, lng:78.0960068}},
                {title: 'State Bank of India', location:{lat:30.4609442, lng:78.0948021}},

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
              {this.state.condition && <Sidebar/>}
            </div>
        </MediaQuery>

        <MediaQuery query="(min-device-width:650px">
            <div className={this.state.condition? "display-sidebar-increase":"hide-sidebar"}>
              {this.state.condition && <Sidebar/>}
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
