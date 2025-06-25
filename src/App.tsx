import { RouterProvider, createBrowserRouter } from "react-router-dom";
import React from "react";
import MainLayout from "./components/Layout/MainLayout";
import Landing from "./pages/Landing";
import AboutPage from "./pages/About";
import ServicesPage from "./pages/Services";
import ContactPage from "./pages/Contact";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <MainLayout>
          <Landing />
        </MainLayout>
      ),
    },
    {
      path: "/about",
      element: (
        <MainLayout>
          <AboutPage />
        </MainLayout>
      ),
    },
    {
      path: "/services",
      element: (
        <MainLayout>
          <ServicesPage />
        </MainLayout>
      ),
    },
    {
      path: "/contact",
      element: (
        <MainLayout>
          <ContactPage />
        </MainLayout>
      ),
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
