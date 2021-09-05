// modules
import React from 'react';

// styles
import './App.css';

// componenets
import Heading from './components/Heading';

// pages
import SuspiciousEmailPage from './pages/SuspiciousEmailPage';
import InappropriatePost from './pages/InappropriatePost';
import InsecureAccount from './pages/InsecureAccount';
import WeakPassword from './pages/WeakPassword';

function App() {
	return (
		<>
			<h1 className='card'>Luxland Helpline</h1>
			<Heading title='Identify Suspicious Emails' id={1}>
				<SuspiciousEmailPage />
			</Heading>
			<Heading title='Identify Inappropriate Posts' id={2}>
				<InappropriatePost />
			</Heading>
			<Heading title='Secure Account Settings' id={3}>
				<InsecureAccount />
			</Heading>
			<Heading title='Strengthen Password' id={4}>
				<WeakPassword />
			</Heading>
		</>
	);
}

export default App;
