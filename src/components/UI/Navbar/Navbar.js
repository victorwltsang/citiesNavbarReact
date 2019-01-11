import React, { Component } from 'react';
import './Navbar.css';

class Navbar extends Component {
	state = {
		selected: 0,
		activeItemWidth: null,
		activeItemLeft: null
	};

	componentDidMount() {
		this.updateUnderlinePosition();
		window.addEventListener('resize', this.updateDimensions);
	}

	onClickHandler = city => {
		this.setState({
			selected: city
		});
		setTimeout(() => {
			this.updateUnderlinePosition();
		}, 100);
	};

	updateDimensions = () => {
		if (window.innerWidth > 980) {
			this.updateUnderlinePosition();
		}
	};

	updateUnderlinePosition = () => {
		this.setState({
			activeItemWidth: document.querySelector('nav .active').offsetWidth,
			activeItemLeft: document.querySelector('nav .active').offsetLeft
		});
	};

	render() {
		return (
			<nav className="navbar">
				<ul>
					{this.props.items.map((city, index) => {
						return (
							<li key={index}>
								<a
									href={'#' + city.section}
									onClick={() => this.onClickHandler(index)}
									className={this.state.selected === index ? 'active' : null}
								>
									{city.label}
								</a>
							</li>
						);
					})}
					<span
						className="underline"
						style={{ width: this.state.activeItemWidth, left: this.state.activeItemLeft }}
					/>
				</ul>
			</nav>
		);
	}
}

export default Navbar;
