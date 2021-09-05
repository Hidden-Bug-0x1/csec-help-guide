import React from 'react';

const InappropriatePost = () => {
	return (
		<div className='card bg-secondary flex-col'>
			<h1 className='tab-l'>Characteristics:</h1>
			<ul className='tab-l mt-0'>
				<li>Contains, or tags, people without their consent</li>
				<li>
					Reveals <span style={{ textDecoration: 'underline' }}>P</span>
					ersonally <span style={{ textDecoration: 'underline' }}>I</span>
					dentifiable <span style={{ textDecoration: 'underline' }}>I</span>
					nformation (PII)
				</li>
				<h1 className='m-0'>For example:</h1>
				<ul>
					<li>Addresses</li>
					<li>Phone numbers</li>
					<li>Emails</li>
				</ul>
				<li>Reveals a current location</li>
				<li>Reveals future plans</li>
				<li>Spreads rumors</li>
				<li>Is emotionally damaging to others</li>
			</ul>
		</div>
	);
};

export default InappropriatePost;
