import React from 'react';

const SuspiciousEmailPage = () => {
	return (
		<div className='card bg-secondary flex-col'>
			{/* main content */}
			<div className='tab-l'>
				<h1 className='mb-0'>Characteristics:</h1>
				<ul className='mt-2'>
					<li>Grammar and spelling mistakes</li>
					<li>Links are to unknown sites</li>
					<li>The sender is unkown</li>
					<li>Asks to download files or visit links</li>
				</ul>
			</div>

			<div className='line center' />
			<h1 className='center'>What to do if you open a suspicious email:</h1>
			<ol className='tab-l mt-0'>
				<li>Permanently delete the:</li>
				<ul>
					<li>Suspicious email</li>
					<li>Downloaded content</li>
				</ul>
				<li>Immediately shut down the email application</li>
				<li>Run antivirus softare (update it if needed)</li>
				<li>
					If it was spam or a phishing attack posing as a legitimate site,{' '}
					<br /> notify that organization and include:
				</li>
				<ul>
					<li>The email address</li>
					<li>Content of the email (screenshots help)</li>
					<li>Number of times contacted</li>
					<li>Links or files attached</li>
				</ul>
			</ol>

			<div className='line center' />
			<h1 className='center'>Validate the quality of a file you downloaded:</h1>
			<span className='center'>
				<h1 className='mx-3 mt-0 mb-2 middle p-2'>Visit:</h1>
				<a
					className='mt-0 mb-2 middle p-2'
					style={{ borderRadius: '5%' }}
					href='https://www.virustotal.com'
					target='_blank'
					rel='noreferrer'
				>
					Virus Total
				</a>
			</span>
		</div>
	);
};

export default SuspiciousEmailPage;
