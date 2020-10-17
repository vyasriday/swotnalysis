import React from 'react';
import Button from '../Button';
import './header.scss';

const Header = (props) => {
	return (
		<header>
			<ul className='left-navigation'>
				<li>
					<span className='logo'>
						<span className='strength'>s</span>
						<span className='weakness'>w</span>
						<span className='opportunity'>o</span>
						<span className='threat'>t</span>
						nalysis
					</span>
				</li>
			</ul>
			<ul className='right-navigation'>
				{/* if not logged in  */}
				<li>
					<Button display='Log In' />
				</li>
				<li>
					<Button display='Sign Up' />
				</li>
				{/* If user logged in  */}
				<li>
					<Button display='Home' />
					<Button display='Log Out' />
				</li>
			</ul>
		</header>
	);
};

export default Header;
