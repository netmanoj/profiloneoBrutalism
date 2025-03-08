import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [showNavbar, setShowNavbar] = useState(true);

  const navItems = [
    { name: 'About', to: 'about' },
    { name: 'Skills', to: 'skills' },
    { name: 'Projects', to: 'projects' },
    { name: 'Contact', to: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollTop = window.pageYOffset;
      if (currentScrollTop > lastScrollTop && currentScrollTop > 100) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
      setLastScrollTop(currentScrollTop <= 0 ? 0 : currentScrollTop);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollTop]);

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        showNavbar ? 'transform-none' : '-translate-y-full'
      }`}
    >
      {/* Main Navbar */}
      <div className="neo-card bg-[var(--primary)] border-t-0 rounded-none">
        <div className="container mx-auto px-3">
          <div className="flex items-center justify-between h-12 md:h-14">
            {/* Logo/Name */}
            <div className="neo-button bg-white px-3 py-1.5 transform hover:translate-x-0.5 hover:-translate-y-0.5 hover:bg-[var(--hover)]">
              <h1 className="text-lg md:text-xl font-brutalist font-bold">Manoj Adhikari</h1>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-4">
              {navItems.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="neo-button bg-white text-sm hover:bg-[var(--hover)] hover:text-[var(--textLight)] cursor-pointer"
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden neo-button bg-white p-2 hover:bg-[var(--hover)] hover:text-[var(--textLight)]"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? (
                <FaTimes className="text-lg" />
              ) : (
                <FaBars className="text-lg" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden neo-card bg-[var(--secondary)] border-t-0 rounded-none transition-all duration-300 ${
          isOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
        }`}
      >
        <div className="container mx-auto px-3 py-2">
          <div className="flex flex-col space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="neo-button bg-white text-sm hover:bg-[var(--hover)] hover:text-[var(--textLight)] cursor-pointer text-center"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
