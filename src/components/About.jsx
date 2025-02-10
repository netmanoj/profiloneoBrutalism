import React, { useState } from "react";
import { motion, useAnimation } from "framer-motion";

const About = () => {
  const [animateText, setAnimateText] = useState(false);
  const controls = useAnimation();

  // Function to toggle animation
  const toggleAnimation = () => {
    setAnimateText((prev) => !prev);
  };

  // Effect to handle animations
  React.useEffect(() => {
    if (animateText) {
      controls.start({
        opacity: [1, 0.5, 1],
        y: [0, -10, 0],
        transition: { duration: 2, repeat: Infinity, repeatType: "loop" },
      });
    } else {
      controls.stop();
      controls.set({ opacity: 1, y: 0 });
    }
  }, [animateText, controls]);

  return (
    <section className="relative w-full px-10 py-20 bg-[#A5B4FB] border-black border-b-2 overflow-hidden">
      <h2 className="text-5xl font-bold mb-8 text-center font-[Bebas Neue] text-[#1A1A1A]">
        About Me
      </h2>
      <div className="max-w-3xl mx-auto">
        <motion.p
          animate={controls}
          className="text-lg font-mono font-light text-[#1A1A1A]"
        >
          I am a passionate web developer specializing in building and designing
          modern web applications with the MERN stack. My expertise also
          includes Linux, C programming, and more.
        </motion.p>
        <motion.p
          animate={controls}
          className="text-lg py-10 font-mono font-light text-[#1A1A1A]"
        >
          I began my journey in web development with a fascination for how
          technology can transform ideas into reality. Over the years, I've
          honed my skills in building responsive and user-friendly websites and
          applications. My expertise spans across front-end and back-end
          development, with a particular focus on crafting seamless user
          interfaces and optimizing performance.
        </motion.p>
        <motion.p
          animate={controls}
          className="text-lg font-mono font-light text-[#1A1A1A]"
        >
          When I'm not coding, you can find me exploring the latest tech trends,
          contributing to open-source projects, or working on personal projects
          that challenge my creativity. I'm always eager to learn new
          technologies and stay updated with industry advancements.
        </motion.p>

      </div>
      <div className="text-center mt-10">
        <button
          onClick={toggleAnimation}
          className="bg-[white] text-[#1A1A1A] px-2 py-1 text-sm border-4 border-[#1A1A1A] rounded-none shadow-lg hover:bg-[black] hover:text-[white] transition-colors duration-300"
        >
          {animateText ? "Stop" : "Animate"}
        </button>
      </div>
    </section>
  );
};

export default About;
