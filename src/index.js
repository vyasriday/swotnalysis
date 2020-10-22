import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

import './index.scss';

ReactDOM.render(
	<BrowserRouter>
		<StrictMode>
			<App />
		</StrictMode>
	</BrowserRouter>,

	document.getElementById('root')
);
