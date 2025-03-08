import React from 'react';
import { FaPaperPlane, FaEnvelope, FaUser, FaComment } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  return (
    <section className="contact-section bg-neo-blue relative py-8 overflow-hidden">
      {/* Background Animated Shapes - Moved to top and adjusted z-index */}
      <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 0 }}>
        <div className="shape crystal1" style={{ top: '5%', left: '5%', opacity: 0.6 }}></div>
        <div className="shape crystal2" style={{ top: '85%', right: '8%', opacity: 0.6 }}></div>
        <div className="shape crystal3" style={{ top: '25%', right: '15%', opacity: 0.6 }}></div>
        <div className="shape circle1" style={{ bottom: '30%', left: '12%', opacity: 0.6 }}></div>
        <div className="shape circle2" style={{ top: '40%', right: '5%', opacity: 0.6 }}></div>
        <div className="shape triangle1" style={{ top: '70%', left: '15%', opacity: 0.6 }}></div>
        <div className="shape triangle2" style={{ bottom: '10%', right: '20%', opacity: 0.6 }}></div>
      </div>

      {/* Main Content - Added z-index to keep it above shapes */}
      <div className="container mx-auto px-3 relative" style={{ zIndex: 1 }}>
        <div className="max-w-3xl mx-auto">
          {/* Header Card */}
          <div className="neo-card bg-white mb-8 transform hover:-rotate-1 transition-transform duration-300">
            <h2 className="text-3xl text-center py-4 font-brutalist font-bold flex items-center justify-center gap-3">
              <span className="transform -rotate-3">Let's</span>
              <span className="transform rotate-3">Talk!</span>
              <span className="animate-bounce">💬</span>
            </h2>
          </div>
          
          {/* Form Card */}
          <form
            name="contact"
            method="POST"
            className="neo-card bg-neo-yellow p-6 md:p-8 relative"
            netlify
          >
            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-neo-pink border-2 border-black shadow-brutal rotate-12"></div>
            <div className="absolute -bottom-3 -left-3 w-6 h-6 bg-neo-blue border-2 border-black shadow-brutal -rotate-12"></div>
            
            <input type="hidden" name="form-name" value="contact" />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Left Column */}
              <div className="space-y-4">
                <div className="space-y-1.5">
                  <label className="font-brutalist font-bold text-black flex items-center gap-1.5">
                    <FaUser className="text-base" />
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    className="neo-input w-full bg-white text-base"
                    placeholder="John Doe"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="font-brutalist font-bold text-black flex items-center gap-1.5">
                    <FaEnvelope className="text-base" />
                    Your Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="neo-input w-full bg-white text-base"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-1.5">
                <label className="font-brutalist font-bold text-black flex items-center gap-1.5">
                  <FaComment className="text-base" />
                  Your Message
                </label>
                <textarea
                  name="message"
                  rows="6"
                  required
                  className="neo-input w-full bg-white text-base resize-none h-full min-h-[150px]"
                  placeholder="What's on your mind?"
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="mt-6 flex justify-end">
              <button
                type="submit"
                className="neo-button bg-neo-pink hover:bg-white text-black font-brutalist text-base group flex items-center gap-1.5 transform hover:translate-x-1 hover:-translate-y-1"
              >
                <span>Send Message</span>
                <FaPaperPlane className="transform group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Bottom Border - Kept above shapes */}
      <div className="absolute bottom-0 left-0 w-full h-4 bg-neo-yellow border-t-2 border-black" style={{ zIndex: 1 }}></div>
    </section>
  );
};

export default Contact;
