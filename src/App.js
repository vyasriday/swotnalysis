import React from 'react';
import { Router } from '@reach/router';
import Header from './components/Header';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Landing from './pages/Landing';
import ErrorBoundary from './components/ErrorBoundary/index';
import ProtectedRoute from './components/ProtectedRoute';

const App = () => {
	return (
		<ErrorBoundary>
			<div>
				<Header />
				<Router>
					<Landing path='/' />
					<ProtectedRoute component={Home} path='/home' />
					<Login path='/login' />
					<Signup path='/signup' />
				</Router>
			</div>
		</ErrorBoundary>
	);
};

export default App;
