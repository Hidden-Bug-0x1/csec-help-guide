import React from 'react';

import './App.css';

import Heading from './components/Heading';

function App() {
  return (
    <div>
      <Heading title="Suspicious Email" />
      <Heading title="Inappropriate Post" />
      <Heading title="Insecure Account Settings" />
      <Heading title="Weak Password" />
    </div>
  );
}

export default App;
