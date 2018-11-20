import React, { Component } from 'react';
import {  } from 'react-materialize';

import Navbar from './components/Navbar';

class App extends Component {
	render() {
		return(
			<div>
				<Navbar />
				<center>
					<h1>Tremundo's World</h1>
				</center>
			</div>
		);
	}
}

export default App;