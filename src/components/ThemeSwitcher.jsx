import React from 'react';
import { FaRegImage, FaImage } from 'react-icons/fa';

const ThemeSwitcher = ({ currentTheme, onThemeChange }) => {
  const themes = {
    default: {
      primary: '#00BCD4',
      secondary: '#3ECF8E',
      accent: '#FFD600',
      background: '/images/back.png',
      card1: '#00BCD4',
      card2: '#3ECF8E',
      card3: '#FFD600',
      text: '#000000',
      textLight: '#FFFFFF',
      hover: '#00BCD4',
      decorative1: '#00BCD4',
      decorative2: '#3ECF8E',
      decorative3: '#FFD600'
    },
    alternate: {
      primary: '#FF69B4',
      secondary: '#9C27B0',
      accent: '#FFD600',
      background: '/images/back1.png',
      card1: '#FF69B4',
      card2: '#9C27B0',
      card3: '#FFD600',
      text: '#000000',
      textLight: '#FFFFFF',
      hover: '#FF69B4',
      decorative1: '#FF69B4',
      decorative2: '#9C27B0',
      decorative3: '#FFD600'
    }
  };

  const handleThemeToggle = () => {
    const newTheme = currentTheme === 'default' ? 'alternate' : 'default';
    onThemeChange(newTheme, themes[newTheme]);

    // Update CSS variables
    const root = document.documentElement;
    Object.entries(themes[newTheme]).forEach(([key, value]) => {
      if (key !== 'background') {
        root.style.setProperty(`--${key}`, value);
      }
    });
  };

  return (
    <button
      onClick={handleThemeToggle}
      className="neo-button fixed bottom-4 right-4 md:bottom-8 md:right-8 bg-[var(--primary)] hover:bg-[var(--secondary)] z-20 text-[var(--textLight)]"
      aria-label="Toggle Theme"
    >
      {currentTheme === 'default' ? (
        <FaImage size={20} />
      ) : (
        <FaRegImage size={20} />
      )}
    </button>
  );
};

export default ThemeSwitcher; 