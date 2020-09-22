import React, { useState } from 'react';
import './home.scss';

const data = {
	strength: [
		'I have one year of experience',
		'I can make complex applications easliy',
		'I have one year of experience',
		'I can make complex applications easliy',
		'I have one year of experience',
		'I can make complex applications easliy',
	],
	weakness: [
		'I have one year of experience',
		'I can make complex applications easliy',
		'I have one year of experience',
		'I can make complex applications easliy',
	],
	opportunity: [
		'I have one year of experience',
		'I can make complex applications easliy',
		'I have one year of experience',
		'I can make complex applications easliy',
	],
	threat: [
		'I have one year of experience',
		'I can make complex applications easliy',
		'I have one year of experience',
		'I can make complex applications easliy',
	],
};

const DisplayItem = (props) => {
	return (
		<div className='item'>
			<p className='text'>{props.item}</p>
			<hr />
		</div>
	);
};

// const ItemForm = ({ updateItem, placeholder }) => {
// 	const [value, setValue] = useState('');

// 	return (
// 		<form>
// 			<input
// 				type='text'
// 				placeholder={placeholder}
// 				value={value}
// 				onChange={(e) => setValue(e.target.value)}
// 			/>
// 			<button type='submit'>Add</button>
// 		</form>
// 	);
// };

const Home = (props) => {
	return (
		<div>
			<div className='boxes'>
				<div className='row'>
					<div className='column strength'>
						<div className='title'>
							<h3>Strength</h3>
						</div>
						<div className='items'>
							{data.strength.map((item, index) => (
								<DisplayItem item={item} key={index} />
							))}
						</div>
					</div>
					<div className='column weakness'>
						<div className='title'>
							<h3>Weakness</h3>
						</div>
						<div className='items'>
							{data.weakness.map((item, index) => (
								<DisplayItem item={item} key={index} />
							))}
						</div>
					</div>
				</div>
				<div className='row'>
					<div className='column opportunity'>
						<div className='title'>
							<h3>Opportunity</h3>
						</div>
						<div className='items'>
							{data.opportunity.map((item, index) => (
								<DisplayItem item={item} key={index} />
							))}
						</div>
					</div>
					<div className='column weakness'>
						<div className='title'>
							<h3>Threat</h3>
						</div>
						<div className='items'>
							{data.threat.map((item, index) => (
								<DisplayItem item={item} key={index} />
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
