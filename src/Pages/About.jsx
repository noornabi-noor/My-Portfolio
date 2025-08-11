import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      className="py-6 px-4 sm:py-8 sm:px-6 md:py-12 md:px-8 lg:px-16 rounded-lg md:rounded-2xl shadow-sm md:shadow-md lg:shadow-xl bg-white dark:bg-gray-900 mx-auto w-[95%] max-w-7xl"
    >
      <div className="mx-auto">
        {/* Heading with responsive sizing and spacing */}
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-bold text-primary mb-4 sm:text-3xl sm:mb-5 md:text-4xl md:mb-6 text-center"
        >
          👨‍💻 About Me
        </motion.h2>
        
        {/* Content container with responsive spacing and text sizing */}
        <div className="space-y-4 sm:space-y-5 md:space-y-6 text-sm sm:text-base md:text-[17px] leading-relaxed sm:leading-loose">
          {/* Paragraph 1 */}
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.5 }}
          >
            I'm <span className="font-semibold text-primary dark:text-primary-300">Md. Noornabi</span>,
            a passionate Computer Science & Engineering student at{" "}
            <span className="font-medium text-gray-800 dark:text-gray-200">
              Jatiya Kabi Kazi Nazrul Islam University
            </span>. I enjoy crafting impactful software and constantly learning
            cutting-edge technologies to make a difference.
          </motion.p>
          
          {/* Paragraph 2 */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            I thrive in the world of{" "}
            <span className="font-semibold text-gray-800 dark:text-gray-200">full-stack web development (MERN)</span> and{" "}
            <span className="font-semibold text-gray-800 dark:text-gray-200">Android app development</span>. Coding isn't
            just what I do — it's what I love. I'm especially drawn to solving
            complex problems with{" "}
            <span className="font-semibold text-gray-800 dark:text-gray-200">algorithms and system design</span>.
          </motion.p>
          
          {/* Current Focus Section */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <p className="font-medium">Currently, I'm diving deeper into:</p>
            <ul className="list-disc list-inside ml-4 mt-2 space-y-2 sm:space-y-3">
              <li className="flex items-start">
                <span className="mr-2 mt-0.5">🚀</span>
                <span>Advanced Data Structures & Algorithms</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 mt-0.5">🌐</span>
                <span>MERN Stack Development</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 mt-0.5">🧠</span>
                <span>System Design & Clean Code</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 mt-0.5">💻</span>
                <span>C# for OOP</span>
              </li>
            </ul>
          </motion.div>
          
          {/* Paragraph 3 */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            My dream is to become a skilled software engineer building
            real-world solutions that create positive impact. I also enjoy{" "}
            <span className="font-semibold text-gray-800 dark:text-gray-200">competitive programming</span> as a way to
            stay sharp and learn through challenges.
          </motion.p>
          
          {/* Quote Section */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="bg-gray-100 dark:bg-gray-800 p-3 sm:p-4 rounded-lg italic border-l-4 border-primary dark:border-primary-300"
          >
            And yes—I'm the kind of developer who thinks{" "}
            <span className="font-medium">"debugging is just being a detective in a crime
            movie… where you're also the murderer."</span> 😄
          </motion.div>
          
          {/* Contact Section */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="mt-4 sm:mt-5"
          >
            <p className="font-semibold text-gray-800 dark:text-gray-200">Let's connect — if you're working on something cool or want to talk tech:</p>
            <div className="inline-flex items-center mt-2 sm:mt-3 bg-gray-100 dark:bg-gray-800 px-3 py-2 rounded-lg">
              <span className="mr-2">📫</span>
              <a
                href="mailto:noornabinoor1770@gmail.com"
                className="text-primary dark:text-primary-300 underline hover:text-primary-dark dark:hover:text-primary-200 transition-colors duration-200"
              >
                noornabinoor1770@gmail.com
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;