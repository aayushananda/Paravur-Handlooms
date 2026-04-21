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
    let mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      // Desktop animation (split screen)
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=250%",
          scrub: 1,
          pin: true,
          anticipatePin: 1
        }
      });

      tl.fromTo(imageRef.current, {
        y: 350,
        scale: 0.3,
        opacity: 0
      }, {
        y: -60,
        scale: 1.1,
        opacity: 1,
        duration: 1.5,
        ease: "power2.out"
      })
      .to(imageRef.current, {
        xPercent: -130,
        y: -80,
        scale: 1,
        duration: 1.5,
        ease: "power2.inOut"
      })
      .from(textRef.current, {
        x: -80,
        opacity: 0,
        duration: 1.2,
        ease: "power2.out"
      }, "<0.2");
    });

    mm.add("(max-width: 767px)", () => {
      // Mobile animation (stacked/overlay)
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=200%",
          scrub: 1,
          pin: true,
          anticipatePin: 1
        }
      });

      tl.fromTo(imageRef.current, {
        y: 200,
        scale: 0.5,
        opacity: 0
      }, {
        y: -120,
        scale: 0.9,
        opacity: 0.15, // Fade image to act as a watermark background
        duration: 1.5,
        ease: "power2.out"
      })
      .from(textRef.current, {
        y: 40,
        opacity: 0,
        duration: 1.5,
        ease: "power2.out"
      }, "<0.5");
    });

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

        {/* Text Container that will appear on the right side on desktop, and center on mobile */}
        <div 
          ref={textRef}
          className="absolute left-4 right-4 md:left-1/2 md:right-auto top-1/2 transform -translate-y-1/2 md:w-full max-w-xl md:pl-12 lg:pl-16 z-10"
        >
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-[#2D2D2D] mb-3 md:mb-4 leading-tight text-center md:text-left drop-shadow-sm md:drop-shadow-none">
            Chendamangalam's <br className="hidden md:block" />
            <span className="italic text-[#C5A059]">Legacy</span>
          </h2>
          <div className="font-sans text-[#555555] space-y-3 md:space-y-4 text-sm md:text-base leading-relaxed text-center md:text-left">
            <p>
              The Paravur Handloom Weaver's Co-operative Society stands as a testament to the resilience of generational crafts in India. Nestled in Chendamangalam, North Paravur, the society reverberates with the sound of more than 20 shuttles beating with vigour.
            </p>
            <p className="hidden md:block">
              The Kasavu border, a highlight of Chendamangalam, features gold or silver metallic thread meticulously woven into plain white and off-white fabrics. Through intricate Jacquard and Dobby techniques—using cardboard punch cards—weavers create breathtaking geometric and floral patterns that are symbolic of Kerala's cultural identity.
            </p>
            <p className="font-medium text-[#2D2D2D]">
              At an age where most carried pencils and candy, these artisans carried a shuttle and a bobbin. This is their story.
            </p>

            <div className="pt-2 md:pt-4 flex justify-center md:justify-start">
              <Link to="/story" className="inline-block font-sans text-xs md:text-sm uppercase tracking-widest text-[#2D2D2D] border-b border-[#2D2D2D] pb-1 hover:text-[#C5A059] hover:border-[#C5A059] transition-colors cursor-pointer">
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
