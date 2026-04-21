import React from 'react';
import { Link } from 'react-router-dom';
import setSareeImg from '../assets/setSaree.jpeg';
import doubleMunduImg from '../assets/double.jpeg';
import kaviMunduImg from '../assets/kavi.jpeg';
import jacquardSareeImg from '../assets/Jacquard Saree.jpeg';

const Shop = () => {
  const products = [
    {
      id: 1,
      name: 'Traditional Set Saree',
      collection: 'Raavil Ezhuthiya',
      description: 'Set sarees incorporate Veedi kara and Puliyilakkara designs, woven meticulously into plain white and off-white fabrics.',
      price: '₹3,500',
      image: setSareeImg
    },
    {
      id: 2,
      name: 'Double Mundu',
      collection: 'Classic Weaves',
      description: 'A classic two-piece skirt-like garment traditionally worn by men in Kerala, featuring offwhite fabric with intricate Kasavu or colour borders.',
      price: '₹2,800',
      image: doubleMunduImg
    },
    {
      id: 3,
      name: 'Kavi Mundu',
      collection: 'Ritual Attire',
      description: 'Dyed in striking hues of reddish-orange with contrasting borders of white and black, forming a staple in ceremonial attire.',
      price: '₹2,500',
      image: kaviMunduImg
    },
    {
      id: 4,
      name: 'Kasavu Jacquard Saree',
      collection: 'In the Weave of Onam',
      description: 'The Jacquard technique involves complex and large-scale patterns, such as beautiful floral patterns and brocade-style designs controlled by punch cards.',
      price: '₹4,500',
      image: jacquardSareeImg
    }
  ];

  return (
    <section id="shop" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div className="max-w-xl">
            <h2 className="font-serif text-4xl md:text-5xl text-[#2D2D2D] mb-4">The Collection</h2>
            <p className="font-sans text-[#555555]">
              Discover our Geographical Indication (GI) tagged handlooms, direct from the Paravur society.
            </p>
          </div>
          <div className="mt-6 md:mt-0">
            <Link to="/collection" className="inline-block font-sans text-sm uppercase tracking-widest text-[#2D2D2D] border-b border-[#2D2D2D] pb-1 hover:text-[#C5A059] hover:border-[#C5A059] transition-colors cursor-pointer">
              View All Products
            </Link>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div key={product.id} className="group cursor-pointer">
              {/* Product Image */}
              <div className="aspect-[3/4] mb-4 overflow-hidden border border-transparent group-hover:border-[#C5A059] transition-colors">
                 <img 
                   src={product.image} 
                   alt={product.name} 
                   className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                 />
              </div>
              
              {/* Product Info */}
              <p className="font-sans text-xs uppercase tracking-wider text-[#C5A059] mb-1 font-semibold">
                {product.collection}
              </p>
              <h3 className="font-serif text-xl text-[#2D2D2D] mb-2 leading-snug">{product.name}</h3>
              <p className="font-sans text-sm text-[#555555] mb-4 line-clamp-3 leading-relaxed">
                {product.description}
              </p>
              <span className="font-sans text-sm font-semibold text-[#2D2D2D] border-b border-transparent group-hover:border-[#2D2D2D] pb-0.5 transition-colors">
                {product.price}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Shop;
