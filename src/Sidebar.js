import React, { Component } from 'react';
import escapeRegExp from 'escape-string-regexp';
class Sidebar extends Component {

	state={
		query: '',
	}

	updateQuery=(query)=>{
	this.setState({query:query.trim()})
}

	render(){
		let loc = this.props.locations
		let places = this.props.places
		const query = this.state.query
		let showingPlaces
		if(query){
			const match = new RegExp(escapeRegExp(query),'i')
			showingPlaces = loc.filter((p) => match.test(p.title))
		}else{
			showingPlaces = loc
		}

		let i=0
		return (
			<div className="sidebar-input">
				<input tabIndex="0" type="text" name="location-filter" className="input-filter" placeholder="Enter place" value={this.state.query} onChange={(event)=>this.updateQuery(event.target.value)}/>

				{showingPlaces.length !== loc.length && (
					<div className="showing-places">
						<span>Now showing {showingPlaces.length} of {loc.length} total</span>
					</div>
				)}


				<ol>
				{showingPlaces.map((currentMarker,index)=>(
					<li className="listitems-list" key={i++} role="listitem" tabIndex="0"
						onClick={()=> this.props.openWindow(currentMarker,currentMarker.title,places[index].location.lat,places[index].location.lng)}>
					<h1 className="listitems">{currentMarker.title}</h1></li>
				))}
				</ol>
			</div>
		)

	}
}

export default Sidebar