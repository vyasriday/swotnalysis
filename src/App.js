import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Landing from './pages/Landing';
import ErrorBoundary from './components/ErrorBoundary/index';
import ProtectedRoute from './components/ProtectedRoute';
import UserContext from './contexts/userContext';
import { getItem } from './helper/localStorage';
import { getConfig } from './config';
import axios from 'axios';
const config = getConfig();
const URL = `${config.API_URL}api/profile`;
const App = () => {
	const userHook = useState(null);

	useEffect(() => {
		async function getUser() {
			const token = getItem(config.TOKEN);
			if (token) {
				const {
					data: { profile },
				} = await axios({
					method: 'get',
					url: URL,
					headers: {
						'X-Auth-Token': token,
					},
				});
				if (profile) {
					const [, setUser] = userHook;
					setUser(profile);
				}
			}
		}
		getUser();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	return (
		<ErrorBoundary>
			<UserContext.Provider value={userHook}>
				<div>
					<Header />
					<Switch>
						<Route path='/' exact>
							<Landing />
						</Route>
						<ProtectedRoute path='/home'>
							<Home />
						</ProtectedRoute>
						<Route path='/login'>
							<Login />
						</Route>
						<Route path='/signup'>
							<Signup />
						</Route>
					</Switch>
				</div>
			</UserContext.Provider>
		</ErrorBoundary>
	);
};

export default App;
