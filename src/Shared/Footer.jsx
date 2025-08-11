import { FaGithub, FaLinkedin, FaFacebook, FaRegCopyright } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/noornabi-noor",
      icon: <FaGithub className="text-xl" />,
      color: "hover:text-primary dark:hover:text-{#FF1D8D}"
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/md-noornabi-bb41442b3/",
      icon: <FaLinkedin className="text-xl" />,
      color: "hover:text-primary dark:hover:text-{#FF1D8D}"
    },
    {
      name: "Facebook",
      url: "https://www.facebook.com/md.noornabi.noor.2024",
      icon: <FaFacebook className="text-xl" />,
      color: "hover:text-primary dark:hover:text-{#FF1D8D}"
    }
  ];

  return (
    <footer className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 py-8 px-4 sm:px-6 mt-5 rounded-2xl">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col justify-between items-center gap-6">
          {/* Social Links */}
          <div className="flex items-center gap-6">
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.name}
                whileHover={{ y: -2 }}
                className={`${link.color} transition-colors duration-200`}
              >
                {link.icon}
              </motion.a>
            ))}
          </div>

          {/* Copyright */}
          <div className="flex items-center gap-1 text-sm sm:text-base">
            <FaRegCopyright className="text-xs" />
            <span>{currentYear} Md. Noornabi. All rights reserved.</span>
          </div>

          {/* Back to Top Button */}
          <motion.button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-4 py-2 bg-primary hover:bg-primary-dark text-white rounded-md text-sm sm:text-base transition-colors duration-200 cursor-pointer hover:from-[#e0137b] hover:to-[#c40e6b] "
          >
            Back to Top
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;