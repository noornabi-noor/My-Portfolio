import React from "react";
import noor from "../assets/noor.jpeg";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Banner = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-8 md:gap-16 py-12 px-6 md:px-12 rounded-3xl shadow-2xl mt-5">
      
      {/* Text Section */}
      <div className="md:w-2/3 text-center md:text-left space-y-5">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-primary">
          Hi 👋, I'm Md. Noornabi
        </h2>
        <h4 className="text-xl sm:text-2xl font-semibold ">
          A Junior Web Developer
        </h4>
        <p className=" leading-relaxed text-base sm:text-lg">
          I'm a CSE student passionate about coding, full-stack development, and
          solving real-world problems through technology. I love competitive
          programming, exploring system design, and believe a little humor makes
          every bug easier to fix. 😄
        </p>

        {/* Social Links */}
        <div className="flex justify-center md:justify-start gap-6 mt-4">
          <a
            href="https://github.com/your-username"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-900 dark:text-gray-100 hover:text-primary transition duration-300"
          >
            <i className="fab fa-github text-2xl"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/your-linkedin-id/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-900 dark:text-gray-100 hover:text-primary transition duration-300"
          >
            <i className="fab fa-linkedin text-2xl"></i>
          </a>
        </div>
      </div>

      {/* Image Section */}
      <div className="md:w-1/3 flex justify-center">
        <img
          src={noor}
          alt="Md. Noornabi"
          className="w-60 h-60 sm:w-72 sm:h-72 md:w-80 md:h-80 object-cover object-top rounded-full shadow-lg border-4 border-primary"
        />
      </div>
    </div>
  );
};

export default Banner;
