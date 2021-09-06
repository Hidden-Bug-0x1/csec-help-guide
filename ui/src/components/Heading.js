import React, { useState } from 'react';

// add prop types
const Heading = (props) => {
	const { title, id } = props;
	const [isOpen, setOpen] = useState(false);
	// const [tm, setTM] = useState(0);

	const handleClick = () => {
		let dropdown = document.getElementById(`toggler${id}`);
		let arrow = document.getElementById(`arrow${id}`);

		dropdown.classList.toggle('collapsed');
		arrow.classList.toggle('down');
		arrow.classList.toggle('up');

		setOpen(isOpen ? false : true);
	};

	return (
		<div onClick={handleClick} className='mb-3'>
			<div className='container card disable-select'>
				<h1 className='card'>{title}</h1>
				<div id={`arrow${id}`} className='arrow down center'></div>
			</div>

			<div className='collapsible'>
				<div id={`toggler${id}`} className='collapsible-wrapper collapsed'>
					<div
						id={`content${id}`}
						className='container bg-secondary mt-0'
						style={{
							display: isOpen ? 'block' : 'none',
						}}
					>
						{props.children}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Heading;
