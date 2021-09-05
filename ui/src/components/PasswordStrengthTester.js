import React, { useEffect, useState } from 'react';

const PasswordStrengthTester = () => {
	const [pswd, setPwsd] = useState('');
	const [fails, setFails] = useState([]);

	useEffect(() => {
		setFails(isSecure());
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const isSecure = () => {
		if (pswd.length === 0) {
			return ['Please enter your password above'];
		}

		let fails = [];
		let c = 0;

		if (pswd.length < 12) {
			fails.push('Password too short');
		}

		c = (pswd.match(/[0-9]/g) || []).length;
		if (c === 0) {
			fails.push('No numbers');
		}

		c = (pswd.match(/[`~!@#$%^&*()<>?]/g) || []).length;
		if (c === 0) {
			fails.push('No special characters');
		}

		c = (pswd.match(/[A-Z]/g) || []).length;
		if (c === 0) {
			fails.push('No uppercase letters');
		}

		return fails.length > 0 ? fails : ['Yes'];
	};

	return (
		<>
			<h1 className='center mt-1 mb-0'>Is your password strong?</h1>
			{/* Get their password */}
			<input
				type='password'
				onChange={(e) => {
					setPwsd(e.target.value);
					setFails(isSecure());
				}}
				style={{
					width: '70%',
				}}
				className='center mt-2'
			/>

			{/* Any errors with the password appear here */}

			<div
				className={`center mt-2 flex-col px-3 ${
					fails[0] === 'Yes' ? '' : 'bg-danger'
				}`}
			>
				{fails.map((val, ind) => {
					return (
						<h1 key={ind} className='m-1'>
							{val}
						</h1>
					);
				})}
			</div>
		</>
	);
};

export default PasswordStrengthTester;
