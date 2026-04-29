import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      className="py-12 px-4 sm:px-6 lg:px-16 bg-white dark:bg-gray-900 mx-auto w-[95%] max-w-7xl rounded-2xl shadow-xl"
    >
      {/* Centered Heading */}
      <h2 className="text-3xl sm:text-3xl md:text-4xl font-bold text-primary text-center mb-6">
        👨‍💻 About Me
      </h2>

      {/* Centered Intro */}
      <p className="text-center text-gray-800 dark:text-gray-200 mb-12 text-sm sm:text-base md:text-lg leading-relaxed">
        I'm{" "}
        <span className="font-semibold text-primary dark:text-primary-300">
          Md. Noornabi
        </span>
        , a passionate <span className="font-medium">software developer</span>{" "}
        and CSE student at Jatiya Kabi Kazi Nazrul Islam University (JKKNIU).
        I’m driven by curiosity, problem-solving, and building impactful
        software.
      </p>

      {/* Image + Content */}
      <div className="flex flex-col md:flex-row items-center gap-10">
        <motion.div
          className="w-full h-full md:w-1/2 flex justify-center md:justify-center"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <img
            src="https://i.ibb.co.com/yBsxn8yc/working.gif"
            alt="Programmer Illustration"
            className="rounded-xl shadow-2xl w-full max-w-md md:max-w-lg lg:max-w-xl h-auto md:h-[500px] lg:h-[550px] object-contain hover:scale-105 transition-transform duration-300"
          />
        </motion.div>

        {/* Right Side Content */}
        <motion.div
          className="w-full md:w-1/2 space-y-6 text-sm sm:text-base md:text-[17px] leading-relaxed sm:leading-loose"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Focus List */}
          <div className="bg-gray-50 dark:bg-gray-800 p-5 rounded-2xl shadow-inner border border-gray-200 dark:border-gray-700">
            <p className="font-semibold mb-2">🌱 Currently Learning:</p>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>🚀 Advanced Data Structures & Algorithms</li>
              <li>🌐 Full Stack Development</li>
              <li>🧠 System Design & Writing Clean Code</li>
              <li>💻 C# for Object-Oriented Programming</li>
            </ul>
          </div>

          {/* Aspirations */}
          <p className="text-gray-800 dark:text-gray-200">
            I aim to become a skilled software engineer building impactful
            solutions. I also enjoy{" "}
            <span className="font-semibold">competitive programming</span> to
            stay sharp.
          </p>

          {/* Quote */}
          <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-xl italic border-l-4 border-primary dark:border-primary-300 shadow-sm">
            "Debugging is just being a detective in a crime movie… where you're
            also the murderer." 😄
          </div>

          {/* Contact */}
          <div>
            <p className="font-semibold text-gray-800 dark:text-gray-200 mb-2">
              📬 Let's connect — if you're working on something cool or want to
              talk tech:
            </p>
            <div className="inline-flex items-center bg-gray-100 dark:bg-gray-800 px-4 py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300 shadow-sm">
              <span className="mr-2">📫</span>
              <a
                href="mailto:noornabinoor1770@gmail.com"
                className="text-primary dark:text-primary-300 underline hover:text-primary-dark dark:hover:text-primary-200 transition-colors duration-200"
              >
                noornabinoor1770@gmail.com
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
