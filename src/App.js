import './App.css';
import React from 'react';
import Hero from './components/hero/Hero';
import NatashaNav from './components/natashaNav/Nav';

function App() {
  return (
    <div className="app">
          <NatashaNav />
          {/* <NatashaMain /> */}
          <Hero />
    </div>
  );
}

export default App;
