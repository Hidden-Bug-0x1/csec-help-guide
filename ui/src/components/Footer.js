import React from 'react';

const Footer = () => {
	return (
		<div
			className='card end'
			style={{
				display: 'grid',
				gridTemplateColumns: 'repeat(4, 25%)',
				justifyItems: 'center',
				alignItems: 'center',
			}}
		>
			<h1>Contact Us</h1>

			<h1>Luxland &#169;</h1>

			<h1>About</h1>

			<h1>More Information</h1>
		</div>
	);
};

export default Footer;
