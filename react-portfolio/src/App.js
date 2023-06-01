import './App.css';
import React, { useEffect, useState } from 'react';
import Hero from './components/hero/Hero';
import Nav from './components/nav/Nav';
import About from './components/about/About';
import Services from './components/services/Services';
import Works from './components/works/Works';
import Contact from './components/contact/Contact';
import PreLoader from './components/preloader/PreLoader';

function App() {
  const [loaded, setLoaded] = useState(false)

  useEffect(()=>{
    setTimeout(() => {
      setLoaded(true);
    }, 4000)
  },[])

  // console.log(loaded)

  return (
    <div className="app">
          {loaded ?(
            <>
              <Nav />
              <Hero/>
              <About/>
              <Services/>
              <Works/>
              <Contact/>
            </>
          ):(
            <>
              <PreLoader/>
            </>
          )}
        
    </div>
  );
}

export default App;
