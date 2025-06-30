import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { useNavigate } from "react-router";

import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";

const projects = [
  {
    slug: "historical-artifacts-tracker",
    title: "Historical Artifacts Tracker",
    description:
      "A responsive web application to browse, add, like, and manage historical artifacts with authentication and dynamic features.",
    tools: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Firebase",
      "JWT",
      "Tailwind",
    ],
    github: "https://github.com/noornabi-noor/Historical-Artifacts-Tracker",
    live: "https://historical-artifacts-tra-3ba74.web.app/",
    image: project1,
  },
  {
    slug: "roommate-finder",
    title: "Roommate Finder Website",
    description:
      "A full-stack platform that helps individuals find compatible roommates based on location, budget, and lifestyle preferences. Features include dynamic search, authentication, protected routes, and CRUD operations.",
    tools: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Firebase",
      "Tailwind",
      "JWT",
    ],
    github: "https://github.com/noornabi-noor/Roommate-Finder",
    live: "https://roommate-finder-client-4c6d4.web.app/",
    image: project2,
  },
  {
    slug: "appstore-platform",
    title: "AppStore Platform",
    description:
      "A user-centric app discovery platform with trending apps, categorized browsing, user reviews, and seamless app management.",
    tools: [
      "React",
      "React Router",
      "Firebase",
      "Tailwind CSS",
      "SweetAlert2",
      "Framer Motion",
    ],
    github: "https://github.com/noornabi-noor/AppDock404",
    live: "https://app-store-6dcba.web.app/",
    image: project3,
  },
];

const Projects = () => {
  const navigate = useNavigate();
  return (
    <div className="max-w-6xl mx-auto px-4 my-10 space-y-10 rounded-3xl shadow-2xl">
      <div className="flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-4xl font-extrabold text-primary mb-4">
          Featured Projects
        </h1>
        <p className="text-base max-w-3xl">
          A selection of projects that showcase my technical capabilities,
          creativity, and experience. These projects demonstrate my skills in
          full-stack development, UI/UX design, and modern web technologies.
        </p>
      </div>

      {projects.map((project, index) => (
        <div
          key={index}
          className="flex flex-col md:flex-row items-center shadow-md rounded-2xl p-6 gap-6"
        >
          {/* Project Image */}
          <div className="md:w-1/2 w-full">
            <img
              src={project.image}
              alt={project.title}
              className="rounded-xl w-full h-auto object-cover shadow-lg"
            />
          </div>

          {/* Project Info */}
          <div className="md:w-1/2 w-full flex flex-col gap-4">
            <h2 className="text-2xl font-bold text-primary">{project.title}</h2>
            <p className="text-base">{project.description}</p>

            {/* Tools */}
            <div className="flex flex-wrap gap-2 mt-2">
              {project.tools.map((tool, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 bg-[#c2a0b1] text-primary text-sm font-medium rounded-full"
                >
                  {tool}
                </span>
              ))}
            </div>

            {/* Icons */}
            <div className="flex items-center gap-5 mt-4">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-900 dark:text-gray-100 hover:text-primary transition duration-300 text-xl"
                title="GitHub"
              >
                <FaGithub />
              </a>
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-900 dark:text-gray-100 hover:text-primary transition duration-300 text-xl"
                title="Live Site"
              >
                <FaExternalLinkAlt />
              </a>
            </div>

            {/* See More */}
            <button
              className="mt-4 w-max px-5 py-2 rounded-full bg-primary hover:bg-[#ff1d8ee1] text-white transition cursor-pointer"
              onClick={() => navigate(`/project/${project.slug}`)}
            >
              View Details
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;
