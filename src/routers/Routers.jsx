import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "../layouts/RootLayout/MainLayout";
import PageNotFound from "../layouts/NotFoundLayout/PageNotFound";
import Login from "../pages/Auth/Login";
import PrivateRouter from "../providers/PrivateRouter";

const Routers = () => {
  const routers = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement: <PageNotFound></PageNotFound>,
      children: [
        {
          path: "/",
          element: <PrivateRouter>Dashboard</PrivateRouter>,
        },
        {
          path: "/categories",
          element: <PrivateRouter>Categories</PrivateRouter>,
        },
        {
          path: "/products",
          element: <PrivateRouter>Products</PrivateRouter>,
        },
        {
          path: "/orders",
          element: <PrivateRouter>Orders</PrivateRouter>,
        },
        {
          path: "/users",
          element: <PrivateRouter>Users</PrivateRouter>,
        },

        {
          path: "/payments",
          element: <PrivateRouter>Payments</PrivateRouter>,
        },
      ],
    },
    {
      path: "/login",
      element: <Login></Login>,
    },
  ]);

  return <RouterProvider router={routers}></RouterProvider>;
};

export default Routers;
