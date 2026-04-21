import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';
import aboutImg from '../assets/about.png';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const textRef = useRef(null);

  useGSAP(() => {
    // Create a timeline that is scrubbed via ScrollTrigger
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",      // Start when section hits top of viewport
        end: "+=250%",         // Extended pin duration for smoother multi-step animation
        scrub: 1,              // Smooth scrubbing
        pin: true,             // Pin the section
        anticipatePin: 1
      }
    });

    // Phase 1: Image comes up from below center, starts small, scales to 1, and goes slightly above center
    tl.fromTo(imageRef.current, {
      y: 350, // Starts a little below center instead of the very bottom
      scale: 0.3,
      opacity: 0
    }, {
      y: -60, // Goes a few pixels above center
      scale: 1.1, // Scale up nicely
      opacity: 1,
      duration: 1.5,
      ease: "power2.out"
    })
    
    // Phase 2: Image settles down while moving significantly to the left
    .to(imageRef.current, {
      xPercent: -130, // Pushed much further left to avoid text overlap
      y: -80, // Settles a bit higher up, slightly above the bottom boundary
      scale: 1,
      duration: 1.5,
      ease: "power2.inOut"
    })
    
    // Phase 3: Text slides in from the left and fades in simultaneously
    .from(textRef.current, {
      x: -80,
      opacity: 0,
      duration: 1.2,
      ease: "power2.out"
    }, "<0.2"); // Start slightly after the image starts moving left

  }, { scope: sectionRef });

  return (
    <section 
      ref={sectionRef} 
      id="about" 
      className="h-screen w-full bg-[#FAF9F6] overflow-hidden relative"
    >
      <div className="absolute inset-0 max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Image Container */}
        {/* Removed shadow and background styling as requested */}
        <div 
          ref={imageRef} 
          className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-[280px] md:max-w-md lg:max-w-lg z-20"
        >
          <img 
            src={aboutImg} 
            alt="Chendamangalam Weaving" 
            className="w-full h-auto object-contain" // Changed to object-contain to preserve original image aspects without bg clipping
          />
        </div>

        {/* Text Container that will appear on the right side */}
        <div 
          ref={textRef}
          className="absolute left-1/2 top-1/2 transform -translate-y-1/2 w-full max-w-xl pl-8 md:pl-16 z-10"
        >
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#2D2D2D] mb-6 leading-tight">
            Chendamangalam's <br />
            <span className="italic text-[#C5A059]">Legacy</span>
          </h2>
          <div className="font-sans text-[#555555] space-y-6 text-base md:text-lg leading-relaxed">
            <p>
              The Paravur Handloom Weaver's Co-operative Society stands as a testament to the resilience of generational crafts in India. Nestled in Chendamangalam, North Paravur, the society reverberates with the sound of more than 20 shuttles beating with vigour.
            </p>
            <p>
              The Kasavu border, a highlight of Chendamangalam, features gold or silver metallic thread meticulously woven into plain white and off-white fabrics. Through intricate Jacquard and Dobby techniques—using cardboard punch cards—weavers create breathtaking geometric and floral patterns that are symbolic of Kerala's cultural identity.
            </p>
            <p className="font-medium text-[#2D2D2D]">
              At an age where most carried pencils and candy, these artisans carried a shuttle and a bobbin. This is their story.
            </p>

            <div className="pt-6">
              <Link to="/story" className="inline-block font-sans text-sm uppercase tracking-widest text-[#2D2D2D] border-b border-[#2D2D2D] pb-1 hover:text-[#C5A059] hover:border-[#C5A059] transition-colors cursor-pointer">
                Read More About Our Heritage
              </Link>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
