import { motion } from "framer-motion";
import logo from "../assets/logo11.png";
import { ThemeContext } from "../context/ThemeContext";
import { useContext } from "react";
import { FaFileDownload } from "react-icons/fa";

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  // Smooth scroll function
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
      
      // Update URL without navigation (optional)
      window.history.pushState(null, null, `#${sectionId}`);
    }
  };

  const navLinkClass = ({ isActive }) =>
    isActive
      ? "font-semibold text-primary underline underline-offset-4 cursor-pointer"
      : "text-gray-800 dark:text-gray-100 hover:text-primary transition-colors duration-200 cursor-pointer";

  const links = (
    <>
      <li>
        <button onClick={() => scrollToSection('home')} className={navLinkClass({})}>
          Home
        </button>
      </li>
      <li>
        <button onClick={() => scrollToSection('about')} className={navLinkClass({})}>
          About
        </button>
      </li>
      <li>
        <button onClick={() => scrollToSection('education')} className={navLinkClass({})}>
          Education
        </button>
      </li>
      <li>
        <button onClick={() => scrollToSection('skills')} className={navLinkClass({})}>
          Skills
        </button>
      </li>
      <li>
        <button onClick={() => scrollToSection('projects')} className={navLinkClass({})}>
          Projects
        </button>
      </li>
      <li>
        <button onClick={() => scrollToSection('contact')} className={navLinkClass({})}>
          Contact
        </button>
      </li>
    </>
  );

  return (
    <nav className="navbar px-4 sm:px-6 py-2 bg-gray-200 dark:bg-gray-800 shadow-lg sticky top-0 z-50 rounded-2xl">
      <div className="navbar-start">
        {/* Mobile dropdown menu */}
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost lg:hidden p-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-gray-100 rounded-box w-20 space-y-2"
          >
            {links}
          </ul>
        </div>

        {/* Logo and name */}
        <div className="flex items-center gap-2">
          <img src={logo} className="w-10 h-10 sm:w-12 sm:h-12" alt="logo" />
          <motion.div
            className="btn btn-ghost text-xl hidden sm:inline-flex"
            whileHover={{ scale: 1.05 }}
          >
            Md.{" "}
            <motion.span
              animate={{ color: ["#0000FF", "#FF0000", "#00FF00"] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="ml-1"
            >
              Noornabi
            </motion.span>
          </motion.div>
        </div>
      </div>

      {/* Desktop navigation */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-1">{links}</ul>
      </div>

      {/* Right side buttons */}
      <div className="navbar-end gap-2 sm:gap-3">
        <motion.a
          href={`${import.meta.env.BASE_URL}cv.pdf`}
          download
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-1 sm:gap-2 px-2 py-1 sm:px-3 sm:py-2 md:px-4 md:py-2 
             text-xs sm:text-sm md:text-base font-medium sm:font-semibold 
             text-white bg-gradient-to-r from-[#FF1D8D] to-[#FF1D8D]/70 
             hover:from-[#e0137b] hover:to-[#c40e6b] 
             rounded-full sm:rounded-xl transition-all duration-200"
        >
          <FaFileDownload className="text-xs sm:text-sm md:text-base" />
          <span className="hidden md:inline">Download Resume</span>
          <span className="md:hidden">Resume</span>
        </motion.a>

        <motion.button
          onClick={toggleTheme}
          whileTap={{ scale: 0.9 }}
          aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
          className="p-2 rounded-full bg-gray-700 hover:bg-gray-600 transition-colors"
        >
          {theme === "dark" ? (
            <span className="text-yellow-300 text-lg">☀️</span>
          ) : (
            <span className="text-gray-300 text-lg">🌙</span>
          )}
        </motion.button>
      </div>
    </nav>
  );
};

export default Navbar;