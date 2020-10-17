import React from 'react';
import './button.scss';
const Button = (props) => {
	const { display, disabled, type, onClick } = props;
	return (
		<button
			type={type || 'button'}
			disabled={disabled}
			onClick={onClick ? onClick : null}
		>
			{display}
		</button>
	);
};

export default Button;
