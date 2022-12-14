import React from 'react';

const Blog = () => {
    return (
        <div className='w-full text-justify p-10'>

            <div className='p-5 border'>
                <h2 className='text-2xl font-bold'>Tell me about your best project?</h2>
                <p className='py-4'>
                    It's so a nice question. As I have more projects which I have completed. But among them, My best projects are mobile resell. In this project I use react, tailwindcss, firebase, express,nodejs, MongoDB,
                    For the front end part I use react, and tailwindcss.
                </p>
                <p className='py-4'>
                    In react I use react icons, react-router, react-dom, context API, different hooks, external link packages, react to pdf, react to print, react to photo view, react style components,
                </p>
                <p className='py-4'>
                    In the front end for beatifying, I use tailwindcss with daisy. This a responsive website that can display on laptops, desktops, tablets,s and different categories of mobile versions.
                </p>
                <p className='py-4'>
                    In this project, I use express.js which is the framework of node.js. I use nodemon in this project.
                    As the middleware, I use the jwt token,cors.
                </p>
                <p className='py-4'>
                    MongoDB is used for data containers. From client site to backend side data post and get method used for data to get from MongoDB. This website has 3 tiers because the client site is to the server site then it reaches the database, and again it reverses work.
                </p>
                <p className='py-4'>
                    In this project, I use firebase authentication.
                    The technical deployment uses firebase deploy and vercel deploy.
                    The app has three sections.
                </p>
                <ul>
                    <li>
                        1. Admin section/admin layout
                    </li>
                    <li>
                        2. seller section/ seller layout
                    </li>
                    <li>
                        3. user section/ user layout
                    </li>
                </ul>
            </div>

            <div className='p-2 border'>
                <h2 className='font-bold text-2xl'>Why should we hire you?</h2>
                <p className='py-4'>
                    I have the best knowledge of react, javascript, python, MongoDB,expressjs,vercel,netlify, and GitHub.
                </p>
                <p className='py-4'>
                    A month ago I have worked on a new project which is similar to the messenger. I work on this project fluently, but at a time at the server site I faced a problem, for this, I try to solve this problem, I collaborating with a California friend, then searching on google, youtube. After reading the documentation I have solved this problem. If you hire me I can find myself as a collaborative hard working person.
                </p>
            </div>
        </div>
    );
};

export default Blog;