import React from 'react';
import Navbar from './components/Navbar';
import Stats from './components/Stats';
import Buttons from './components/Buttons';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      <div className="px-8 py-4">
        <Buttons />
        <Stats />
      </div>
    </div>
  );
}

export default App;
