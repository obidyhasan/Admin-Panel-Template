import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const Routers = () => {
  const routers = createBrowserRouter([
    {
      path: "/",
      element: "Admin Panel Template",
    },
  ]);

  return <RouterProvider router={routers}></RouterProvider>;
};

export default Routers;
