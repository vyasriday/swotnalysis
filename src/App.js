import React from 'react';
import { Router } from '@reach/router';
import Header from './components/Header';
import Home from './pages/Home';

import Landing from './pages/Landing';
import ErrorBoundary from './components/ErrorBoundary';

const App = () => {
	return (
		<ErrorBoundary>
			<div>
				<Header />
				<Router>
					<Landing path='/' />
					<Home path='/home' />
				</Router>
			</div>
		</ErrorBoundary>
	);
};

export default App;
