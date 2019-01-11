import React, { Component } from 'react';
import Navbar from './components/UI/Navbar/Navbar';
import { cities } from './json/navigation.json';
class App extends Component {
	render() {
		return (
			<div className="App">
				<header>
					<Navbar items={cities} />
				</header>
			</div>
		);
	}
}

export default App;
