import React from "react";

const Education = () => {
  return (
    <section id="education" className="w-full py-8 sm:py-12 px-4 sm:px-6 md:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Heading section */}
        <div className="text-center mb-6 sm:mb-8 md:mb-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-2 sm:mb-3">
            🎓 Education
          </h2>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300">
            My academic journey in the field of Computer Science & Engineering
          </p>
        </div>

        {/* Education card */}
        <div className="bg-white text-center dark:bg-gray-800 p-5 sm:p-6 md:p-8 rounded-xl shadow-sm sm:shadow-md border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:shadow-lg">
          <h3 className="text-xl sm:text-2xl font-bold text-primary dark:text-primary-300 mb-2">
            BSc in Computer Science & Engineering
          </h3>
          
          <p className="text-gray-700 dark:text-gray-300 font-medium mb-1 sm:mb-2">
            Jatiya Kabi Kazi Nazrul Islam University
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-4 text-sm sm:text-base">
            <p className="text-gray-500 dark:text-gray-400">
              <span className="font-medium">Expected Graduation:</span> December 2025
            </p>
            <span className="hidden sm:inline text-gray-300 dark:text-gray-600">|</span>
            <p className="text-gray-500 dark:text-gray-400">
              <span className="font-medium">Current Year:</span> 4th Year
            </p>
          </div>
        
        </div>

        {/* Optional: Add more education entries if needed */}
        {/* <div className="mt-6 bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
          ...
        </div> */}
      </div>
    </section>
  );
};

export default Education;