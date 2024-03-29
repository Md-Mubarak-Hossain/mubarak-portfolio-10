import React from 'react';
import react from '../../components/projectsImage/react.webp';
import challenge from '../../components/react/challenge/img-0.jpg';
import health from '../../components/react/health/img-0.jpg';
import Avatar from '../shared/CommonImage/Avatar';
import { Link } from 'react-router-dom';
const Reac = () => {
    return (
        <div className='w-full'>
            <div className="hero min-h-screen" style={{ backgroundImage: `url(${react})` }}>
                <div className="hero-overlay bg-opacity-90"></div>
                <div className="hero-content text-center text-neutral-content" >
                    <div className="max-w-md">
                        <Avatar></Avatar>
                        <h1 className="mb-5  text-xl lg:text-3xl font-bold">WELCOME TO</h1>
                        <h1 className="mb-5  text-xl lg:text-3xl font-bold">REACT.JS <span className="text-violet-900">Web Develop Project</span></h1>

                    </div>
                </div>
            </div>
            {/* ...challenge... */}
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content grid grid-cols-1 lg:grid-cols-2">
                    <div className='w-full'>
                        <img src={challenge} className="rounded-lg shadow-2xl w-full" alt=''
                        />
                    </div>
                    <div className='w-full'>
                        <h1 className=" text-xl lg:text-5xl font-bold">Challenge Yourself</h1>
                        <div className="py-6">
                            <div>
                                <h2 className='text-violet-900 text-justify'>FEATURES</h2>
                                <ul className='text-start pl-5'>
                                    <li className='list-disc'>REACT.JS, TailwindCSS, EXPRESS.JS, NODE.JS, MongoDB
                                    </li>
                                    <li className='list-disc'>Server site deploy in vercel and client site deploy in firebase
                                    </li>
                                    <li className='list-disc'>Server site deploy in vercel and client site deploy in firebase
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="py-6">
                            <div>
                                <h2 className='text-violet-900 text-justify'>Technologies</h2>
                                <ul className='text-start pl-5'>
                                    <li className='list-disc'>REACT.JS, TailwindCSS, EXPRESS.JS, NODE.JS, MongoDB
                                    </li>
                                    <li className='list-disc'>Server site deploy in vercel and client site deploy in firebase
                                    </li>
                                    <li className='list-disc'>Server site deploy in vercel and client site deploy in firebase
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <Link to='/challenge'><button className="btn btn-primary">See Details</button></Link>
                    </div>
                </div>
            </div>
            {/* .....health..... */}
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content grid grid-cols-1 lg:grid-cols-2">
                    <div className='w-full'>
                        <img src={health} className="rounded-lg shadow-2xl w-full" alt='' />
                    </div>
                    <div className='w-full'>
                        <h1 className=" text-xl lg:text-5xl font-bold">Health Activities</h1>
                        <div className="py-6">
                            <div>
                                <h2 className='text-violet-900 text-justify'>FEATURES</h2>
                                <ul className='text-start pl-5'>
                                    <li className='list-disc'>REACT.JS, TailwindCSS, EXPRESS.JS, NODE.JS, MongoDB
                                    </li>
                                    <li className='list-disc'>Server site deploy in vercel and client site deploy in firebase
                                    </li>
                                    <li className='list-disc'>Server site deploy in vercel and client site deploy in firebase
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="py-6">
                            <div>
                                <h2 className='text-violet-900 text-justify'>Technologies</h2>
                                <ul className='text-start pl-5'>
                                    <li className='list-disc'>REACT.JS, TailwindCSS, EXPRESS.JS, NODE.JS, MongoDB
                                    </li>
                                    <li className='list-disc'>Server site deploy in vercel and client site deploy in firebase
                                    </li>
                                    <li className='list-disc'>Server site deploy in vercel and client site deploy in firebase
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <Link to='/health'><button className="btn btn-primary">See Details</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Reac;