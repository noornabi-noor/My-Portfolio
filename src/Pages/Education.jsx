import React from "react";

const Education = () => {
  return (
    <section
      id="education"
      className="w-full py-8 sm:py-12 px-4 sm:px-6 md:px-8"
    >
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-6 sm:mb-8 md:mb-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-2 sm:mb-3">
            🎓 Education
          </h2>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300">
            My academic journey in the field of Computer Science & Engineering
          </p>
        </div>

        {/* Responsive Grid of Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "BSc in Computer Science & Engineering",
              institution: "Jatiya Kabi Kazi Nazrul Islam University",
              location: "Trishal, Mymensingh",
              image: "https://i.postimg.cc/RZhvJ3VX/jkkniu.png",
              details: [
                {
                  label: "Study Period",
                  value: "January 2022 – December 2025",
                },
                {
                  label: "Status",
                  value: "Final examination completed (Result pending)",
                },
              ],
            },
            ,
            {
              title: "Higher Secondary Certificate",
              institution: "Joypurhat Govt. College",
              location: "Joypurhat, Rajshahi",
              image: "https://i.postimg.cc/jjhvVjyY/jgc.png",
              details: [
                { label: "Started", value: "July 2017" },
                { label: "Left", value: "July 2019" },
              ],
            },
            {
              title: "Secondary School Certificate",
              institution: "Beritola Academy",
              location: "Dhamoirhat, Naogaon",
              image: "https://i.postimg.cc/NMfDQwx9/beritola.png",
              details: [
                { label: "Started", value: "January 2012" },
                { label: "Left", value: "2017" },
              ],
            },
          ].map((card, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:shadow-lg flex flex-col justify-between text-center"
            >
              {/* Image */}
              <div className="flex justify-center items-center h-24 mb-4">
                <img className="w-20 h-auto" src={card.image} alt="Institute" />
              </div>

              {/* Title & Institution */}
              <h3 className="text-xl sm:text-2xl font-bold text-primary dark:text-primary-300 mb-2">
                {card.title}
              </h3>
              <p className="text-gray-700 dark:text-gray-300 font-medium mb-1 sm:mb-2">
                {card.institution}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                {card.location}
              </p>

              {/* Details */}
              <div className="flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-4 text-sm sm:text-base">
                {card.details.map((detail, i) => (
                  <React.Fragment key={i}>
                    <p className="text-gray-500 dark:text-gray-400">
                      <span className="font-medium">{detail.label}:</span>{" "}
                      {detail.value}
                    </p>
                    {i < card.details.length - 1 && (
                      <span className="hidden sm:inline text-gray-300 dark:text-gray-600">
                        |
                      </span>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
