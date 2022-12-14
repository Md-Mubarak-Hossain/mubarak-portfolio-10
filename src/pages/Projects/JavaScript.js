import React from 'react';
import js from '../../components/assets/js';
import news from '../../components/js/news/img-0.webp';
import best from '../../components/js/best/img-0.jpg';
import Avatar from '../shared/CommonImage/Avatar';
import { Link } from 'react-router-dom';
const JavaScript = () => {
    return (
        <div className='w-full'>
            <div className="hero min-h-screen" style={{ backgroundImage: `url(${js})` }}>
                <div className="hero-overlay bg-opacity-90"></div>
                <div className="hero-content text-center text-neutral-content" >
                    <div className="max-w-md">
                        <Avatar></Avatar>
                        <h1 className="mb-5  text-xl lg:text-3xl font-bold">WELCOME TO</h1>
                        <h1 className="mb-5  text-xl lg:text-3xl font-bold">JavaScript <span className="text-primary">Web Develop Project</span></h1>

                    </div>
                </div>
            </div>
            {/* .....news..... */}
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content grid grid-cols-1 lg:grid-cols-2">
                    <div className='w-full'>
                        <img src={news} className="rounded-lg shadow-2xl w-full" alt=''
                        />
                    </div>
                    <div className='w-full'>
                        <h1 className=" text-xl lg:text-5xl font-bold">DAILY NEWS</h1>
                        <div className="py-6">
                            <div>
                                <h2 className='text-primary text-justify'>FEATURES</h2>
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
                                <h2 className='text-primary text-justify'>Technologies</h2>
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

                        <Link to='/news'><button className="btn btn-primary">See Details</button></Link>
                    </div>

                </div>
            </div>
            {/* .....hotel..... */}
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content grid grid-cols-1 lg:grid-cols-2">
                    <div className='w-full'>
                        <img src={best} className="rounded-lg shadow-2xl w-full" alt='' />
                    </div>
                    <div className='w-full'>
                        <h1 className=" text-xl lg:text-5xl font-bold">Select Five Best</h1>
                        <div className="py-6">
                            <div>
                                <h2 className='text-primary text-justify'>FEATURES</h2>
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
                                <h2 className='text-primary text-justify'>Technologies</h2>
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

                        <Link to='/best'><button className="btn btn-primary">See Details</button></Link>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default JavaScript;