import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { isLoggedIn } from '../../helper/localStorage';

const ProtectedRoute = ({ children, ...otherProps }) => {
	return (
		<Route
			{...otherProps}
			render={({ location }) =>
				isLoggedIn() ? (
					children
				) : (
					<Redirect
						to={{
							pathname: '/login',
							state: { from: location },
						}}
					/>
				)
			}
		/>
	);
};

export default ProtectedRoute;
