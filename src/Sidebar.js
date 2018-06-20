import React, { Component } from 'react';
import ListItems from './ListItems'
class Sidebar extends Component {
	render(){
		let loc = this.props.locations
		console.log(loc[0].title)
		let i=0
		return (
			<div className="sidebar-input">
				<ol>
				{loc.map((l)=>(
					<li key={i++}><ListItems name={l.title}/>
					{loc.title}</li>
				))}
				</ol>
			</div>
		)

	}
}

export default Sidebar