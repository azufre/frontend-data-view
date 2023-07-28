import React from 'react';

import ErrorPage from "./pages/Error";
import Home from "./pages/Home";
import RootLayout from "./pages/Root";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import "./style.css";
import AuthSignup, { action as signupAction } from './pages/AuthSignup';
import AuthLogin, { action as loginAction } from './pages/AuthLogin';
import { action as logoutAction } from './pages/Logout';
import { tokenLoader } from './utils/auth';

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    id: 'root',
    loader: () => tokenLoader(), 
    children: [
      { path: "/", element: <Home /> },
      { path: "login", element: <AuthLogin />, action: loginAction },
      { path: "signup", element: <AuthSignup />, action: signupAction },
      { path: "logout", action: logoutAction },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
