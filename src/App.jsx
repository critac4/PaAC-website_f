import React from "react";
import Home from "./components/Home/home";
import Events from "./components/Events/Events";
import Member from "./components/People/People";
import Gallery from "./components/Gallery/Gallery";
import Contact from "./components/Contact/Contact";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Library from "./components/Library/Library";
import OpenProjects from "./components/OpenProjects/OpenProjects";
import EventD from "./components/Events/EventD";

function App() {

  const router = createBrowserRouter([
    { path: "/", element: <Home /> },
    { path: "/events", element: <Events /> },
    { path: "/people", element: <Member /> },
    { path: "/gallery", element: <Gallery /> },
    { path: "/contact-us", element: <Contact /> },
    { path: "/library", element: <Library /> },
    { path: "/open-projects", element: <OpenProjects /> },
    { path: "/event/:eventName", element: <EventD /> },
  ]);
  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
}

export default App;
