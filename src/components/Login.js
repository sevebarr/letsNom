import React, { useState } from 'react';
import { Button, FormGroup, FormControl, FormLabel } from 'react-bootstrap';
import LoaderButton from './LoaderButton';
import { Auth } from 'aws-amplify';
import { useHistory } from 'react-router-dom';

export default function Login() {
	const [ email, setEmail ] = useState('');
	const [ password, setPassword ] = useState('');
	const [ isLoading, setIsLoading ] = useState(false);
	const history = useHistory();

	function validateForm() {
		return email.length > 0 && password.length > 0;
	}

	async function handleSubmit(event) {
		event.preventDefault();

		setIsLoading(true);

		try {
			await Auth.signIn(email, password);
			//userHasAuthenticated(true);
			history.push('/');
		} catch (e) {
			alert(e.message);
			setIsLoading(false);
		}
	}

	return (
		<div className="Login">
			<div className="display-4">Lets Nom</div>
			<form onSubmit={handleSubmit}>
				<FormGroup controlId="email" bsSize="large">
					<FormLabel>Email:</FormLabel>
					<FormControl autoFocus type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
				</FormGroup>
				<FormGroup controlId="password" bsSize="large">
					<FormLabel>Password:</FormLabel>
					<FormControl value={password} onChange={(e) => setPassword(e.target.value)} type="password" />
				</FormGroup>

				{/* <Button block bsSize="large" disabled={!validateForm()} type="submit">
					Login
				</Button> */}
				<LoaderButton block type="submit" bsSize="large" isLoading={isLoading} disabled={!validateForm()}>
					Login
				</LoaderButton>
			</form>
		</div>
	);
}
