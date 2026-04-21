import React from 'react';
import contactImg from '../assets/contact.png';

const Location = () => {
  const legendItems = [
    {
      icon: (
        <svg className="w-7 h-7 text-[#d32f2f]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
        </svg>
      ),
      text: "Chendamangalam Kaithari (The Paravur Handloom Weaver's Co-operative Ltd. No. 3428)",
      link: "https://www.google.com/maps/search/?api=1&query=Chendamangalam+Kaithari+The+Paravur+Handloom+Weavers+Co-operative+Ltd+No+3428"
    },
    {
      icon: (
        <div className="w-7 h-7 rounded-full bg-[#7a8ba3] flex items-center justify-center">
           <svg className="w-4 h-4 text-[#fefce8]" viewBox="0 0 24 24" fill="currentColor">
             <path d="M12 2L4 8v14h16V8L12 2zm0 2.83l6 4.5V20H6V9.33l6-4.5zM11 12h2v6h-2v-6zm1-3a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"/>
           </svg>
        </div>
      ),
      text: "Dakshina Mookambika Temple",
      link: "https://www.google.com/maps/search/?api=1&query=Dakshina+Mookambika+Temple+North+Paravur"
    },
    {
      icon: (
        <div className="w-7 h-7 rounded-sm bg-[#5b636a] flex items-center justify-center">
          <svg className="w-4 h-4 text-[#fefce8]" viewBox="0 0 24 24" fill="currentColor">
            <path d="M4 16c0 .88.39 1.67 1 2.22V20c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h8v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1.78c.61-.55 1-1.34 1-2.22V6c0-3.5-3.58-4-8-4s-8 .5-8 4v10zm3.5 1c-.83 0-1.5-.67-1.5-1.5S6.67 14 7.5 14s1.5.67 1.5 1.5S8.33 17 7.5 17zm9 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm-10-8V6h11v4H6.5z"/>
          </svg>
        </div>
      ),
      text: "Paravur KSRTC Bus Stand",
      link: "https://www.google.com/maps/search/?api=1&query=Paravur+KSRTC+Bus+Stand"
    },
    {
      icon: (
        <div className="w-7 h-7 rounded-sm bg-[#42505e] flex items-center justify-center">
          <svg className="w-4 h-4 text-[#fefce8]" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18 10.48V6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-4.48l4 3.98v-11l-4 3.98z"/>
          </svg>
        </div>
      ),
      text: "KSFDC Kairali Sree Theatre",
      link: "https://www.google.com/maps/search/?api=1&query=KSFDC+Kairali+Sree+Theatre+North+Paravur"
    },
    {
      icon: <span className="font-serif text-2xl text-[#6b8eab] font-bold w-7 text-center block leading-none">A</span>,
      text: "Chendamangalam Junction",
      link: "https://www.google.com/maps/search/?api=1&query=Chendamangalam+Junction+North+Paravur"
    },
    {
      icon: <span className="font-serif text-2xl text-[#6b8eab] font-bold w-7 text-center block leading-none">B</span>,
      text: "Mookambika Junction",
      link: "https://www.google.com/maps/search/?api=1&query=Mookambika+Junction+North+Paravur"
    }
  ];

  return (
    <section id="location" className="py-16 bg-[#FAF9F6] overflow-hidden border-t border-[#e5e4e7]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <h2 className="font-serif text-5xl md:text-7xl text-[#2D2D2D] mb-16 text-center md:text-left drop-shadow-sm">
          Location
        </h2>
        
        <div className="flex flex-col md:flex-row gap-16 md:gap-24 items-center">
          
          {/* Map Image Link - Image made larger */}
          <div className="w-full md:w-1/2 flex justify-center md:justify-start">
            <a 
              href="https://share.google/dae9cGxjoRCfPmB0k" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block group cursor-pointer relative w-full"
            >
              <div className="absolute inset-0 bg-[#C5A059] opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-full blur-3xl"></div>
              <img 
                src={contactImg} 
                alt="Map of Kerala highlighting Chendamangalam" 
                className="w-full max-w-lg mx-auto md:mx-0 drop-shadow-2xl grayscale group-hover:grayscale-0 group-hover:scale-[1.02] transition-all duration-700 ease-out relative z-10"
              />
            </a>
          </div>

          {/* Legend Items wrapped in responsive links */}
          <div className="w-full md:w-1/2">
            <ul className="space-y-6">
              {legendItems.map((item, index) => (
                <li key={index}>
                  <a 
                    href={item.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-start gap-6 group hover:bg-black/5 p-4 -ml-4 rounded-xl transition-colors duration-300"
                  >
                    <div className="mt-1 flex-shrink-0 opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300">
                      {item.icon}
                    </div>
                    <p className="font-serif text-xl md:text-2xl text-[#4a4a4a] leading-snug group-hover:text-[#2D2D2D] transition-colors duration-300">
                      {item.text}
                    </p>
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Location;
