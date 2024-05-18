import React from 'react'
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import About from '../routes/about/About.jsx';
import Contact from '../routes/contact/Contact.jsx';
import Home from '../routes/home/Home.jsx';
import Projects from '../routes/projects/Projects.jsx';
import Errorpage from '../routes/error/Errorpage.jsx';
import Nav from '../routes/nav/Nav.jsx';

export default function RouterConfig() {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <Nav />,
            errorElement: <Errorpage />,
            children: [
                {
                    path: '/',
                    element: <Home />,
                    errorElement: <Errorpage />,
                },
                {
                    path: '/about',
                    element: <About />,
                    errorElement: <Errorpage />,
                },
                {
                    path: '/contact',
                    element: <Contact />,
                    errorElement: <Errorpage />,
                },
                {
                    path: '/projects',
                    element: <Projects />,
                    errorElement: <Errorpage />,
                }
            ]
        },
    ]);

    return (
        <RouterProvider router={router}/>
    )
}
