import React from 'react';
import { ExternalLink } from 'react-external-link';
import mobile from '../../../components/projectsImage/mobile.jpg';

const Mobile = () => {
    return (
        <div className='w-full'>
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

        </div>
    );
};

export default Mobile;