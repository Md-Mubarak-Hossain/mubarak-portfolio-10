import React from 'react';
import { ExternalLink } from 'react-external-link';
import js from '../../components/assets/js.jpg';
import mobile from '../../components/projectsImage/mobile.jpg';
import hotel from '../../components/projectsImage/hotel.webp';
import lawer from '../../components/projectsImage/lawer.webp';
import programmingSchool from '../../components/projectsImage/programmingSchool.webp';
import Avatar from '../shared/CommonImage/Avatar';
const JavaScript = () => {
    return (
        <div className='w-full'>
            <div className="hero min-h-screen" style={{ backgroundImage: `url(${js})` }}>
                <div className="hero-overlay bg-opacity-90"></div>
                <div className="hero-content text-center text-neutral-content" >
                    <div className="max-w-md">
                        <Avatar></Avatar>
                        <h1 className="mb-5 text-5xl font-bold">WELCOME TO</h1>
                        <h1 className="mb-5 text-5xl font-bold">JavaScript WEB DEVELOP PROJECT</h1>
                        <p className="mb-5">I am a curious, positive, enthusiastic and competent MERN Stack Web Developer who, over the years, has built up a diverse range of skills, qualities and attributes that guarantee. I will perform highly in this role.</p>
                    </div>
                </div>
            </div>
            {/* .....mobile..... */}
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content grid grid-cols-1 lg:grid-cols-2">
                    <div className='w-full'>
                        <img src={mobile} className="rounded-lg shadow-2xl w-full" alt=''
                        />
                    </div>
                    <div className='w-full'>
                        <h1 className="text-5xl font-bold">MOBILE RESELL</h1>
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
                        <div className="py-6">
                            <div>
                                <h2 className='text-primary text-justify'>Visite repository</h2>
                                <ul className='text-start grid grid-cols-3'>
                                    <li>ClientSite</li>
                                    <li>server site</li>
                                    <li>live site</li>
                                </ul>
                            </div>
                        </div>
                        <ExternalLink href='https://mobile-resell-app-100.web.app/'><button className="btn btn-primary">See live Project</button></ExternalLink>
                    </div>

                </div>
            </div>
            {/* .....hotel..... */}
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content grid grid-cols-1 lg:grid-cols-2">
                    <div className='w-full'>
                        <img src={hotel} className="rounded-lg shadow-2xl w-full" alt='' />
                    </div>
                    <div className='w-full'>
                        <h1 className="text-5xl font-bold">HOTEL AT NIGHT</h1>
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
                        <div className="py-6">
                            <div>
                                <h2 className='text-primary text-justify'>Visite repository</h2>
                                <ul className='text-start grid grid-cols-3'>
                                    <li>ClientSite</li>
                                    <li>server site</li>
                                    <li>live site</li>
                                </ul>
                            </div>
                        </div>
                        <ExternalLink href='https://hotel-night-app-10.web.app/'><button className="btn btn-primary">See live Project</button></ExternalLink>
                    </div>
                </div>
            </div>
            {/* .....programmingSchool..... */}
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content grid grid-cols-1 lg:grid-cols-2">
                    <div className='w-full'>
                        <img src={programmingSchool} className="rounded-lg shadow-2xl w-full" alt='' />
                    </div>
                    <div className='w-full'>
                        <h1 className="text-5xl font-bold">Programming School</h1>
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
                        <div className="py-6">
                            <div>
                                <h2 className='text-primary text-justify'>Visite repository</h2>
                                <ul className='text-start grid grid-cols-3'>
                                    <li>ClientSite</li>
                                    <li>server site</li>
                                    <li>live site</li>
                                </ul>
                            </div>
                        </div>
                        <ExternalLink href='https://hotel-night-app-10.web.app/'><button className="btn btn-primary">See live Project</button></ExternalLink>
                    </div>

                </div>
            </div>
            {/* .....lawer ghhor..... */}
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content grid grid-cols-1 lg:grid-cols-2">
                    <div className='w-full'>
                        <img src={lawer} className="rounded-lg shadow-2xl w-full" alt='' />
                    </div>
                    <div className='w-full'>
                        <h1 className="text-5xl font-bold">LAWER GHHOR</h1>
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
                        <div className="py-6">
                            <div>
                                <h2 className='text-primary text-justify'>Visite repository</h2>
                                <ul className='text-start grid grid-cols-3'>
                                    <li>ClientSite</li>
                                    <li>server site</li>
                                    <li>live site</li>
                                </ul>
                            </div>
                        </div>
                        <ExternalLink href='https://lawyer-ghhor-client-app-10.web.app/'><button className="btn btn-primary">See live Project</button></ExternalLink>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JavaScript;