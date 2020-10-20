import React from 'react';
import './button.scss';
const Button = (props) => {
	const { display, type, onClick } = props;
	return (
		<button type={type || 'button'} onClick={onClick ? onClick : null}>
			{display}
		</button>
	);
};

export default Button;
