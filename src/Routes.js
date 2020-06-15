import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import LetsNom from './components/LetsNom';
import NotFound from './components/NotFound';
import Signup from './components/Signup';

export default function Routes() {
	return (
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

			<Route exact path="/signup">
				<Signup />
			</Route>

			<Route path="/">
				<NotFound />
			</Route>
		</Switch>
	);
}
