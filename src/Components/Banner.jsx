import React from "react";
import noor from "../assets/noor.jpeg";
import { FaGithub, FaLinkedin, FaFileDownload } from "react-icons/fa";
import { motion } from "framer-motion";
import { Typewriter } from "./Typewriter";

const Banner = () => {
  return (
    <div
      id="home"
      className="flex flex-col-reverse lg:flex-row items-center justify-between gap-6 sm:gap-8 lg:gap-12 py-8 sm:py-10 px-4 sm:px-8 lg:px-12 rounded-xl lg:rounded-3xl shadow-md lg:shadow-2xl bg-white dark:bg-gray-900 mx-4 sm:mx-6 lg:mx-auto max-w-7xl"
    >
      {/* Text Section */}
      <div className="lg:w-2/3 text-center lg:text-left space-y-4 sm:space-y-5">
        <div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary dark:text-primary-300">
            Hi <span className="wave inline-block">👋</span>, I'm Md. Noornabi
          </h2>

          <div className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-700 dark:text-gray-300 mt-1 sm:mt-2">
            {/* <Typewriter text="Junior Full Stack Developer" speed={100} /> */}
            <Typewriter
              text="Junior Full Stack Developer"
              speed={100}
              pause={1500}
            />
          </div>
        </div>

        <p className="text-sm sm:text-base md:text-lg leading-relaxed text-gray-600 dark:text-gray-400">
          Computer Science student passionate about building web applications,
          solving complex problems, and continuous learning. I enjoy competitive
          programming and believe humor makes debugging more enjoyable. 😄
        </p>

        {/* Social Links */}
        <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-6 mt-4 sm:mt-6">
          <div className="flex gap-5">
            <a
              href="https://github.com/noornabi-noor"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary-300 transition-colors duration-200 text-xl hover:scale-110 hover:opacity-80"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/md-noornabi-noor/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary-300 transition-colors duration-200 text-xl hover:scale-110 hover:opacity-80"
            >
              <FaLinkedin />
            </a>
            {/* Codeforces */}
            <a
              href="https://codeforces.com/profile/_Noornabi-Noor_"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Codeforces profile"
              className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary-300 transition-colors duration-200 text-xl hover:scale-110 hover:opacity-80"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <rect x="4" y="3" width="4" height="18" />
                <rect x="10" y="8" width="4" height="13" />
                <rect x="16" y="13" width="4" height="8" />
              </svg>
            </a>

            {/* LeetCode */}

          </div>

          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://drive.google.com/file/d/1IYaz2d1EuDw_CGpwN34406zjnc3ni5Mp/view?usp=sharing"
            download
            className="flex rounded-2xl items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 text-gray-100 bg-gradient-to-r from-[#FF1D8D] to-[#FF1D8D]/70 hover:from-[#e0137b] hover:to-[#c40e6b] transition-all duration-200 text-sm sm:text-base"
          >
            <FaFileDownload />
            <span>Resume</span>
          </motion.a>
        </div>
      </div>

      {/* Image Section */}
      <div className="lg:w-1/3 flex justify-center">
        <motion.div
          className="relative"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.6 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          whileHover={{ scale: 1.05 }}
        >
          <motion.img
            src={noor}
            alt="Md. Noornabi"
            className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 object-cover object-top rounded-full shadow-lg border-4 border-primary dark:border-primary-300"
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          />
          <motion.div
            className="absolute inset-0 rounded-full border-4 border-transparent"
            whileHover={{
              borderColor: "rgba(59,130,246,0.3)",
              scale: 1.1,
              transition: { duration: 0.3 },
            }}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Banner;
