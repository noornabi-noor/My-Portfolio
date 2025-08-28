// import React from "react";
// import { motion } from "framer-motion";

// const About = () => {
//   return (
//     <section
//       id="about"
//       className="py-6 px-4 sm:py-8 sm:px-6 md:py-12 md:px-8 lg:px-16 rounded-lg md:rounded-2xl shadow-sm md:shadow-md lg:shadow-xl bg-white dark:bg-gray-900 mx-auto w-[95%] max-w-7xl"
//     >
//       <div className="mx-auto">
//         {/* Heading with responsive sizing and spacing */}
//         <motion.h2
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//           className="text-2xl font-bold text-primary mb-4 sm:text-3xl sm:mb-5 md:text-4xl md:mb-6 text-center"
//         >
//           👨‍💻 About Me
//         </motion.h2>

//         {/* Content container with responsive spacing and text sizing */}
//         <div className="space-y-4 sm:space-y-5 md:space-y-6 text-sm sm:text-base md:text-[17px] leading-relaxed sm:leading-loose">
//           {/* Paragraph 1 */}
//           <motion.p
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.1, duration: 0.5 }}
//           >
//             I'm <span className="font-semibold text-primary dark:text-primary-300">Md. Noornabi</span>,
//             a passionate Computer Science & Engineering student at{" "}
//             <span className="font-medium text-gray-800 dark:text-gray-200">
//               Jatiya Kabi Kazi Nazrul Islam University
//             </span>. I enjoy crafting impactful software and constantly learning
//             cutting-edge technologies to make a difference.
//           </motion.p>

//           {/* Paragraph 2 */}
//           <motion.p
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.2, duration: 0.5 }}
//           >
//             I thrive in the world of{" "}
//             <span className="font-semibold text-gray-800 dark:text-gray-200">full-stack web development (MERN)</span> and{" "}
//             <span className="font-semibold text-gray-800 dark:text-gray-200">Android app development</span>. Coding isn't
//             just what I do — it's what I love. I'm especially drawn to solving
//             complex problems with{" "}
//             <span className="font-semibold text-gray-800 dark:text-gray-200">algorithms and system design</span>.
//           </motion.p>

//           {/* Current Focus Section */}
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.3, duration: 0.5 }}
//           >
//             <p className="font-medium">Currently, I'm diving deeper into:</p>
//             <ul className="list-disc list-inside ml-4 mt-2 space-y-2 sm:space-y-3">
//               <li className="flex items-start">
//                 <span className="mr-2 mt-0.5">🚀</span>
//                 <span>Advanced Data Structures & Algorithms</span>
//               </li>
//               <li className="flex items-start">
//                 <span className="mr-2 mt-0.5">🌐</span>
//                 <span>MERN Stack Development</span>
//               </li>
//               <li className="flex items-start">
//                 <span className="mr-2 mt-0.5">🧠</span>
//                 <span>System Design & Clean Code</span>
//               </li>
//               <li className="flex items-start">
//                 <span className="mr-2 mt-0.5">💻</span>
//                 <span>C# for OOP</span>
//               </li>
//             </ul>
//           </motion.div>

//           {/* Paragraph 3 */}
//           <motion.p
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.4, duration: 0.5 }}
//           >
//             My dream is to become a skilled software engineer building
//             real-world solutions that create positive impact. I also enjoy{" "}
//             <span className="font-semibold text-gray-800 dark:text-gray-200">competitive programming</span> as a way to
//             stay sharp and learn through challenges.
//           </motion.p>

//           {/* Quote Section */}
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.5, duration: 0.5 }}
//             className="bg-gray-100 dark:bg-gray-800 p-3 sm:p-4 rounded-lg italic border-l-4 border-primary dark:border-primary-300"
//           >
//             And yes—I'm the kind of developer who thinks{" "}
//             <span className="font-medium">"debugging is just being a detective in a crime
//             movie… where you're also the murderer."</span> 😄
//           </motion.div>

//           {/* Contact Section */}
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.6, duration: 0.5 }}
//             className="mt-4 sm:mt-5"
//           >
//             <p className="font-semibold text-gray-800 dark:text-gray-200">Let's connect — if you're working on something cool or want to talk tech:</p>
//             <div className="inline-flex items-center mt-2 sm:mt-3 bg-gray-100 dark:bg-gray-800 px-3 py-2 rounded-lg">
//               <span className="mr-2">📫</span>
//               <a
//                 href="mailto:noornabinoor1770@gmail.com"
//                 className="text-primary dark:text-primary-300 underline hover:text-primary-dark dark:hover:text-primary-200 transition-colors duration-200"
//               >
//                 noornabinoor1770@gmail.com
//               </a>
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;

// import React from "react";
// import { motion } from "framer-motion";

// const About = () => {
//   return (
//     <section
//       id="about"
//       className="py-12 px-4 sm:px-6 lg:px-16 bg-white dark:bg-gray-900 mx-auto w-[95%] max-w-7xl rounded-2xl shadow-lg"
//     >
//       {/* Centered Heading */}
//       <motion.h2
//         className="text-3xl sm:text-3xl md:text-4xl font-bold text-primary text-center mb-10"
//         initial={{ opacity: 0, y: -20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//       >
//         👨‍💻 About Me
//       </motion.h2>
//       {/* Condensed Intro */}
//       <p>
//         I'm{" "}
//         <span className="font-semibold text-primary dark:text-primary-300">
//           Md. Noornabi
//         </span>
//         , a passionate{" "}
//         <span className="font-medium text-gray-800 dark:text-gray-200">
//           software developer and CSE student at Jatiya Kabi Kazi Nazrul Islam
//           University (JKKNIU). I’m deeply engaged in the world of technology,
//           driven by curiosity, problem-solving, and the goal of building
//           impactful software.
//         </span>
//       </p>

//       <div className="flex flex-col md:flex-row items-center gap-8">
//         {/* Left Side Image */}
//         <motion.div
//           className="w-full md:w-1/2 flex justify-center md:justify-center"
//           initial={{ opacity: 0, x: -50 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.6 }}
//         >
//           <img
//             src="https://i.ibb.co.com/KcfLy2GQ/programmer-Img.jpg"
//             alt="Programmer Illustration"
//             className="rounded-2xl shadow-xl w-full max-w-sm md:max-w-md object-cover hover:scale-105 transition-transform duration-300"
//           />
//         </motion.div>

//         {/* Right Side Content */}
//         <motion.div
//           className="w-full md:w-1/2 space-y-5 text-sm sm:text-base md:text-[17px] leading-relaxed sm:leading-loose"
//           initial={{ opacity: 0, x: 50 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.6 }}
//         >
//           {/* Condensed Intro */}
//           {/* <p>
//             I'm <span className="font-semibold text-primary dark:text-primary-300">Md. Noornabi</span>, a passionate <span className="font-medium text-gray-800 dark:text-gray-200">CSE student</span> at Jatiya Kabi Kazi Nazrul Islam University. I love <span className="font-semibold text-gray-800 dark:text-gray-200">MERN full-stack development</span>, and solving problems with <span className="font-semibold text-gray-800 dark:text-gray-200">algorithms & system design</span>.
//           </p> */}

//           {/* Focus List */}
//           <div>
//             <p className="font-medium">Currently diving into:</p>
//             <ul className="list-disc list-inside ml-4 mt-2">
//               <li className="flex items-start">
//                 <span className="mr-2 mt-0.5">🚀</span>Advanced Data Structures
//                 & Algorithms
//               </li>
//               <li className="flex items-start">
//                 <span className="mr-2 mt-0.5">🌐</span>MERN Stack Development
//               </li>
//               <li className="flex items-start">
//                 <span className="mr-2 mt-0.5">🧠</span>System Design & Clean
//                 Code
//               </li>
//               <li className="flex items-start">
//                 <span className="mr-2 mt-0.5">💻</span>C# for OOP
//               </li>
//             </ul>
//           </div>

//           {/* Aspirations */}
//           <p>
//             I aim to become a skilled software engineer building impactful
//             solutions. I also enjoy{" "}
//             <span className="font-semibold text-gray-800 dark:text-gray-200">
//               competitive programming
//             </span>{" "}
//             to stay sharp.
//           </p>

//           {/* Quote */}
//           <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-xl italic border-l-4 border-primary dark:border-primary-300">
//             "Debugging is just being a detective in a crime movie… where you're
//             also the murderer." 😄
//           </div>

//           {/* Contact */}
//           <div className="mt-4 sm:mt-5">
//             <p className="font-semibold text-gray-800 dark:text-gray-200">
//               Let's connect — if you're working on something cool or want to
//               talk tech:
//             </p>
//             <div className="inline-flex items-center mt-2 sm:mt-3 bg-gray-100 dark:bg-gray-800 px-3 py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300">
//               <span className="mr-2">📫</span>
//               <a
//                 href="mailto:noornabinoor1770@gmail.com"
//                 className="text-primary dark:text-primary-300 underline hover:text-primary-dark dark:hover:text-primary-200 transition-colors duration-200"
//               >
//                 noornabinoor1770@gmail.com
//               </a>
//             </div>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default About;

// import React from "react";
// import { motion } from "framer-motion";

// const About = () => {
//   return (
//     <section
//       id="about"
//       className="py-12 px-4 sm:px-6 lg:px-16 bg-white dark:bg-gray-900 mx-auto w-[95%] max-w-7xl rounded-2xl shadow-xl"
//     >
//       {/* Centered Heading */}
//       <motion.h2
//         className="text-3xl sm:text-3xl md:text-4xl font-bold text-primary text-center mb-12"
//         initial={{ opacity: 0, y: -20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//       >
//         👨‍💻 About Me
//       </motion.h2>

//            {/* Intro */}
//           <p className="text-gray-800 dark:text-gray-200">
//             I'm{" "}
//             <span className="font-semibold text-primary dark:text-primary-300">
//               Md. Noornabi
//             </span>
//             , a passionate <span className="font-medium">software developer</span> and CSE student at Jatiya Kabi Kazi Nazrul Islam University (JKKNIU). I’m driven by curiosity, problem-solving, and building impactful software.
//           </p>

//       <div className="flex flex-col md:flex-row items-center gap-10">
//         {/* Left Side Image */}
//         <motion.div
//           className="w-full md:w-1/2 flex justify-center md:justify-center"
//           initial={{ opacity: 0, x: -50 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.6 }}
//         >
//           <img
//             src="https://i.ibb.co.com/KcfLy2GQ/programmer-Img.jpg"
//             alt="Programmer Illustration"
//             className="rounded-3xl shadow-2xl w-full max-w-sm md:max-w-md object-cover hover:scale-105 transition-transform duration-300"
//           />
//         </motion.div>

//         {/* Right Side Content */}
//         <motion.div
//           className="w-full md:w-1/2 space-y-6 text-sm sm:text-base md:text-[17px] leading-relaxed sm:leading-loose"
//           initial={{ opacity: 0, x: 50 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.6 }}
//         >

//           {/* Focus List */}
//           <div className="bg-gray-50 dark:bg-gray-800 p-5 rounded-2xl shadow-inner border border-gray-200 dark:border-gray-700">
//             <p className="font-semibold mb-2">🌱 Currently Learning:</p>
//             <ul className="list-disc list-inside ml-4 space-y-1">
//               <li>🚀 Advanced Data Structures & Algorithms</li>
//               <li>🌐 MERN Stack Development</li>
//               <li>🧠 System Design & Writing Clean Code</li>
//               <li>💻 C# for Object-Oriented Programming</li>
//             </ul>
//           </div>

//           {/* Aspirations */}
//           <p className="text-gray-800 dark:text-gray-200">
//             My goal is to become a skilled software engineer building impactful solutions. I also enjoy <span className="font-semibold">competitive programming</span> to stay sharp.
//           </p>

//           {/* Quote */}
//           <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-xl italic border-l-4 border-primary dark:border-primary-300 shadow-sm">
//             "Debugging is just being a detective in a crime movie… where you're also the murderer." 😄
//           </div>

//           {/* Contact */}
//           <div>
//             <p className="font-semibold text-gray-800 dark:text-gray-200 mb-2">
//               📬 Let's connect — if you're working on something cool or want to talk tech:
//             </p>
//             <div className="inline-flex items-center bg-gray-100 dark:bg-gray-800 px-4 py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300 shadow-sm">
//               <span className="mr-2">📫</span>
//               <a
//                 href="mailto:noornabinoor1770@gmail.com"
//                 className="text-primary dark:text-primary-300 underline hover:text-primary-dark dark:hover:text-primary-200 transition-colors duration-200"
//               >
//                 noornabinoor1770@gmail.com
//               </a>
//             </div>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default About;

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
              <li>🌐 MERN Stack Development</li>
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
