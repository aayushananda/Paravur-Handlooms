import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { navLinks, contactInfo } from '../constants';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const lastScrollY = useRef(0);
  const ticking = useRef(false);
  
  const location = useLocation();
  const isHome = location.pathname === '/';

  const handleNavClick = (e, id) => {
    if (isHome) {
      e.preventDefault();
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (!ticking.current) {
        window.requestAnimationFrame(() => {
          const isScrolled = currentScrollY > 10;
          if (isScrolled !== scrolled) {
            setScrolled(isScrolled);
          }
          
          if (currentScrollY > lastScrollY.current + 5 && currentScrollY > 100) {
            setVisible(false);
          } else if (currentScrollY < lastScrollY.current - 5 || currentScrollY <= 10) {
            setVisible(true);
          }
          
          lastScrollY.current = currentScrollY;
          ticking.current = false;
        });
        
        ticking.current = true;
      }
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 transform top-0 ${
        visible ? 'translate-y-0' : '-translate-y-full'
      } ${
        scrolled ? 'bg-[#FAF9F6] shadow-sm py-3' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          
          {/* Logo Section */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex flex-col group">
              <h1 className="font-serif text-2xl md:text-3xl font-bold tracking-tight text-[#2D2D2D]">
                Paravur <span className="text-[#C5A059] italic">Handlooms</span>
              </h1>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex flex-1 justify-center">
            <ul className="flex items-center space-x-10">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <Link 
                    to={`/#${link.id}`}
                    onClick={(e) => handleNavClick(e, link.id)}
                    className="text-[#2D2D2D] hover:text-[#C5A059] font-sans text-xs uppercase tracking-widest transition-colors relative group"
                  >
                    {link.title}
                    <span className="absolute -bottom-2 left-0 w-0 h-px bg-[#C5A059] transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          
          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center justify-end">
            <Link 
              to="/#contact"
              onClick={(e) => handleNavClick(e, 'contact')}
              className="font-sans text-xs uppercase tracking-widest text-[#2D2D2D] border border-[#2D2D2D] px-6 py-2 hover:bg-[#2D2D2D] hover:text-[#FAF9F6] transition-colors"
            >
              Inquire
            </Link>
          </div>
          
          {/* Mobile Menu Toggle */}
          <div className="lg:hidden flex items-center">
            <button 
              onClick={toggleMenu}
              className="p-2 text-[#2D2D2D] focus:outline-none"
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div 
        className={`lg:hidden transition-all duration-300 ease-in-out overflow-hidden bg-[#FAF9F6] ${
          isMenuOpen ? 'max-h-96 border-t border-[#e5e4e7] shadow-lg' : 'max-h-0'
        }`}
      >
        <div className="px-4 py-6 space-y-4 text-center">
          {navLinks.map((link) => (
            <Link
              key={link.id}
              to={`/#${link.id}`}
              className="block font-serif text-xl text-[#2D2D2D] hover:text-[#C5A059] transition-colors"
              onClick={(e) => handleNavClick(e, link.id)}
            >
              {link.title}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
