import React from 'react';

import './App.css';

import Heading from './components/Heading';

function App() {
  return (
    <div>
      <Heading title="Suspicious Email" id={1}>
        <h1>All my other data!</h1>
      </Heading>
      <Heading title="Inappropriate Post" id={2} />
      <Heading title="Insecure Account Settings" id={3} />
      <Heading title="Weak Password" id={4} />
    </div>
  );
}

export default App;
