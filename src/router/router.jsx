import React from "react";
import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../Layout/RootLayout";
import ErrorPage from "../Components/ErrorPage";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import Project from "../Pages/Project";
import Skills from "../Pages/Skills";
import Education from "../Pages/Education";
import ProjectDetails, { projectLoader } from "../Pages/ProjectDetails";
import projectData from "../ProjectData.json";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "project",
        element: <Project />,
      },
      {
        path: "skills",
        element: <Skills />,
      },
      {
        path: "education",
        element: <Education />,
      },

      {
        path: "project/:slug",
        element: <ProjectDetails />,
        loader: async ({ params }) => {
          return projectData.find((p) => p.slug === params.slug) || null;
        },
      },
    ],
  },
]);

export default router;
