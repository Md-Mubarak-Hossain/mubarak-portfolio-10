import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from '../layouts/Main';
import Email from '../pages/Home/Email';
import Home from '../pages/Home/Home';
import Projects from '../pages/Home/Projects';
import Skills from '../pages/Home/Skills';
import CSS from '../pages/Projects/CSS';
import Html from '../pages/Projects/Html';
import JavaScript from '../pages/Projects/JavaScript';
import Mern from '../pages/Projects/Mern';
import Reac from '../pages/Projects/Reac';
import Resum from '../pages/Resume/Resum';

const Route = () => {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <Main></Main>,
            children: [
                {
                    path: '/',
                    element: <Home></Home>
                },
                {
                    path: '/skills',
                    element: <Skills></Skills>
                },
                {
                    path: '/projects',
                    element: <Projects></Projects>
                },
                {
                    path: '/html',
                    element: <Html></Html>
                },
                {
                    path: '/css',
                    element: <CSS></CSS>
                },
                {
                    path: '/js',
                    element: <JavaScript></JavaScript>
                },
                {
                    path: '/mern',
                    element: <Mern></Mern>
                },
                {
                    path: '/reac',
                    element: <Reac></Reac>
                },
                {
                    path: '/resume',
                    element: <Resum></Resum>
                },
                {
                    path: '/contact',
                    element: <Email></Email>
                }
            ]

        },
        {
            path: '/*',
            element: <div>Not found 404</div>
        },
    ])
    return (
        <RouterProvider router={router}>

        </RouterProvider >
    );
};

export default Route;