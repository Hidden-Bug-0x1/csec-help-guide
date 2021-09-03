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
			<h1 className='card'>Report Your Problem</h1>
			<Heading title='Suspicious Email' id={1}>
				<SuspiciousEmailPage />
			</Heading>
			<Heading title='Inappropriate Post' id={2}>
				<InappropriatePost />
			</Heading>
			<Heading title='Insecure Account Settings' id={3}>
				<InsecureAccount />
			</Heading>
			<Heading title='Weak Password' id={4}>
				<WeakPassword />
			</Heading>
		</>
	);
}

export default App;
