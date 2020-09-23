/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react';
import './landing.scss';
import LandingImage from '../../assets/swot-analysis-graphic.jpg';

const Landing = () => {
	return (
		<div className='landing row flex-horizontal-center'>
			<div className='text-content'>
				<div className='title'>
					<h2>
						<span className='strength'>s</span>
						<span className='weakness'>w</span>
						<span className='opportunity'>o</span>
						<span className='threat'>t</span>nalysis
					</h2>
				</div>
				<div className='tagline'>
					<p>A swot analysis tool that works really well.</p>
				</div>
			</div>
			<div className='swot-chart'>
				<div className='strength column'>
					<h2 className='head'>S </h2>
					<p className='description'>Things within your control 😃</p>
				</div>
				<div className='weakness column'>
					<h2 className='head'>W </h2>
					<p className='description'>Things you need to work on 👷‍♂️</p>
				</div>

				<div className='opportunity column'>
					<h2 className='head'>O </h2>
					<p className='description'>Always look for these 👀</p>
				</div>
				<div className='threat column'>
					<h2 className='head'>T </h2>
					<p className='description'>What could go wrong? ⚡ </p>
				</div>
			</div>
		</div>
	);
};

export default Landing;
