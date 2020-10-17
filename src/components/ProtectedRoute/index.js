import React from 'react';
import { Redirect } from '@reach/router';
import { isLoggedIn } from '../../helper/localStorage';

const ProtectedRoute = ({ component: Component, ...rest }) => {
	if (isLoggedIn()) {
		return <Component {...rest} />;
	}
	return <Redirect to='/login' />;
};

export default ProtectedRoute;
