// // ProjectDetails.jsx
// import { useParams } from "react-router";
// import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
// import projects from "../../src/data/ProjectData.json";

// const ProjectDetails = () => {
//   const { slug } = useParams();
//   const project = projects.find((p) => p.id === slug);

//   if (!project) return <div className="text-center text-xl mt-10">Project not found.</div>;

//   return (
//     <div className="max-w-5xl mx-auto px-6 py-10 space-y-6">
//       <img src={project.image} alt={project.title} className="w-full rounded-xl shadow-lg" />
//       <h1 className="text-3xl font-bold text-primary">{project.title}</h1>
//       <p className="text-lg text-gray-700">{project.description}</p>

//       <div>
//         <h2 className="text-xl font-semibold mt-6">🛠 Tools Used</h2>
//         <div className="flex flex-wrap gap-2 mt-2">
//           {project.tools.map((tool, index) => (
//             <span
//               key={index}
//               className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm"
//             >
//               {tool}
//             </span>
//           ))}
//         </div>
//       </div>

//       <div className="flex gap-5 mt-6">
//         <a
//           href={project.github}
//           target="_blank"
//           rel="noopener noreferrer"
//           className="flex items-center gap-2 text-xl text-gray-800 hover:text-primary"
//         >
//           <FaGithub /> GitHub
//         </a>
//         <a
//           href={project.live}
//           target="_blank"
//           rel="noopener noreferrer"
//           className="flex items-center gap-2 text-xl text-gray-800 hover:text-primary"
//         >
//           <FaExternalLinkAlt /> Live
//         </a>
//       </div>
//     </div>
//   );
// };

// export default ProjectDetails;



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
    <main className="max-w-6xl mx-auto p-6 md:p-10 text-gray-800">
      {/* Header */}
      <section className="flex flex-col md:flex-row items-center gap-6 mb-10">
        <img
          src={project.image}
          alt={project.title}
          className="w-full md:w-1/3 rounded-lg shadow-lg object-cover"
        />
        <div className="flex-1">
          <h1 className="text-4xl font-extrabold mb-2">{project.title}</h1>
          <p className="text-xl text-gray-600 italic mb-4">{project.subtitle}</p>

          <div className="flex flex-wrap gap-4">
            <a
              href={project.liveSite}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 bg-primary text-white rounded-md shadow hover:bg-[#ff1d8ee1] transition"
              title="Visit Live Site"
            >
              Live Site <FaExternalLinkAlt />
            </a>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 bg-gray-800 text-white rounded-md shadow hover:bg-gray-900 transition"
              title="Client Repository"
            >
              Github <FaGithub />
            </a>
          </div>
        </div>
      </section>

      {/* Description */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3 border-b text-primary pb-1">Description</h2>
        <p className="leading-relaxed text-base">{project.description}</p>
      </section>

      {/* Features, Challenges, Future Plans */}
      <section className="grid md:grid-cols-3 gap-10 mb-10">
        <div>
          <h3 className="text-xl font-semibold mb-3 border-b border-blue-500 pb-1 text-blue-600">Features</h3>
          <ul className="list-disc list-inside space-y-1 text-gray-700">
            {project.features.map((feat, i) => (
              <li key={i}>{feat}</li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-3 border-b border-red-500 pb-1 text-red-600">Challenges</h3>
          <ul className="list-disc list-inside space-y-1 text-gray-700">
            {project.challenges.map((ch, i) => (
              <li key={i}>{ch}</li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-3 border-b border-green-500 pb-1 text-green-600">Future Plans</h3>
          <ul className="list-disc list-inside space-y-1 text-gray-700">
            {project.futurePlans.map((plan, i) => (
              <li key={i}>{plan}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* Tech Stack */}
      <section>
        <h3 className="text-xl text-primary font-semibold mb-3 border-b border-purple-500 pb-1">Tech Stack</h3>
        <div className="flex flex-wrap gap-3">
          {project.techStack.map((tech, i) => (
            <span
              key={i}
              className="bg-[#c2a0b1] text-primary  font-medium px-4 py-1 rounded-full text-sm shadow-sm"
            >
              {tech}
            </span>
          ))}
        </div>
      </section>
    </main>
  );
}
