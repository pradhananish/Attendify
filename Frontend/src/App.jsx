import React from 'react'
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Spinner from './components/Spinner';
import LoginPage from './pages/AdminPages/LoginPage';
import Dashboard from './pages/AdminPages/Dashboard';

  const router = createBrowserRouter([
    {
      path: "/",
      element: <LoginPage />,
    //   children: [
    //     {
    //       path: "dashboard",
    //       element: <Dashboard />,
    //     },
    //     {
    //       path: "about",
    //       element: <About />,
    //     },
    //   ],
    },
    {
      path:"/dashboard",
      element: <Dashboard />
    }
  ]);

  export default function App() {
    return(
        <RouterProvider
        router={router}
        fallbackElement={<Spinner />}
      />
    )
  }