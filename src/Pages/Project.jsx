import { useState } from "react";
import { FaGithub, FaExternalLinkAlt, FaTimes } from "react-icons/fa";
import projectData from "/public/ProjectData.json";
import { motion } from "framer-motion";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const openProjectDetails = (project) => {
    setSelectedProject(project);
    document.body.style.overflow = "hidden";
  };

  const closeProjectDetails = () => {
    setSelectedProject(null);
    document.body.style.overflow = "auto";
  };

  return (
    <section
      id="projects"
      className="py-8 sm:py-12 px-4 sm:px-6 md:px-8 rounded-none md:rounded-3xl shadow-sm md:shadow-xl bg-white dark:bg-gray-900 mx-4 md:mx-auto max-w-7xl mt-2"
    >
      {/* Header */}
      <div className="text-center sm:mb-14 ">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary text-center mb-6 sm:mb-8">
          📂 Featured Projects
        </h1>
        <p className="text-base sm:text-lg max-w-3xl mx-auto px-4 text-gray-600 dark:text-gray-300">
          A selection of projects that showcase my technical capabilities.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="space-y-8 sm:space-y-12 ">
        {projectData.map((project, index) => (
          <div
            key={index}
            className="flex flex-col lg:flex-row items-center gap-6 sm:gap-8 bg-gray-50 dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 p-4 sm:p-6 "
          >
            {/* Project Image */}
            <div className="w-full lg:w-1/2 h-full overflow-hidden rounded-lg">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-auto sm:h-[280px] object-cover rounded-lg hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Project Info */}
            <div className="w-full lg:w-1/2 flex flex-col gap-3 sm:gap-4">
              <h2 className="text-xl sm:text-2xl font-bold text-primary dark:text-primary-300">
                {project.title}
              </h2>
              <h3 className="text-sm sm:text-base text-gray-500 dark:text-gray-400">
                {project.subtitle}
              </h3>

              <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300">
                {project.description.substring(0, 150)}...
              </p>

              {/* Tools */}
              <div className="flex flex-wrap gap-2 mt-1 sm:mt-2">
                {project.techStack.map((tool, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 bg-primary/10 dark:bg-primary/20 text-primary dark:text-primary-300 text-xs sm:text-sm font-medium rounded-full"
                  >
                    {tool}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mt-4 sm:mt-6">
                <div className="flex items-center gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary-300 transition-colors duration-200 text-lg sm:text-xl"
                  >
                    <FaGithub />
                  </a>
                  <a
                    href={project.liveSite}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary-300 transition-colors duration-200 text-lg sm:text-xl"
                  >
                    <FaExternalLinkAlt />
                  </a>
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => openProjectDetails(project)}
                  className="px-4 sm:px-5 py-2 text-sm sm:text-base rounded-full bg-primary hover:bg-primary-dark text-white transition-colors duration-200 shadow-sm hover:bg-[#c40e6b] cursor-pointer"
                >
                  View Details
                </motion.button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Project Details Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-black bg-opacity-50 flex items-center justify-center p-4 mt-15">
          <div className="bg-white dark:bg-gray-800 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-primary dark:text-primary-300">
                    {selectedProject.title}
                  </h2>
                  <h3 className="text-lg text-gray-500 dark:text-gray-400">
                    {selectedProject.subtitle}
                  </h3>
                </div>
                <button
                  onClick={closeProjectDetails}
                  className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
                >
                  <FaTimes className="text-xl" />
                </button>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-1 gap-6">
                <div>
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full rounded-lg shadow-md"
                  />
                </div>
                <div className="space-y-4">
                  <p className="text-gray-700 dark:text-gray-300">
                    {selectedProject.description}
                  </p>

                  <div>
                    <h3 className="text-lg font-semibold mb-2">Key Features</h3>
                    <ul className="list-disc list-inside space-y-1">
                      {selectedProject.features.map((feature, i) => (
                        <li key={i}>{feature}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-2">Technologies</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.techStack.map((tool, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-primary/10 dark:bg-primary/20 text-primary dark:text-primary-300 rounded-full text-sm"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>

                  {selectedProject.challenges && (
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Challenges</h3>
                      <ul className="list-disc list-inside space-y-1">
                        {selectedProject.challenges.map((challenge, i) => (
                          <li key={i}>{challenge}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {selectedProject.futurePlans && (
                    <div>
                      <h3 className="text-lg font-semibold mb-2">
                        Future Plans
                      </h3>
                      <ul className="list-disc list-inside space-y-1">
                        {selectedProject.futurePlans.map((plan, i) => (
                          <li key={i}>{plan}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {selectedProject.roles && (
                    <div>
                      <h3 className="text-lg font-semibold mb-2">
                        Role Features
                      </h3>
                      <div className="space-y-3">
                        {Object.entries(selectedProject.roles).map(
                          ([role, details]) => (
                            <div key={role}>
                              <h4 className="font-medium capitalize">
                                {role} Features:
                              </h4>
                              <ul className="list-disc list-inside pl-4">
                                {details.features.map((feature, i) => (
                                  <li key={i}>{feature}</li>
                                ))}
                              </ul>
                            </div>
                          )
                        )}
                      </div>
                    </div>
                  )}

                  <div className="flex gap-4 pt-4">
                    <a
                      href={selectedProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-900 transition-colors"
                    >
                      <FaGithub /> GitHub
                    </a>
                    <a
                      href={selectedProject.liveSite}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-md hover:bg-primary-dark transition-colors"
                    >
                      <FaExternalLinkAlt /> Live Demo
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
