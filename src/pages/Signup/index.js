import React, { useContext, useState } from 'react';
import Button from '../../components/Button';
import Input from '../../components/Input';
import axios from 'axios';
import { setItem } from '../../helper/localStorage';
import { navigate } from '@reach/router';
import UserContext from '../../contexts/userContext';

const Signup = () => {
	// eslint-disable-next-line
	const [_, setCurrentUser] = useContext(UserContext);
	const [user, setUser] = useState({
		name: {
			value: '',
			error: '',
		},
		email: {
			value: '',
			error: null,
		},
		password: {
			value: '',
			error: '',
		},
	});
	async function handleFormSubmit(e) {
		e.preventDefault();
		const data = {
			name: user.name.value,
			email: user.email.value,
			password: user.password.value,
		};

		const response = await axios.post(
			`${process.env.REACT_APP_API_URL}auth/signup`,
			data
		);
		console.log('response ', response);
		const userData = response.data;
		if (userData.token) {
			setItem('st-token', userData.token);
			setCurrentUser(userData.profile);
			navigate('/home');
		}
	}
	return (
		<div className='login-form'>
			<h2>Sign Up</h2>
			<form onSubmit={handleFormSubmit}>
				<Input
					label='Name'
					type='text'
					value={user.name.value}
					onChange={(e) =>
						setUser({
							...user,
							name: { ...user.name, value: e.target.value },
						})
					}
				/>
				<Input
					label='Email'
					type='email'
					value={user.email.value}
					onChange={(e) =>
						setUser({
							...user,
							email: { ...user.email, value: e.target.value },
						})
					}
				/>
				<Input
					label='Password'
					type='password'
					value={user.password.value}
					onChange={(e) =>
						setUser({
							...user,
							password: { ...user.password, value: e.target.value },
						})
					}
				/>
				<Button display='Sign Up' type='submit' />
			</form>
		</div>
	);
};

export default Signup;
