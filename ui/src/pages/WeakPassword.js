import React from 'react';
import PasswordStrengthTester from '../components/PasswordStrengthTester';

const WeakPassword = () => {
	return (
		<div className='flex-col card bg-secondary'>
			<h1 className='center mt-3 mb-0'>Strong Passwords Have:</h1>
			<ul className='mt-0'>
				<li className='tab-l'>2+ Words</li>
				<li className='tab-l'>At least one capital letter</li>
				<li className='tab-l'>
					At least one symbol: ` ~ ! @ # $ % ^ & * ( ) &lt; &gt; ?{' '}
				</li>
				<li className='tab-l'>A minimum of 12 characters</li>
			</ul>

			{/* Some good practices */}
			<div className='center line bg-primary m-2' />
			<h1 className='center mt-3 mb-0'>Good Practices:</h1>
			<ul className='mt-0'>
				<li className='tab-l'>
					Tell others to avert their eyes when entering your password
				</li>
				<li className='tab-l'>Don't write your passwords down</li>
				<li className='tab-l'>Change your passwords every few months</li>
				<li className='tab-l'>Don't ask for or use someone else's password</li>
			</ul>

			<div className='center line bg-primary m-2' />
			<PasswordStrengthTester />
		</div>
	);
};

export default WeakPassword;
