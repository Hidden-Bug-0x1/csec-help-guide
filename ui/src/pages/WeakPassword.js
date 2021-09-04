import React from 'react';

const WeakPassword = () => {
	return (
		<div className='flex-col card bg-secondary'>
			<h1 className="center">Strong Passwords Have:</h1>
      <ul>
        <li>2-3 Words</li>
        <li>At least one capital letter</li>
        <li>At least one symbol: ` ~ ! @ # $ % ^ & * ( ) &lt; &gt; ? </li>
        <li>2-3 Words</li>
      </ul>
		</div>
	);
};

export default WeakPassword;
