import React, { Component } from 'react';
import { withGoogleMap, GoogleMap } from 'react-google-maps';
import {
  withScriptjs,
  Marker,
  InfoWindow,
} from "react-google-maps";
import { compose, withProps,withStateHandlers } from "recompose"
class Map extends Component {

   render() {

   const GoogleMapExample = compose(
  withStateHandlers(() => ({
    isOpen: false,
    isOpen1: false,
    isOpen2: false,
    isOpen3: false,
    isOpen4: false,
    isOpen5: false,
    isOpen6: false,
  }), {
    onToggleOpen: ({ isOpen }) => () => ({
      isOpen: !isOpen,
    }),
    onToggleOpen1:({isOpen1})=>()=>({
    	isOpen1: !isOpen1,
    }),
    onToggleOpen2:({isOpen2})=>()=>({
    	isOpen2: !isOpen2,
    }),
    onToggleOpen3:({isOpen3})=>()=>({
    	isOpen3: !isOpen3,
    }),
    onToggleOpen4:({isOpen4})=>()=>({
    	isOpen4: !isOpen4,
    }),
    onToggleOpen5:({isOpen5})=>()=>({
    	isOpen5: !isOpen5,
    }),
    onToggleOpen6:({isOpen6})=>()=>({
    	isOpen6: !isOpen6,
    }),
  }),
 withGoogleMap 
)(props => (
      <GoogleMap
        defaultCenter = { { lat: 30.4644598, lng: 78.0939956 } }
        defaultZoom = { 15 }
      >
      {for(let i=0;i<7;i++){
      	<h1>Hello</h1>
      }}
      <Marker position={{lat:30.461089,lng:78.0944515}} onClick={props.onToggleOpen}>
      {props.isOpen && <InfoWindow onCloseClick={props.onToggleOpen}>
  		<h1>Hello</h1>
  		</InfoWindow>}
      </Marker>

      <Marker position={{lat:30.4611909,lng:78.0917625}} onClick={props.onToggleOpen1}>
      {props.isOpen1 && <InfoWindow onCloseClick={props.onToggleOpen1}>
  		<h1>Yaeh</h1>
  		</InfoWindow>}
      </Marker>
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