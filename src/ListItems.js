import React, { Component } from 'react';

class ListItems extends Component{

	render(){
		return <h1 onClick={()=>{this.props.openWindow(this,this.props.name)}}>{this.props.name}</h1>
	}

}

export default ListItems