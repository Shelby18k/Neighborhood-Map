import React, { Component } from 'react';

class Sidebar extends Component {
	render(){
		return (
			<div className="sidebar-input">
				<input type="text" placeholder="Enter places to search" className="input-field"/>
			</div>
		)

	}
}

export default Sidebar