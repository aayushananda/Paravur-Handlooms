import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import setSareeImg from '../assets/setSaree.jpeg';
import doubleMunduImg from '../assets/double.jpeg';
import kaviMunduImg from '../assets/kavi.jpeg';
import jacquardSareeImg from '../assets/Jacquard Saree.jpeg';
import mundu1Img from '../assets/mundu1.jpeg';
import mundu2Img from '../assets/mundu2.jpeg';
import mundu3Img from '../assets/mundu3.jpeg';
import saree1Img from '../assets/saree1.jpeg';
import saree2Img from '../assets/saree2.jpeg';

const AllProducts = () => {
  // Scroll to top when navigating to this new page
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const allProducts = [
    {
      id: 1,
      name: 'Traditional Set Saree',
      collection: 'Raavil Ezhuthiya',
      image: setSareeImg,
      price: '₹3,500'
    },
    {
      id: 2,
      name: 'Double Mundu',
      collection: 'Classic Weaves',
      image: doubleMunduImg,
      price: '₹2,800'
    },
    {
      id: 3,
      name: 'Kavi Mundu',
      collection: 'Ritual Attire',
      image: kaviMunduImg,
      price: '₹2,500'
    },
    {
      id: 4,
      name: 'Kasavu Jacquard Saree',
      collection: 'In the Weave of Onam',
      image: jacquardSareeImg,
      price: '₹4,500'
    },
    {
      id: 5,
      name: 'Puliyilakkara Mundu',
      collection: 'Classic Weaves',
      image: mundu1Img,
      price: '₹2,600'
    },
    {
      id: 6,
      name: 'Chuttikara Kasavu Mundu',
      collection: 'Heritage Series',
      image: mundu2Img,
      price: '₹3,000'
    },
    {
      id: 7,
      name: 'Premium Veedi Kara Mundu',
      collection: 'Festive Edition',
      image: mundu3Img,
      price: '₹3,200'
    },
    {
      id: 8,
      name: 'Chendamangalam Kasavu Saree',
      collection: 'Bridal Archive',
      image: saree1Img,
      price: '₹4,200'
    },
    {
      id: 9,
      name: 'Handwoven Check Saree',
      collection: 'Contemporary Loom',
      image: saree2Img,
      price: '₹3,800'
    }
  ];

  return (
    <main className="min-h-screen bg-[#FAF9F6] pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-[#e5e4e7] pb-8">
          <div className="max-w-2xl">
            <h1 className="font-serif text-5xl md:text-7xl text-[#2D2D2D] mb-6">The Archives</h1>
            <p className="font-sans text-lg text-[#555555]">
              Explore our complete collection of Geographical Indication (GI) tagged handlooms, meticulously preserved and crafted by the master weavers of Chendamangalam.
            </p>
          </div>
          <div className="mt-8 md:mt-0">
            <Link to="/" className="font-sans text-sm uppercase tracking-widest text-[#2D2D2D] border-b border-[#2D2D2D] pb-1 hover:text-[#C5A059] hover:border-[#C5A059] transition-colors flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 12H5M12 19l-7-7 7-7"/></svg>
              Back to Home
            </Link>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {allProducts.map((product) => (
            <div key={product.id} className="group cursor-pointer">
              <div className="aspect-[3/4] mb-6 overflow-hidden border border-transparent group-hover:border-[#C5A059] transition-colors bg-white shadow-sm">
                 <img 
                   src={product.image} 
                   alt={product.name} 
                   className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700"
                 />
              </div>
              <p className="font-sans text-xs uppercase tracking-[0.2em] text-[#C5A059] mb-2 font-semibold">
                {product.collection}
              </p>
              <h3 className="font-serif text-2xl text-[#2D2D2D] mb-3">{product.name}</h3>
              <span className="font-sans text-sm font-semibold text-[#2D2D2D] border-b border-transparent group-hover:border-[#2D2D2D] pb-0.5 transition-colors">
                {product.price}
              </span>
            </div>
          ))}
        </div>

      </div>
    </main>
  );
};

export default AllProducts;
