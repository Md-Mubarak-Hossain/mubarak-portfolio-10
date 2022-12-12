import React from 'react';
import { ExternalLink } from 'react-external-link';
import img1 from '../../../components/mern/law/img-1.png';
import img2 from '../../../components/mern/law/img-2.png';
import img3 from '../../../components/mern/law/img-3.png';
import img4 from '../../../components/mern/law/img-4.png';
import img5 from '../../../components/mern/law/img-5.png';
import img6 from '../../../components/mern/law/img-6.png';
import img7 from '../../../components/mern/law/img-7.png';
import img8 from '../../../components/mern/law/img-8.png';
import img9 from '../../../components/mern/law/img-9.png';
import img10 from '../../../components/mern/law/img-10.png';
import img11 from '../../../components/mern/law/img-11.png';
import img12 from '../../../components/mern/law/img-12.png';
import img13 from '../../../components/mern/law/img-13.png';
import img14 from '../../../components/mern/law/img-14.png';


import { FaServer, FaGithub } from 'react-icons/fa';
import { VscLinkExternal } from 'react-icons/vsc';
import { AiOutlineLaptop } from 'react-icons/ai';
import '../../../layouts/Main.css';
const Law = () => {
    return (
        <div className='w-full'>
            {/* .....law..... */}
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content grid grid-cols-1 lg:grid-cols-2">
                    <div className='w-full h-full'>
                        <img src={img14} className="rounded-lg shadow-2xl w-full h-full" alt=''
                        />
                    </div>
                    <div className='w-full'>
                        <h1 className="text-2xl lg:text-5xl font-bold"><span className='underlined'>LAWER GHHOR</span></h1>
                        <div className="py-6">
                            <div className='w-full'>
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
                            <div className='w-full'>
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
                            <div className='w-full'>
                                <span className='resume mb-5'> <h2 className='text-primary  flex place-items-center w-full mb-2'>Visite <FaGithub className='mx-2'></FaGithub>repository</h2></span>
                                <ul className='text-start flex justify-center place-items-center w-full'>
                                    <ExternalLink href='https://github.com/Md-Mubarak-Hossain/LAWER-GHHOR' className='px-2 flex justify-center place-items-center '>
                                        <p><AiOutlineLaptop className='mx-1'>
                                        </AiOutlineLaptop></p> <p>ClientSite</p><VscLinkExternal className='mx-1'></VscLinkExternal></ExternalLink>
                                    <ExternalLink href='https://github.com/Md-Mubarak-Hossain/LAWER-GHHOR-SERVER' className='flex justify-center place-items-center '>
                                        <p> <FaServer className='mx-1'>
                                        </FaServer></p><p>server site</p><VscLinkExternal className='mx-1'></VscLinkExternal></ExternalLink>
                                </ul>
                            </div>
                        </div>
                        <ExternalLink href='https://lawyer-ghhor-client-app-10.web.app/' target="_private"><button className="btn btn-outline btn-primary">See live Project<VscLinkExternal className='mx-1'></VscLinkExternal></button></ExternalLink>
                    </div>
                </div>
            </div>
            <h2 className='w-full text-center pt-6 text-2xl text-primary text-bold uppercase'>About LAWER GHHOR website</h2>
            <div className="py-6 px-3 lg:px-10 lg:flex">
                <div className='lg:w-3/4 lg:mr-10'>
                    <h2 className='text-primary text-justify px-2'> User Experience</h2>
                    <div className='w-full'>
                        <p className='text-justify py-2'>
                            User Experience (UX) is becoming increasingly popular as a differentiating factor in a competitive marketplace or a marketing tool for B2B digital content.
                        </p>
                        <p className='text-justify py-2'>
                            Whenever users come to LAWER GHHOR website, they expect intuitive interfaces and extraordinary experiences that operate smoothly on different devices whether desktop, phone, or tablets.
                        </p>
                        <p className='text-justify py-2'>
                            Setting a UX goal for LAWER GHHOR website is all about thinking about the interests of the customers who would use the service you’re creating (site, application, etc.) and then taking it a step further.
                        </p>
                    </div>
                </div>
                <div className="py-6 px-2 lg:w-1/4">
                    <h2 className='text-primary text-justify'>Responsiveness</h2>
                    <div className='w-full lg:mx-2 border p-2'>
                        <p className='text-start py-2'>
                            This is the most responsive website.
                        </p>
                        <ul className='text-start pl-5'>
                            It can view in
                            <li className='list-disc'>Desktop</li>
                            <li className='list-disc'>Laptop</li>
                            <li className='list-disc'>Tablet</li>
                            <li className='list-disc'>Mobile</li>
                        </ul>

                    </div>
                </div>
            </div>
            {/* .....law..... */}
            <div className='text-2xl lg:text-3xl font-bold text-black bg-warning w-full h-20 flex flex-col place-items-center justify-center items-center'>
                <h2>Home Page Description</h2>
            </div>
            <div className='w-full flex flex-col justify-center items-center place-items-center text-2xl lg:text-3xl text-white bg-black font-bold text-start h-16 lg:h-24'>
                <h2 className='w-full'>Client Dashboard</h2>
            </div>

            <div className='w-full'>
                <img src={img1} alt="" className='w-full' />
            </div>
            <div className='w-full'>
                <img src={img2} alt="" className='w-full' />
            </div>
            <div className='w-full'>
                <img src={img3} alt="" className='w-full' />
            </div>
            <div className='w-full'>
                <img src={img4} alt="" className='w-full' />
            </div>
            <div className='w-full'>
                <img src={img5} alt="" className='w-full' />
            </div>
            <div className='w-full'>
                <img src={img6} alt="" className='w-full' />
            </div>
            <div className='w-full'>
                <img src={img7} alt="" className='w-full' />
            </div>
            <div className='w-full'>
                <img src={img8} alt="" className='w-full' />
            </div>
            <div className='w-full'>
                <img src={img9} alt="" className='w-full' />
            </div>
            <div className='w-full'>
                <img src={img10} alt="" className='w-full' />
            </div>
            <div className='w-full'>
                <img src={img11} alt="" className='w-full' />
            </div>
            <div className='w-full'>
                <img src={img12} alt="" className='w-full' />
            </div>
            <div className='w-full'>
                <img src={img13} alt="" className='w-full' />
            </div>
        </div>
    );
};

export default Law;