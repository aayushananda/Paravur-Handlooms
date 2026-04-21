import React, { useState, useEffect } from 'react';
import heroVid from '../assets/hero_vid1.mp4';
import heroImg2 from '../assets/hero2.jpeg';
import heroImg3 from '../assets/hero3.jpeg';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Slide configuration with unique media and text
  const slides = [
    {
      mediaType: 'video',
      src: heroVid,
      superTitle: 'A Craft Documentation Project',
      title: 'The Paravur',
      italicTitle: 'Handloom Story',
      description: 'A tribute to the hands, eyes, and bodies behind the Geographical Indication (GI) tagged sarees of Chendamangalam. Preserving a craft that dates back centuries.'
    },
    {
      mediaType: 'image',
      src: heroImg2,
      superTitle: 'Intricate Techniques',
      title: 'The Golden',
      italicTitle: 'Kasavu Thread',
      description: 'Experience the meticulously woven gold and silver metallic threads that form the highlight of the Chendamangalam identity.'
    },
    {
      mediaType: 'image',
      src: heroImg3,
      superTitle: 'Meet the Makers',
      title: 'Generational',
      italicTitle: 'Artisans',
      description: 'The society reverberates with the sound of more than 20 shuttles beating with vigour. Meet the individuals who breathe life into the fabric.'
    }
  ];

  useEffect(() => {
    // Auto-advance the slider every 6 seconds
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#2D2D2D]">
      
      {/* Background Media Slider */}
      {slides.map((slide, index) => (
        <div 
          key={index}
          className={`absolute inset-0 z-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {slide.mediaType === 'video' ? (
            <video 
              src={slide.src} 
              autoPlay 
              loop 
              muted 
              playsInline
              className="w-full h-full object-cover"
            />
          ) : (
            <img 
              src={slide.src} 
              alt={`Slide ${index + 1}`} 
              className="w-full h-full object-cover"
            />
          )}
          {/* Lighter overlay so video is visible, using gradient to help text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#FAF9F6]/60 via-[#FAF9F6]/40 to-[#FAF9F6]/70"></div>
        </div>
      ))}

      {/* Hero Content Slider */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 md:px-8 flex flex-col items-center justify-center h-full pt-16">
        <div className="relative w-full h-[400px] flex items-center justify-center">
          {slides.map((slide, index) => (
            <div 
              key={index}
              className={`absolute inset-0 flex flex-col items-center justify-center transition-all duration-1000 ease-in-out w-full ${
                index === currentSlide 
                  ? 'opacity-100 translate-y-0 visible' 
                  : 'opacity-0 translate-y-8 invisible'
              }`}
            >
              <h3 className="text-[#8B2500] font-sans tracking-[0.25em] uppercase text-xs md:text-sm mb-6 font-bold drop-shadow-sm">
                {slide.superTitle}
              </h3>
              <h1 className="font-serif text-5xl md:text-7xl lg:text-[5.5rem] text-[#2D2D2D] mb-8 leading-[1.1] text-center drop-shadow-sm">
                {slide.title} <br />
                <span className="italic font-light">{slide.italicTitle}</span>
              </h1>
              <p className="font-sans text-base md:text-lg lg:text-xl text-[#2D2D2D] max-w-3xl text-center mb-10 leading-relaxed font-medium">
                {slide.description}
              </p>
              <button className="bg-[#2D2D2D] text-[#FAF9F6] font-sans px-10 py-4 uppercase tracking-[0.2em] text-xs hover:bg-[#8B2500] hover:scale-105 transition-all duration-300 shadow-xl">
                Discover the Craft
              </button>
            </div>
          ))}
        </div>

        {/* Slider Controls */}
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex space-x-4">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                index === currentSlide ? 'bg-[#2D2D2D] w-8' : 'bg-[#2D2D2D]/30 w-2 hover:bg-[#2D2D2D]/60'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Home;
