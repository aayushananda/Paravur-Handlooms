import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import aboutUsLandscape from '../assets/aboutUslandscape.jpeg';
import portraitPlaceholder from '../assets/portraitPlaceholder1.jpeg';
import heritageReveal from '../assets/heritageReveal.jpeg';
import portraitPlaceholder2 from '../assets/portraitPlaceholder2.jpeg';
import communityPlaceholder from '../assets/communityPlaceholder.jpeg';

const Story = () => {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Reusable component for sleek GSAP placeholders
  const ImagePlaceholder = ({ aspect, title }) => (
    <div className={`w-full ${aspect} bg-[#FAF9F6] border-2 border-dashed border-[#dcdad5] flex flex-col items-center justify-center text-[#a8a6a1] overflow-hidden group hover:border-[#C5A059] transition-colors duration-500`}>
      <svg className="w-8 h-8 mb-3 opacity-50 group-hover:opacity-100 group-hover:text-[#C5A059] transition-all duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
      </svg>
      <span className="font-sans text-xs uppercase tracking-[0.2em]">{title || 'GSAP Image Target'}</span>
    </div>
  );

  return (
    <main className="min-h-screen bg-white pt-32 pb-24">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        
        {/* Navigation & Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 border-b border-[#e5e4e7] pb-8">
          <div className="max-w-3xl">
            <h1 className="font-serif text-5xl md:text-7xl text-[#2D2D2D] mb-6 leading-tight">The Fabric of <br/>Our Story</h1>
            <p className="font-sans text-lg text-[#555555] uppercase tracking-widest text-sm">
              History, Heritage, and Community
            </p>
          </div>
          <div className="mt-8 md:mt-0">
            <Link to="/" className="font-sans text-sm uppercase tracking-widest text-[#2D2D2D] border-b border-[#2D2D2D] pb-1 hover:text-[#C5A059] hover:border-[#C5A059] transition-colors flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 12H5M12 19l-7-7 7-7"/></svg>
              Back to Home
            </Link>
          </div>
        </div>

        {/* Section 1: History & Heritage */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center mb-32">
          <div className="lg:col-span-5">
            <div className="w-full aspect-[4/5] overflow-hidden group">
              <img src={heritageReveal} alt="Heritage Reveal" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out" />
            </div>
          </div>
          <div className="lg:col-span-7 space-y-6">
            <h2 className="font-serif text-3xl md:text-4xl text-[#2D2D2D]">History & Heritage</h2>
            <p className="font-sans text-lg text-[#555555] leading-relaxed">
              The roots of Chendamangalam weaving are intertwined with the princely history of Kerala. Originally patronized by the Paliath Achans, the hereditary prime ministers to the Rajas of Cochin, this craft was once a symbol of nobility and sacred ritual.
            </p>
            <p className="font-sans text-lg text-[#555555] leading-relaxed">
              What began as a localized craft for royalty evolved into a lifeline for the community. In the mid-20th century, the formation of the Paravur Handloom Weaver's Co-operative Society transformed these scattered looms into a collective powerhouse. It was a move born of necessity—to protect the artisans from middlemen and to ensure that the "Chendamangalam Kaithari" (handloom) remained a mark of uncompromising quality.
            </p>
            <blockquote className="border-l-2 border-[#C5A059] pl-6 italic font-serif text-2xl text-[#2D2D2D] my-8">
              "Our looms survived the shift to industrialization not because we were faster, but because we refused to lose the human touch."
            </blockquote>
          </div>
        </div>

        {/* Section 2: Mission & Vision */}
        <div className="mb-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-16">
            <div className="bg-[#FAF9F6] p-10 md:p-14 border border-[#e5e4e7]">
              <h3 className="font-sans text-xs uppercase tracking-widest text-[#C5A059] mb-6 font-semibold">Our Mission</h3>
              <p className="font-serif text-xl md:text-2xl text-[#2D2D2D] leading-relaxed">
                To preserve and promote the authentic handloom traditions of North Paravur by providing a sustainable, dignified livelihood for our weavers. We aim to bridge the gap between ancient craftsmanship and contemporary global markets through innovation, fair wages, and the protection of our GI (Geographical Indication) status.
              </p>
            </div>
            <div className="bg-[#FAF9F6] p-10 md:p-14 border border-[#e5e4e7]">
              <h3 className="font-sans text-xs uppercase tracking-widest text-[#C5A059] mb-6 font-semibold">Our Vision</h3>
              <p className="font-serif text-xl md:text-2xl text-[#2D2D2D] leading-relaxed">
                To see Chendamangalam recognized as a global hub for ethical luxury, where every thread tells a story of resilience. We envision a future where the next generation of artisans finds pride and prosperity in the rhythmic beat of the loom, ensuring that the song of the shuttle never goes silent.
              </p>
            </div>
          </div>
          <div className="w-full aspect-[21/9] overflow-hidden group">
            <img src={aboutUsLandscape} alt="Mission Landscape" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out" />
          </div>
        </div>

        {/* Section 3: Character & Community */}
        <div className="border-t border-[#e5e4e7] pt-24">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-serif text-4xl md:text-5xl text-[#2D2D2D] mb-6">The Heart of the Society</h2>
            <p className="font-sans text-lg text-[#555555] leading-relaxed">
              To understand our society, you must understand the hands that build it. We are a collective of over 200 artisans, each bringing a distinct personality to the floor:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* The Guardians */}
            <div className="space-y-6">
              <div className="w-full aspect-square overflow-hidden group">
                <img src={portraitPlaceholder} alt="Guardian Weaver" className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out" />
              </div>
              <h3 className="font-serif text-2xl text-[#2D2D2D]">The Guardians of the Warp</h3>
              <p className="font-sans text-[#555555] leading-relaxed">
                Our veteran weavers, many with over 40 years of experience, serve as the living libraries of the society. They can detect a tension flaw by the mere sound of the loom.
              </p>
            </div>

            {/* The New Guard */}
            <div className="space-y-6 md:mt-16">
              <div className="w-full aspect-square overflow-hidden group">
                <img src={portraitPlaceholder2} alt="The New Guard" className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out" />
              </div>
              <h3 className="font-serif text-2xl text-[#2D2D2D]">The New Guard</h3>
              <p className="font-sans text-[#555555] leading-relaxed">
                Younger members who are integrating modern design sensibilities with traditional Kasavu (gold thread) to ensure the craft stays relevant in the age of fast fashion.
              </p>
            </div>

            {/* Culture of Kinship */}
            <div className="space-y-6">
              <div className="w-full aspect-square overflow-hidden group">
                <img src={communityPlaceholder} alt="Culture of Kinship" className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out" />
              </div>
              <h3 className="font-serif text-2xl text-[#2D2D2D]">A Culture of Kinship</h3>
              <p className="font-sans text-[#555555] leading-relaxed">
                The society isn't just a factory; it's a sanctuary. From the shared "chai" breaks to the collective effort of cleaning the looms after the 2018 monsoon floods, our strength lies in our "bubbly nature" and communal resilience.
              </p>
            </div>
          </div>
        </div>

      </div>
    </main>
  );
};

export default Story;
