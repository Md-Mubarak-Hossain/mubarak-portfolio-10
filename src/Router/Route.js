import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from '../layouts/Main';
import Home from '../pages/Home/Home';
import Resume from '../pages/Home/Skills';

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
                    path: '/resume',
                    element: <Resume></Resume>
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