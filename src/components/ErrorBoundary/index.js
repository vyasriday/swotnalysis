import { Link, navigate } from '@reach/router';
import React from 'react';

class ErrorBoundary extends React.Component {
	state = {
		hasError: false,
	};

	static getDerivedStateFromError() {
		return {
			hasError: true,
		};
	}

	componentDidCatch(error, errorInfo) {
		console.error(error, errorInfo);
	}

	componentDidUpdate() {
		setTimeout(() => navigate('/'), 5000);
	}

	render() {
		const { hasError } = this.state;
		if (hasError) {
			return (
				<div className='error-page'>
					<h3>Oops! Something went wrong on our side.</h3>
					<Link to='/'>Go Back</Link>
				</div>
			);
		}
		return this.props.children;
	}
}

export default ErrorBoundary;
