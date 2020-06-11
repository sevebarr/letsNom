import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// import Routes from './Routes';
// import { LinkContainer } from 'react-router-bootstrap'; // Allows App to route to the required link without refreshing the browser

import { Navbar, Nav, NavItem, NavDrowpdown, MenuItem } from 'react-bootstrap';


class Header extends Component {

	handleLogout = () => {
		//this.props.setCurrentComponent('LOGIN');
		// this.props.setUserAuthenticated(false);

	}

	render() {
		return (


			<Navbar bg="dark" variant="dark" className="collapseOnSelect">
					<Navbar.Brand href='/'>Lets Nom</Navbar.Brand>
					{/* d-none d-sm-inline to make navbar brand disappear on small */}

					<div className="collapse navbar-collapse" id="myNavToggle">
						<div className="navbar-nav ml-auto">

]							<Nav.Link href="/">Home</Nav.Link>
							<Nav.Link href="/search">Search</Nav.Link>
							<Nav.Link href="/login">Login</Nav.Link>
							<Nav.Link onClick={this.handleLogout} href="/">Log Out</Nav.Link>

						</div>
					</div>
			</Navbar>
		);
	}
}

export default Header;
