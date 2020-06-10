import React, { Component } from 'react';
import { Nav, Navbar, NavItem } from 'react-bootstrap'; // Components provided by Bootstrap

import { Link } from 'react-router-dom';

// import Routes from './Routes';
// import { Link, withRouter } from 'react-router-dom';
// import { LinkContainer } from 'react-router-bootstrap'; // Allows App to route to the required link without refreshing the browser

//import { Navbar, Nav, NavItem, NavDrowpdown, MenuItem } from 'react-bootstrap';


class Header extends Component {
	render() {
		return (


			<Navbar bg="dark" variant="dark" className="collapseOnSelect">
					<Navbar.Brand href='/'>Lets Nom</Navbar.Brand>
					{/* d-none d-sm-inline to make navbar brand disappear on small */}

					<div className="collapse navbar-collapse" id="myNavToggle">
						<div className="navbar-nav ml-auto">
						<Nav.Link href="/">
								Home
							</Nav.Link>
							<Nav.Link href="/">
								Messages
							</Nav.Link>
							<Nav.Link href="/">
								Settings
							</Nav.Link>
							<Nav.Link href="/">
								Log Out
							</Nav.Link>

						</div>
					</div>
			</Navbar>
		);
	}
}

export default Header;
