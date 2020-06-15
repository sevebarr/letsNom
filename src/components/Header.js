import React, { Component } from 'react';
import { Link } from 'react-router-dom';


// import Routes from './Routes';
// import { LinkContainer } from 'react-router-bootstrap'; // Allows App to route to the required link without refreshing the browser

import { Navbar, Nav, NavItem, NavDrowpdown, MenuItem } from 'react-bootstrap';
import { Auth } from 'aws-amplify';

class Header extends Component {

	render() {
		return (
			<Navbar bg="dark" variant="dark" className="collapseOnSelect p-3">
				<Navbar.Brand href="/">Lets Nom</Navbar.Brand>
				{/* d-none d-sm-inline to make navbar brand disappear on small */}

				<div className="collapse navbar-collapse" id="myNavToggle">
					<div className="navbar-nav ml-auto">
						{this.props.userAuthenticated ? (
							<>
							<Nav.Link href="/">Home</Nav.Link>
							<Nav.Link href="/search">Search</Nav.Link>
							<Nav.Link onClick={() => this.props.handleLogout()} href="/">
								Log Out
							</Nav.Link>
							<Nav.Link href="/signup">Sign Up</Nav.Link>
							</> 
						) : (
							<>
							<Nav.Link href="/">Home</Nav.Link>
							<Nav.Link href="/search">Search</Nav.Link>
							<Nav.Link href="/login">Login</Nav.Link>
							<Nav.Link href="/signup">Sign Up</Nav.Link>
							</>
						)
						}


					</div>
				</div>
				{console.log("User Authenticated Header: ", this.props.userAuthenticated)}
			</Navbar>
		);
	}
}

export default Header;
