import React, { Component } from 'react';
// import ListItems from './ListItems'
class Sidebar extends Component {
	render(){
		let loc = this.props.locations
		console.log(loc[0].title)
		let i=0
		return (
			<div className="sidebar-input">
				<ol>
				{loc.map((currentMarker,index)=>(
					<li key={i++} role="listitem" tabIndex="0"
						onClick={()=> this.props.openWindow(currentMarker,currentMarker.title)}>
					<h1 className="listitems">{currentMarker.title}</h1></li>
				))}
				</ol>
			</div>
		)

	}
}

export default Sidebar