import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from '../layouts/Main';
import About from '../pages/Home/About';
import Blog from '../pages/Home/Blog';
import Email from '../pages/Home/Email';
import Home from '../pages/Home/Home';
import Projects from '../pages/Home/Projects';
import Skills from '../pages/Home/Skills';
import CSS from '../pages/Projects/CSS';
import Penguin from '../pages/Projects/CSS/Penguin';
import Panda from '../pages/Projects/CSS/Panda';
import Html from '../pages/Projects/Html';
import JavaScript from '../pages/Projects/JavaScript';
import Best from '../pages/Projects/Js/Best';
import News from '../pages/Projects/Js/News';
import Mern from '../pages/Projects/Mern';
import Hotel from '../pages/Projects/Mern/Hotel';
import Law from '../pages/Projects/Mern/Law';
import Mobile from '../pages/Projects/Mern/Mobile';
import School from '../pages/Projects/Mern/School';
import Reac from '../pages/Projects/Reac';
import Challenge from '../pages/Projects/React/Challenge';
import Health from '../pages/Projects/React/Health';
import Resum from '../pages/Resume/Resum';
import MoreProjects from '../pages/Home/MoreProjects';
import Donation from '../pages/Projects/Html/Donation';
import WorldCup from '../pages/Projects/Html/WorldCup';

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
                    path: '/MoreProjects',
                    element: <MoreProjects></MoreProjects>
                },
                {
                    path: '/html',
                    element: <Html></Html>
                },
                {
                    path: '/donation',
                    element: <Donation></Donation>
                },
                {
                    path: '/cup',
                    element: <WorldCup></WorldCup>
                },
                {
                    path: '/css',
                    element: <CSS></CSS>
                },
                {
                    path: '/penguin',
                    element: <Penguin></Penguin>
                },
                {
                    path: '/panda',
                    element: <Panda></Panda>
                },
                {
                    path: '/js',
                    element: <JavaScript></JavaScript>
                },
                {
                    path: '/news',
                    element: <News></News>
                },
                {
                    path: '/best',
                    element: <Best></Best>
                },
                {
                    path: '/mern',
                    element: <Mern></Mern>
                },
                {
                    path: '/mobile',
                    element: <Mobile></Mobile>
                },
                {
                    path: '/hotel',
                    element: <Hotel></Hotel>
                },
                {
                    path: '/schol',
                    element: <School></School>
                },
                {
                    path: '/law',
                    element: <Law></Law>
                },
                {
                    path: '/reac',
                    element: <Reac></Reac>
                },
                {
                    path: '/challenge',
                    element: <Challenge></Challenge>
                },
                {
                    path: '/health',
                    element: <Health></Health>
                },
                {
                    path: '/resume',
                    element: <Resum></Resum>
                },
                {
                    path: '/about',
                    element: <About></About>
                },
                {
                    path: '/blog',
                    element: <Blog></Blog>
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