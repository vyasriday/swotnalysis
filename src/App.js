import React from 'react';
import { Router } from '@reach/router';
import Header from './components/Header/index.jsx';
import Home from './pages/Home/index.jsx';

import Landing from './pages/Landing/index.jsx';

const App = () => {
	return (
		<div>
			<Header />
			<Router>
				<Landing path='/' />
				<Home path='/home' />
			</Router>
		</div>
	);
};

export default App;
