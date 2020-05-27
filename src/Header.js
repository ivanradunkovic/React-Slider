import React, { Component } from 'react';

class Header extends Component {

	render(){
		return(
			<header className="header">
				<div className="headerText">
	                <h1>{this.props.text}</h1>
	            </div>
            </header>
		)
	}
}

export default Header;