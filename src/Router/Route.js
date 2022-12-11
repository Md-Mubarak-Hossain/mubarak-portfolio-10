import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from '../layouts/Main';
import Home from '../pages/Home/Home';
import Skills from '../pages/Home/Skills';
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
                    path: '/resume',
                    element: <Resum></Resum>
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