import React, { useState } from 'react';
import ProjectCard from './ProjectCard';

const projects = [
  {
    title: 'Movies Go',
    date: '2024',
    description: 'Movies Database built using TMDB Api',
    image: '/images/movies.png',
    link: 'https://github.com/netmanoj/moviesGo',
    color: 'neo-yellow'
  },
  {
    title: 'Groupie Group Chat App',
    date: 'December 2022',
    description: 'This project is a real-time chat application built with React, Redux, Node.js,Firebase featuring live messaging, notifications, and user statuses.',
    image: '/images/group.png',
    link: 'https://real-time-chat-app-5952a.firebaseapp.com/',
    color: 'neo-pink'
  },
  {
    title: 'Find Food App',
    date: 'August 2024',
    description: 'A responsive app developed using React and ContextApi that helps users find and order food. The application features a sleek UI, real-time search functionality, and user-friendly navigation.',
    image: '/images/food.png',
    link: 'https://github.com/netmanoj/findFoodApp',
    color: 'neo-blue'
  },
  {
    title: 'Expense Tracker',
    date: 'August 5th, 2023',
    description: 'An open-source expense tracker application built using React ContextApi. It includes features for tracking expenses, generating reports, and user-friendly error handling.',
    image: '/images/track.png',
    link: 'https://github.com/netmanoj/expenseTrack',
    color: 'neo-orange'
  },
  {
    title: 'Electricity Management System UI',
    date: 'August 5th, 2023',
    description: 'A user interface for managing electricity systems, featuring a responsive design built with modern web technologies. The application includes dashboards for monitoring usage, managing accounts, and generating reports.',
    image: '/images/electric.png',
    link: 'https://github.com/netmanoj/electricShockAdminPanel',
    color: 'neo-purple'
  },
  {
    title: 'Homieforever- Food Delivery System',
    date: '2021',
    description: 'A food delivery web application for ordering food.',
    image: '/images/homie.png',
    link: 'https://github.com/netmanoj/fos',
    color: 'neo-yellow'
  }
];

const Projects = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section className="relative w-full py-8 bg-white border-black border-y-2">
      {/* Header */}
      <div className="container mx-auto px-3 mb-8">
        <div className="neo-card bg-neo-blue mb-8 max-w-xl mx-auto transform hover:-rotate-1 transition-transform duration-300">
          <h2 className="text-3xl text-center py-4 font-brutalist font-bold">
            Featured Projects
          </h2>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-8 right-8 w-10 h-10 bg-neo-pink border-2 border-black shadow-brutal rotate-12"></div>
        <div className="absolute top-16 left-8 w-8 h-8 bg-neo-yellow border-2 border-black shadow-brutal -rotate-12"></div>
        <div className="absolute bottom-8 right-16 w-12 h-12 bg-neo-purple border-2 border-black shadow-brutal rotate-45"></div>
      </div>

      {/* Projects Grid */}
      <div className="container mx-auto px-3">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="transform transition-all duration-300 mx-auto w-full max-w-sm"
              style={{
                transform: hoveredIndex === index ? 'scale(1.02)' : 'scale(1)',
                zIndex: hoveredIndex === index ? 10 : 1
              }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <ProjectCard
                title={project.title}
                date={project.date}
                description={project.description}
                imageUrl={project.image}
                link={project.link}
                color={project.color}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Bottom decorative shapes */}
      <div className="absolute bottom-0 left-0 w-full h-8 bg-neo-yellow border-t-2 border-black"></div>
      <div className="absolute bottom-8 left-1/4 w-6 h-6 bg-neo-blue border-2 border-black shadow-brutal rotate-12"></div>
      <div className="absolute bottom-12 right-1/3 w-8 h-8 bg-neo-pink border-2 border-black shadow-brutal -rotate-6"></div>
    </section>
  );
};

export default Projects;
