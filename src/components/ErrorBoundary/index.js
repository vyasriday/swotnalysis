import { Link } from 'react-router-dom';
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

	componentDidUpdate() {}

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
