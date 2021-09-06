import React from 'react';

const SocialEngineering = () => {
	return (
		<div className='card bg-secondary flex-col'>
			<h1 className='tab-l mb-1'>Warning Signs:</h1>
			<ul className='tab-l mt-0'>
				<li>Asking for personal information</li>
				<ul>
					<li>Addresses</li>
					<li>ID numbers</li>
					<li>Contacts</li>
					<li>Credit/Debit Card numbers</li>
				</ul>
				<li>Announcing themselves as a relative or friend</li>
				<li>Or remaining vague and anonymous, spoofy</li>
			</ul>

			<div className='line center' />
			<h1 className='tab-l'>Fixes:</h1>
			<ul className='tab-l mt-0'>
				<li>Authenticate them</li>
				<li>Just don't give them personal information</li>
			</ul>
		</div>
	);
};

export default SocialEngineering;
