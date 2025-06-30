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
  { name: "HTML/CSS", icon: <FaCss3Alt size={50} /> },
  { name: "JavaScript", icon: <SiJavascript size={50} /> },
  { name: "React.js", icon: <FaReact size={50} /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss size={50} /> },

  // Backend & DB
  { name: "Node.js", icon: <FaNodeJs size={50} /> },
  { name: "Express.js", icon: <SiExpress size={50} /> },
  { name: "MongoDB", icon: <SiMongodb size={50} /> },
  { name: "MySQL", icon: <SiMysql size={50} /> },
  { name: "Firebase", icon: <SiFirebase size={50} /> },

  // Programming Languages
  { name: "C", icon: <SiC size={50} /> },
  { name: "C++", icon: <SiCplusplus size={50} /> },
  { name: "Java", icon: <FaJava size={50} /> },
  { name: "Python", icon: <FaPython size={50} /> },

  // Tools
  { name: "GitHub", icon: <FaGithub size={50} /> },
];

const Skills = () => {
  // Split skills into two arrays for two lines
  const mid = Math.ceil(skills.length / 2);
  const firstRow = skills.slice(0, mid);
  const secondRow = skills.slice(mid);

  return (
    <section
      id="skills"
      className="rounded-3xl shadow-2xl py-12 px-4"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-8">
        🚀 Skills & Tools
      </h2>

      {/* First row - marquee left */}
      <div className="overflow-hidden mb-8">
        <div className="flex animate-marquee-left">
          {firstRow.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center mx-6 min-w-[100px]"
            >
              <div className="text-gray-900 dark:text-gray-100">{skill.icon}</div>
              <p className="mt-2 text-sm font-semibold text-center">
                {skill.name}
              </p>
            </div>
          ))}
          {/* Repeat to make continuous loop */}
          {firstRow.map((skill, index) => (
            <div
              key={`repeat1-${index}`}
              className="flex flex-col items-center justify-center mx-6 min-w-[100px]"
            >
              <div className="text-gray-900 dark:text-gray-100">{skill.icon}</div>
              <p className="mt-2 text-sm font-semibold text-center">
                {skill.name}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Second row - marquee right */}
      <div className="overflow-hidden">
        <div className="flex animate-marquee-right">
          {secondRow.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center mx-6 min-w-[100px]"
            >
              <div className="text-gray-900 dark:text-gray-100">{skill.icon}</div>
              <p className="mt-2 text-sm font-semibold text-center">
                {skill.name}
              </p>
            </div>
          ))}
          {/* Repeat to make continuous loop */}
          {secondRow.map((skill, index) => (
            <div
              key={`repeat2-${index}`}
              className="flex flex-col items-center justify-center mx-6 min-w-[100px]"
            >
              <div className="text-gray-900 dark:text-gray-100">{skill.icon}</div>
              <p className="mt-2 text-sm font-semibold text-center">
                {skill.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
