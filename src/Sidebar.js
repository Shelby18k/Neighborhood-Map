import React, { Component } from 'react';
class Sidebar extends Component {
	render(){
		let loc = this.props.locations
		let places = this.props.places
		console.log(loc[0].title)
		let i=0
		return (
			<div className="sidebar-input">
				<ol>
				{loc.map((currentMarker,index)=>(
					<li key={i++} role="listitem" tabIndex="0"
						onClick={()=> this.props.openWindow(currentMarker,currentMarker.title,places[index].location.lat,places[index].location.lng)}>
					<h1 className="listitems">{currentMarker.title}</h1></li>
				))}
				</ol>
			</div>
		)

	}
}

export default Sidebar