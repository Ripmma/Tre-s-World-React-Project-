import React, { Component } from 'react';
import { NavItem } from 'react-materialize';

class Navbar extends Component {
	render() {
		return(
			<Navbar brand='logo' right>
			  <NavItem onClick={() => console.log('test click')}>Getting started</NavItem>
			  <NavItem href='components.html'>Components</NavItem>
			</Navbar>
		);
	}
}

export default Navbar;