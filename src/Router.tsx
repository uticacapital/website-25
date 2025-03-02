import { createBrowserRouter } from "react-router-dom";
import { lazy } from "react";
import App from "./App";

const HomePage = lazy(() => import("./pages/Homepage"));
// const BlogPage = lazy(() => import("./pages/BlogPage"));
// const AboutPage = lazy(() => import("./pages/AboutPage"));
// const ContactPage = lazy(() => import("./pages/ContactPage"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      //   {
      //     path: "blog",
      //     element: <BlogPage />,
      //   },
      //   {
      //     path: "about",
      //     element: <AboutPage />,
      //   },
      //   {
      //     path: "contact",
      //     element: <ContactPage />,
      //   },
    ],
  },
]);

export default router;
