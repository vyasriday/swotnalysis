import React from 'react';
// import logo from '../../assets/logo.png';
import './header.scss';

const Header = (props) => {
	return (
		<header>
			<ul className='left-navigation'>
				<li>
					<span className='logo'>swotnalysis</span>
				</li>
      </ul>
      <ul className="right-navigation">
				<li>
					<span>Hi Hridayesh!</span>	
				</li>
				<li>
					Logout
				</li>
      </ul>
		</header>
	);
};

export default Header;
