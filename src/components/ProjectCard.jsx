import React from 'react';

const ProjectCard = ({ title, date, description, imageUrl, link, color = 'neo-yellow' }) => {
  return (
    <div className={`w-full neo-card bg-${color} transform hover:translate-x-2 hover:-translate-y-2 transition-all duration-300`}>
      <a href={link} target="_blank" rel="noopener noreferrer" className="block h-full">
        <article className="w-full h-full flex flex-col">
          {/* Image Container */}
          <div className="relative w-full h-48 sm:h-56 md:h-64 border-black border-b-3 overflow-hidden bg-white">
            <div className="absolute inset-0 bg-black/0 hover:bg-black/5 transition-colors duration-300"></div>
            <img
              src={imageUrl}
              alt={`${title} thumbnail`}
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
            />
            {/* Browser-like dots */}
            <div className="absolute top-0 left-0 w-full h-8 bg-white border-b-3 border-black flex items-center px-3">
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-neo-pink border-2 border-black"></div>
                <div className="w-3 h-3 rounded-full bg-neo-yellow border-2 border-black"></div>
                <div className="w-3 h-3 rounded-full bg-neo-blue border-2 border-black"></div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="px-4 sm:px-6 py-4 flex flex-col flex-grow">
            {/* Date Tag */}
            <div className="bg-white border-3 border-black px-3 py-1 shadow-brutal inline-block mb-4 self-start transform -rotate-2">
              <p className="text-sm font-brutalist font-bold">{date}</p>
            </div>

            {/* Title */}
            <h1 className="text-xl sm:text-2xl font-brutalist font-bold mb-3 text-black leading-tight">
              {title}
            </h1>

            {/* Description */}
            <p className="text-sm sm:text-base font-brutalist mb-4 text-black/80 line-clamp-3">
              {description}
            </p>

            {/* Button */}
            <div className="mt-auto">
              <button className="neo-button bg-white hover:bg-neo-pink text-black font-brutalist group flex items-center text-sm sm:text-base">
                View Project
                <span className="ml-2 transform group-hover:translate-x-1 transition-transform">→</span>
              </button>
            </div>
          </div>
        </article>
      </a>
    </div>
  );
};

export default ProjectCard;
