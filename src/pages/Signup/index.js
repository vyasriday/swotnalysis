import React, { useContext, useState } from 'react';
import Button from '../../components/Button';
import Input from '../../components/Input';
import axios from 'axios';
import { setItem } from '../../helper/localStorage';
import { Link, useHistory } from 'react-router-dom';
import UserContext from '../../contexts/userContext';
import './signup.scss';
import { getConfig } from '../../config';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const config = getConfig();

const URL = `${config.API_URL}auth/signup`;
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
	const [loading, setLoading] = useState(false);
	let history = useHistory();
	async function handleFormSubmit(e) {
		setLoading(true);
		e.preventDefault();
		setLoading(true);
		const data = {
			name: user.name.value,
			email: user.email.value,
			password: user.password.value,
		};
		const response = await axios({
			method: 'post',
			url: URL,
			data,
		});
		setLoading(false);
		const userData = response.data;
		if (userData.token) {
			setItem(config.TOKEN, userData.token);
			setCurrentUser(userData.profile);
			history.push('/home');
		} else if (userData.error) {
			toast.error(userData.error, {
				position: 'top-center',
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: false,
				progress: undefined,
			});
		}
	}
	return (
		<div className='signup-form'>
			<h2>Sign Up</h2>
			<p>
				Already a memeber? <Link to='/login'>Log In</Link>
			</p>
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
				<Button display='Sign Up' type='submit' loading={loading} />
			</form>
			<ToastContainer
				position='top-center'
				autoClose={5000}
				hideProgressBar
				newestOnTop
				closeOnClick
				rtl={false}
				pauseOnFocusLoss={false}
				draggable={false}
				pauseOnHover
			/>
		</div>
	);
};

export default Signup;
