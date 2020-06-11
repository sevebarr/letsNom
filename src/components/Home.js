import React from "react";
import { Navbar, Nav, NavItem, NavDrowpdown, MenuItem } from 'react-bootstrap';



export default function Home() {
  return (
    <div className="Home">
      <div className="lander">
        <div className="jumbotron display-2 m-5">Lets Nom</div>
        <div>
          <div className="m-3"><em className="display-4 ">Need a treat? </em></div>
						<button className="p-3 btn btn-lg btn-link">
            <Nav.Link className="display-4" href="/search">Pick a place to eat!</Nav.Link>
            </button>
            </div>
      </div>
    </div>
  );
}