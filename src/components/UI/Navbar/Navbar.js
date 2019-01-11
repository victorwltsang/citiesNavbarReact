import React, { Component } from 'react';
import styled from '@emotion/styled';

const Nav = styled.nav`
	padding: 20px;
	margin: 0 auto;
	max-width: 1440px;

	ul {
		position: relative;
		display: flex;
		justify-content: space-evenly;
		border-bottom: 2px solid #dbdbdb;
		padding-bottom: 10px;
		li {
			display: inline-block;
			a {
				color: #b2b2b2;
				letter-spacing: 1px;
				font-size: 1em;
				padding-bottom: 10px;
				&:hover {
					color: #6ca0c5;
				}
				&.active {
					color: #1f1f1f;
					&:hover {
						color: #1f1f1f;
						cursor: default;
					}
				}
			}
		}
	}
	@media only screen and (max-width: 980px) {
		ul {
			flex-direction: column;
			border-bottom: none;
			li {
				padding: 15px 0;
				a {
					padding-bottom: 4px;
					&.active {
						border-bottom: 2px solid #1f1f1f;
					}
				}
			}
		}
	}
`;

const Underline = styled.span`
	position: absolute;
	bottom: -2px;
	height: 2px;
	background-color: #1f1f1f;
	transition: all 0.5s ease;
	width: ${props => props.activeItemWidth}px;
	left: ${props => props.activeItemLeft}px;

	@media only screen and (max-width: 980px) {
		display: none;
	}
`;

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
			activeItemWidth: document.getElementsByClassName('active')[0].offsetWidth,
			activeItemLeft: document.getElementsByClassName('active')[0].offsetLeft
		});
	};

	render() {
		return (
			<Nav>
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
					<Underline
						activeItemWidth={this.state.activeItemWidth}
						activeItemLeft={this.state.activeItemLeft}
					/>
				</ul>
			</Nav>
		);
	}
}

export default Navbar;
