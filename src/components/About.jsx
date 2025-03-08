import React, { useState } from 'react';
import { FaGamepad, FaCode, FaLinux, FaMusic, FaBookReader } from 'react-icons/fa';
import { motion } from 'framer-motion';

const About = () => {
  const [activeTab, setActiveTab] = useState('personal');

  const tabs = {
    personal: {
      title: "Who Am I?",
      content: `Hey there! 👋 I'm Manoj Adhikari, a passionate Full Stack Developer who loves turning ideas into reality through code. 
      When I'm not crafting web experiences, you'll find me exploring Linux systems, playing with new tech, or diving into a good book.`,
      icon: <FaCode className="text-4xl" />
    },
    interests: {
      title: "What I Love",
      content: `🎮 Gaming enthusiast
      🐧 Linux advocate
      🎵 Music lover
      📚 Continuous learner
      💻 Tech explorer`,
      icon: <FaGamepad className="text-4xl" />
    },
    journey: {
      title: "My Journey",
      content: `Started my coding journey with C programming, fell in love with web development, 
      and never looked back. Every day is a new opportunity to learn and create something awesome.`,
      icon: <FaBookReader className="text-4xl" />
    }
  };

  return (
    <section className="relative w-full py-20 bg-white border-black border-y-3 overflow-hidden">
      {/* Header */}
      <div className="container mx-auto px-4 mb-16 relative">
        <div className="neo-card bg-neo-pink mb-12 max-w-3xl mx-auto transform hover:-rotate-1 transition-transform duration-300">
          <h2 className="text-5xl text-center py-8 font-brutalist font-bold flex items-center justify-center gap-4">
            <span className="transform -rotate-3">About</span>
            <span className="transform rotate-3">Me</span>
            <span className="animate-bounce">👨‍💻</span>
          </h2>
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto">
          {/* Tab Navigation */}
          <div className="flex justify-center gap-4 mb-8">
            {Object.keys(tabs).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`neo-button px-6 py-3 ${
                  activeTab === tab ? 'bg-neo-yellow transform -translate-y-1' : 'bg-white'
                }`}
              >
                {tabs[tab].title}
              </button>
            ))}
          </div>

          {/* Content Card */}
          <div className="neo-card bg-neo-blue p-8 relative">
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-neo-yellow border-3 border-black shadow-brutal rotate-12"></div>
            <div className="flex items-start gap-8">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-white border-3 border-black shadow-brutal flex items-center justify-center transform rotate-3">
                  {tabs[activeTab].icon}
                </div>
              </div>
              <div className="flex-grow">
                <h3 className="text-3xl font-brutalist font-bold mb-4">{tabs[activeTab].title}</h3>
                <div className="font-brutalist text-lg whitespace-pre-line">
                  {tabs[activeTab].content}
                </div>
              </div>
            </div>
          </div>

          {/* Fun Facts */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="neo-card bg-neo-yellow p-6 transform hover:rotate-2 transition-transform">
              <h4 className="font-brutalist font-bold mb-2">Fun Fact #1</h4>
              <p>I spend more time customizing my code editor than actually coding! 🎨</p>
            </div>
            <div className="neo-card bg-neo-pink p-6 transform hover:-rotate-2 transition-transform">
              <h4 className="font-brutalist font-bold mb-2">Fun Fact #2</h4>
              <p>I've customized my Linux setup more times than I've had coffee! ☕</p>
            </div>
            <div className="neo-card bg-neo-purple p-6 transform hover:rotate-2 transition-transform">
              <h4 className="font-brutalist font-bold mb-2">Fun Fact #3</h4>
              <p>My favorite debugging tool is console.log("why!?!?!") 🤔</p>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-12 right-12 w-20 h-20 bg-neo-orange border-3 border-black shadow-brutal rotate-45"></div>
      <div className="absolute bottom-12 left-12 w-16 h-16 bg-neo-blue border-3 border-black shadow-brutal -rotate-12"></div>
      
      {/* Floating Icons */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[FaLinux, FaCode, FaMusic].map((Icon, index) => (
          <div
            key={index}
            className={`absolute shape-float-${index + 1}`}
            style={{
              top: `${20 + index * 30}%`,
              left: `${80 + index * 5}%`,
            }}
          >
            <div className={`w-12 h-12 bg-neo-${index === 0 ? 'yellow' : index === 1 ? 'pink' : 'blue'} 
                           border-3 border-black shadow-brutal flex items-center justify-center`}>
              <Icon className="text-2xl" />
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Border */}
      <div className="absolute bottom-0 left-0 w-full h-6 bg-neo-yellow border-t-3 border-black"></div>
    </section>
  );
};

export default About;
