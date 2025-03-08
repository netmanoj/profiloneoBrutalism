import React, { useState } from "react";
import { Howl } from 'howler';
import './Skills.css';
import {
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiLinux,
  SiC,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiGit,
  SiSupabase,
  SiFirebase,
  SiOpenai,
} from "react-icons/si";
import { FaRocket } from "react-icons/fa";

const Skills = () => {
  const [activeSkill, setActiveSkill] = useState(null);

  const skills = [
    { name: "HTML", icon: <SiHtml5 size={32} />, color: "bg-[var(--card1)]" },
    { name: "CSS", icon: <SiCss3 size={32} />, color: "bg-[var(--card2)]" },
    { name: "JavaScript", icon: <SiJavascript size={32} />, color: "bg-[var(--card1)]" },
    { name: "GIT", icon: <SiGit size={32} />, color: "bg-[var(--card2)]" },
    { name: "React", icon: <SiReact size={32} />, color: "bg-[var(--card1)]" },
    { name: "Node.js", icon: <SiNodedotjs size={32} />, color: "bg-[var(--card2)]" },
    { name: "MongoDB", icon: <SiMongodb size={32} />, color: "bg-[var(--card1)]" },
    { name: "Linux", icon: <SiLinux size={32} />, color: "bg-[var(--card2)]" },
    { name: "C Programming", icon: <SiC size={32} />, color: "bg-[var(--card1)]" },
    { 
      name: "Supabase", 
      icon: <SiSupabase size={32} className="text-[var(--text)]" />, 
      color: "bg-[var(--card2)]" 
    },
    { 
      name: "Firebase", 
      icon: <SiFirebase size={32} className="text-[var(--text)]" />, 
      color: "bg-[var(--card1)]" 
    },
    { 
      name: "AI Prompting", 
      icon: <SiOpenai size={32} className="text-[var(--text)]" />, 
      color: "bg-[var(--card2)]" 
    }
  ];

  // Initialize Howl with bounce sound
  const sound = new Howl({
    src: ['/sounds/bounce.wav'],
    volume: 0.5,
  });

  const handleSkillClick = (index) => {
    sound.play();
    setActiveSkill(index);
    setTimeout(() => setActiveSkill(null), 1000);
  };

  return (
    <section className="relative w-full py-8 bg-white border-black border-y-2 overflow-hidden">
      {/* Header */}
      <div className="container mx-auto px-3 mb-6">
        <div className="neo-card bg-[var(--primary)] mb-6 max-w-xl mx-auto transform hover:-rotate-1 transition-transform duration-300">
          <h2 className="text-3xl text-center py-4 font-brutalist font-bold flex items-center justify-center gap-3 text-[var(--textLight)]">
            <span>My Skills</span>
            <FaRocket className="animate-bounce" />
          </h2>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-6 right-6 w-8 h-8 bg-[var(--decorative1)] border-2 border-black shadow-brutal rotate-12"></div>
        <div className="absolute top-12 left-6 w-8 h-8 bg-[var(--decorative2)] border-2 border-black shadow-brutal -rotate-12"></div>
      </div>

      {/* Skills Grid */}
      <div className="container mx-auto px-3">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 max-w-5xl mx-auto">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className={`transform transition-all duration-300 ${
                activeSkill === index ? 'scale-105' : ''
              }`}
              onClick={() => handleSkillClick(index)}
            >
              <div className={`neo-card ${skill.color} p-3 cursor-pointer hover:translate-x-0.5 hover:-translate-y-0.5 transition-transform duration-300`}>
                {/* Browser-like dots */}
                <div className="w-full h-4 bg-white border-b-2 border-black flex items-center px-1.5 mb-2">
                  <div className="flex space-x-1">
                    <div className="w-1.5 h-1.5 rounded-full bg-[var(--decorative1)] border-1 border-black"></div>
                    <div className="w-1.5 h-1.5 rounded-full bg-[var(--decorative2)] border-1 border-black"></div>
                    <div className="w-1.5 h-1.5 rounded-full bg-[var(--decorative3)] border-1 border-black"></div>
                  </div>
                </div>

                <div className="flex flex-col items-center space-y-2">
                  {/* Icon */}
                  <div className="text-[var(--text)] transform hover:scale-105 transition-transform duration-300">
                    {React.cloneElement(skill.icon, { size: 24 })}
                  </div>
                  
                  {/* Name */}
                  <h3 className="text-sm font-brutalist font-bold text-[var(--textLight)] text-center">
                    {skill.name}
                  </h3>

                  {/* Progress Bar */}
                  <div className="w-full bg-white border-1 border-black p-0.5">
                    <div className="h-1 bg-[var(--text)] w-4/5"></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Border */}
      <div className="absolute bottom-0 left-0 w-full h-3 bg-[var(--primary)] border-t-2 border-black"></div>
    </section>
  );
};

export default Skills;
