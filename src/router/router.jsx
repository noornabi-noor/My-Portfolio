import React, { Children } from "react";
import { createBrowserRouter } from "react-router";
import RootLayout from "../Layout/RootLayout";
import ErrorPage from "../Components/ErrorPage";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import Project from "../Pages/Project";
import Skills from "../Pages/Skills";

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
        element: <Project/>
      },
      {
        path: "skills",
        element: <Skills/>
      }
    ],
  },
]);

export default router;
