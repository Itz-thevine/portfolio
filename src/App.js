import './App.css';
import React from 'react';
import Hero from './components/hero/Hero';
import Nav from './components/nav/Nav';
import About from './components/about/About';

function App() {
  return (
    <div className="app">
          <Nav />
          <Hero/>
          <About/>
    </div>
  );
}

export default App;
