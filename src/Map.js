import React, { Component } from 'react';
import { withGoogleMap, GoogleMap } from 'react-google-maps';
import {
  withScriptjs,
  Marker,
  InfoWindow,
} from "react-google-maps";
import { compose, withProps,withStateHandlers } from "recompose"
class Map extends Component {

	state = {
		isOpen: 'false'
	}

	openMarker = () =>{
		this.setState({isOpen:'true'})
	}

	closeMarker = () =>{
		this.setState({isOpen:'false'})
	}

   render() {

   const GoogleMapExample =
 withGoogleMap 
(props => (
      <GoogleMap
        defaultCenter = { { lat: 30.4644598, lng: 78.0939956 } }
        defaultZoom = { 15 }
      >
      {this.props.locations.map((place)=>(
      	<Marker position={{lat:place.location.lat,lng:place.location.lng}} onClick={()=>this.openMarker()}>
      	{this.state.isOpen && <InfoWindow onCloseClick={(this.closeMarker)}>
  		<div>{place.title}</div>
  		</InfoWindow>}
      </Marker>

      ))}
      

            </GoogleMap>
   ));

   return(
      <div>
        <GoogleMapExample
          containerElement={ <div style={{ height: `500px`, width: '100%' }} /> }
          mapElement={ <div style={{ height: `100%` }} /> }
        />
      </div>
   );

   }
};

export default Map;