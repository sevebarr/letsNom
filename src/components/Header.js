import React, { Component } from 'react';
import { Nav, Navbar, NavItem } from 'react-bootstrap'; // Components provided by Bootstrap
// import Routes from './Routes';
// import { Link, withRouter } from 'react-router-dom';
// import { LinkContainer } from 'react-router-bootstrap'; // Allows App to route to the required link without refreshing the browser

//import { Navbar, Nav, NavItem, NavDrowpdown, MenuItem } from 'react-bootstrap';

// import Logo from './Logo';

class Header extends Component {
	render() {
		return (
			<Navbar collapseOnSelect>
				<nav className="navbar bg-light navbar-light nav nav-pills navbar-expand-sm fixed-top">
					<div className="navbar-brand">Lets Nom</div>
					{/* d-none d-sm-inline to make navbar brand disappear on small */}

					<button
						className="navbar-toggler"
						type="button"
						data-toggle="collapse"
						data-target="#myNavToggle"
						aria-controls="myNavToggle"
						aria-expanded="false"
						aria-label="Toggle Navigation"
					>
						<span className="navbar-toggler-icon" />
					</button>

					<div className="collapse navbar-collapse" id="myNavToggle">
						<div className="navbar-nav ml-auto">
							<a className="nav-item nav-link" href="https://facebook.com">
								Home
							</a>
							<a className="nav-item nav-link" href="https://facebook.com">
								Messages
							</a>
							<a className="nav-item nav-link" href="https://facebook.com">
								Settings
							</a>
							<a className="nav-item nav-link" href="https://facebook.com">
								Log Out
							</a>
						</div>
						{/* Navbar Nav */}
					</div>
					{/* Navbar Collapse */}
					{/* Container */}
				</nav>
				{/* Navbar Main */}
			</Navbar>
		);
	}
}

export default Header;
