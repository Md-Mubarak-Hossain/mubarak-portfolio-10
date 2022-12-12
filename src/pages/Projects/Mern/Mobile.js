import React from 'react';
import { ExternalLink } from 'react-external-link';
import mobile from '../../../components/projectsImage/mobile.jpg';
import img1 from '../../../components/mern/mobile/img-1.png';
import img2 from '../../../components/mern/mobile/img-2.png';
import img3 from '../../../components/mern/mobile/img-3.png';
import img4 from '../../../components/mern/mobile/img-4.png';
import img5 from '../../../components/mern/mobile/img-5.png';
import img6 from '../../../components/mern/mobile/img-6.png';
import img7 from '../../../components/mern/mobile/img-7.png';
import img8 from '../../../components/mern/mobile/img-8.png';
import img9 from '../../../components/mern/mobile/img-9.png';
import img10 from '../../../components/mern/mobile/img-10.png';
import img11 from '../../../components/mern/mobile/img-11.png';
import img12 from '../../../components/mern/mobile/img-12.png';
import img13 from '../../../components/mern/mobile/img-13.png';
import img14 from '../../../components/mern/mobile/img-14.png';
import img15 from '../../../components/mern/mobile/img-15.png';
import img16 from '../../../components/mern/mobile/img-16.png';
import img17 from '../../../components/mern/mobile/img-17.png';
import img18 from '../../../components/mern/mobile/img-18.png';
import img19 from '../../../components/mern/mobile/img-19.png';
import img20 from '../../../components/mern/mobile/img-20.png';
import img21 from '../../../components/mern/mobile/img-21.png';
import img22 from '../../../components/mern/mobile/img-22.png';
import img23 from '../../../components/mern/mobile/img-23.png';
import img24 from '../../../components/mern/mobile/img-24.png';
import img25 from '../../../components/mern/mobile/img-25.png';
import { FaServer, FaGithub } from 'react-icons/fa';
import { VscLinkExternal } from 'react-icons/vsc';
import { AiOutlineLaptop } from 'react-icons/ai';
import '../../../layouts/Main.css';
const Mobile = () => {
    return (
        <div className='w-full'>
            {/* .....mobile..... */}
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content grid grid-cols-1 lg:grid-cols-2">
                    <div className='w-full h-full'>
                        <img src={img1} className="rounded-lg shadow-2xl w-full h-full" alt=''
                        />
                    </div>
                    <div className='w-full'>
                        <h1 className="text-2xl lg: text-xl lg:text-5xl font-bold"><span className='underlined'>MOBILE RESELL</span></h1>
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
                            <div className='w-full'>
                                <span className='resume mb-5'> <h2 className='text-primary  flex place-items-center w-full mb-2'>Visite <FaGithub className='mx-2'></FaGithub>repository</h2></span>
                                <ul className='text-start flex justify-center place-items-center w-full'>
                                    <ExternalLink href='https://github.com/Md-Mubarak-Hossain/MOBILE-RESELL-CLIENT-SITE' className='px-2 flex justify-center place-items-center '>
                                        <p><AiOutlineLaptop className='mx-1'>
                                        </AiOutlineLaptop></p> <p>ClientSite</p><VscLinkExternal className='mx-1'></VscLinkExternal></ExternalLink>
                                    <ExternalLink href='https://github.com/Md-Mubarak-Hossain/MOBILE-RESELL-SERVER' className='flex justify-center place-items-center '>
                                        <p> <FaServer className='mx-1'>
                                        </FaServer></p><p>server site</p><VscLinkExternal className='mx-1'></VscLinkExternal></ExternalLink>
                                </ul>
                            </div>
                        </div>
                        <ExternalLink href='https://mobile-resell-app-100.web.app/'><button className="btn btn-outline btn-primary">See live Project<VscLinkExternal className='mx-1'></VscLinkExternal></button></ExternalLink>
                    </div>
                </div>
            </div>
            <h2 className='w-full text-center pt-6 text-2xl text-primary text-bold uppercase'>About MOBILE RESELL website</h2>
            <div className="py-6 px-3 lg:px-10 lg:flex">
                <div className='lg:w-3/4 lg:mr-10'>
                    <h2 className='text-primary text-justify px-2'> User Experience</h2>
                    <div className='full'>
                        <p className='text-justify py-2'>
                            User Experience (UX) is becoming increasingly popular as a differentiating factor in a competitive marketplace or a marketing tool for B2B digital content.
                        </p>
                        <p className='text-justify py-2'>
                            Whenever users come to mobile resell website, they expect intuitive interfaces and extraordinary experiences that operate smoothly on different devices whether desktop, phone, or tablets.
                        </p>
                        <p className='text-justify py-2'>
                            Setting a UX goal for mobile resell website is all about thinking about the interests of the customers who would use the service you’re creating (site, application, etc.) and then taking it a step further.
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
            {/* .....hotel..... */}
            <div className='text-2xl lg:text-3xl font-bold text-black bg-warning w-full h-20 flex flex-col place-items-center justify-center items-center'>
                <h2>Home Page Description</h2>
            </div>
            <div>
                <img src={img2} alt="" />
            </div>
            <div>
                <img src={img3} alt="" />
            </div>
            <div>
                <img src={img4} alt="" />
            </div>
            <div>
                <img src={img5} alt="" />
            </div>
            <div>
                <img src={img6} alt="" />
            </div>
            <div className='w-full flex flex-col justify-center items-center place-items-center text-2xl lg:text-3xl text-white bg-black font-bold text-start h-16 lg:h-24'>
                <h2 className='w-full'>Admin Dashboard</h2>
            </div>
            <div>
                <img src={img7} alt="" />
            </div>
            <div>
                <img src={img8} alt="" />
            </div>
            <div>
                <img src={img9} alt="" />
            </div>
            <div>
                <img src={img10} alt="" />
            </div>
            <div>
                <img src={img11} alt="" />
            </div>
            <div>
                <img src={img12} alt="" />
            </div>
            <div>
                <img src={img13} alt="" />
            </div>
            <div>
                <img src={img14} alt="" />
            </div>
            <div>
                <h2 className='flex flex-col place-items-center justify-center items-center text-xl lg:text-3xl font-bold text-warning bg-black w-full h-12 lg:h-24'>User Dashboard</h2>
            </div>
            <div className='flex w-full'>
                <img src={img24} alt="" className='w-1/2' />
                <img src={img25} alt="" className='w-1/2' />
            </div>
            <div>
                <img src={img15} alt="" />
            </div>
            <div className='w-full'>
                <h2 className='flex flex-col place-items-center justify-center items-center text-xl lg:text-3xl font-bold text-warning bg-black w-full h-12 lg:h-24'>User Payment Process</h2>
                <img src={img16} alt="" />
            </div>
            <div>
                <img src={img17} alt="" />
            </div>
            <div>
                <img src={img18} alt="" />
            </div>
            <div>
                <h2 className='flex flex-col place-items-center justify-center items-center text-xl lg:text-3xl font-bold text-warning bg-black w-full h-12 lg:h-24'>Seller Dashboard</h2>
            </div>
            <div className='flex w-full'>
                <img src={img22} alt="" className='w-1/2' />
                <img src={img23} alt="" className='w-1/2' />
            </div>
            <div>
                <img src={img19} alt="" />
            </div>
            <div>
                <img src={img20} alt="" />
            </div>
            <div>
                <img src={img21} alt="" />
            </div>
        </div >
    );
};

export default Mobile;