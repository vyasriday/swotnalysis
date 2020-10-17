import React from 'react';
import './button.scss';
const Button = (props) => {
	const { display, disabled, type } = props;
	return (
		<button type={type || 'button'} disabled={disabled}>
			{display}
		</button>
	);
};

export default Button;
