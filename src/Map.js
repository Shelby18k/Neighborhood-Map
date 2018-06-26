import React, { Component } from 'react';
class Map extends Component {

	constructor(props){
		super(props)
		this.state={
			allocations:[]
		}
	}

	componentDidMount(){
		window.initMap = this.initMap;

		loadMapJS('https://maps.googleapis.com/maps/api/js?libraries=geometry,drawing&key=AIzaSyAepUQIprBToNYrHGFFKnyPk3lPh-XdwKg&v=3&callback=initMap')
	}	
	initMap=()=>{
		var markersArray = []
		const mapView = document.getElementById('map')
		mapView.style.height = 500 + 'px'
		var map = new window.google.maps.Map(mapView,{
			center:{lat:30.4637624,lng:78.0970646},
			zoom:15,
			mapTypeControl: false
		})

		let InfoWindow = new window.google.maps.InfoWindow({});

		window.google.maps.event.addListener(InfoWindow,'closeclick',()=>{
			this.props.closeWindow();
		})

		this.props.sMap(map)
		this.props.iWindow(InfoWindow)

		window.google.maps.event.addListener(map, 'click',()=> {
            this.props.closeWindow();
		});



		this.props.locations.map(location=>{
			var marker = new window.google.maps.Marker({
				position: location.location,
				animation: window.google.maps.Animation.DROP,
				map:map,
				title:location.title

			})

			var infowindow = new window.google.maps.InfoWindow({
				content: location.title
			})

			marker.addListener('click', ()=>{
				this.props.openWindow(marker,location.title,location.location.lat,location.location.lng)
				infowindow.open(map,marker)
				infowindow.close()
			})

			markersArray.push(marker)
		})

		this.props.markers(markersArray)
	}



   render() {

   return(
   			<div>
   				<div id="map">
   				</div>
   			</div>
 	     
   		)

   }
}

export default Map;

function loadMapJS(src) {
    var ref = window.document.getElementsByTagName("script")[0];
    var script = window.document.createElement("script");
    script.src = src;
    script.async = true;
    script.onerror = function () {
        document.write("Google Maps can't be loaded");
    };
    ref.parentNode.insertBefore(script, ref);
}




