import React, { useState } from 'react';
import Button from '../../components/Button';
import Input from '../../components/Input';

const Login = () => {
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
	function handleFormSubmit(e) {
		e.preventDefault();
		console.log('user', user);
	}
	return (
		<div className='login-form'>
			<h2>Login In</h2>
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
