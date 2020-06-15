import React, { useState, useEffect } from 'react';
import { Auth } from 'aws-amplify';
import Header from './components/Header';
import Routes from './Routes';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { AppContext } from './libs/contextLib';
import { useHistory } from 'react-router-dom';

// import Home from './components/Home';
// import Login from './components/Login';
// import LetsNom from './components/LetsNom';
// import NotFound from './components/NotFound.js';
import './App.css';

function App(props) {
	const [ userAuthenticated, setUserAuthenticated ] = useState(true);
	const [ isAuthenticating, setIsAuthenticating ] = useState(true);

	useEffect(() => {
		onLoad();
	}, []);

	async function onLoad() {
		console.log('current sess', Auth.currentSession);
		try {
			await Auth.currentSession();
			//setUserAuthenticated(true);
		} catch (e) {
			if (e !== 'No current user') {
				alert(e);
			}
		}
		console.log('current sess end', Auth.currentSession);

		setIsAuthenticating(false);
	}

	async function handleLogout() {
		await Auth.signOut();
		setUserAuthenticated(false);
		console.log('logged out');
		props.history.push('/login');
	}

	function amILogged() {
		console.log('button Authenticated: ', userAuthenticated);
	}

	return (
		!isAuthenticating && (
			<div className="App">
				<Router>
					<Header userAuthenticated={userAuthenticated} handleLogout={handleLogout} />
					<button className="btn btn-lg" onClick={() => amILogged()}>
						Logged In?
					</button>
					<AppContext.Provider value={{ userAuthenticated, setUserAuthenticated }}>
						<Routes />
					</AppContext.Provider>
				</Router>
			</div>
		)
	);
}
export default App;
