import React from 'react';
import './button.scss';
import Loader from '../Loader/index';
const Button = (props) => {
	const { display, type, onClick, loading } = props;
	return (
		<button
			type={type || 'button'}
			onClick={onClick ? onClick : null}
			disabled={loading}
		>
			{loading ? <Loader /> : display}
		</button>
	);
};

export default Button;
