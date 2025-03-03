import { createBrowserRouter } from "react-router-dom";
import { lazy } from "react";
import App from "./App";
import { Helmet } from "react-helmet";

const HomePage = lazy(() => import("./pages/Homepage"));
const CareerPage = lazy(() => import("./pages/CareerPage"));
// const BlogPage = lazy(() => import("./pages/BlogPage"));
const AboutPage = lazy(() => import("./pages/AboutPage"));
// const ContactPage = lazy(() => import("./pages/ContactPage"));

const routes = [
  {
    path: "/",
    element: <HomePage />,
    title: "Your trusted partner in financial solutions - Utica Capital",
    description:
      "Welcome to Utica Capital, your trusted partner in financial solutions.",
  },
  {
    path: "careers",
    element: <CareerPage />,
    title: "Careers - Utica Capital",
    description: "Join Utica Capital and be part of our growing team.",
  },
  // {
  //   path: "blog",
  //   element: <BlogPage />,
  //   title: "Blog - Latest Insights | Utica Capital",
  //   description: "Read the latest insights and updates from Utica Capital's experts.",
  // },
  {
    path: "about",
    element: <AboutPage />,
    title: "About Us - Utica Capital",
    description:
      "Learn more about Utica Capital and our mission to provide excellent financial services.",
  },
  // {
  //   path: "contact",
  //   element: <ContactPage />,
  //   title: "Contact Us - Utica Capital",
  //   description: "Get in touch with Utica Capital for inquiries and financial consultation.",
  // },
];

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: routes.map(({ path, element, title, description }) => ({
      path,
      element: (
        // <Suspense fallback={<div>Loading...</div>}>
        <>
          <Helmet>
            <title>{title}</title>
            <meta name="description" content={description} />
          </Helmet>
          {element}
        </>
        // </Suspense>
      ),
    })),
  },
]);

export default router;
