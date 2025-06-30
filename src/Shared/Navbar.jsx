import { motion } from "framer-motion";
import { NavLink } from "react-router";
import logo from "../assets/logo11.png";
import { ThemeContext } from "../context/ThemeContext";
import { useContext } from "react";

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const navLinkClass = ({ isActive }) =>
    isActive
      ? "font-semibold text-primary underline underline-offset-4"
      : "text-gray-100 hover:text-primary";

  const links = (
    <>
      <li>
        <NavLink to="/" className={navLinkClass}>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/about" className={navLinkClass}>
          About
        </NavLink>
      </li>
      <li>
        <NavLink to="/education" className={navLinkClass}>
          Education
        </NavLink>
      </li>
      <li>
        <NavLink to="/skills" className={navLinkClass}>
          Skills
        </NavLink>
      </li>
      <li>
        <NavLink to="/project" className={navLinkClass}>
          Projects
        </NavLink>
      </li>
      <li>
        <NavLink to="/contact" className={navLinkClass}>
          Contact
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar work-sans-text bg-gray-500 shadow-2xl">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-3 w-3"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <div className="flex items-center work-sans-text gap-2">
          <img src={logo} className="w-16 h-16" alt="logo" />
          <a className="btn btn-ghost text-xl hidden md:inline-flex">
            Md.{" "}
            <motion.span
              animate={{ color: ["#0000FF", "#FF0000", "#00FF00"] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Noornabi
            </motion.span>{" "}
          </a>
        </div>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>

      <div className="navbar-end gap-1.5 md:gap-3">
        <a href="/noor.pdf" download className="inline-block">
          <button className="px-4 py-2 cursor-pointer rounded-2xl text-lg font-semibold text-gray-100 bg-gradient-to-r from-[#FF1D8D] to-[#FF1D8D]/70 transition duration-300 hover:from-[#e0137b] hover:to-[#c40e6b]">
            Download Resume
          </button>
        </a>

        <button
          onClick={toggleTheme}
          aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
          className="p-2 md:p-3 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-600 transition-colors"
        >
          {theme === "dark" ? (
            <span className="text-yellow-300 text-lg md:text-xl">☀️</span>
          ) : (
            <span className="text-gray-700 text-lg md:text-xl">🌙</span>
          )}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
