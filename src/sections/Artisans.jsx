import React from 'react';
import artisan1 from '../assets/artisan1.jpeg';
import artisan2 from '../assets/artisan2.jpeg';
import artisan3 from '../assets/artisan3.jpeg';

const Artisans = () => {
  const artisans = [
    {
      name: 'Sunitha P',
      age: 53,
      experience: '18 years',
      role: 'Charkha Operator',
      quote: 'Conversing, pulling legs, and laughing with us while working the charkha.',
      image: artisan1
    },
    {
      name: 'Roshy VR',
      age: 59,
      experience: '20 years',
      role: 'Weaver',
      quote: 'Some people may find the sound of the loom disturbing, but I find peace and unity in that sound, reminding me that we are in this together.',
      image: artisan2
    },
    {
      name: 'Mani KV',
      age: 65,
      experience: '25 years',
      role: 'Charkha Operator',
      quote: 'The value of creating something with a machine can never surpass the beauty of creating with your hands, feet, and eyes.',
      image: artisan3
    }
  ];

  return (
    <section id="artisans" className="py-24 bg-[#FAF9F6]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl text-[#2D2D2D] mb-4">Faces of the Loom</h2>
          <p className="font-sans text-[#555555] max-w-2xl mx-auto">
            Meet the hands that weave magic. Each artisan carries a shuttle, a bobbin, and decades of unwavering dedication to the craft.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {artisans.map((artisan, index) => (
            <div key={index} className="flex flex-col">
              {/* Artisan Image */}
              <div className="aspect-[4/5] mb-6 overflow-hidden bg-[#e5e4e7]">
                <img 
                  src={artisan.image} 
                  alt={artisan.name}
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
              
              {/* Artisan Info */}
              <h3 className="font-serif text-2xl text-[#2D2D2D] mb-1">{artisan.name}</h3>
              <p className="font-sans text-xs uppercase tracking-widest text-[#C5A059] mb-4 font-semibold">
                Age: {artisan.age} &nbsp;|&nbsp; Exp: {artisan.experience}
              </p>
              
              <blockquote className="font-serif italic text-lg text-[#555555] border-l-2 border-[#8B2500] pl-4">
                "{artisan.quote}"
              </blockquote>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Artisans;
