// Typewriter.tsx
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export const Typewriter = ({ text, speed = 100 }) => {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let index = 0;

    const type = () => {
      if (index < text.length) {
        setDisplayedText((prev) => prev + text.charAt(index));
        index++;
        setTimeout(type, speed);
      }
    };

    type();

    return () => {
      index = text.length;
    };
  }, [text, speed]);

  return (
    <motion.h4
      className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 dark:text-gray-200 mt-2"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {displayedText}
      <motion.span
        className="inline-block w-[1ch] animate-pulse"
        style={{ color: "inherit" }}
      >
        |
      </motion.span>
    </motion.h4>
  );
};
