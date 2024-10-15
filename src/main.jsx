import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Error from "./Componets/Error/Error";

import Home from "./Componets/Home/Home";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Nav from "./Componets/Nav/Nav";
import Bookdetlais from "./Componets/Home/Books/Booksdetlis/Bookdetlais";
import AddComponents from "./Componets/AddComponents/AddComponents";
import Dashboard from "./Componets/Dashboard/Dashboard";
import MyBooks from "./Componets/MyBookas/MyBooks";
import Root from "./Componets/Root/Root";
import { Toaster } from "react-hot-toast";
import Roots from "./Root1/Root";
import SignUp from "./Componets/SignUp/SignUp";
import SignIn from "./Componets/SignIn/SignIn";
import AuthProvider from "./Provider/AuthProvider";
import EditBooks from "./Componets/MyBookas/EditBooks";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Nav></Nav>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        loader: () => fetch("/Books.json"),
        element: <Home></Home>,
      },
      {
        path: "/book/:bookId",
        // loader: () => fetch(books),
        element: <Bookdetlais></Bookdetlais>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <Root></Root>,
    children: [
      {
        path: "/dashboard/static",
        element: <Dashboard></Dashboard>,
      },
      {
        path: "/dashboard/my-books",
        element: <MyBooks></MyBooks>,
      },
      {
        path: "/dashboard/add-books",
        element: <AddComponents></AddComponents>,
      },
      {
        path: "/dashboard/edit-books/:id",
        element: <EditBooks></EditBooks>,
      },
    ],
  },
  {
    path: "/",
    element: <Roots></Roots>,
    children: [
      // {
      //   path:"/login",
      //   element:
      // },
      {
        path: "/sign-up",
        element: <SignUp></SignUp>,
      },
      {
        path: "/sign-in",
        element: <SignIn></SignIn>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
      <Toaster />
    </AuthProvider>
  </React.StrictMode>
);
