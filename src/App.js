import './App.css';
import NavBar from './components/NavBar'
import HomePage from './components/pages/HomePage'
import Work from './components/pages/Work'
import Design from './components/pages/Design'
import Footer from './components/usableComponents/Footer'
// import React from 'react';
import { Routes, Route } from 'react-router-dom';
import React, { useEffect, useRef } from 'react';
import Lenis from '@studio-freight/lenis';

function App() {
  const lenisRef = useRef(null);

  useEffect(() => {
    const lenis = new Lenis({
      smooth: true,
      lerp: 0.04,  // Nilai lebih kecil = pergerakan lebih lambat dan berat
      duration: 2, // Tambah durasi agar terasa berat
      easing: (t) => 1 - Math.pow(1 - t, 4), // Efek ease-out yang lebih kuat
      smoothTouch: true, // Aktifkan smooth scrolling untuk perangkat layar sentuh
      touchMultiplier: 1.2, // Turunkan sensitivitas touch scrolling
    });

    lenisRef.current = lenis;

    function raf(time){
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="container">
      <NavBar/>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/work" element={<Work/>} />
        <Route path="/design" element={<Design/>} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
