import React, { useContext, useState } from 'react';
import Button from '../../components/Button';
import Input from '../../components/Input';
import axios from 'axios';
import { setItem } from '../../helper/localStorage';
import { Link, useHistory } from 'react-router-dom';
import UserContext from '../../contexts/userContext';
import './login.scss';
import { getConfig } from '../../config';

const config = getConfig();

const URL = `${config.API_URL}auth/login`;
const Login = () => {
	// eslint-disable-next-line
	const [_, setCurrentUser] = useContext(UserContext);
	const [user, setUser] = useState({
		email: {
			value: '',
			error: null,
		},
		password: {
			value: '',
			error: 'Password is wrong',
		},
	});
	let history = useHistory();
	async function handleFormSubmit(e) {
		e.preventDefault();
		const data = {
			email: user.email.value,
			password: user.password.value,
		};

		const response = await axios({
			method: 'post',
			url: URL,
			data,
		});
		const userData = response.data;
		if (userData.token) {
			setItem(config.TOKEN, userData.token);
			setCurrentUser(userData.profile);
			history.push('/home');
		}
	}
	return (
		<div className='login-form'>
			<h2>Log In</h2>
			<p>
				Don&apos;t have a account? <Link to='/signup'>Sign Up</Link>
			</p>
			<form onSubmit={handleFormSubmit}>
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
				<Button display='Log In' type='submit' />
			</form>
		</div>
	);
};

export default Login;
