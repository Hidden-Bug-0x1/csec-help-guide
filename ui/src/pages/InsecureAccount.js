import React from 'react';

const InsecureAccount = () => {
	return (
		<div className='card bg-secondary flex-col'>
			<h1 className='center mb-0'>General Guidlines:</h1>
			<ul className='tab-l'>
				<li>Turn on alerts for unrecognized logins</li>
				<li>Enable 2-factor authentication</li>
				<li>Enable encryption when possible</li>
				<li>Only allow friends to:</li>
				<ul>
					<li>See your posts</li>
					<li>Comment on posts</li>
				</ul>
				<li>Control what posts you are tagged in</li>
				<li>Restrict who can search and follow you</li>
			</ul>
		</div>
	);
};

export default InsecureAccount;
