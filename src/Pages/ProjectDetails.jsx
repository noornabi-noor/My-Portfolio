import { useLoaderData } from "react-router-dom";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

export async function projectLoader({ params }) {
  const res = await fetch('/ProjectData.json');
  const data = await res.json();
  const project = data.find(p => p.id === Number(params.id));
  return project || null;
}

export default function ProjectDetails() {
  const project = useLoaderData();

  if (!project) {
    return (
      <div className="flex justify-center items-center min-h-screen text-red-600 font-semibold text-xl">
        Project not found!
      </div>
    );
  }

  return (
    <main className="max-w-6xl mx-auto px-4 sm:px-6 py-6 sm:py-8 md:py-10 text-gray-800 dark:text-gray-200">
      {/* Header Section */}
      <section className="flex flex-col lg:flex-row items-start gap-6 sm:gap-8 mb-8 sm:mb-12">
        {/* Project Image */}
        <div className="w-full lg:w-1/2 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-auto object-cover hover:scale-[1.02] transition-transform duration-500"
          />
        </div>

        {/* Project Info */}
        <div className="w-full lg:w-1/2 space-y-4 sm:space-y-5">
          <div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary dark:text-primary-300 mb-1 sm:mb-2">
              {project.title}
            </h1>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 italic">
              {project.subtitle}
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <a
              href={project.liveSite}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-4 sm:px-5 py-2 sm:py-3 bg-primary hover:bg-primary-dark text-white rounded-lg shadow-sm hover:shadow-md transition-all duration-200 text-sm sm:text-base"
              aria-label="Visit Live Site"
            >
              <span>Live Site</span>
              <FaExternalLinkAlt className="text-sm" />
            </a>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-4 sm:px-5 py-2 sm:py-3 bg-gray-800 hover:bg-gray-900 text-white rounded-lg shadow-sm hover:shadow-md transition-all duration-200 text-sm sm:text-base"
              aria-label="View GitHub Repository"
            >
              <span>GitHub</span>
              <FaGithub className="text-sm" />
            </a>
          </div>
        </div>
      </section>

      {/* Description Section */}
      <section className="mb-8 sm:mb-12">
        <h2 className="text-xl sm:text-2xl font-semibold text-primary dark:text-primary-300 mb-3 sm:mb-4 pb-1 border-b border-gray-300 dark:border-gray-600">
          Description
        </h2>
        <p className="text-sm sm:text-base leading-relaxed sm:leading-loose text-gray-700 dark:text-gray-300">
          {project.description}
        </p>
      </section>

      {/* Features, Challenges, Future Plans */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
        {/* Features */}
        <div className="bg-gray-50 dark:bg-gray-800 p-4 sm:p-5 rounded-xl shadow-sm">
          <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 pb-1 border-b border-blue-500 text-blue-600 dark:text-blue-400">
            Features
          </h3>
          <ul className="list-disc list-inside space-y-1 sm:space-y-2 text-sm sm:text-base text-gray-700 dark:text-gray-300">
            {project.features.map((feat, i) => (
              <li key={i}>{feat}</li>
            ))}
          </ul>
        </div>

        {/* Challenges */}
        <div className="bg-gray-50 dark:bg-gray-800 p-4 sm:p-5 rounded-xl shadow-sm">
          <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 pb-1 border-b border-red-500 text-red-600 dark:text-red-400">
            Challenges
          </h3>
          <ul className="list-disc list-inside space-y-1 sm:space-y-2 text-sm sm:text-base text-gray-700 dark:text-gray-300">
            {project.challenges.map((ch, i) => (
              <li key={i}>{ch}</li>
            ))}
          </ul>
        </div>

        {/* Future Plans */}
        <div className="bg-gray-50 dark:bg-gray-800 p-4 sm:p-5 rounded-xl shadow-sm md:col-span-2 lg:col-span-1">
          <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 pb-1 border-b border-green-500 text-green-600 dark:text-green-400">
            Future Plans
          </h3>
          <ul className="list-disc list-inside space-y-1 sm:space-y-2 text-sm sm:text-base text-gray-700 dark:text-gray-300">
            {project.futurePlans.map((plan, i) => (
              <li key={i}>{plan}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* Tech Stack */}
      <section>
        <h3 className="text-lg sm:text-xl font-semibold text-primary dark:text-primary-300 mb-3 sm:mb-4 pb-1 border-b border-purple-500">
          Tech Stack
        </h3>
        <div className="flex flex-wrap gap-2 sm:gap-3">
          {project.techStack.map((tech, i) => (
            <span
              key={i}
              className="bg-primary/10 dark:bg-primary/20 text-primary dark:text-primary-300 font-medium px-3 sm:px-4 py-1 rounded-full text-xs sm:text-sm shadow-sm"
            >
              {tech}
            </span>
          ))}
        </div>
      </section>
    </main>
  );
}