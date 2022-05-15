import './App.css';
import React from 'react';
import Hero from './components/hero/Hero';
import Nav from './components/nav/Nav';
import About from './components/about/About';
import Services from './components/services/Services';
import Works from './components/works/Works';

function App() {
  return (
    <div className="app">
          <Nav />
          <Hero/>
          <About/>
          <Services/>
          <Works/>
    </div>
  );
}

export default App;
