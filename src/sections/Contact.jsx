import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-white border-t border-[#e5e4e7]">
      <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
        <h2 className="font-serif text-4xl md:text-5xl text-[#2D2D2D] mb-6">Get in Touch</h2>
        <p className="font-sans text-[#555555] mb-12">
          We'd love to hear from you. Please fill out the form below and we will get back to you shortly.
        </p>

        <form className="space-y-6 text-left max-w-2xl mx-auto" onSubmit={(e) => e.preventDefault()}>
          <div>
            <label htmlFor="name" className="block font-sans text-sm font-semibold text-[#2D2D2D] mb-2">Name</label>
            <input type="text" id="name" className="w-full px-4 py-3 border border-[#e5e4e7] focus:border-[#C5A059] focus:ring-1 focus:ring-[#C5A059] outline-none transition-colors" placeholder="Your Name" />
          </div>
          <div>
            <label htmlFor="email" className="block font-sans text-sm font-semibold text-[#2D2D2D] mb-2">Email</label>
            <input type="email" id="email" className="w-full px-4 py-3 border border-[#e5e4e7] focus:border-[#C5A059] focus:ring-1 focus:ring-[#C5A059] outline-none transition-colors" placeholder="your@email.com" />
          </div>
          <div>
            <label htmlFor="message" className="block font-sans text-sm font-semibold text-[#2D2D2D] mb-2">Message</label>
            <textarea id="message" rows="5" className="w-full px-4 py-3 border border-[#e5e4e7] focus:border-[#C5A059] focus:ring-1 focus:ring-[#C5A059] outline-none transition-colors" placeholder="How can we help you?"></textarea>
          </div>
          <button type="submit" className="w-full bg-[#2D2D2D] text-[#FAF9F6] font-sans px-8 py-4 uppercase tracking-widest text-sm hover:bg-[#8B2500] transition-colors duration-300">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
