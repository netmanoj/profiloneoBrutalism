import React, { useState } from 'react';
import Typewriter from 'typewriter-effect';
import { FaRegImage, FaImage } from 'react-icons/fa';
import { Howl } from 'howler';

const Hero = () => {
  const [backgroundImage, setBackgroundImage] = useState('/images/back.png');

  const toggleBackgroundImage = () => {
    setBackgroundImage(prevImage =>
      prevImage === '/images/back.png' ? '/images/back1.png' : '/images/back.png'
    );
  };

  const boxBackgroundColor = backgroundImage === '/images/back.png' ? '#A6FAFF' : 'white';
  const iconColor = backgroundImage === '/images/back.png' ? '#A6FAFF' : 'white';

  // Define the sounds and their paths
  const sounds = {
    crystal1: new Howl({ src: ['/sounds/clay.mp3'], onloaderror: (id, err) => console.error('Load error:', err) }),
    crystal2: new Howl({ src: ['/sounds/ufo.mp3'], onloaderror: (id, err) => console.error('Load error:', err) }),
    crystal3: new Howl({ src: ['/sounds/glimmer.mp3'], onloaderror: (id, err) => console.error('Load error:', err) }),
    crystal4: new Howl({ src: ['/sounds/ufo.mp3'], onloaderror: (id, err) => console.error('Load error:', err) }),
    crystal5: new Howl({ src: ['/sounds/glimmer.mp3'], onloaderror: (id, err) => console.error('Load error:', err) }),
    circle1: new Howl({ src: ['/sounds/clay.mp3'], onloaderror: (id, err) => console.error('Load error:', err) }),
    circle2: new Howl({ src: ['/sounds/confetti.mp3'], onloaderror: (id, err) => console.error('Load error:', err) }),
    triangle1: new Howl({ src: ['/sounds/bubble.mp3'], onloaderror: (id, err) => console.error('Load error:', err) }),
    triangle2: new Howl({ src: ['/sounds/bubble.mp3'], onloaderror: (id, err) => console.error('Load error:', err) }), // Add sound for triangle2
    triangle3: new Howl({ src: ['/sounds/ufo.mp3'], onloaderror: (id, err) => console.error('Load error:', err) }),
  };

  // Function to play the sound and trigger animations associated with a shape
  const handleShapeClick = (shape) => {
    if (sounds[shape]) {
      sounds[shape].play();
    } else {
      console.log(`${shape} is disabled or does not have an associated sound.`);
    }

    // Apply vibration and size change effects
    const element = document.querySelector(`.${shape}`);
    element.classList.add('vibrate', 'size-change');

    // Remove the animation classes after the animation ends
    setTimeout(() => {
      element.classList.remove('vibrate', 'size-change');
    }, 500); // Match with your animation duration
  };

  return (
    <section
      className="relative w-full h-screen bg-cover bg-center flex flex-col justify-center items-center text-center border-black border-b-2"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Floating Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="shape crystal1" onClick={() => handleShapeClick('crystal1')} style={{ pointerEvents: 'auto' }}></div>
        <div className="shape crystal2" onClick={() => handleShapeClick('crystal2')} style={{ pointerEvents: 'auto' }}></div>
        <div className="shape crystal3" onClick={() => handleShapeClick('crystal3')} style={{ pointerEvents: 'auto' }}></div>
        <div className="shape crystal4" onClick={() => handleShapeClick('crystal4')} style={{ pointerEvents: 'auto' }}></div>
        <div className="shape crystal5" onClick={() => handleShapeClick('crystal5')} style={{ pointerEvents: 'auto' }}></div>
        <div className="shape circle1" onClick={() => handleShapeClick('circle1')} style={{ pointerEvents: 'auto' }}></div>
        <div className="shape circle2" onClick={() => handleShapeClick('circle2')} style={{ pointerEvents: 'auto' }}></div>
        <div className="shape triangle1" onClick={() => handleShapeClick('triangle1')} style={{ pointerEvents: 'auto' }}></div>
        <div className="shape triangle2" onClick={() => handleShapeClick('triangle2')} style={{ pointerEvents: 'auto' }}></div> {/* Now clickable */}
        <div className="shape triangle3" onClick={() => handleShapeClick('triangle3')} style={{ pointerEvents: 'auto' }}></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-screen-md mx-auto border-4 border-black rounded-lg hover:shadow-[8px_8px_0px_rgba(0,0,0,1)] transition-shadow duration-300 flex flex-col items-center"
        style={{ backgroundColor: boxBackgroundColor }}
      >
        <div className="w-full h-8 bg-gray-200 border-b-2 border-black flex justify-between items-center px-4">
          <div className="flex space-x-2">
            <div className="w-3 h-3 bg-red-500 rounded-full shadow-[2px_2px_0px_rgba(0,0,0,1)]"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full shadow-[2px_2px_0px_rgba(0,0,0,1)]"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full shadow-[2px_2px_0px_rgba(0,0,0,1)]"></div>
          </div>
          <div className="text-sm text-black font-mono">My Site</div>
        </div>

        <div className="flex items-center p-8">
          <div className="w-32 h-32 rounded-full border-4 border-black shadow-[8px_8px_0_rgba(0,0,0,1)] overflow-hidden mr-6">
            <img src="/images/profile.png" alt="Profile" className="w-full h-full object-cover" />
          </div>

          <div className="flex flex-col">
            <div className="fixed-text">
              <h1 className="text-4xl mb-6 text-black font-[Anton]">Manoj Adhikari</h1>
            </div>

            <div className="dynamic-text h-10">
              <Typewriter
                options={{
                  strings: ["a Web Developer_", "a Full Stack Developer_", "a Linux Enthusiast_"],
                  autoStart: true,
                  loop: true,
                  delay: 50,
                }}
              />
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={toggleBackgroundImage}
        className="absolute bottom-4 right-4 bg-gray-800 text-white p-3 rounded-full shadow-md hover:bg-gray-600 transition-colors duration-300 flex items-center justify-center"
        aria-label="Toggle Background Image"
      >
        {backgroundImage === '/images/back.png' ? (
          <FaImage size={24} color={iconColor} />
        ) : (
          <FaRegImage size={24} color={iconColor} />
        )}
      </button>
    </section>
  );
};

export default Hero;
