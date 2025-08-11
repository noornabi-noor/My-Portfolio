import React from "react";
import {
  FaReact,
  FaNodeJs,
  FaJava,
  FaPython,
  FaGithub,
  FaCss3Alt,
} from "react-icons/fa";
import {
  SiC,
  SiCplusplus,
  SiJavascript,
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiFirebase,
  SiMysql,
} from "react-icons/si";

const skills = [
  // Frontend
  { name: "HTML/CSS", icon: <FaCss3Alt className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" /> },
  { name: "JavaScript", icon: <SiJavascript className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" /> },
  { name: "React.js", icon: <FaReact className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" /> },

  // Backend & DB
  { name: "Node.js", icon: <FaNodeJs className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" /> },
  { name: "Express.js", icon: <SiExpress className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" /> },
  { name: "MongoDB", icon: <SiMongodb className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" /> },
  { name: "MySQL", icon: <SiMysql className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" /> },
  { name: "Firebase", icon: <SiFirebase className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" /> },

  // Programming Languages
  { name: "C", icon: <SiC className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" /> },
  { name: "C++", icon: <SiCplusplus className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" /> },
  { name: "Java", icon: <FaJava className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" /> },
  { name: "Python", icon: <FaPython className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" /> },

  // Tools
  { name: "GitHub", icon: <FaGithub className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" /> },
];

const Skills = () => {
  // Split skills into two arrays for two lines
  const mid = Math.ceil(skills.length / 2);
  const firstRow = skills.slice(0, mid);
  const secondRow = skills.slice(mid);

  return (
    <section
      id="skills"
      className="py-8 sm:py-12 px-4 sm:px-6 md:px-8 rounded-none md:rounded-3xl shadow-sm md:shadow-xl bg-white dark:bg-gray-900 mx-4 md:mx-auto max-w-7xl"
    >
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary text-center mb-6 sm:mb-8">
        🚀 Skills & Tools
      </h2>

      {/* First row - marquee left */}
      <div className="overflow-hidden mb-6 sm:mb-8">
        <div className="flex animate-marquee-left hover:animation-pause">
          {[...firstRow, ...firstRow].map((skill, index) => (
            <div
              key={`first-${index}`}
              className="flex flex-col items-center justify-center mx-3 sm:mx-4 md:mx-6 min-w-[70px] sm:min-w-[90px] md:min-w-[110px]"
            >
              <div className="text-gray-900 dark:text-gray-100 transition-transform hover:scale-110">
                {skill.icon}
              </div>
              <p className="mt-2 text-xs sm:text-sm font-medium text-center text-gray-700 dark:text-gray-300">
                {skill.name}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Second row - marquee right */}
      <div className="overflow-hidden">
        <div className="flex animate-marquee-right hover:animation-pause">
          {[...secondRow, ...secondRow].map((skill, index) => (
            <div
              key={`second-${index}`}
              className="flex flex-col items-center justify-center mx-3 sm:mx-4 md:mx-6 min-w-[70px] sm:min-w-[90px] md:min-w-[110px]"
            >
              <div className="text-gray-900 dark:text-gray-100 transition-transform hover:scale-110">
                {skill.icon}
              </div>
              <p className="mt-2 text-xs sm:text-sm font-medium text-center text-gray-700 dark:text-gray-300">
                {skill.name}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Add this to your global CSS or CSS-in-JS */}
      <style jsx>{`
        @keyframes marquee-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .animate-marquee-left {
          animation: marquee-left 20s linear infinite;
        }
        .animate-marquee-right {
          animation: marquee-right 20s linear infinite;
        }
        .hover\:animation-pause:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default Skills;