// src/routes.jsx
import React, { Suspense, lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import Layout from "../layouts/Index";

const Home = lazy(() => import("../pages/Home"));
const About = lazy(() => import("../pages/About"));
const AboutDetails = lazy(() => import("../pages/AboutDetails"));

const NotFound = () => <div>Not Found</div>;

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "about/:slug", element: <AboutDetails /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

export default router;
