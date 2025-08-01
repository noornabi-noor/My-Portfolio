import React from "react";
import noor from "../assets/noor.jpeg";
import { FaGithub, FaLinkedin, FaFileDownload } from "react-icons/fa";

const Banner = () => {
  return (
    <div id="home" className="flex flex-col-reverse lg:flex-row items-center justify-between gap-6 sm:gap-8 lg:gap-12 py-8 sm:py-10 px-4 sm:px-8 lg:px-12 rounded-xl lg:rounded-3xl shadow-md lg:shadow-2xl bg-white dark:bg-gray-900 mx-4 sm:mx-6 lg:mx-auto max-w-6xl">
      {/* Text Section */}
      <div className="lg:w-2/3 text-center lg:text-left space-y-4 sm:space-y-5">
        <div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary dark:text-primary-300">
            Hi 👋, I'm Md. Noornabi
          </h2>
          <h4 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-700 dark:text-gray-300 mt-1 sm:mt-2">
            Junior Full Stack Developer
          </h4>
        </div>
        
        <p className="text-sm sm:text-base md:text-lg leading-relaxed text-gray-600 dark:text-gray-400">
          Computer Science student passionate about building web applications, solving complex problems, and continuous learning. I enjoy competitive programming and believe humor makes debugging more enjoyable. 😄
        </p>

        {/* Social Links */}
        <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-6 mt-4 sm:mt-6">
          <div className="flex gap-5">
            <a
              href="https://github.com/noornabi-noor"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary-300 transition-colors duration-200 text-xl"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/md-noornabi-noor/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary-300 transition-colors duration-200 text-xl"
            >
              <FaLinkedin />
            </a>
          </div>
          
          <a 
            href={`${import.meta.env.BASE_URL}cv.pdf`}
            download 
            className="flex rounded-2xl items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 text-gray-100 bg-gradient-to-r from-[#FF1D8D] to-[#FF1D8D]/70 hover:from-[#e0137b] hover:to-[#c40e6b] transition-all duration-200 text-sm sm:text-base"
          >
            <FaFileDownload />
            <span>Download Resume</span>
          </a>
        </div>
      </div>

      {/* Image Section */}
      <div className="lg:w-1/3 flex justify-center">
        <div className="relative">
          <img
            src={noor}
            alt="Md. Noornabi"
            className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 object-cover object-top rounded-full shadow-lg border-4 border-primary dark:border-primary-300 transition-transform duration-500 hover:scale-105"
          />
          <div className="absolute inset-0 rounded-full border-4 border-transparent hover:border-primary/30 dark:hover:border-primary/50 transition-all duration-300"></div>
        </div>
      </div>
    </div>
  );
};

export default Banner;