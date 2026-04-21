import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { navLinks, contactInfo } from '../constants';
import footerBg from '../assets/footerbg.jpeg';

const Footer = () => {
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
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="relative text-[#FAF9F6] overflow-hidden">
      
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${footerBg})` }}
      >
        <div className="absolute inset-0 bg-[#1a1a1a]/60 backdrop-blur-[2px]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 py-20">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          
          {/* Brand Section */}
          <div className="col-span-1 lg:col-span-1">
            <h2 className="font-serif text-3xl font-bold mb-6 text-[#FFFFFF]">
              Paravur <br /><span className="text-[#C5A059] italic font-normal">Handlooms</span>
            </h2>
            <p className="font-sans text-sm text-gray-300 leading-relaxed mb-6 pr-4">
              A collaborative effort highlighting the labour that goes into creating clothing, preserving a craft that dates back centuries in Chendamangalam.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-sans text-xs uppercase tracking-widest text-[#C5A059] mb-6 font-semibold">Explore</h3>
            <ul className="space-y-4">
              {navLinks.map((link) => (
                <li key={`footer-${link.id}`}>
                  <Link 
                    to={`/#${link.id}`} 
                    onClick={(e) => handleNavClick(e, link.id)}
                    className="font-sans text-sm text-gray-300 hover:text-white transition-colors"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Society Details */}
          <div>
            <h3 className="font-sans text-xs uppercase tracking-widest text-[#C5A059] mb-6 font-semibold">The Society</h3>
            <ul className="space-y-4">
              <li><Link to="/#about" onClick={(e) => handleNavClick(e, 'about')} className="font-sans text-sm text-gray-300 hover:text-white transition-colors">Our History</Link></li>
              <li><Link to="/#artisans" onClick={(e) => handleNavClick(e, 'artisans')} className="font-sans text-sm text-gray-300 hover:text-white transition-colors">Meet the Weavers</Link></li>
              <li><Link to="/#shop" onClick={(e) => handleNavClick(e, 'shop')} className="font-sans text-sm text-gray-300 hover:text-white transition-colors">GI Tagged Sarees</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-sans text-xs uppercase tracking-widest text-[#C5A059] mb-6 font-semibold">Visit Us</h3>
            <address className="not-italic font-sans text-sm text-gray-300 space-y-4">
              <p>
                Chendamangalam<br/>
                North Paravur, Kerala
              </p>
              <p>
                <a href={`mailto:${contactInfo.email}`} className="hover:text-white transition-colors block">{contactInfo.email}</a>
                <a href={`tel:${contactInfo.phone}`} className="hover:text-white transition-colors block">{contactInfo.phone}</a>
              </p>
            </address>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-20 pt-8 border-t border-gray-600/50 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-sans text-xs text-gray-400 uppercase tracking-wider">
            &copy; {new Date().getFullYear()} Paravur Handloom Weaver's Co-operative Society.
          </p>
          <button 
            onClick={scrollToTop}
            className="font-sans text-xs uppercase tracking-widest text-gray-300 hover:text-[#C5A059] transition-colors flex items-center gap-2"
          >
            Back to Top
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5 10l7-7m0 0l7 7m-7-7v18"></path>
            </svg>
          </button>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
