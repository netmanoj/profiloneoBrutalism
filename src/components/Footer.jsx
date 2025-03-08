import React from 'react';
import { FaGithub, FaLinkedin, FaHeart, FaCode } from 'react-icons/fa';
import Music from './Music';

const Footer = () => {
  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/netmanoj/',
      icon: <FaGithub className="w-6 h-6" />,
      color: 'neo-purple'
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/livingmanoj/',
      icon: <FaLinkedin className="w-6 h-6" />,
      color: 'neo-blue'
    }
  ];

  return (
    <footer className="relative bg-white border-t-3 border-black">
      {/* Top Decorative Bar */}
      <div className="absolute top-0 left-0 w-full h-2 bg-neo-yellow"></div>

      <div className="container mx-auto px-4 py-12">
        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {/* Left Column */}
          <div className="neo-card bg-neo-pink p-6 transform hover:translate-x-1 hover:-translate-y-1">
            <h3 className="text-2xl font-brutalist font-bold mb-4 flex items-center gap-2">
              <FaCode className="text-xl" />
              Made with Code & Creativity
            </h3>
            <p className="font-brutalist">
              © 2024 Manoj Adhikari. All rights reserved.
            </p>
          </div>

          {/* Right Column */}
          <div className="neo-card bg-neo-blue p-6 transform hover:translate-x-1 hover:-translate-y-1">
            <h3 className="text-2xl font-brutalist font-bold mb-4">Connect With Me</h3>
            <div className="flex gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`neo-button bg-${link.color} p-3 transform hover:translate-x-1 hover:-translate-y-1`}
                  aria-label={link.name}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Music Player */}
        <div className="neo-card bg-neo-yellow p-6">
          <Music />
        </div>

        {/* Bottom Text */}
        <div className="text-center mt-8">
          <p className="font-brutalist flex items-center justify-center gap-2">
            Built with
            <FaHeart className="text-neo-pink" />
            using React & Tailwind
          </p>
        </div>
      </div>

      {/* Bottom Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <div className="h-3 bg-neo-purple"></div>
        <div className="h-2 bg-neo-pink"></div>
      </div>
    </footer>
  );
};

export default Footer;
