import React, { useEffect, useState } from 'react';
import { getConfig } from '../../config';
import { getItem } from '../../helper/localStorage';
import './home.scss';
import axios from 'axios';
import { FaCheck, FaTimes, FaPlus } from 'react-icons/fa';
const config = getConfig();
const URL = `${config.API_URL}api/swot`;

const DisplayItem = ({ item }) => {
	return (
		<div className='item'>
			<p className='text'>{item.title}</p>
			<hr />
		</div>
	);
};

const FormComponent = ({ onSubmit, type }) => {
	const colors = {
		Strengths: 'yellowgreen',
		Weaknesses: 'yellow',
		Opportunities: 'orange',
		Threats: 'red',
	};
	const [value, setValue] = useState('');
	const [showForm, setShowForm] = useState(false);
	if (showForm) {
		return (
			<form onSubmit={onSubmit} className='form-component'>
				<input
					type='text'
					value={value}
					onChange={(e) => setValue(e.target.value)}
				/>
				{value && (
					<FaCheck
						color='green'
						size={22}
						onClick={(e) => {
							onSubmit(e, value, type);
							setValue('');
						}}
					/>
				)}

				<FaTimes color='red' size={22} onClick={() => setShowForm(!showForm)} />
			</form>
		);
	} else {
		return (
			<div className='add-item-icon'>
				<FaPlus
					color={colors[type]}
					size={24}
					onClick={() => setShowForm(!showForm)}
				/>
			</div>
		);
	}
};

const Home = () => {
	const [swot, setSwot] = useState({
		strengths: [],
		weaknesses: [],
		opportunities: [],
		threats: [],
	});
	useEffect(() => {
		async function getSwotData() {
			const token = getItem(config.TOKEN);
			const {
				data: { data },
			} = await axios({
				method: 'get',
				url: URL,
				headers: {
					'X-Auth-Token': token,
				},
			});
			// take the first item, later on will change it.
			setSwot(data[0]);
		}
		getSwotData();
	}, []);

	async function addItem(e, item, type) {
		e.preventDefault();
		const _id = swot._id;
		const updatedData = {
			...swot,
			[type.toLowerCase()]: [...swot[type.toLowerCase()], { title: item }],
		};
		const {
			data: { data },
		} = await axios({
			method: 'put',
			url: `${URL}/${_id}`,
			data: updatedData,
			headers: {
				'X-Auth-Token': getItem(config.TOKEN),
			},
		});
		if (data.error) {
			// could not update
			return;
		}
		setSwot(data);
	}

	return (
		<div>
			<div className='boxes'>
				<div className='row'>
					<div className='column strength'>
						<div className='title'>
							<h2>Strength</h2>
						</div>
						<div className='items'>
							{swot.strengths.map((item, index) => (
								<DisplayItem item={item} key={index} />
							))}
						</div>
						<div className='new-form-component'>
							<FormComponent type='Strengths' onSubmit={addItem} />
						</div>
					</div>
					<div className='column weakness'>
						<div className='title'>
							<h2>Weakness</h2>
						</div>
						<div className='items'>
							{swot.weaknesses.map((item, index) => (
								<DisplayItem item={item} key={index} />
							))}
						</div>
						<div className='new-form-component'>
							<FormComponent type='Weaknesses' onSubmit={addItem} />
						</div>
					</div>
				</div>
				<div className='row'>
					<div className='column opportunity'>
						<div className='title'>
							<h2>Opportunity</h2>
						</div>
						<div className='items'>
							{swot.opportunities.map((item, index) => (
								<DisplayItem item={item} key={index} />
							))}
						</div>

						<div className='new-form-component'>
							<FormComponent type='Opportunities' onSubmit={addItem} />
						</div>
					</div>
					<div className='column threat'>
						<div className='title'>
							<h2>Threat</h2>
						</div>
						<div className='items'>
							{swot.threats.map((item, index) => (
								<DisplayItem item={item} key={index} />
							))}
						</div>
						<div className='new-form-component'>
							<FormComponent type='Threats' onSubmit={addItem} />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
