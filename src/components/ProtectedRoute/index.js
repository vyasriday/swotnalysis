import React from 'react';
import { navigate, Router } from '@reach/router';
import { isLoggedIn } from '../../helper/localStorage';

const ProtectedRoute = (props) => {
	if (isLoggedIn()) {
		return <Router component={props.component} path={props.path} />;
	}
	return navigate('/login');
};

export default ProtectedRoute;
