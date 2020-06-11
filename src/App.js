import React, { useState } from 'react';
import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login';
import LetsNom from './components/LetsNom';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
	const [ isAuthenticated, setUserAuthenticated ] = useState(false);

return (
	<div className="App">
		<Router>
		<Header />
			<div>
				<Switch>
					<Route exact path="/">
						<Home />
					</Route>
					<Route exact path="/login">
						<Login />
					</Route>
					<Route exact path="/search">
						<LetsNom />
					</Route>
				</Switch>
			</div>
		</Router>
</div>

			)

};

export default App;
