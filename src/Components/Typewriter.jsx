// import { motion } from "framer-motion";
// import { useEffect, useRef, useState } from "react";

// export const Typewriter = ({ text, speed = 100 }) => {
//   const [displayedText, setDisplayedText] = useState("");
//   const [isTyping, setIsTyping] = useState(true);
//   const indexRef = useRef(0);
//   const timeoutRef = useRef(null);

//   useEffect(() => {
//     setDisplayedText("");
//     setIsTyping(true);
//     indexRef.current = 0;

//     const type = () => {
//       const currentChar = text.charAt(indexRef.current);
//       setDisplayedText(text.slice(0, indexRef.current + 1));
//       indexRef.current++;

//       if (indexRef.current >= text.length) {
//         setIsTyping(false);
//         return;
//       }

//       const delay = currentChar === " " ? speed * 3 : speed;
//       timeoutRef.current = setTimeout(type, delay);
//     };

//     type();

//     return () => {
//       clearTimeout(timeoutRef.current);
//     };
//   }, [text, speed]);

//   return (
//     <motion.h4
//       className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 dark:text-gray-200 mt-2"
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ duration: 0.5 }}
//     >
//       {displayedText}
//       {isTyping && (
//         <motion.span
//           className="inline-block w-[1ch] animate-pulse"
//           style={{ color: "inherit" }}
//         >
//           |
//         </motion.span>
//       )}
//     </motion.h4>
//   );
// };




import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export const Typewriter = ({ text, speed = 100, pause = 1000 }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const indexRef = useRef(0);
  const timeoutRef = useRef(null);

  useEffect(() => {
    const startTyping = () => {
      setDisplayedText("");
      setIsTyping(true);
      indexRef.current = 0;

      const type = () => {
        const currentChar = text.charAt(indexRef.current);
        setDisplayedText(text.slice(0, indexRef.current + 1));
        indexRef.current++;

        if (indexRef.current >= text.length) {
          setIsTyping(false);
          timeoutRef.current = setTimeout(startTyping, pause); // 🔁 restart after pause
          return;
        }

        const delay = currentChar === " " ? speed * 3 : speed;
        timeoutRef.current = setTimeout(type, delay);
      };

      type();
    };

    startTyping();

    return () => {
      clearTimeout(timeoutRef.current);
    };
  }, [text, speed, pause]);

  return (
    <motion.h4
      className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 dark:text-gray-200 mt-2"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {displayedText}
      {isTyping && (
        <motion.span
          className="inline-block w-[1ch] animate-pulse"
          style={{ color: "inherit" }}
        >
          |
        </motion.span>
      )}
    </motion.h4>
  );
};