import React from 'react';
import { navigate } from '@reach/router';
import { isLoggedIn } from '../../helper/localStorage';

const ProtectedRoute = ({ component: Component, ...rest }) => {
	if (isLoggedIn()) {
		return <Component {...rest} />;
	}
	return navigate('/login');
};

export default ProtectedRoute;
