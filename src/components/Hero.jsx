import React from 'react';
import Typewriter from 'typewriter-effect';
import { Howl } from 'howler';
import './Hero.css';

const Hero = ({ backgroundImage }) => {
  const sounds = {
    crystal1: new Howl({ src: ['/sounds/clay.mp3'] }),
    crystal2: new Howl({ src: ['/sounds/ufo.mp3'] }),
    crystal3: new Howl({ src: ['/sounds/glimmer.mp3'] }),
    crystal4: new Howl({ src: ['/sounds/ufo.mp3'] }),
    crystal5: new Howl({ src: ['/sounds/glimmer.mp3'] }),
    circle1: new Howl({ src: ['/sounds/clay.mp3'] }),
    circle2: new Howl({ src: ['/sounds/confetti.mp3'] }),
    triangle1: new Howl({ src: ['/sounds/bubble.mp3'] }),
    triangle2: new Howl({ src: ['/sounds/bubble.mp3'] }),
    triangle3: new Howl({ src: ['/sounds/ufo.mp3'] }),
  };

  const handleShapeClick = (shape) => {
    if (sounds[shape]) {
      sounds[shape].play();
    }
    const element = document.querySelector(`.${shape}`);
    if (element) {
      element.classList.add('vibrate', 'size-change');
      setTimeout(() => {
        element.classList.remove('vibrate', 'size-change');
      }, 500);
    }
  };

  const shapes = [
    { class: 'crystal1', type: 'crystal' },
    { class: 'crystal2', type: 'crystal' },
    { class: 'crystal3', type: 'crystal' },
    { class: 'crystal4', type: 'crystal' },
    { class: 'crystal5', type: 'crystal' },
    { class: 'circle1', type: 'circle' },
    { class: 'circle2', type: 'circle' },
    { class: 'triangle1', type: 'triangle' },
    { class: 'triangle2', type: 'triangle' },
    { class: 'triangle3', type: 'triangle' },
  ];

  return (
    <section
      className="relative w-full min-h-screen bg-cover bg-center flex flex-col justify-center items-center text-center border-black border-b-3 px-4 py-20 md:py-0"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Floating Shapes - Hidden on mobile for better performance */}
      <div className="absolute inset-0 overflow-hidden hidden md:block">
        {shapes.map((shape) => (
          <div
            key={shape.class}
            className={`hero-shape ${shape.class}`}
            onClick={() => handleShapeClick(shape.class)}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-screen-md mx-auto neo-card bg-[var(--primary)] transform hover:translate-x-1 hover:-translate-y-1 transition-transform duration-200">
        <div className="w-full h-8 bg-white border-b-2 border-black flex justify-between items-center px-3">
          <div className="flex space-x-2">
            <div className="w-3 h-3 bg-[var(--primary)] border-2 border-black rounded-full shadow-brutal"></div>
            <div className="w-3 h-3 bg-[var(--secondary)] border-2 border-black rounded-full shadow-brutal"></div>
            <div className="w-3 h-3 bg-[var(--accent)] border-2 border-black rounded-full shadow-brutal"></div>
          </div>
          <div className="text-xs text-black font-brutalist font-bold">My Portfolio</div>
        </div>

        <div className="flex flex-col md:flex-row items-center p-3 md:p-6 gap-4 md:gap-6">
          {/* Profile Image */}
          <div className="w-24 h-24 md:w-32 md:h-32 rounded-full border-2 border-black shadow-brutal overflow-hidden bg-white transform hover:translate-x-0.5 hover:-translate-y-0.5 transition-transform duration-200 flex-shrink-0">
            <img src="/images/profile.png" alt="Profile" className="w-full h-full object-cover" />
          </div>

          {/* Text Content */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="mb-3">
              <h1 className="text-2xl md:text-4xl text-white font-brutalist font-bold border-b-2 border-black pb-2">
                Manoj Adhikari
              </h1>
            </div>

            <div className="dynamic-text h-10 bg-white border-2 border-black px-3 py-1.5 shadow-brutal w-full md:w-auto">
              <Typewriter
                options={{
                  strings: ["a C Programming Developer_", "a Full Stack Developer_", "a Linux Enthusiast_"],
                  autoStart: true,
                  loop: true,
                  delay: 50,
                  wrapperClassName: "font-brutalist text-base md:text-lg font-bold",
                  cursorClassName: "font-brutalist text-base md:text-lg font-bold",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
