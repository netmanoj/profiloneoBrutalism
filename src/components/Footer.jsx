import React from 'react';
import { FaGithub, FaLinkedin, FaHeart, FaCode } from 'react-icons/fa';
import Music from './Music';

const Footer = () => {
  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/netmanoj/',
      icon: <FaGithub className="w-6 h-6" />,
      color: 'bg-[var(--decorative1)]'
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/livingmanoj/',
      icon: <FaLinkedin className="w-6 h-6" />,
      color: 'bg-[var(--decorative2)]'
    }
  ];

  return (
    <footer className="relative bg-white border-t-3 border-black">
      {/* Top Decorative Bar */}
      <div className="absolute top-0 left-0 w-full h-2 bg-[var(--decorative3)]"></div>

      <div className="container mx-auto px-4 py-12">
        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {/* Left Column */}
          <div className="neo-card bg-[var(--primary)] p-6 transform hover:translate-x-1 hover:-translate-y-1">
            <h3 className="text-2xl font-brutalist font-bold mb-4 flex items-center gap-2 text-[var(--textLight)]">
              <FaCode className="text-xl" />
              Made with Code & Creativity
            </h3>
            <p className="font-brutalist text-[var(--textLight)]">
              © 2024 Manoj Adhikari. All rights reserved.
            </p>
          </div>

          {/* Right Column */}
          <div className="neo-card bg-[var(--secondary)] p-6 transform hover:translate-x-1 hover:-translate-y-1">
            <h3 className="text-2xl font-brutalist font-bold mb-4 text-[var(--textLight)]">Connect With Me</h3>
            <div className="flex gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`neo-button ${link.color} text-[var(--textLight)] p-3 transform hover:translate-x-1 hover:-translate-y-1`}
                  aria-label={link.name}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Music Player - Centered */}
        <div className="flex justify-center mb-8">
          <div className="neo-card bg-[var(--decorative3)] p-6 w-full max-w-md transform hover:translate-x-1 hover:-translate-y-1">
            <Music />
          </div>
        </div>

        {/* Bottom Text */}
        <div className="text-center mt-8">
          <p className="font-brutalist flex items-center justify-center gap-2">
            Built with
            <FaHeart className="text-[var(--primary)]" />
            using React & Tailwind
          </p>
        </div>
      </div>

      {/* Bottom Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <div className="h-3 bg-[var(--primary)]"></div>
        <div className="h-2 bg-[var(--secondary)]"></div>
      </div>
    </footer>
  );
};

export default Footer;
