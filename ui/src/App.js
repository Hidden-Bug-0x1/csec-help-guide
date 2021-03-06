// modules
import React from 'react';

// styles
import './App.css';

// componenets
import Heading from './components/Heading';
import Footer from './components/Footer';

// pages
import SuspiciousEmailPage from './pages/SuspiciousEmailPage';
import InappropriatePost from './pages/InappropriatePost';
import InsecureAccount from './pages/InsecureAccount';
import WeakPassword from './pages/WeakPassword';
import SocialEngineering from './pages/SocialEngineering';
import Miscellaneous from './pages/Miscellaneous';

function App() {
	return (
		<>
			<h1 className='card center' style={{ display: 'flex' }}>
				Luxland Helpline
			</h1>
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
			<Heading title='Identify Social Engineering Attacks' id={5}>
				<SocialEngineering />
			</Heading>
			<Heading title='Other Tips' id={6}>
				<Miscellaneous />
			</Heading>

			<Footer />
		</>
	);
}

export default App;
