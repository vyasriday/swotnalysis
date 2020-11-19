import React from 'react';
import './input.scss';
const Input = ({ label, type, value, onChange, error = null }) => {
	const id = `custom-inout-${label ? label.toLowerCase() : ''}`;
	return (
		<div className='group'>
			<label htmlFor={id}>
				{label}
				<input
					id={id}
					type={type}
					value={value}
					onChange={onChange}
					required
					className={error ? 'highlight-error' : null}
				/>
			</label>
			{error ? <p className='error'>{error}</p> : null}
		</div>
	);
};

export default Input;
