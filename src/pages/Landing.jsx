import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Home, About, Artisans, Shop, Location, Contact } from '../sections';

const Landing = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        // Small timeout to allow GSAP ScrollTrigger to initialize pins before calculating position
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <main>
      <Home />
      <About />
      <Artisans />
      <Shop />
      <Location />
      <Contact />
    </main>
  );
};

export default Landing;
