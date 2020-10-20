import { Link, navigate } from '@reach/router';
import React, { useContext } from 'react';
import { isLoggedIn } from '../../helper/localStorage';
import UserContext from '../../contexts/userContext';
import Button from '../Button';
import './header.scss';

const Header = () => {
	const [currentUser] = useContext(UserContext);
	return (
		<header>
			<ul className='left-navigation'>
				<li>
					<Link to='/'>
						<span className='logo'>
							<span className='strength'>s</span>
							<span className='weakness'>w</span>
							<span className='opportunity'>o</span>
							<span className='threat'>t</span>
							nalysis
						</span>
					</Link>
				</li>
			</ul>
			{currentUser && isLoggedIn() ? (
				<ul className='right-navigation'>
					{/* if not logged in  */}
					<li>
						<Link to='/home'>
							<Button display='Home' />
						</Link>
					</li>
					<li>
						<Button
							display='Log out'
							onClick={() => {
								localStorage.clear();
								navigate('/');
							}}
						/>
					</li>
				</ul>
			) : (
				<ul className='right-navigation'>
					<li>
						<Link to='/login'>
							<Button display='Log In' />
						</Link>
					</li>
					<li>
						<Link to='/signup'>
							<Button display='Sign Up' />
						</Link>
					</li>
				</ul>
			)}
		</header>
	);
};

export default Header;
